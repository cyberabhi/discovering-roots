/**
 * Signed, expiring preview-session cookie (HMAC-SHA256, Web Crypto — works on
 * Workers, Node and edge runtimes). The cookie carries no draft data and no
 * Sanity token; it only proves the browser passed Studio's preview handshake.
 */
export const PREVIEW_COOKIE = "dr_preview";
export const PREVIEW_MAX_AGE_SECONDS = 60 * 60;

const enc = new TextEncoder();

async function hmac(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function signPreviewToken(secret: string, expiresAtMs: number): Promise<string> {
  const exp = String(Math.floor(expiresAtMs));
  return `${exp}.${await hmac(secret, `preview:${exp}`)}`;
}

export async function verifyPreviewToken(
  secret: string | undefined,
  token: string | undefined,
  nowMs = Date.now(),
): Promise<boolean> {
  if (!secret || !token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [exp, sig] = parts;
  if (!exp || !sig || !/^\d+$/.test(exp) || !/^[0-9a-f]{64}$/.test(sig)) return false;
  const expiresAtMs = Number(exp);
  if (
    !Number.isSafeInteger(expiresAtMs) ||
    expiresAtMs <= nowMs ||
    expiresAtMs > nowMs + PREVIEW_MAX_AGE_SECONDS * 1000
  )
    return false;
  const expected = await hmac(secret, `preview:${exp}`);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

export function readCookie(header: string | null, name: string): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) {
      try {
        return decodeURIComponent(v.join("="));
      } catch {
        return undefined;
      }
    }
  }
  return undefined;
}

export function previewCookieHeader(value: string, maxAge: number): string {
  return `${PREVIEW_COOKIE}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=None; Partitioned; Max-Age=${maxAge}`;
}
