import type { CurrentUser } from "sanity";

const EDITORIAL_WRITE_ROLES = new Set(["administrator", "editor"]);

export function hasEditorialWriteAccess(user: Pick<CurrentUser, "roles"> | null): boolean {
  return user?.roles.some(({ name }) => EDITORIAL_WRITE_ROLES.has(name)) ?? false;
}
