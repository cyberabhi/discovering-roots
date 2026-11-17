import { t as __commonJSMin } from "../../_runtime.mjs";
//#region node_modules/@csstools/css-tokenizer/dist/index.cjs
var require_dist$4 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ParseError = class extends Error {
		sourceStart;
		sourceEnd;
		parserState;
		constructor(e, n, o, t) {
			super(e), this.name = "ParseError", this.sourceStart = n, this.sourceEnd = o, this.parserState = t;
		}
	};
	var ParseErrorWithToken = class extends ParseError {
		token;
		constructor(e, n, o, t, r) {
			super(e, n, o, t), this.token = r;
		}
	};
	var e = {
		UnexpectedNewLineInString: "Unexpected newline while consuming a string token.",
		UnexpectedEOFInString: "Unexpected EOF while consuming a string token.",
		UnexpectedEOFInComment: "Unexpected EOF while consuming a comment.",
		UnexpectedEOFInURL: "Unexpected EOF while consuming a url token.",
		UnexpectedEOFInEscapedCodePoint: "Unexpected EOF while consuming an escaped code point.",
		UnexpectedCharacterInURL: "Unexpected character while consuming a url token.",
		InvalidEscapeSequenceInURL: "Invalid escape sequence while consuming a url token.",
		InvalidEscapeSequenceAfterBackslash: "Invalid escape sequence after \"\\\""
	};
	var n = "undefined" != typeof globalThis && "structuredClone" in globalThis;
	var o = 13;
	var t = 45;
	var r = 10;
	var s = 43;
	var i = 65533;
	function checkIfFourCodePointsWouldStartCDO(e) {
		return 60 === e.source.codePointAt(e.cursor) && 33 === e.source.codePointAt(e.cursor + 1) && e.source.codePointAt(e.cursor + 2) === t && e.source.codePointAt(e.cursor + 3) === t;
	}
	function isDigitCodePoint(e) {
		return e >= 48 && e <= 57;
	}
	function isUppercaseLetterCodePoint(e) {
		return e >= 65 && e <= 90;
	}
	function isLowercaseLetterCodePoint(e) {
		return e >= 97 && e <= 122;
	}
	function isHexDigitCodePoint(e) {
		return e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70;
	}
	function isLetterCodePoint(e) {
		return isLowercaseLetterCodePoint(e) || isUppercaseLetterCodePoint(e);
	}
	function isIdentStartCodePoint(e) {
		return isLetterCodePoint(e) || isNonASCII_IdentCodePoint(e) || 95 === e;
	}
	function isIdentCodePoint(e) {
		return isIdentStartCodePoint(e) || isDigitCodePoint(e) || e === t;
	}
	function isNonASCII_IdentCodePoint(e) {
		return 183 === e || 8204 === e || 8205 === e || 8255 === e || 8256 === e || 8204 === e || 192 <= e && e <= 214 || 216 <= e && e <= 246 || 248 <= e && e <= 893 || 895 <= e && e <= 8191 || 8304 <= e && e <= 8591 || 11264 <= e && e <= 12271 || 12289 <= e && e <= 55295 || 63744 <= e && e <= 64975 || 65008 <= e && e <= 65533 || 0 === e || !!isSurrogate(e) || e >= 65536;
	}
	function isNewLine(e) {
		return e === r || e === o || 12 === e;
	}
	function isWhitespace(e) {
		return 32 === e || e === r || 9 === e || e === o || 12 === e;
	}
	function isSurrogate(e) {
		return e >= 55296 && e <= 57343;
	}
	function checkIfTwoCodePointsAreAValidEscape(e) {
		return 92 === e.source.codePointAt(e.cursor) && !isNewLine(e.source.codePointAt(e.cursor + 1) ?? -1);
	}
	function checkIfThreeCodePointsWouldStartAnIdentSequence(e, n) {
		return n.source.codePointAt(n.cursor) === t ? n.source.codePointAt(n.cursor + 1) === t || !!isIdentStartCodePoint(n.source.codePointAt(n.cursor + 1) ?? -1) || 92 === n.source.codePointAt(n.cursor + 1) && !isNewLine(n.source.codePointAt(n.cursor + 2) ?? -1) : !!isIdentStartCodePoint(n.source.codePointAt(n.cursor) ?? -1) || checkIfTwoCodePointsAreAValidEscape(n);
	}
	function checkIfThreeCodePointsWouldStartANumber(e) {
		return e.source.codePointAt(e.cursor) === s || e.source.codePointAt(e.cursor) === t ? !!isDigitCodePoint(e.source.codePointAt(e.cursor + 1) ?? -1) || 46 === e.source.codePointAt(e.cursor + 1) && isDigitCodePoint(e.source.codePointAt(e.cursor + 2) ?? -1) : 46 === e.source.codePointAt(e.cursor) ? isDigitCodePoint(e.source.codePointAt(e.cursor + 1) ?? -1) : isDigitCodePoint(e.source.codePointAt(e.cursor) ?? -1);
	}
	function checkIfTwoCodePointsStartAComment(e) {
		return 47 === e.source.codePointAt(e.cursor) && 42 === e.source.codePointAt(e.cursor + 1);
	}
	function checkIfThreeCodePointsWouldStartCDC(e) {
		return e.source.codePointAt(e.cursor) === t && e.source.codePointAt(e.cursor + 1) === t && 62 === e.source.codePointAt(e.cursor + 2);
	}
	var c;
	var a;
	var u;
	function consumeComment(n, o) {
		for (o.advanceCodePoint(2);;) {
			const t = o.readCodePoint();
			if (void 0 === t) {
				const t = [
					exports.TokenType.Comment,
					o.source.slice(o.representationStart, o.representationEnd + 1),
					o.representationStart,
					o.representationEnd,
					void 0
				];
				return n.onParseError(new ParseErrorWithToken(e.UnexpectedEOFInComment, o.representationStart, o.representationEnd, ["4.3.2. Consume comments", "Unexpected EOF"], t)), t;
			}
			if (42 === t && void 0 !== o.source.codePointAt(o.cursor) && 47 === o.source.codePointAt(o.cursor)) {
				o.advanceCodePoint();
				break;
			}
		}
		return [
			exports.TokenType.Comment,
			o.source.slice(o.representationStart, o.representationEnd + 1),
			o.representationStart,
			o.representationEnd,
			void 0
		];
	}
	function consumeEscapedCodePoint(n, t) {
		const s = t.readCodePoint();
		if (void 0 === s) return n.onParseError(new ParseError(e.UnexpectedEOFInEscapedCodePoint, t.representationStart, t.representationEnd, ["4.3.7. Consume an escaped code point", "Unexpected EOF"])), i;
		if (isHexDigitCodePoint(s)) {
			const e = [s];
			let n;
			for (; void 0 !== (n = t.source.codePointAt(t.cursor)) && isHexDigitCodePoint(n) && e.length < 6;) e.push(n), t.advanceCodePoint();
			isWhitespace(t.source.codePointAt(t.cursor) ?? -1) && (t.source.codePointAt(t.cursor) === o && t.source.codePointAt(t.cursor + 1) === r && t.advanceCodePoint(), t.advanceCodePoint());
			const c = parseInt(String.fromCodePoint(...e), 16);
			return 0 === c || isSurrogate(c) || c > 1114111 ? i : c;
		}
		return 0 === s || isSurrogate(s) ? i : s;
	}
	function consumeIdentSequence(e, n) {
		const o = [];
		for (;;) {
			const t = n.source.codePointAt(n.cursor) ?? -1;
			if (0 === t || isSurrogate(t)) o.push(i), n.advanceCodePoint(+(t > 65535) + 1);
			else if (isIdentCodePoint(t)) o.push(t), n.advanceCodePoint(+(t > 65535) + 1);
			else {
				if (!checkIfTwoCodePointsAreAValidEscape(n)) return o;
				n.advanceCodePoint(), o.push(consumeEscapedCodePoint(e, n));
			}
		}
	}
	function consumeHashToken(e, n) {
		n.advanceCodePoint();
		const o = n.source.codePointAt(n.cursor);
		if (void 0 !== o && (isIdentCodePoint(o) || checkIfTwoCodePointsAreAValidEscape(n))) {
			let o = exports.HashType.Unrestricted;
			checkIfThreeCodePointsWouldStartAnIdentSequence(0, n) && (o = exports.HashType.ID);
			const t = consumeIdentSequence(e, n);
			return [
				exports.TokenType.Hash,
				n.source.slice(n.representationStart, n.representationEnd + 1),
				n.representationStart,
				n.representationEnd,
				{
					value: String.fromCodePoint(...t),
					type: o
				}
			];
		}
		return [
			exports.TokenType.Delim,
			"#",
			n.representationStart,
			n.representationEnd,
			{ value: "#" }
		];
	}
	function consumeNumber(e, n) {
		let o = exports.NumberType.Integer;
		for (n.source.codePointAt(n.cursor) !== s && n.source.codePointAt(n.cursor) !== t || n.advanceCodePoint(); isDigitCodePoint(n.source.codePointAt(n.cursor) ?? -1);) n.advanceCodePoint();
		if (46 === n.source.codePointAt(n.cursor) && isDigitCodePoint(n.source.codePointAt(n.cursor + 1) ?? -1)) for (n.advanceCodePoint(2), o = exports.NumberType.Number; isDigitCodePoint(n.source.codePointAt(n.cursor) ?? -1);) n.advanceCodePoint();
		if (101 === n.source.codePointAt(n.cursor) || 69 === n.source.codePointAt(n.cursor)) {
			if (isDigitCodePoint(n.source.codePointAt(n.cursor + 1) ?? -1)) n.advanceCodePoint(2);
			else {
				if (n.source.codePointAt(n.cursor + 1) !== t && n.source.codePointAt(n.cursor + 1) !== s || !isDigitCodePoint(n.source.codePointAt(n.cursor + 2) ?? -1)) return o;
				n.advanceCodePoint(3);
			}
			for (o = exports.NumberType.Number; isDigitCodePoint(n.source.codePointAt(n.cursor) ?? -1);) n.advanceCodePoint();
		}
		return o;
	}
	function consumeNumericToken(e, n) {
		let o;
		{
			const e = n.source.codePointAt(n.cursor);
			e === t ? o = "-" : e === s && (o = "+");
		}
		const r = consumeNumber(0, n), i = parseFloat(n.source.slice(n.representationStart, n.representationEnd + 1));
		if (checkIfThreeCodePointsWouldStartAnIdentSequence(0, n)) {
			const t = consumeIdentSequence(e, n);
			return [
				exports.TokenType.Dimension,
				n.source.slice(n.representationStart, n.representationEnd + 1),
				n.representationStart,
				n.representationEnd,
				{
					value: i,
					signCharacter: o,
					type: r,
					unit: String.fromCodePoint(...t)
				}
			];
		}
		return 37 === n.source.codePointAt(n.cursor) ? (n.advanceCodePoint(), [
			exports.TokenType.Percentage,
			n.source.slice(n.representationStart, n.representationEnd + 1),
			n.representationStart,
			n.representationEnd,
			{
				value: i,
				signCharacter: o
			}
		]) : [
			exports.TokenType.Number,
			n.source.slice(n.representationStart, n.representationEnd + 1),
			n.representationStart,
			n.representationEnd,
			{
				value: i,
				signCharacter: o,
				type: r
			}
		];
	}
	function consumeWhiteSpace(e) {
		for (; isWhitespace(e.source.codePointAt(e.cursor) ?? -1);) e.advanceCodePoint();
		return [
			exports.TokenType.Whitespace,
			e.source.slice(e.representationStart, e.representationEnd + 1),
			e.representationStart,
			e.representationEnd,
			void 0
		];
	}
	exports.TokenType = void 0, (c = exports.TokenType || (exports.TokenType = {})).Comment = "comment", c.AtKeyword = "at-keyword-token", c.BadString = "bad-string-token", c.BadURL = "bad-url-token", c.CDC = "CDC-token", c.CDO = "CDO-token", c.Colon = "colon-token", c.Comma = "comma-token", c.Delim = "delim-token", c.Dimension = "dimension-token", c.EOF = "EOF-token", c.Function = "function-token", c.Hash = "hash-token", c.Ident = "ident-token", c.Number = "number-token", c.Percentage = "percentage-token", c.Semicolon = "semicolon-token", c.String = "string-token", c.URL = "url-token", c.Whitespace = "whitespace-token", c.OpenParen = "(-token", c.CloseParen = ")-token", c.OpenSquare = "[-token", c.CloseSquare = "]-token", c.OpenCurly = "{-token", c.CloseCurly = "}-token", c.UnicodeRange = "unicode-range-token", exports.NumberType = void 0, (a = exports.NumberType || (exports.NumberType = {})).Integer = "integer", a.Number = "number", exports.HashType = void 0, (u = exports.HashType || (exports.HashType = {})).Unrestricted = "unrestricted", u.ID = "id";
	var Reader = class {
		cursor = 0;
		source = "";
		representationStart = 0;
		representationEnd = -1;
		constructor(e) {
			this.source = e;
		}
		advanceCodePoint(e = 1) {
			this.cursor = this.cursor + e, this.representationEnd = this.cursor - 1;
		}
		readCodePoint() {
			const e = this.source.codePointAt(this.cursor);
			if (void 0 !== e) return this.cursor = this.cursor + 1, this.representationEnd = this.cursor - 1, e;
		}
		unreadCodePoint(e = 1) {
			this.cursor = this.cursor - e, this.representationEnd = this.cursor - 1;
		}
		resetRepresentation() {
			this.representationStart = this.cursor, this.representationEnd = -1;
		}
	};
	function consumeStringToken(n, t) {
		let s = "";
		const c = t.readCodePoint();
		for (;;) {
			const a = t.readCodePoint();
			if (void 0 === a) {
				const o = [
					exports.TokenType.String,
					t.source.slice(t.representationStart, t.representationEnd + 1),
					t.representationStart,
					t.representationEnd,
					{ value: s }
				];
				return n.onParseError(new ParseErrorWithToken(e.UnexpectedEOFInString, t.representationStart, t.representationEnd, ["4.3.5. Consume a string token", "Unexpected EOF"], o)), o;
			}
			if (isNewLine(a)) {
				t.unreadCodePoint();
				const s = [
					exports.TokenType.BadString,
					t.source.slice(t.representationStart, t.representationEnd + 1),
					t.representationStart,
					t.representationEnd,
					void 0
				];
				return n.onParseError(new ParseErrorWithToken(e.UnexpectedNewLineInString, t.representationStart, t.source.codePointAt(t.cursor) === o && t.source.codePointAt(t.cursor + 1) === r ? t.representationEnd + 2 : t.representationEnd + 1, ["4.3.5. Consume a string token", "Unexpected newline"], s)), s;
			}
			if (a === c) return [
				exports.TokenType.String,
				t.source.slice(t.representationStart, t.representationEnd + 1),
				t.representationStart,
				t.representationEnd,
				{ value: s }
			];
			if (92 !== a) 0 === a || isSurrogate(a) ? s += String.fromCodePoint(i) : s += String.fromCodePoint(a);
			else {
				if (void 0 === t.source.codePointAt(t.cursor)) continue;
				if (isNewLine(t.source.codePointAt(t.cursor) ?? -1)) {
					t.source.codePointAt(t.cursor) === o && t.source.codePointAt(t.cursor + 1) === r && t.advanceCodePoint(), t.advanceCodePoint();
					continue;
				}
				s += String.fromCodePoint(consumeEscapedCodePoint(n, t));
			}
		}
	}
	function checkIfCodePointsMatchURLIdent(e) {
		return !(3 !== e.length || 117 !== e[0] && 85 !== e[0] || 114 !== e[1] && 82 !== e[1] || 108 !== e[2] && 76 !== e[2]);
	}
	function consumeBadURL(e, n) {
		for (;;) {
			const o = n.source.codePointAt(n.cursor);
			if (void 0 === o) return;
			if (41 === o) return void n.advanceCodePoint();
			checkIfTwoCodePointsAreAValidEscape(n) ? (n.advanceCodePoint(), consumeEscapedCodePoint(e, n)) : n.advanceCodePoint();
		}
	}
	function consumeUrlToken(n, o) {
		for (; isWhitespace(o.source.codePointAt(o.cursor) ?? -1);) o.advanceCodePoint();
		let t = "";
		for (;;) {
			if (void 0 === o.source.codePointAt(o.cursor)) {
				const r = [
					exports.TokenType.URL,
					o.source.slice(o.representationStart, o.representationEnd + 1),
					o.representationStart,
					o.representationEnd,
					{ value: t }
				];
				return n.onParseError(new ParseErrorWithToken(e.UnexpectedEOFInURL, o.representationStart, o.representationEnd, ["4.3.6. Consume a url token", "Unexpected EOF"], r)), r;
			}
			if (41 === o.source.codePointAt(o.cursor)) return o.advanceCodePoint(), [
				exports.TokenType.URL,
				o.source.slice(o.representationStart, o.representationEnd + 1),
				o.representationStart,
				o.representationEnd,
				{ value: t }
			];
			if (isWhitespace(o.source.codePointAt(o.cursor) ?? -1)) {
				for (o.advanceCodePoint(); isWhitespace(o.source.codePointAt(o.cursor) ?? -1);) o.advanceCodePoint();
				if (void 0 === o.source.codePointAt(o.cursor)) {
					const r = [
						exports.TokenType.URL,
						o.source.slice(o.representationStart, o.representationEnd + 1),
						o.representationStart,
						o.representationEnd,
						{ value: t }
					];
					return n.onParseError(new ParseErrorWithToken(e.UnexpectedEOFInURL, o.representationStart, o.representationEnd, [
						"4.3.6. Consume a url token",
						"Consume as much whitespace as possible",
						"Unexpected EOF"
					], r)), r;
				}
				return 41 === o.source.codePointAt(o.cursor) ? (o.advanceCodePoint(), [
					exports.TokenType.URL,
					o.source.slice(o.representationStart, o.representationEnd + 1),
					o.representationStart,
					o.representationEnd,
					{ value: t }
				]) : (consumeBadURL(n, o), [
					exports.TokenType.BadURL,
					o.source.slice(o.representationStart, o.representationEnd + 1),
					o.representationStart,
					o.representationEnd,
					void 0
				]);
			}
			const s = o.source.codePointAt(o.cursor);
			if (34 === s || 39 === s || 40 === s || 11 === (r = s ?? -1) || 127 === r || 0 <= r && r <= 8 || 14 <= r && r <= 31) {
				consumeBadURL(n, o);
				const t = [
					exports.TokenType.BadURL,
					o.source.slice(o.representationStart, o.representationEnd + 1),
					o.representationStart,
					o.representationEnd,
					void 0
				];
				return n.onParseError(new ParseErrorWithToken(e.UnexpectedCharacterInURL, o.representationStart, o.representationEnd, ["4.3.6. Consume a url token", "Unexpected U+0022 QUOTATION MARK (\"), U+0027 APOSTROPHE ('), U+0028 LEFT PARENTHESIS (() or non-printable code point"], t)), t;
			}
			if (92 === s) {
				if (checkIfTwoCodePointsAreAValidEscape(o)) {
					o.advanceCodePoint(), t += String.fromCodePoint(consumeEscapedCodePoint(n, o));
					continue;
				}
				consumeBadURL(n, o);
				const r = [
					exports.TokenType.BadURL,
					o.source.slice(o.representationStart, o.representationEnd + 1),
					o.representationStart,
					o.representationEnd,
					void 0
				];
				return n.onParseError(new ParseErrorWithToken(e.InvalidEscapeSequenceInURL, o.representationStart, o.representationEnd, [
					"4.3.6. Consume a url token",
					"U+005C REVERSE SOLIDUS (\\)",
					"The input stream does not start with a valid escape sequence"
				], r)), r;
			}
			0 === o.source.codePointAt(o.cursor) || isSurrogate(o.source.codePointAt(o.cursor) ?? -1) ? (t += String.fromCodePoint(i), o.advanceCodePoint()) : (t += o.source[o.cursor], o.advanceCodePoint());
		}
		var r;
	}
	function consumeIdentLikeToken(e, n) {
		const o = consumeIdentSequence(e, n);
		if (40 !== n.source.codePointAt(n.cursor)) return [
			exports.TokenType.Ident,
			n.source.slice(n.representationStart, n.representationEnd + 1),
			n.representationStart,
			n.representationEnd,
			{ value: String.fromCodePoint(...o) }
		];
		if (checkIfCodePointsMatchURLIdent(o)) {
			n.advanceCodePoint();
			let t = 0;
			for (;;) {
				const e = isWhitespace(n.source.codePointAt(n.cursor) ?? -1), r = isWhitespace(n.source.codePointAt(n.cursor + 1) ?? -1);
				if (e && r) {
					t += 1, n.advanceCodePoint(1);
					continue;
				}
				const s = e ? n.source.codePointAt(n.cursor + 1) : n.source.codePointAt(n.cursor);
				if (34 === s || 39 === s) return t > 0 && n.unreadCodePoint(t), [
					exports.TokenType.Function,
					n.source.slice(n.representationStart, n.representationEnd + 1),
					n.representationStart,
					n.representationEnd,
					{ value: String.fromCodePoint(...o) }
				];
				break;
			}
			return consumeUrlToken(e, n);
		}
		return n.advanceCodePoint(), [
			exports.TokenType.Function,
			n.source.slice(n.representationStart, n.representationEnd + 1),
			n.representationStart,
			n.representationEnd,
			{ value: String.fromCodePoint(...o) }
		];
	}
	function checkIfThreeCodePointsWouldStartAUnicodeRange(e) {
		return !(117 !== e.source.codePointAt(e.cursor) && 85 !== e.source.codePointAt(e.cursor) || e.source.codePointAt(e.cursor + 1) !== s || 63 !== e.source.codePointAt(e.cursor + 2) && !isHexDigitCodePoint(e.source.codePointAt(e.cursor + 2) ?? -1));
	}
	function consumeUnicodeRangeToken(e, n) {
		n.advanceCodePoint(2);
		const o = [], r = [];
		let s;
		for (; void 0 !== (s = n.source.codePointAt(n.cursor)) && o.length < 6 && isHexDigitCodePoint(s);) o.push(s), n.advanceCodePoint();
		for (; void 0 !== (s = n.source.codePointAt(n.cursor)) && o.length < 6 && 63 === s;) 0 === r.length && r.push(...o), o.push(48), r.push(70), n.advanceCodePoint();
		if (!r.length && n.source.codePointAt(n.cursor) === t && isHexDigitCodePoint(n.source.codePointAt(n.cursor + 1) ?? -1)) for (n.advanceCodePoint(); void 0 !== (s = n.source.codePointAt(n.cursor)) && r.length < 6 && isHexDigitCodePoint(s);) r.push(s), n.advanceCodePoint();
		if (!r.length) {
			const e = parseInt(String.fromCodePoint(...o), 16);
			return [
				exports.TokenType.UnicodeRange,
				n.source.slice(n.representationStart, n.representationEnd + 1),
				n.representationStart,
				n.representationEnd,
				{
					startOfRange: e,
					endOfRange: e
				}
			];
		}
		const i = parseInt(String.fromCodePoint(...o), 16), c = parseInt(String.fromCodePoint(...r), 16);
		return [
			exports.TokenType.UnicodeRange,
			n.source.slice(n.representationStart, n.representationEnd + 1),
			n.representationStart,
			n.representationEnd,
			{
				startOfRange: i,
				endOfRange: c
			}
		];
	}
	function tokenizer(n, i) {
		const c = n.css.valueOf(), a = n.unicodeRangesAllowed ?? !1, u = new Reader(c), d = { onParseError: i?.onParseError ?? noop };
		return {
			nextToken: function nextToken() {
				u.resetRepresentation();
				const n = u.source.codePointAt(u.cursor);
				if (void 0 === n) return [
					exports.TokenType.EOF,
					"",
					-1,
					-1,
					void 0
				];
				if (47 === n && checkIfTwoCodePointsStartAComment(u)) return consumeComment(d, u);
				if (a && (117 === n || 85 === n) && checkIfThreeCodePointsWouldStartAUnicodeRange(u)) return consumeUnicodeRangeToken(0, u);
				if (isIdentStartCodePoint(n)) return consumeIdentLikeToken(d, u);
				if (isDigitCodePoint(n)) return consumeNumericToken(d, u);
				switch (n) {
					case 44: return u.advanceCodePoint(), [
						exports.TokenType.Comma,
						",",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 58: return u.advanceCodePoint(), [
						exports.TokenType.Colon,
						":",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 59: return u.advanceCodePoint(), [
						exports.TokenType.Semicolon,
						";",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 40: return u.advanceCodePoint(), [
						exports.TokenType.OpenParen,
						"(",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 41: return u.advanceCodePoint(), [
						exports.TokenType.CloseParen,
						")",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 91: return u.advanceCodePoint(), [
						exports.TokenType.OpenSquare,
						"[",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 93: return u.advanceCodePoint(), [
						exports.TokenType.CloseSquare,
						"]",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 123: return u.advanceCodePoint(), [
						exports.TokenType.OpenCurly,
						"{",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 125: return u.advanceCodePoint(), [
						exports.TokenType.CloseCurly,
						"}",
						u.representationStart,
						u.representationEnd,
						void 0
					];
					case 39:
					case 34: return consumeStringToken(d, u);
					case 35: return consumeHashToken(d, u);
					case s:
					case 46: return checkIfThreeCodePointsWouldStartANumber(u) ? consumeNumericToken(d, u) : (u.advanceCodePoint(), [
						exports.TokenType.Delim,
						u.source[u.representationStart],
						u.representationStart,
						u.representationEnd,
						{ value: u.source[u.representationStart] }
					]);
					case r:
					case o:
					case 12:
					case 9:
					case 32: return consumeWhiteSpace(u);
					case t: return checkIfThreeCodePointsWouldStartANumber(u) ? consumeNumericToken(d, u) : checkIfThreeCodePointsWouldStartCDC(u) ? (u.advanceCodePoint(3), [
						exports.TokenType.CDC,
						"-->",
						u.representationStart,
						u.representationEnd,
						void 0
					]) : checkIfThreeCodePointsWouldStartAnIdentSequence(0, u) ? consumeIdentLikeToken(d, u) : (u.advanceCodePoint(), [
						exports.TokenType.Delim,
						"-",
						u.representationStart,
						u.representationEnd,
						{ value: "-" }
					]);
					case 60: return checkIfFourCodePointsWouldStartCDO(u) ? (u.advanceCodePoint(4), [
						exports.TokenType.CDO,
						"<!--",
						u.representationStart,
						u.representationEnd,
						void 0
					]) : (u.advanceCodePoint(), [
						exports.TokenType.Delim,
						"<",
						u.representationStart,
						u.representationEnd,
						{ value: "<" }
					]);
					case 64:
						if (u.advanceCodePoint(), checkIfThreeCodePointsWouldStartAnIdentSequence(0, u)) {
							const e = consumeIdentSequence(d, u);
							return [
								exports.TokenType.AtKeyword,
								u.source.slice(u.representationStart, u.representationEnd + 1),
								u.representationStart,
								u.representationEnd,
								{ value: String.fromCodePoint(...e) }
							];
						}
						return [
							exports.TokenType.Delim,
							"@",
							u.representationStart,
							u.representationEnd,
							{ value: "@" }
						];
					case 92: {
						if (checkIfTwoCodePointsAreAValidEscape(u)) return consumeIdentLikeToken(d, u);
						u.advanceCodePoint();
						const n = [
							exports.TokenType.Delim,
							"\\",
							u.representationStart,
							u.representationEnd,
							{ value: "\\" }
						];
						return d.onParseError(new ParseErrorWithToken(e.InvalidEscapeSequenceAfterBackslash, u.representationStart, u.representationEnd, [
							"4.3.1. Consume a token",
							"U+005C REVERSE SOLIDUS (\\)",
							"The input stream does not start with a valid escape sequence"
						], n)), n;
					}
				}
				return u.advanceCodePoint(), [
					exports.TokenType.Delim,
					u.source[u.representationStart],
					u.representationStart,
					u.representationEnd,
					{ value: u.source[u.representationStart] }
				];
			},
			endOfFile: function endOfFile() {
				return void 0 === u.source.codePointAt(u.cursor);
			}
		};
	}
	function noop() {}
	function serializeIdent(e) {
		let n = 0;
		if (0 === e[0]) e.splice(0, 1, i), n = 1;
		else if (e[0] === t && e[1] === t) n = 2;
		else if (e[0] === t && e[1]) n = 2, isIdentStartCodePoint(e[1]) || (n += insertEscapedCodePoint(e, 1, e[1]));
		else {
			if (e[0] === t && !e[1]) return [92, e[0]];
			isIdentStartCodePoint(e[0]) ? n = 1 : (n = 1, n += insertEscapedCodePoint(e, 0, e[0]));
		}
		for (let o = n; o < e.length; o++) 0 !== e[o] ? isIdentCodePoint(e[o]) || (o += insertEscapedCharacter(e, o, e[o])) : (e.splice(o, 1, i), o++);
		return e;
	}
	function insertEscapedCharacter(e, n, o) {
		return e.splice(n, 1, 92, o), 1;
	}
	function insertEscapedCodePoint(e, n, o) {
		const t = o.toString(16), r = [];
		for (const e of t) r.push(e.codePointAt(0));
		return e.splice(n, 1, 92, ...r, 32), 1 + r.length;
	}
	var d = Object.values(exports.TokenType);
	exports.ParseError = ParseError, exports.ParseErrorMessage = e, exports.ParseErrorWithToken = ParseErrorWithToken, exports.cloneTokens = function cloneTokens(e) {
		return n ? structuredClone(e) : JSON.parse(JSON.stringify(e));
	}, exports.isToken = function isToken(e) {
		return !!Array.isArray(e) && !(e.length < 4) && !!d.includes(e[0]) && "string" == typeof e[1] && "number" == typeof e[2] && "number" == typeof e[3];
	}, exports.isTokenAtKeyword = function isTokenAtKeyword(e) {
		return !!e && e[0] === exports.TokenType.AtKeyword;
	}, exports.isTokenBadString = function isTokenBadString(e) {
		return !!e && e[0] === exports.TokenType.BadString;
	}, exports.isTokenBadURL = function isTokenBadURL(e) {
		return !!e && e[0] === exports.TokenType.BadURL;
	}, exports.isTokenCDC = function isTokenCDC(e) {
		return !!e && e[0] === exports.TokenType.CDC;
	}, exports.isTokenCDO = function isTokenCDO(e) {
		return !!e && e[0] === exports.TokenType.CDO;
	}, exports.isTokenCloseCurly = function isTokenCloseCurly(e) {
		return !!e && e[0] === exports.TokenType.CloseCurly;
	}, exports.isTokenCloseParen = function isTokenCloseParen(e) {
		return !!e && e[0] === exports.TokenType.CloseParen;
	}, exports.isTokenCloseSquare = function isTokenCloseSquare(e) {
		return !!e && e[0] === exports.TokenType.CloseSquare;
	}, exports.isTokenColon = function isTokenColon(e) {
		return !!e && e[0] === exports.TokenType.Colon;
	}, exports.isTokenComma = function isTokenComma(e) {
		return !!e && e[0] === exports.TokenType.Comma;
	}, exports.isTokenComment = function isTokenComment(e) {
		return !!e && e[0] === exports.TokenType.Comment;
	}, exports.isTokenDelim = function isTokenDelim(e) {
		return !!e && e[0] === exports.TokenType.Delim;
	}, exports.isTokenDimension = function isTokenDimension(e) {
		return !!e && e[0] === exports.TokenType.Dimension;
	}, exports.isTokenEOF = function isTokenEOF(e) {
		return !!e && e[0] === exports.TokenType.EOF;
	}, exports.isTokenFunction = function isTokenFunction(e) {
		return !!e && e[0] === exports.TokenType.Function;
	}, exports.isTokenHash = function isTokenHash(e) {
		return !!e && e[0] === exports.TokenType.Hash;
	}, exports.isTokenIdent = function isTokenIdent(e) {
		return !!e && e[0] === exports.TokenType.Ident;
	}, exports.isTokenNumber = function isTokenNumber(e) {
		return !!e && e[0] === exports.TokenType.Number;
	}, exports.isTokenNumeric = function isTokenNumeric(e) {
		if (!e) return !1;
		switch (e[0]) {
			case exports.TokenType.Dimension:
			case exports.TokenType.Number:
			case exports.TokenType.Percentage: return !0;
			default: return !1;
		}
	}, exports.isTokenOpenCurly = function isTokenOpenCurly(e) {
		return !!e && e[0] === exports.TokenType.OpenCurly;
	}, exports.isTokenOpenParen = function isTokenOpenParen(e) {
		return !!e && e[0] === exports.TokenType.OpenParen;
	}, exports.isTokenOpenSquare = function isTokenOpenSquare(e) {
		return !!e && e[0] === exports.TokenType.OpenSquare;
	}, exports.isTokenPercentage = function isTokenPercentage(e) {
		return !!e && e[0] === exports.TokenType.Percentage;
	}, exports.isTokenSemicolon = function isTokenSemicolon(e) {
		return !!e && e[0] === exports.TokenType.Semicolon;
	}, exports.isTokenString = function isTokenString(e) {
		return !!e && e[0] === exports.TokenType.String;
	}, exports.isTokenURL = function isTokenURL(e) {
		return !!e && e[0] === exports.TokenType.URL;
	}, exports.isTokenUnicodeRange = function isTokenUnicodeRange(e) {
		return !!e && e[0] === exports.TokenType.UnicodeRange;
	}, exports.isTokenWhiteSpaceOrComment = function isTokenWhiteSpaceOrComment(e) {
		if (!e) return !1;
		switch (e[0]) {
			case exports.TokenType.Whitespace:
			case exports.TokenType.Comment: return !0;
			default: return !1;
		}
	}, exports.isTokenWhitespace = function isTokenWhitespace(e) {
		return !!e && e[0] === exports.TokenType.Whitespace;
	}, exports.mirrorVariant = function mirrorVariant(e) {
		switch (e[0]) {
			case exports.TokenType.OpenParen: return [
				exports.TokenType.CloseParen,
				")",
				-1,
				-1,
				void 0
			];
			case exports.TokenType.CloseParen: return [
				exports.TokenType.OpenParen,
				"(",
				-1,
				-1,
				void 0
			];
			case exports.TokenType.OpenCurly: return [
				exports.TokenType.CloseCurly,
				"}",
				-1,
				-1,
				void 0
			];
			case exports.TokenType.CloseCurly: return [
				exports.TokenType.OpenCurly,
				"{",
				-1,
				-1,
				void 0
			];
			case exports.TokenType.OpenSquare: return [
				exports.TokenType.CloseSquare,
				"]",
				-1,
				-1,
				void 0
			];
			case exports.TokenType.CloseSquare: return [
				exports.TokenType.OpenSquare,
				"[",
				-1,
				-1,
				void 0
			];
			default: return null;
		}
	}, exports.mirrorVariantType = function mirrorVariantType(e) {
		switch (e) {
			case exports.TokenType.OpenParen: return exports.TokenType.CloseParen;
			case exports.TokenType.CloseParen: return exports.TokenType.OpenParen;
			case exports.TokenType.OpenCurly: return exports.TokenType.CloseCurly;
			case exports.TokenType.CloseCurly: return exports.TokenType.OpenCurly;
			case exports.TokenType.OpenSquare: return exports.TokenType.CloseSquare;
			case exports.TokenType.CloseSquare: return exports.TokenType.OpenSquare;
			default: return null;
		}
	}, exports.mutateIdent = function mutateIdent(e, n) {
		const o = [];
		for (const e of n) o.push(e.codePointAt(0));
		e[1] = String.fromCodePoint(...serializeIdent(o)), e[4].value = n;
	}, exports.mutateUnit = function mutateUnit(e, n) {
		const o = [];
		for (const e of n) o.push(e.codePointAt(0));
		const t = serializeIdent(o);
		101 === t[0] && insertEscapedCodePoint(t, 0, t[0]);
		const r = String.fromCodePoint(...t);
		e[1] = `${"+" === e[4].signCharacter ? e[4].signCharacter : ""}${e[4].value.toString()}${r}`, e[4].unit = n;
	}, exports.stringify = function stringify(...e) {
		let n = "";
		for (let o = 0; o < e.length; o++) n += e[o][1];
		return n;
	}, exports.tokenize = function tokenize(e, n) {
		const o = tokenizer(e, n), t = [];
		for (; !o.endOfFile();) t.push(o.nextToken());
		return t.push(o.nextToken()), t;
	}, exports.tokenizer = tokenizer;
}));
//#endregion
//#region node_modules/@csstools/css-parser-algorithms/dist/index.cjs
var require_dist$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var e;
	var n = require_dist$4();
	function walkerIndexGenerator(e) {
		let n = e.slice();
		return (e, o, t) => {
			let s = -1;
			for (let i = n.indexOf(o); i < n.length && (s = e.indexOf(n[i]), -1 === s || s < t); i++);
			return -1 === s || s === t && o === e[t] && (s++, s >= e.length) ? -1 : (n = e.slice(), s);
		};
	}
	function consumeComponentValue(e, o) {
		const t = o[0];
		if (n.isTokenOpenParen(t) || n.isTokenOpenCurly(t) || n.isTokenOpenSquare(t)) {
			const n = consumeSimpleBlock(e, o);
			return {
				advance: n.advance,
				node: n.node
			};
		}
		if (n.isTokenFunction(t)) {
			const n = consumeFunction(e, o);
			return {
				advance: n.advance,
				node: n.node
			};
		}
		if (n.isTokenWhitespace(t)) {
			const n = consumeWhitespace(e, o);
			return {
				advance: n.advance,
				node: n.node
			};
		}
		if (n.isTokenComment(t)) {
			const n = consumeComment(e, o);
			return {
				advance: n.advance,
				node: n.node
			};
		}
		return {
			advance: 1,
			node: new TokenNode(t)
		};
	}
	exports.ComponentValueType = void 0, (e = exports.ComponentValueType || (exports.ComponentValueType = {})).Function = "function", e.SimpleBlock = "simple-block", e.Whitespace = "whitespace", e.Comment = "comment", e.Token = "token";
	var ContainerNodeBaseClass = class {
		value = [];
		indexOf(e) {
			return this.value.indexOf(e);
		}
		at(e) {
			if ("number" == typeof e) return e < 0 && (e = this.value.length + e), this.value[e];
		}
		forEach(e, n) {
			if (0 === this.value.length) return;
			const o = walkerIndexGenerator(this.value);
			let t = 0;
			for (; t < this.value.length;) {
				const s = this.value[t];
				let i;
				if (n && (i = { ...n }), !1 === e({
					node: s,
					parent: this,
					state: i
				}, t)) return !1;
				if (t = o(this.value, s, t), -1 === t) break;
			}
		}
		walk(e, n) {
			0 !== this.value.length && this.forEach(((n, o) => !1 !== e(n, o) && (!("walk" in n.node) || !this.value.includes(n.node) || !1 !== n.node.walk(e, n.state)) && void 0), n);
		}
	};
	var FunctionNode = class FunctionNode extends ContainerNodeBaseClass {
		type = exports.ComponentValueType.Function;
		name;
		endToken;
		constructor(e, n, o) {
			super(), this.name = e, this.endToken = n, this.value = o;
		}
		getName() {
			return this.name[4].value;
		}
		normalize() {
			n.isTokenEOF(this.endToken) && (this.endToken = [
				n.TokenType.CloseParen,
				")",
				-1,
				-1,
				void 0
			]);
		}
		tokens() {
			return n.isTokenEOF(this.endToken) ? [this.name, ...this.value.flatMap(((e) => e.tokens()))] : [
				this.name,
				...this.value.flatMap(((e) => e.tokens())),
				this.endToken
			];
		}
		toString() {
			const e = this.value.map(((e) => n.isToken(e) ? n.stringify(e) : e.toString())).join("");
			return n.stringify(this.name) + e + n.stringify(this.endToken);
		}
		toJSON() {
			return {
				type: this.type,
				name: this.getName(),
				tokens: this.tokens(),
				value: this.value.map(((e) => e.toJSON()))
			};
		}
		isFunctionNode() {
			return FunctionNode.isFunctionNode(this);
		}
		static isFunctionNode(e) {
			return !!e && e instanceof FunctionNode && e.type === exports.ComponentValueType.Function;
		}
	};
	function consumeFunction(e, o) {
		const t = [];
		let s = 1;
		for (;;) {
			const i = o[s];
			if (!i || n.isTokenEOF(i)) return e.onParseError(new n.ParseError("Unexpected EOF while consuming a function.", o[0][2], o[o.length - 1][3], ["5.4.9. Consume a function", "Unexpected EOF"])), {
				advance: o.length,
				node: new FunctionNode(o[0], i, t)
			};
			if (n.isTokenCloseParen(i)) return {
				advance: s + 1,
				node: new FunctionNode(o[0], i, t)
			};
			if (n.isTokenWhiteSpaceOrComment(i)) {
				const n = consumeAllCommentsAndWhitespace(e, o.slice(s));
				s += n.advance, t.push(...n.nodes);
				continue;
			}
			const r = consumeComponentValue(e, o.slice(s));
			s += r.advance, t.push(r.node);
		}
	}
	var SimpleBlockNode = class SimpleBlockNode extends ContainerNodeBaseClass {
		type = exports.ComponentValueType.SimpleBlock;
		startToken;
		endToken;
		constructor(e, n, o) {
			super(), this.startToken = e, this.endToken = n, this.value = o;
		}
		normalize() {
			if (n.isTokenEOF(this.endToken)) {
				const e = n.mirrorVariant(this.startToken);
				e && (this.endToken = e);
			}
		}
		tokens() {
			return n.isTokenEOF(this.endToken) ? [this.startToken, ...this.value.flatMap(((e) => e.tokens()))] : [
				this.startToken,
				...this.value.flatMap(((e) => e.tokens())),
				this.endToken
			];
		}
		toString() {
			const e = this.value.map(((e) => n.isToken(e) ? n.stringify(e) : e.toString())).join("");
			return n.stringify(this.startToken) + e + n.stringify(this.endToken);
		}
		toJSON() {
			return {
				type: this.type,
				startToken: this.startToken,
				tokens: this.tokens(),
				value: this.value.map(((e) => e.toJSON()))
			};
		}
		isSimpleBlockNode() {
			return SimpleBlockNode.isSimpleBlockNode(this);
		}
		static isSimpleBlockNode(e) {
			return !!e && e instanceof SimpleBlockNode && e.type === exports.ComponentValueType.SimpleBlock;
		}
	};
	function consumeSimpleBlock(e, o) {
		const t = n.mirrorVariantType(o[0][0]);
		if (!t) throw new Error("Failed to parse, a mirror variant must exist for all block open tokens.");
		const s = [];
		let i = 1;
		for (;;) {
			const r = o[i];
			if (!r || n.isTokenEOF(r)) return e.onParseError(new n.ParseError("Unexpected EOF while consuming a simple block.", o[0][2], o[o.length - 1][3], ["5.4.8. Consume a simple block", "Unexpected EOF"])), {
				advance: o.length,
				node: new SimpleBlockNode(o[0], r, s)
			};
			if (r[0] === t) return {
				advance: i + 1,
				node: new SimpleBlockNode(o[0], r, s)
			};
			if (n.isTokenWhiteSpaceOrComment(r)) {
				const n = consumeAllCommentsAndWhitespace(e, o.slice(i));
				i += n.advance, s.push(...n.nodes);
				continue;
			}
			const a = consumeComponentValue(e, o.slice(i));
			i += a.advance, s.push(a.node);
		}
	}
	var WhitespaceNode = class WhitespaceNode {
		type = exports.ComponentValueType.Whitespace;
		value;
		constructor(e) {
			this.value = e;
		}
		tokens() {
			return this.value;
		}
		toString() {
			return n.stringify(...this.value);
		}
		toJSON() {
			return {
				type: this.type,
				tokens: this.tokens()
			};
		}
		isWhitespaceNode() {
			return WhitespaceNode.isWhitespaceNode(this);
		}
		static isWhitespaceNode(e) {
			return !!e && e instanceof WhitespaceNode && e.type === exports.ComponentValueType.Whitespace;
		}
	};
	function consumeWhitespace(e, o) {
		let t = 0;
		for (;;) {
			const e = o[t];
			if (!n.isTokenWhitespace(e)) return {
				advance: t,
				node: new WhitespaceNode(o.slice(0, t))
			};
			t++;
		}
	}
	var CommentNode = class CommentNode {
		type = exports.ComponentValueType.Comment;
		value;
		constructor(e) {
			this.value = e;
		}
		tokens() {
			return [this.value];
		}
		toString() {
			return n.stringify(this.value);
		}
		toJSON() {
			return {
				type: this.type,
				tokens: this.tokens()
			};
		}
		isCommentNode() {
			return CommentNode.isCommentNode(this);
		}
		static isCommentNode(e) {
			return !!e && e instanceof CommentNode && e.type === exports.ComponentValueType.Comment;
		}
	};
	function consumeComment(e, n) {
		return {
			advance: 1,
			node: new CommentNode(n[0])
		};
	}
	function consumeAllCommentsAndWhitespace(e, o) {
		const t = [];
		let s = 0;
		for (;;) if (n.isTokenWhitespace(o[s])) {
			const e = consumeWhitespace(0, o.slice(s));
			s += e.advance, t.push(e.node);
		} else {
			if (!n.isTokenComment(o[s])) return {
				advance: s,
				nodes: t
			};
			t.push(new CommentNode(o[s])), s++;
		}
	}
	var TokenNode = class TokenNode {
		type = exports.ComponentValueType.Token;
		value;
		constructor(e) {
			this.value = e;
		}
		tokens() {
			return [this.value];
		}
		toString() {
			return this.value[1];
		}
		toJSON() {
			return {
				type: this.type,
				tokens: this.tokens()
			};
		}
		isTokenNode() {
			return TokenNode.isTokenNode(this);
		}
		static isTokenNode(e) {
			return !!e && e instanceof TokenNode && e.type === exports.ComponentValueType.Token;
		}
	};
	function forEach(e, n, o) {
		if (0 === e.length) return;
		const t = walkerIndexGenerator(e);
		let s = 0;
		for (; s < e.length;) {
			const i = e[s];
			let r;
			if (o && (r = { ...o }), !1 === n({
				node: i,
				parent: { value: e },
				state: r
			}, s)) return !1;
			if (s = t(e, i, s), -1 === s) break;
		}
	}
	function walk(e, n, o) {
		0 !== e.length && forEach(e, ((o, t) => !1 !== n(o, t) && (!("walk" in o.node) || !e.includes(o.node) || !1 !== o.node.walk(n, o.state)) && void 0), o);
	}
	function isWhitespaceNode(e) {
		return WhitespaceNode.isWhitespaceNode(e);
	}
	function isCommentNode(e) {
		return CommentNode.isCommentNode(e);
	}
	exports.CommentNode = CommentNode, exports.ContainerNodeBaseClass = ContainerNodeBaseClass, exports.FunctionNode = FunctionNode, exports.SimpleBlockNode = SimpleBlockNode, exports.TokenNode = TokenNode, exports.WhitespaceNode = WhitespaceNode, exports.forEach = forEach, exports.gatherNodeAncestry = function gatherNodeAncestry(e) {
		const n = /* @__PURE__ */ new Map();
		return e.walk(((e) => {
			Array.isArray(e.node) ? e.node.forEach(((o) => {
				n.set(o, e.parent);
			})) : n.set(e.node, e.parent);
		})), n;
	}, exports.isCommentNode = isCommentNode, exports.isFunctionNode = function isFunctionNode(e) {
		return FunctionNode.isFunctionNode(e);
	}, exports.isSimpleBlockNode = function isSimpleBlockNode(e) {
		return SimpleBlockNode.isSimpleBlockNode(e);
	}, exports.isTokenNode = function isTokenNode(e) {
		return TokenNode.isTokenNode(e);
	}, exports.isWhiteSpaceOrCommentNode = function isWhiteSpaceOrCommentNode(e) {
		return isWhitespaceNode(e) || isCommentNode(e);
	}, exports.isWhitespaceNode = isWhitespaceNode, exports.parseCommaSeparatedListOfComponentValues = function parseCommaSeparatedListOfComponentValues(e, o) {
		const t = { onParseError: o?.onParseError ?? (() => {}) }, s = [...e];
		if (0 === e.length) return [];
		n.isTokenEOF(s[s.length - 1]) && s.push([
			n.TokenType.EOF,
			"",
			s[s.length - 1][2],
			s[s.length - 1][3],
			void 0
		]);
		const i = [];
		let r = [], a = 0;
		for (;;) {
			if (!s[a] || n.isTokenEOF(s[a])) return r.length && i.push(r), i;
			if (n.isTokenComma(s[a])) {
				i.push(r), r = [], a++;
				continue;
			}
			const o = consumeComponentValue(t, e.slice(a));
			r.push(o.node), a += o.advance;
		}
	}, exports.parseComponentValue = function parseComponentValue(e, o) {
		const t = { onParseError: o?.onParseError ?? (() => {}) }, s = [...e];
		n.isTokenEOF(s[s.length - 1]) && s.push([
			n.TokenType.EOF,
			"",
			s[s.length - 1][2],
			s[s.length - 1][3],
			void 0
		]);
		const i = consumeComponentValue(t, s);
		if (n.isTokenEOF(s[Math.min(i.advance, s.length - 1)])) return i.node;
		t.onParseError(new n.ParseError("Expected EOF after parsing a component value.", e[0][2], e[e.length - 1][3], ["5.3.9. Parse a component value", "Expected EOF"]));
	}, exports.parseListOfComponentValues = function parseListOfComponentValues(e, o) {
		const t = { onParseError: o?.onParseError ?? (() => {}) }, s = [...e];
		n.isTokenEOF(s[s.length - 1]) && s.push([
			n.TokenType.EOF,
			"",
			s[s.length - 1][2],
			s[s.length - 1][3],
			void 0
		]);
		const i = [];
		let r = 0;
		for (;;) {
			if (!s[r] || n.isTokenEOF(s[r])) return i;
			const e = consumeComponentValue(t, s.slice(r));
			i.push(e.node), r += e.advance;
		}
	}, exports.replaceComponentValues = function replaceComponentValues(e, n) {
		for (let o = 0; o < e.length; o++) walk(e[o], ((e, o) => {
			if ("number" != typeof o) return;
			const t = n(e.node);
			t && (Array.isArray(t) ? e.parent.value.splice(o, 1, ...t) : e.parent.value.splice(o, 1, t));
		}));
		return e;
	}, exports.sourceIndices = function sourceIndices(e) {
		if (Array.isArray(e)) {
			const n = e[0];
			if (!n) return [0, 0];
			const o = e[e.length - 1] || n;
			return [sourceIndices(n)[0], sourceIndices(o)[1]];
		}
		const n = e.tokens(), o = n[0], t = n[n.length - 1];
		return o && t ? [o[2], t[3]] : [0, 0];
	}, exports.stringify = function stringify(e) {
		return e.map(((e) => e.map(((e) => n.stringify(...e.tokens()))).join(""))).join(",");
	}, exports.walk = walk, exports.walkerIndexGenerator = walkerIndexGenerator;
}));
//#endregion
//#region node_modules/@csstools/css-calc/dist/index.cjs
var require_dist$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var e = require_dist$3();
	var n = require_dist$4();
	var t = /[A-Z]/g;
	function toLowerCaseAZ(e) {
		return e.replace(t, ((e) => String.fromCharCode(e.charCodeAt(0) + 32)));
	}
	var o = {
		cm: "px",
		in: "px",
		mm: "px",
		pc: "px",
		pt: "px",
		px: "px",
		q: "px",
		deg: "deg",
		grad: "deg",
		rad: "deg",
		turn: "deg",
		ms: "s",
		s: "s",
		hz: "hz",
		khz: "hz"
	};
	var r = /* @__PURE__ */ new Map([
		["cm", (e) => e],
		["mm", (e) => 10 * e],
		["q", (e) => 40 * e],
		["in", (e) => e / 2.54],
		["pc", (e) => e / 2.54 * 6],
		["pt", (e) => e / 2.54 * 72],
		["px", (e) => e / 2.54 * 96]
	]);
	var i = /* @__PURE__ */ new Map([
		["deg", (e) => e],
		["grad", (e) => e / .9],
		["rad", (e) => e / 180 * Math.PI],
		["turn", (e) => e / 360]
	]);
	var u = /* @__PURE__ */ new Map([
		["deg", (e) => .9 * e],
		["grad", (e) => e],
		["rad", (e) => .9 * e / 180 * Math.PI],
		["turn", (e) => .9 * e / 360]
	]);
	var a = /* @__PURE__ */ new Map([["hz", (e) => e], ["khz", (e) => e / 1e3]]);
	var s = /* @__PURE__ */ new Map([
		["cm", (e) => 2.54 * e],
		["mm", (e) => 25.4 * e],
		["q", (e) => 25.4 * e * 4],
		["in", (e) => e],
		["pc", (e) => 6 * e],
		["pt", (e) => 72 * e],
		["px", (e) => 96 * e]
	]);
	var l = /* @__PURE__ */ new Map([["hz", (e) => 1e3 * e], ["khz", (e) => e]]);
	var c = /* @__PURE__ */ new Map([
		["cm", (e) => e / 10],
		["mm", (e) => e],
		["q", (e) => 4 * e],
		["in", (e) => e / 25.4],
		["pc", (e) => e / 25.4 * 6],
		["pt", (e) => e / 25.4 * 72],
		["px", (e) => e / 25.4 * 96]
	]);
	var m = /* @__PURE__ */ new Map([["ms", (e) => e], ["s", (e) => e / 1e3]]);
	var v = /* @__PURE__ */ new Map([
		["cm", (e) => e / 6 * 2.54],
		["mm", (e) => e / 6 * 25.4],
		["q", (e) => e / 6 * 25.4 * 4],
		["in", (e) => e / 6],
		["pc", (e) => e],
		["pt", (e) => e / 6 * 72],
		["px", (e) => e / 6 * 96]
	]);
	var T = /* @__PURE__ */ new Map([
		["cm", (e) => e / 72 * 2.54],
		["mm", (e) => e / 72 * 25.4],
		["q", (e) => e / 72 * 25.4 * 4],
		["in", (e) => e / 72],
		["pc", (e) => e / 72 * 6],
		["pt", (e) => e],
		["px", (e) => e / 72 * 96]
	]);
	var p = /* @__PURE__ */ new Map([
		["cm", (e) => e / 96 * 2.54],
		["mm", (e) => e / 96 * 25.4],
		["q", (e) => e / 96 * 25.4 * 4],
		["in", (e) => e / 96],
		["pc", (e) => e / 96 * 6],
		["pt", (e) => e / 96 * 72],
		["px", (e) => e]
	]);
	var N = /* @__PURE__ */ new Map([
		["cm", (e) => e / 4 / 10],
		["mm", (e) => e / 4],
		["q", (e) => e],
		["in", (e) => e / 4 / 25.4],
		["pc", (e) => e / 4 / 25.4 * 6],
		["pt", (e) => e / 4 / 25.4 * 72],
		["px", (e) => e / 4 / 25.4 * 96]
	]);
	var f = /* @__PURE__ */ new Map([
		["deg", (e) => 180 * e / Math.PI],
		["grad", (e) => 180 * e / Math.PI / .9],
		["rad", (e) => e],
		["turn", (e) => 180 * e / Math.PI / 360]
	]);
	var d = /* @__PURE__ */ new Map([["ms", (e) => 1e3 * e], ["s", (e) => e]]);
	var k = /* @__PURE__ */ new Map([
		["deg", (e) => 360 * e],
		["grad", (e) => 360 * e / .9],
		["rad", (e) => 360 * e / 180 * Math.PI],
		["turn", (e) => e]
	]);
	var C = /* @__PURE__ */ new Map([
		["cm", r],
		["mm", c],
		["q", N],
		["in", s],
		["pc", v],
		["pt", T],
		["px", p],
		["ms", m],
		["s", d],
		["deg", i],
		["grad", u],
		["rad", f],
		["turn", k],
		["hz", a],
		["khz", l]
	]);
	function convertUnit(e, t) {
		if (!n.isTokenDimension(e)) return t;
		if (!n.isTokenDimension(t)) return t;
		const o = toLowerCaseAZ(e[4].unit), r = toLowerCaseAZ(t[4].unit);
		if (o === r) return t;
		const i = C.get(r);
		if (!i) return t;
		const u = i.get(o);
		if (!u) return t;
		const a = u(t[4].value), s = [
			n.TokenType.Dimension,
			"",
			t[2],
			t[3],
			{
				...t[4],
				signCharacter: a < 0 ? "-" : void 0,
				type: Number.isInteger(a) ? n.NumberType.Integer : n.NumberType.Number,
				value: a
			}
		];
		return n.mutateUnit(s, e[4].unit), s;
	}
	function toCanonicalUnit(e) {
		if (!n.isTokenDimension(e)) return e;
		const t = toLowerCaseAZ(e[4].unit), r = o[t];
		if (t === r) return e;
		const i = C.get(t);
		if (!i) return e;
		const u = i.get(r);
		if (!u) return e;
		const a = u(e[4].value), s = [
			n.TokenType.Dimension,
			"",
			e[2],
			e[3],
			{
				...e[4],
				signCharacter: a < 0 ? "-" : void 0,
				type: Number.isInteger(a) ? n.NumberType.Integer : n.NumberType.Number,
				value: a
			}
		];
		return n.mutateUnit(s, r), s;
	}
	function addition(t) {
		if (2 !== t.length) return -1;
		const o = t[0].value;
		let r = t[1].value;
		if (n.isTokenNumber(o) && n.isTokenNumber(r)) {
			const t = o[4].value + r[4].value;
			return new e.TokenNode([
				n.TokenType.Number,
				t.toString(),
				o[2],
				r[3],
				{
					value: t,
					type: o[4].type === n.NumberType.Integer && r[4].type === n.NumberType.Integer ? n.NumberType.Integer : n.NumberType.Number
				}
			]);
		}
		if (n.isTokenPercentage(o) && n.isTokenPercentage(r)) {
			const t = o[4].value + r[4].value;
			return new e.TokenNode([
				n.TokenType.Percentage,
				t.toString() + "%",
				o[2],
				r[3],
				{ value: t }
			]);
		}
		if (n.isTokenDimension(o) && n.isTokenDimension(r) && (r = convertUnit(o, r), toLowerCaseAZ(o[4].unit) === toLowerCaseAZ(r[4].unit))) {
			const t = o[4].value + r[4].value;
			return new e.TokenNode([
				n.TokenType.Dimension,
				t.toString() + o[4].unit,
				o[2],
				r[3],
				{
					value: t,
					type: o[4].type === n.NumberType.Integer && r[4].type === n.NumberType.Integer ? n.NumberType.Integer : n.NumberType.Number,
					unit: o[4].unit
				}
			]);
		}
		return -1;
	}
	function division(t) {
		if (2 !== t.length) return -1;
		const o = t[0].value, r = t[1].value;
		if (n.isTokenNumber(o) && n.isTokenNumber(r)) {
			const t = o[4].value / r[4].value;
			return new e.TokenNode([
				n.TokenType.Number,
				t.toString(),
				o[2],
				r[3],
				{
					value: t,
					type: Number.isInteger(t) ? n.NumberType.Integer : n.NumberType.Number
				}
			]);
		}
		if (n.isTokenPercentage(o) && n.isTokenNumber(r)) {
			const t = o[4].value / r[4].value;
			return new e.TokenNode([
				n.TokenType.Percentage,
				t.toString() + "%",
				o[2],
				r[3],
				{ value: t }
			]);
		}
		if (n.isTokenDimension(o) && n.isTokenNumber(r)) {
			const t = o[4].value / r[4].value;
			return new e.TokenNode([
				n.TokenType.Dimension,
				t.toString() + o[4].unit,
				o[2],
				r[3],
				{
					value: t,
					type: Number.isInteger(t) ? n.NumberType.Integer : n.NumberType.Number,
					unit: o[4].unit
				}
			]);
		}
		return -1;
	}
	function isCalculation(e) {
		return !!e && "object" == typeof e && "inputs" in e && Array.isArray(e.inputs) && "operation" in e;
	}
	function solve(n) {
		if (-1 === n) return -1;
		const t = [];
		for (let o = 0; o < n.inputs.length; o++) {
			const r = n.inputs[o];
			if (e.isTokenNode(r)) {
				t.push(r);
				continue;
			}
			const i = solve(r);
			if (-1 === i) return -1;
			t.push(i);
		}
		return n.operation(t);
	}
	function multiplication(t) {
		if (2 !== t.length) return -1;
		const o = t[0].value, r = t[1].value;
		if (n.isTokenNumber(o) && n.isTokenNumber(r)) {
			const t = o[4].value * r[4].value;
			return new e.TokenNode([
				n.TokenType.Number,
				t.toString(),
				o[2],
				r[3],
				{
					value: t,
					type: o[4].type === n.NumberType.Integer && r[4].type === n.NumberType.Integer ? n.NumberType.Integer : n.NumberType.Number
				}
			]);
		}
		if (n.isTokenPercentage(o) && n.isTokenNumber(r)) {
			const t = o[4].value * r[4].value;
			return new e.TokenNode([
				n.TokenType.Percentage,
				t.toString() + "%",
				o[2],
				r[3],
				{ value: t }
			]);
		}
		if (n.isTokenNumber(o) && n.isTokenPercentage(r)) {
			const t = o[4].value * r[4].value;
			return new e.TokenNode([
				n.TokenType.Percentage,
				t.toString() + "%",
				o[2],
				r[3],
				{ value: t }
			]);
		}
		if (n.isTokenDimension(o) && n.isTokenNumber(r)) {
			const t = o[4].value * r[4].value;
			return new e.TokenNode([
				n.TokenType.Dimension,
				t.toString() + o[4].unit,
				o[2],
				r[3],
				{
					value: t,
					type: o[4].type === n.NumberType.Integer && r[4].type === n.NumberType.Integer ? n.NumberType.Integer : n.NumberType.Number,
					unit: o[4].unit
				}
			]);
		}
		if (n.isTokenNumber(o) && n.isTokenDimension(r)) {
			const t = o[4].value * r[4].value;
			return new e.TokenNode([
				n.TokenType.Dimension,
				t.toString() + r[4].unit,
				o[2],
				r[3],
				{
					value: t,
					type: o[4].type === n.NumberType.Integer && r[4].type === n.NumberType.Integer ? n.NumberType.Integer : n.NumberType.Number,
					unit: r[4].unit
				}
			]);
		}
		return -1;
	}
	function resolveGlobalsAndConstants(t, o) {
		for (let r = 0; r < t.length; r++) {
			const i = t[r];
			if (!e.isTokenNode(i)) continue;
			const u = i.value;
			if (!n.isTokenIdent(u)) continue;
			const a = toLowerCaseAZ(u[4].value);
			switch (a) {
				case "e":
					t.splice(r, 1, new e.TokenNode([
						n.TokenType.Number,
						Math.E.toString(),
						u[2],
						u[3],
						{
							value: Math.E,
							type: n.NumberType.Number
						}
					]));
					break;
				case "pi":
					t.splice(r, 1, new e.TokenNode([
						n.TokenType.Number,
						Math.PI.toString(),
						u[2],
						u[3],
						{
							value: Math.PI,
							type: n.NumberType.Number
						}
					]));
					break;
				case "infinity":
					t.splice(r, 1, new e.TokenNode([
						n.TokenType.Number,
						"infinity",
						u[2],
						u[3],
						{
							value: Infinity,
							type: n.NumberType.Number
						}
					]));
					break;
				case "-infinity":
					t.splice(r, 1, new e.TokenNode([
						n.TokenType.Number,
						"-infinity",
						u[2],
						u[3],
						{
							value: -Infinity,
							type: n.NumberType.Number
						}
					]));
					break;
				case "nan":
					t.splice(r, 1, new e.TokenNode([
						n.TokenType.Number,
						"NaN",
						u[2],
						u[3],
						{
							value: NaN,
							type: n.NumberType.Number
						}
					]));
					break;
				default: if (o.has(a)) {
					const n = o.get(a);
					t.splice(r, 1, new e.TokenNode(n));
				}
			}
		}
		return t;
	}
	function unary(e) {
		if (1 !== e.length) return -1;
		const t = e[0].value;
		return n.isTokenNumeric(t) ? e[0] : -1;
	}
	function resultToCalculation(e, t, o) {
		return n.isTokenDimension(t) ? dimensionToCalculation(e, t[4].unit, o) : n.isTokenPercentage(t) ? percentageToCalculation(e, o) : n.isTokenNumber(t) ? numberToCalculation(e, o) : -1;
	}
	function dimensionToCalculation(t, o, r) {
		const i = t.tokens();
		return {
			inputs: [new e.TokenNode([
				n.TokenType.Dimension,
				r.toString() + o,
				i[0][2],
				i[i.length - 1][3],
				{
					value: r,
					type: Number.isInteger(r) ? n.NumberType.Integer : n.NumberType.Number,
					unit: o
				}
			])],
			operation: unary
		};
	}
	function percentageToCalculation(t, o) {
		const r = t.tokens();
		return {
			inputs: [new e.TokenNode([
				n.TokenType.Percentage,
				o.toString() + "%",
				r[0][2],
				r[r.length - 1][3],
				{ value: o }
			])],
			operation: unary
		};
	}
	function numberToCalculation(t, o) {
		const r = t.tokens();
		return {
			inputs: [new e.TokenNode([
				n.TokenType.Number,
				o.toString(),
				r[0][2],
				r[r.length - 1][3],
				{
					value: o,
					type: Number.isInteger(o) ? n.NumberType.Integer : n.NumberType.Number
				}
			])],
			operation: unary
		};
	}
	function solveACos(e, t) {
		const o = t.value;
		if (!n.isTokenNumber(o)) return -1;
		return dimensionToCalculation(e, "rad", Math.acos(o[4].value));
	}
	function solveASin(e, t) {
		const o = t.value;
		if (!n.isTokenNumber(o)) return -1;
		return dimensionToCalculation(e, "rad", Math.asin(o[4].value));
	}
	function solveATan(e, t) {
		const o = t.value;
		if (!n.isTokenNumber(o)) return -1;
		return dimensionToCalculation(e, "rad", Math.atan(o[4].value));
	}
	function isDimensionOrNumber(e) {
		return n.isTokenDimension(e) || n.isTokenNumber(e);
	}
	function arrayOfSameNumeric(e) {
		if (0 === e.length) return !0;
		const t = e[0];
		if (!n.isTokenNumeric(t)) return !1;
		if (1 === e.length) return !0;
		if (n.isTokenDimension(t)) {
			const n = toLowerCaseAZ(t[4].unit);
			for (let o = 1; o < e.length; o++) {
				const r = e[o];
				if (t[0] !== r[0]) return !1;
				if (n !== toLowerCaseAZ(r[4].unit)) return !1;
			}
			return !0;
		}
		for (let n = 1; n < e.length; n++) {
			const o = e[n];
			if (t[0] !== o[0]) return !1;
		}
		return !0;
	}
	function twoOfSameNumeric(e, t) {
		return !!n.isTokenNumeric(e) && (n.isTokenDimension(e) ? e[0] === t[0] && toLowerCaseAZ(e[4].unit) === toLowerCaseAZ(t[4].unit) : e[0] === t[0]);
	}
	function solveATan2(e, n, t) {
		const o = n.value;
		if (!isDimensionOrNumber(o)) return -1;
		const r = convertUnit(o, t.value);
		if (!twoOfSameNumeric(o, r)) return -1;
		return dimensionToCalculation(e, "rad", Math.atan2(o[4].value, r[4].value));
	}
	function solveAbs(e, t, o) {
		const r = t.value;
		if (!n.isTokenNumeric(r)) return -1;
		if (!o.rawPercentages && n.isTokenPercentage(r)) return -1;
		return resultToCalculation(e, r, Math.abs(r[4].value));
	}
	function solveClamp(t, o, r, i, u) {
		if (!e.isTokenNode(o) || !e.isTokenNode(r) || !e.isTokenNode(i)) return -1;
		const a = o.value;
		if (!n.isTokenNumeric(a)) return -1;
		if (!u.rawPercentages && n.isTokenPercentage(a)) return -1;
		const s = convertUnit(a, r.value);
		if (!twoOfSameNumeric(a, s)) return -1;
		const l = convertUnit(a, i.value);
		if (!twoOfSameNumeric(a, l)) return -1;
		return resultToCalculation(t, a, Math.max(a[4].value, Math.min(s[4].value, l[4].value)));
	}
	function solveCos(e, t) {
		const o = t.value;
		if (!isDimensionOrNumber(o)) return -1;
		let r = o[4].value;
		if (n.isTokenDimension(o)) switch (o[4].unit.toLowerCase()) {
			case "rad": break;
			case "deg":
				r = i.get("rad")(o[4].value);
				break;
			case "grad":
				r = u.get("rad")(o[4].value);
				break;
			case "turn":
				r = k.get("rad")(o[4].value);
				break;
			default: return -1;
		}
		return r = Math.cos(r), numberToCalculation(e, r);
	}
	function solveExp(e, t) {
		const o = t.value;
		if (!n.isTokenNumber(o)) return -1;
		return numberToCalculation(e, Math.exp(o[4].value));
	}
	function solveHypot(t, o, r) {
		if (!o.every(e.isTokenNode)) return -1;
		const i = o[0].value;
		if (!n.isTokenNumeric(i)) return -1;
		if (!r.rawPercentages && n.isTokenPercentage(i)) return -1;
		const u = o.map(((e) => convertUnit(i, e.value)));
		if (!arrayOfSameNumeric(u)) return -1;
		const a = u.map(((e) => e[4].value));
		return resultToCalculation(t, i, Math.hypot(...a));
	}
	function solveMax(t, o, r) {
		if (!o.every(e.isTokenNode)) return -1;
		const i = o[0].value;
		if (!n.isTokenNumeric(i)) return -1;
		if (!r.rawPercentages && n.isTokenPercentage(i)) return -1;
		const u = o.map(((e) => convertUnit(i, e.value)));
		if (!arrayOfSameNumeric(u)) return -1;
		const a = u.map(((e) => e[4].value));
		return resultToCalculation(t, i, Math.max(...a));
	}
	function solveMin(t, o, r) {
		if (!o.every(e.isTokenNode)) return -1;
		const i = o[0].value;
		if (!n.isTokenNumeric(i)) return -1;
		if (!r.rawPercentages && n.isTokenPercentage(i)) return -1;
		const u = o.map(((e) => convertUnit(i, e.value)));
		if (!arrayOfSameNumeric(u)) return -1;
		const a = u.map(((e) => e[4].value));
		return resultToCalculation(t, i, Math.min(...a));
	}
	function solveMod(e, t, o) {
		const r = t.value;
		if (!n.isTokenNumeric(r)) return -1;
		const i = convertUnit(r, o.value);
		if (!twoOfSameNumeric(r, i)) return -1;
		let u;
		return u = 0 === i[4].value ? NaN : Number.isFinite(r[4].value) && (Number.isFinite(i[4].value) || (i[4].value !== Number.POSITIVE_INFINITY || r[4].value !== Number.NEGATIVE_INFINITY && !Object.is(0 * r[4].value, -0)) && (i[4].value !== Number.NEGATIVE_INFINITY || r[4].value !== Number.POSITIVE_INFINITY && !Object.is(0 * r[4].value, 0))) ? Number.isFinite(i[4].value) ? (r[4].value % i[4].value + i[4].value) % i[4].value : r[4].value : NaN, resultToCalculation(e, r, u);
	}
	function solvePow(e, t, o) {
		const r = t.value, i = o.value;
		if (!n.isTokenNumber(r)) return -1;
		if (!twoOfSameNumeric(r, i)) return -1;
		return numberToCalculation(e, Math.pow(r[4].value, i[4].value));
	}
	function solveRem(e, t, o) {
		const r = t.value;
		if (!n.isTokenNumeric(r)) return -1;
		const i = convertUnit(r, o.value);
		if (!twoOfSameNumeric(r, i)) return -1;
		let u;
		return u = 0 === i[4].value ? NaN : Number.isFinite(r[4].value) ? Number.isFinite(i[4].value) ? r[4].value % i[4].value : r[4].value : NaN, resultToCalculation(e, r, u);
	}
	function solveRound(e, t, o, r, i) {
		const u = o.value;
		if (!n.isTokenNumeric(u)) return -1;
		if (!i.rawPercentages && n.isTokenPercentage(u)) return -1;
		const a = convertUnit(u, r.value);
		if (!twoOfSameNumeric(u, a)) return -1;
		let s;
		if (0 === a[4].value) s = NaN;
		else if (Number.isFinite(u[4].value) || Number.isFinite(a[4].value)) if (!Number.isFinite(u[4].value) && Number.isFinite(a[4].value)) s = u[4].value;
		else if (Number.isFinite(u[4].value) && !Number.isFinite(a[4].value)) switch (t) {
			case "down":
				s = u[4].value < 0 ? -Infinity : Object.is(-0, 0 * u[4].value) ? -0 : 0;
				break;
			case "up":
				s = u[4].value > 0 ? Infinity : Object.is(0, 0 * u[4].value) ? 0 : -0;
				break;
			default: s = Object.is(0, 0 * u[4].value) ? 0 : -0;
		}
		else if (Number.isFinite(a[4].value)) switch (t) {
			case "down":
				s = Math.floor(u[4].value / a[4].value) * a[4].value;
				break;
			case "up":
				s = Math.ceil(u[4].value / a[4].value) * a[4].value;
				break;
			case "to-zero":
				s = Math.trunc(u[4].value / a[4].value) * a[4].value;
				break;
			default: {
				let e = Math.floor(u[4].value / a[4].value) * a[4].value, n = Math.ceil(u[4].value / a[4].value) * a[4].value;
				if (e > n) {
					const t = e;
					e = n, n = t;
				}
				const t = Math.abs(u[4].value - e), o = Math.abs(u[4].value - n);
				s = t === o ? n : t < o ? e : n;
				break;
			}
		}
		else s = u[4].value;
		else s = NaN;
		return resultToCalculation(e, u, s);
	}
	function solveSign(e, t, o) {
		const r = t.value;
		if (!n.isTokenNumeric(r)) return -1;
		if (!o.rawPercentages && n.isTokenPercentage(r)) return -1;
		return numberToCalculation(e, Math.sign(r[4].value));
	}
	function solveSin(e, t) {
		const o = t.value;
		if (!isDimensionOrNumber(o)) return -1;
		let r = o[4].value;
		if (n.isTokenDimension(o)) switch (toLowerCaseAZ(o[4].unit)) {
			case "rad": break;
			case "deg":
				r = i.get("rad")(o[4].value);
				break;
			case "grad":
				r = u.get("rad")(o[4].value);
				break;
			case "turn":
				r = k.get("rad")(o[4].value);
				break;
			default: return -1;
		}
		return r = Math.sin(r), numberToCalculation(e, r);
	}
	function solveSqrt(e, t) {
		const o = t.value;
		if (!n.isTokenNumber(o)) return -1;
		return numberToCalculation(e, Math.sqrt(o[4].value));
	}
	function solveTan(e, t) {
		const o = t.value;
		if (!isDimensionOrNumber(o)) return -1;
		const r = o[4].value;
		let a = 0, s = o[4].value;
		if (n.isTokenDimension(o)) switch (toLowerCaseAZ(o[4].unit)) {
			case "rad":
				a = f.get("deg")(r);
				break;
			case "deg":
				a = r, s = i.get("rad")(r);
				break;
			case "grad":
				a = u.get("deg")(r), s = u.get("rad")(r);
				break;
			case "turn":
				a = k.get("deg")(r), s = k.get("rad")(r);
				break;
			default: return -1;
		}
		const l = a / 90;
		return s = a % 90 == 0 && l % 2 != 0 ? l > 0 ? Infinity : -Infinity : Math.tan(s), numberToCalculation(e, s);
	}
	function subtraction(t) {
		if (2 !== t.length) return -1;
		const o = t[0].value;
		let r = t[1].value;
		if (n.isTokenNumber(o) && n.isTokenNumber(r)) {
			const t = o[4].value - r[4].value;
			return new e.TokenNode([
				n.TokenType.Number,
				t.toString(),
				o[2],
				r[3],
				{
					value: t,
					type: o[4].type === n.NumberType.Integer && r[4].type === n.NumberType.Integer ? n.NumberType.Integer : n.NumberType.Number
				}
			]);
		}
		if (n.isTokenPercentage(o) && n.isTokenPercentage(r)) {
			const t = o[4].value - r[4].value;
			return new e.TokenNode([
				n.TokenType.Percentage,
				t.toString() + "%",
				o[2],
				r[3],
				{ value: t }
			]);
		}
		if (n.isTokenDimension(o) && n.isTokenDimension(r) && (r = convertUnit(o, r), toLowerCaseAZ(o[4].unit) === toLowerCaseAZ(r[4].unit))) {
			const t = o[4].value - r[4].value;
			return new e.TokenNode([
				n.TokenType.Dimension,
				t.toString() + o[4].unit,
				o[2],
				r[3],
				{
					value: t,
					type: o[4].type === n.NumberType.Integer && r[4].type === n.NumberType.Integer ? n.NumberType.Integer : n.NumberType.Number,
					unit: o[4].unit
				}
			]);
		}
		return -1;
	}
	function solveLog(t, o) {
		if (1 === o.length) {
			const r = o[0];
			if (!r || !e.isTokenNode(r)) return -1;
			const i = r.value;
			if (!n.isTokenNumber(i)) return -1;
			return numberToCalculation(t, Math.log(i[4].value));
		}
		if (2 === o.length) {
			const r = o[0];
			if (!r || !e.isTokenNode(r)) return -1;
			const i = r.value;
			if (!n.isTokenNumber(i)) return -1;
			const u = o[1];
			if (!u || !e.isTokenNode(u)) return -1;
			const a = u.value;
			if (!n.isTokenNumber(a)) return -1;
			return numberToCalculation(t, Math.log(i[4].value) / Math.log(a[4].value));
		}
		return -1;
	}
	var g = /^none$/i;
	function isNone(t) {
		if (Array.isArray(t)) {
			const n = t.filter(((n) => !(e.isWhitespaceNode(n) && e.isCommentNode(n))));
			return 1 === n.length && isNone(n[0]);
		}
		if (!e.isTokenNode(t)) return !1;
		const o = t.value;
		return !!n.isTokenIdent(o) && g.test(o[4].value);
	}
	var D = String.fromCodePoint(0);
	function solveRandom(e, t, o, r, i, u) {
		if (-1 === t.fixed && !u.randomCaching) return -1;
		u.randomCaching || (u.randomCaching = {
			propertyName: "",
			propertyN: 0,
			elementID: "",
			documentID: ""
		}), u.randomCaching && !u.randomCaching.propertyN && (u.randomCaching.propertyN = 0);
		const a = o.value;
		if (!n.isTokenNumeric(a)) return -1;
		const s = convertUnit(a, r.value);
		if (!twoOfSameNumeric(a, s)) return -1;
		let l = null;
		if (i && (l = convertUnit(a, i.value), !twoOfSameNumeric(a, l))) return -1;
		if (!Number.isFinite(a[4].value)) return resultToCalculation(e, a, NaN);
		if (!Number.isFinite(s[4].value)) return resultToCalculation(e, a, NaN);
		if (!Number.isFinite(s[4].value - a[4].value)) return resultToCalculation(e, a, NaN);
		if (l && !Number.isFinite(l[4].value)) return resultToCalculation(e, a, a[4].value);
		const c = -1 === t.fixed ? sfc32(crc32([
			t.dashedIdent ? t.dashedIdent : `${u.randomCaching?.propertyName} ${u.randomCaching.propertyN++}`,
			t.elementShared ? "" : u.randomCaching.elementID,
			u.randomCaching.documentID
		].join(D))) : () => t.fixed;
		let m = a[4].value, v = s[4].value;
		if (m > v && ([m, v] = [v, m]), l && (l[4].value <= 0 || Math.abs(m - v) / l[4].value > 1e10) && (l = null), l) {
			const n = Math.max(l[4].value / 1e3, 1e-9), t = [m];
			let o = 0;
			for (;;) {
				o += l[4].value;
				const e = m + o;
				if (!(e + n < v)) {
					t.push(v);
					break;
				}
				if (t.push(e), e + l[4].value - n > v) break;
			}
			const r = c();
			return resultToCalculation(e, a, Number(t[Math.floor(t.length * r)].toFixed(5)));
		}
		const T = c();
		return resultToCalculation(e, a, Number((T * (v - m) + m).toFixed(5)));
	}
	function sfc32(e = .34944106645296036, n = .19228640875738723, t = .8784393832007205, o = .04850964319275053) {
		return () => {
			const r = ((e |= 0) + (n |= 0) | 0) + (o |= 0) | 0;
			return o = o + 1 | 0, e = n ^ n >>> 9, n = (t |= 0) + (t << 3) | 0, t = (t = t << 21 | t >>> 11) + r | 0, (r >>> 0) / 4294967296;
		};
	}
	function crc32(e) {
		let n = 0, t = 0, o = 0;
		n ^= -1;
		for (let r = 0, i = e.length; r < i; r++) o = 255 & (n ^ e.charCodeAt(r)), t = Number("0x" + "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substring(9 * o, 9 * o + 8)), n = n >>> 8 ^ t;
		return (-1 ^ n) >>> 0;
	}
	var b = /* @__PURE__ */ new Map([
		["abs", function abs(e, n, t) {
			return singleNodeSolver(e, n, t, solveAbs);
		}],
		["acos", function acos(e, n, t) {
			return singleNodeSolver(e, n, t, solveACos);
		}],
		["asin", function asin(e, n, t) {
			return singleNodeSolver(e, n, t, solveASin);
		}],
		["atan", function atan(e, n, t) {
			return singleNodeSolver(e, n, t, solveATan);
		}],
		["atan2", function atan2(e, n, t) {
			return twoCommaSeparatedNodesSolver(e, n, t, solveATan2);
		}],
		["calc", calc$1],
		["clamp", function clamp(t, o, r) {
			const i = resolveGlobalsAndConstants([...t.value.filter(((n) => !e.isWhiteSpaceOrCommentNode(n)))], o), u = [], a = [], s = [];
			{
				let t = u;
				for (let o = 0; o < i.length; o++) {
					const r = i[o];
					if (e.isTokenNode(r) && n.isTokenComma(r.value)) {
						if (t === s) return -1;
						if (t === a) {
							t = s;
							continue;
						}
						if (t === u) {
							t = a;
							continue;
						}
						return -1;
					}
					t.push(r);
				}
			}
			const l = isNone(u), c = isNone(s);
			if (l && c) return calc$1(calcWrapper(a), o, r);
			const m = solve(calc$1(calcWrapper(a), o, r));
			if (-1 === m) return -1;
			if (l) {
				const t = solve(calc$1(calcWrapper(s), o, r));
				return -1 === t ? -1 : solveMin((v = m, T = t, new e.FunctionNode([
					n.TokenType.Function,
					"min(",
					-1,
					-1,
					{ value: "min" }
				], [
					n.TokenType.CloseParen,
					")",
					-1,
					-1,
					void 0
				], [
					v,
					new e.TokenNode([
						n.TokenType.Comma,
						",",
						-1,
						-1,
						void 0
					]),
					T
				])), [m, t], r);
			}
			if (c) {
				const e = solve(calc$1(calcWrapper(u), o, r));
				return -1 === e ? -1 : solveMax(maxWrapper(e, m), [e, m], r);
			}
			var v, T;
			const p = solve(calc$1(calcWrapper(u), o, r));
			if (-1 === p) return -1;
			const N = solve(calc$1(calcWrapper(s), o, r));
			if (-1 === N) return -1;
			return solveClamp(t, p, m, N, r);
		}],
		["cos", function cos(e, n, t) {
			return singleNodeSolver(e, n, t, solveCos);
		}],
		["exp", function exp(e, n, t) {
			return singleNodeSolver(e, n, t, solveExp);
		}],
		["hypot", function hypot(e, n, t) {
			return variadicNodesSolver(e, e.value, n, t, solveHypot);
		}],
		["log", function log(e, n, t) {
			return variadicNodesSolver(e, e.value, n, t, solveLog);
		}],
		["max", function max(e, n, t) {
			return variadicNodesSolver(e, e.value, n, t, solveMax);
		}],
		["min", function min(e, n, t) {
			return variadicNodesSolver(e, e.value, n, t, solveMin);
		}],
		["mod", function mod(e, n, t) {
			return twoCommaSeparatedNodesSolver(e, n, t, solveMod);
		}],
		["pow", function pow(e, n, t) {
			return twoCommaSeparatedNodesSolver(e, n, t, solvePow);
		}],
		["random", function random(n, t, o) {
			const r = parseRandomValueSharing(n.value.filter(((n) => !e.isWhiteSpaceOrCommentNode(n))), t, o);
			if (-1 === r) return -1;
			const [i, u] = r, a = variadicArguments(u, t, o);
			if (-1 === a) return -1;
			const [s, l, c] = a;
			if (!s || !l) return -1;
			return solveRandom(n, i, s, l, c, o);
		}],
		["rem", function rem(e, n, t) {
			return twoCommaSeparatedNodesSolver(e, n, t, solveRem);
		}],
		["round", function round(t, o, r) {
			const i = resolveGlobalsAndConstants([...t.value.filter(((n) => !e.isWhiteSpaceOrCommentNode(n)))], o);
			let u = "", a = !1;
			const s = [], l = [];
			{
				let t = s;
				for (let o = 0; o < i.length; o++) {
					const r = i[o];
					if (!u && 0 === s.length && 0 === l.length && e.isTokenNode(r) && n.isTokenIdent(r.value)) {
						const e = r.value[4].value.toLowerCase();
						if (y.has(e)) {
							u = e;
							continue;
						}
					}
					if (e.isTokenNode(r) && n.isTokenComma(r.value)) {
						if (t === l) return -1;
						if (t === s && u && 0 === s.length) continue;
						if (t === s) {
							a = !0, t = l;
							continue;
						}
						return -1;
					}
					t.push(r);
				}
			}
			const c = solve(calc$1(calcWrapper(s), o, r));
			if (-1 === c) return -1;
			a || 0 !== l.length || l.push(new e.TokenNode([
				n.TokenType.Number,
				"1",
				-1,
				-1,
				{
					value: 1,
					type: n.NumberType.Integer
				}
			]));
			const m = solve(calc$1(calcWrapper(l), o, r));
			if (-1 === m) return -1;
			u || (u = "nearest");
			return solveRound(t, u, c, m, r);
		}],
		["sign", function sign(e, n, t) {
			return singleNodeSolver(e, n, t, solveSign);
		}],
		["sin", function sin(e, n, t) {
			return singleNodeSolver(e, n, t, solveSin);
		}],
		["sqrt", function sqrt(e, n, t) {
			return singleNodeSolver(e, n, t, solveSqrt);
		}],
		["tan", function tan(e, n, t) {
			return singleNodeSolver(e, n, t, solveTan);
		}]
	]);
	function calc$1(t, o, r) {
		const i = resolveGlobalsAndConstants([...t.value.filter(((n) => !e.isWhiteSpaceOrCommentNode(n)))], o);
		if (1 === i.length && e.isTokenNode(i[0])) return {
			inputs: [i[0]],
			operation: unary
		};
		let u = 0;
		for (; u < i.length;) {
			const t = i[u];
			if (e.isSimpleBlockNode(t) && n.isTokenOpenParen(t.startToken)) {
				const e = calc$1(t, o, r);
				if (-1 === e) return -1;
				i.splice(u, 1, e);
			} else if (e.isFunctionNode(t)) {
				const e = b.get(t.getName().toLowerCase());
				if (!e) return -1;
				const n = e(t, o, r);
				if (-1 === n) return -1;
				i.splice(u, 1, n);
			} else u++;
		}
		if (u = 0, 1 === i.length && isCalculation(i[0])) return i[0];
		for (; u < i.length;) {
			const t = i[u];
			if (!t || !e.isTokenNode(t) && !isCalculation(t)) {
				u++;
				continue;
			}
			const o = i[u + 1];
			if (!o || !e.isTokenNode(o)) {
				u++;
				continue;
			}
			const r = o.value;
			if (!n.isTokenDelim(r) || "*" !== r[4].value && "/" !== r[4].value) {
				u++;
				continue;
			}
			const a = i[u + 2];
			if (!a || !e.isTokenNode(a) && !isCalculation(a)) return -1;
			"*" !== r[4].value ? "/" !== r[4].value ? u++ : i.splice(u, 3, {
				inputs: [t, a],
				operation: division
			}) : i.splice(u, 3, {
				inputs: [t, a],
				operation: multiplication
			});
		}
		if (u = 0, 1 === i.length && isCalculation(i[0])) return i[0];
		for (; u < i.length;) {
			const t = i[u];
			if (!t || !e.isTokenNode(t) && !isCalculation(t)) {
				u++;
				continue;
			}
			const o = i[u + 1];
			if (!o || !e.isTokenNode(o)) {
				u++;
				continue;
			}
			const r = o.value;
			if (!n.isTokenDelim(r) || "+" !== r[4].value && "-" !== r[4].value) {
				u++;
				continue;
			}
			const a = i[u + 2];
			if (!a || !e.isTokenNode(a) && !isCalculation(a)) return -1;
			"+" !== r[4].value ? "-" !== r[4].value ? u++ : i.splice(u, 3, {
				inputs: [t, a],
				operation: subtraction
			}) : i.splice(u, 3, {
				inputs: [t, a],
				operation: addition
			});
		}
		return 1 === i.length && isCalculation(i[0]) ? i[0] : -1;
	}
	function singleNodeSolver(e, n, t, o) {
		const r = singleArgument(e.value, n, t);
		return -1 === r ? -1 : o(e, r, t);
	}
	function singleArgument(n, t, o) {
		const r = solve(calc$1(calcWrapper(resolveGlobalsAndConstants([...n.filter(((n) => !e.isWhiteSpaceOrCommentNode(n)))], t)), t, o));
		return -1 === r ? -1 : r;
	}
	function twoCommaSeparatedNodesSolver(e, n, t, o) {
		const r = twoCommaSeparatedArguments(e.value, n, t);
		if (-1 === r) return -1;
		const [i, u] = r;
		return o(e, i, u, t);
	}
	function twoCommaSeparatedArguments(t, o, r) {
		const i = resolveGlobalsAndConstants([...t.filter(((n) => !e.isWhiteSpaceOrCommentNode(n)))], o), u = [], a = [];
		{
			let t = u;
			for (let o = 0; o < i.length; o++) {
				const r = i[o];
				if (e.isTokenNode(r) && n.isTokenComma(r.value)) {
					if (t === a) return -1;
					if (t === u) {
						t = a;
						continue;
					}
					return -1;
				}
				t.push(r);
			}
		}
		const s = solve(calc$1(calcWrapper(u), o, r));
		if (-1 === s) return -1;
		const l = solve(calc$1(calcWrapper(a), o, r));
		return -1 === l ? -1 : [s, l];
	}
	function variadicNodesSolver(e, n, t, o, r) {
		const i = variadicArguments(e.value, t, o);
		return -1 === i ? -1 : r(e, i, o);
	}
	function variadicArguments(t, o, r) {
		const i = resolveGlobalsAndConstants([...t.filter(((n) => !e.isWhiteSpaceOrCommentNode(n)))], o), u = [];
		{
			const t = [];
			let a = [];
			for (let o = 0; o < i.length; o++) {
				const r = i[o];
				e.isTokenNode(r) && n.isTokenComma(r.value) ? (t.push(a), a = []) : a.push(r);
			}
			t.push(a);
			for (let e = 0; e < t.length; e++) {
				if (0 === t[e].length) return -1;
				const n = solve(calc$1(calcWrapper(t[e]), o, r));
				if (-1 === n) return -1;
				u.push(n);
			}
		}
		return u;
	}
	var y = /* @__PURE__ */ new Set([
		"nearest",
		"up",
		"down",
		"to-zero"
	]);
	function parseRandomValueSharing(t, o, r) {
		const i = {
			isAuto: !1,
			dashedIdent: "",
			fixed: -1,
			elementShared: !1
		}, u = t[0];
		if (!e.isTokenNode(u) || !n.isTokenIdent(u.value)) return [i, t];
		for (let u = 0; u < t.length; u++) {
			const a = t[u];
			if (!e.isTokenNode(a)) return -1;
			if (n.isTokenComma(a.value)) return [i, t.slice(u + 1)];
			if (!n.isTokenIdent(a.value)) return -1;
			const s = a.value[4].value.toLowerCase();
			if ("element-shared" !== s) if ("fixed" !== s) if ("auto" !== s) {
				if (s.startsWith("--")) {
					if (-1 !== i.fixed || i.isAuto) return -1;
					i.dashedIdent = s;
				}
			} else {
				if (-1 !== i.fixed || i.dashedIdent) return -1;
				i.isAuto = !0;
			}
			else {
				if (i.elementShared || i.dashedIdent || i.isAuto) return -1;
				u++;
				const e = t[u];
				if (!e) return -1;
				const a = solve(calc$1(calcWrapper([e]), o, r));
				if (-1 === a) return -1;
				if (!n.isTokenNumber(a.value)) return -1;
				if (a.value[4].value < 0 || a.value[4].value > 1) return -1;
				i.fixed = Math.max(0, Math.min(a.value[4].value, 1 - 1e-9));
			}
			else {
				if (-1 !== i.fixed) return -1;
				i.elementShared = !0;
			}
		}
		return -1;
	}
	function calcWrapper(t) {
		return new e.FunctionNode([
			n.TokenType.Function,
			"calc(",
			-1,
			-1,
			{ value: "calc" }
		], [
			n.TokenType.CloseParen,
			")",
			-1,
			-1,
			void 0
		], t);
	}
	function maxWrapper(t, o) {
		return new e.FunctionNode([
			n.TokenType.Function,
			"max(",
			-1,
			-1,
			{ value: "max" }
		], [
			n.TokenType.CloseParen,
			")",
			-1,
			-1,
			void 0
		], [
			t,
			new e.TokenNode([
				n.TokenType.Comma,
				",",
				-1,
				-1,
				void 0
			]),
			o
		]);
	}
	function patchNaN(t) {
		if (-1 === t) return -1;
		if (e.isFunctionNode(t)) return t;
		const o = t.value;
		return n.isTokenNumeric(o) && Number.isNaN(o[4].value) ? n.isTokenNumber(o) ? new e.FunctionNode([
			n.TokenType.Function,
			"calc(",
			o[2],
			o[3],
			{ value: "calc" }
		], [
			n.TokenType.CloseParen,
			")",
			o[2],
			o[3],
			void 0
		], [new e.TokenNode([
			n.TokenType.Ident,
			"NaN",
			o[2],
			o[3],
			{ value: "NaN" }
		])]) : n.isTokenDimension(o) ? new e.FunctionNode([
			n.TokenType.Function,
			"calc(",
			o[2],
			o[3],
			{ value: "calc" }
		], [
			n.TokenType.CloseParen,
			")",
			o[2],
			o[3],
			void 0
		], [
			new e.TokenNode([
				n.TokenType.Ident,
				"NaN",
				o[2],
				o[3],
				{ value: "NaN" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Delim,
				"*",
				o[2],
				o[3],
				{ value: "*" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Dimension,
				"1" + o[4].unit,
				o[2],
				o[3],
				{
					value: 1,
					type: n.NumberType.Integer,
					unit: o[4].unit
				}
			])
		]) : n.isTokenPercentage(o) ? new e.FunctionNode([
			n.TokenType.Function,
			"calc(",
			o[2],
			o[3],
			{ value: "calc" }
		], [
			n.TokenType.CloseParen,
			")",
			o[2],
			o[3],
			void 0
		], [
			new e.TokenNode([
				n.TokenType.Ident,
				"NaN",
				o[2],
				o[3],
				{ value: "NaN" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Delim,
				"*",
				o[2],
				o[3],
				{ value: "*" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Percentage,
				"1%",
				o[2],
				o[3],
				{ value: 1 }
			])
		]) : -1 : t;
	}
	function patchInfinity(t) {
		if (-1 === t) return -1;
		if (e.isFunctionNode(t)) return t;
		const o = t.value;
		if (!n.isTokenNumeric(o)) return t;
		if (Number.isFinite(o[4].value) || Number.isNaN(o[4].value)) return t;
		let r = "";
		return Number.NEGATIVE_INFINITY === o[4].value && (r = "-"), n.isTokenNumber(o) ? new e.FunctionNode([
			n.TokenType.Function,
			"calc(",
			o[2],
			o[3],
			{ value: "calc" }
		], [
			n.TokenType.CloseParen,
			")",
			o[2],
			o[3],
			void 0
		], [new e.TokenNode([
			n.TokenType.Ident,
			r + "infinity",
			o[2],
			o[3],
			{ value: r + "infinity" }
		])]) : n.isTokenDimension(o) ? new e.FunctionNode([
			n.TokenType.Function,
			"calc(",
			o[2],
			o[3],
			{ value: "calc" }
		], [
			n.TokenType.CloseParen,
			")",
			o[2],
			o[3],
			void 0
		], [
			new e.TokenNode([
				n.TokenType.Ident,
				r + "infinity",
				o[2],
				o[3],
				{ value: r + "infinity" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Delim,
				"*",
				o[2],
				o[3],
				{ value: "*" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Dimension,
				"1" + o[4].unit,
				o[2],
				o[3],
				{
					value: 1,
					type: n.NumberType.Integer,
					unit: o[4].unit
				}
			])
		]) : new e.FunctionNode([
			n.TokenType.Function,
			"calc(",
			o[2],
			o[3],
			{ value: "calc" }
		], [
			n.TokenType.CloseParen,
			")",
			o[2],
			o[3],
			void 0
		], [
			new e.TokenNode([
				n.TokenType.Ident,
				r + "infinity",
				o[2],
				o[3],
				{ value: r + "infinity" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Delim,
				"*",
				o[2],
				o[3],
				{ value: "*" }
			]),
			new e.WhitespaceNode([[
				n.TokenType.Whitespace,
				" ",
				o[2],
				o[3],
				void 0
			]]),
			new e.TokenNode([
				n.TokenType.Percentage,
				"1%",
				o[2],
				o[3],
				{ value: 1 }
			])
		]);
	}
	function patchMinusZero(t) {
		if (-1 === t) return -1;
		if (e.isFunctionNode(t)) return t;
		const o = t.value;
		return n.isTokenNumeric(o) && Object.is(-0, o[4].value) ? ("-0" === o[1] || (n.isTokenPercentage(o) ? o[1] = "-0%" : n.isTokenDimension(o) ? o[1] = "-0" + o[4].unit : o[1] = "-0"), t) : t;
	}
	function patchPrecision(t, o = 13) {
		if (-1 === t) return -1;
		if (o <= 0) return t;
		if (e.isFunctionNode(t)) return t;
		const r = t.value;
		if (!n.isTokenNumeric(r)) return t;
		if (Number.isInteger(r[4].value)) return t;
		const i = Number(r[4].value.toFixed(o)).toString();
		return n.isTokenNumber(r) ? r[1] = i : n.isTokenPercentage(r) ? r[1] = i + "%" : n.isTokenDimension(r) && (r[1] = i + r[4].unit), t;
	}
	function patchCanonicalUnit(t) {
		return -1 === t ? -1 : e.isFunctionNode(t) ? t : n.isTokenDimension(t.value) ? (t.value = toCanonicalUnit(t.value), t) : t;
	}
	function patchCalcResult(e, n) {
		let t = e;
		return n?.toCanonicalUnits && (t = patchCanonicalUnit(t)), t = patchPrecision(t, n?.precision), t = patchMinusZero(t), n?.censorIntoStandardRepresentableValues || (t = patchNaN(t), t = patchInfinity(t)), t;
	}
	function tokenizeGlobals(e) {
		const t = /* @__PURE__ */ new Map();
		if (!e) return t;
		for (const [o, r] of e) if (n.isToken(r)) t.set(o, r);
		else if ("string" != typeof r);
		else {
			const e = n.tokenizer({ css: r }), i = e.nextToken();
			if (e.nextToken(), !e.endOfFile()) continue;
			if (!n.isTokenNumeric(i)) continue;
			t.set(o, i);
		}
		return t;
	}
	function calcFromComponentValues(n, t) {
		const o = tokenizeGlobals(t?.globals);
		return e.replaceComponentValues(n, ((n) => {
			if (!e.isFunctionNode(n)) return;
			const r = b.get(n.getName().toLowerCase());
			if (!r) return;
			const i = patchCalcResult(solve(r(n, o, t ?? {})), t);
			return -1 !== i ? i : void 0;
		}));
	}
	var h = new Set(b.keys());
	exports.calc = function calc(t, o) {
		return calcFromComponentValues(e.parseCommaSeparatedListOfComponentValues(n.tokenize({ css: t }), {}), o).map(((e) => e.map(((e) => n.stringify(...e.tokens()))).join(""))).join(",");
	}, exports.calcFromComponentValues = calcFromComponentValues, exports.mathFunctionNames = h;
}));
//#endregion
//#region node_modules/@asamuzakjp/css-color/node_modules/lru-cache/dist/commonjs/index.js
var require_commonjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* @module LRUCache
	*/
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LRUCache = void 0;
	var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
	var warned = /* @__PURE__ */ new Set();
	/* c8 ignore start */
	var PROCESS = typeof process === "object" && !!process ? process : {};
	/* c8 ignore start */
	var emitWarning = (msg, type, code, fn) => {
		typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
	};
	var AC = globalThis.AbortController;
	var AS = globalThis.AbortSignal;
	/* c8 ignore start */
	if (typeof AC === "undefined") {
		AS = class AbortSignal {
			onabort;
			_onabort = [];
			reason;
			aborted = false;
			addEventListener(_, fn) {
				this._onabort.push(fn);
			}
		};
		AC = class AbortController {
			constructor() {
				warnACPolyfill();
			}
			signal = new AS();
			abort(reason) {
				if (this.signal.aborted) return;
				this.signal.reason = reason;
				this.signal.aborted = true;
				for (const fn of this.signal._onabort) fn(reason);
				this.signal.onabort?.(reason);
			}
		};
		let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
		const warnACPolyfill = () => {
			if (!printACPolyfillWarning) return;
			printACPolyfillWarning = false;
			emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
		};
	}
	/* c8 ignore stop */
	var shouldWarn = (code) => !warned.has(code);
	var isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
	/* c8 ignore start */
	var getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
	/* c8 ignore stop */
	var ZeroArray = class extends Array {
		constructor(size) {
			super(size);
			this.fill(0);
		}
	};
	var Stack = class Stack {
		heap;
		length;
		static #constructing = false;
		static create(max) {
			const HeapCls = getUintArray(max);
			if (!HeapCls) return [];
			Stack.#constructing = true;
			const s = new Stack(max, HeapCls);
			Stack.#constructing = false;
			return s;
		}
		constructor(max, HeapCls) {
			/* c8 ignore start */
			if (!Stack.#constructing) throw new TypeError("instantiate Stack using Stack.create(n)");
			/* c8 ignore stop */
			this.heap = new HeapCls(max);
			this.length = 0;
		}
		push(n) {
			this.heap[this.length++] = n;
		}
		pop() {
			return this.heap[--this.length];
		}
	};
	exports.LRUCache = class LRUCache {
		#max;
		#maxSize;
		#dispose;
		#disposeAfter;
		#fetchMethod;
		#memoMethod;
		/**
		* {@link LRUCache.OptionsBase.ttl}
		*/
		ttl;
		/**
		* {@link LRUCache.OptionsBase.ttlResolution}
		*/
		ttlResolution;
		/**
		* {@link LRUCache.OptionsBase.ttlAutopurge}
		*/
		ttlAutopurge;
		/**
		* {@link LRUCache.OptionsBase.updateAgeOnGet}
		*/
		updateAgeOnGet;
		/**
		* {@link LRUCache.OptionsBase.updateAgeOnHas}
		*/
		updateAgeOnHas;
		/**
		* {@link LRUCache.OptionsBase.allowStale}
		*/
		allowStale;
		/**
		* {@link LRUCache.OptionsBase.noDisposeOnSet}
		*/
		noDisposeOnSet;
		/**
		* {@link LRUCache.OptionsBase.noUpdateTTL}
		*/
		noUpdateTTL;
		/**
		* {@link LRUCache.OptionsBase.maxEntrySize}
		*/
		maxEntrySize;
		/**
		* {@link LRUCache.OptionsBase.sizeCalculation}
		*/
		sizeCalculation;
		/**
		* {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
		*/
		noDeleteOnFetchRejection;
		/**
		* {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
		*/
		noDeleteOnStaleGet;
		/**
		* {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
		*/
		allowStaleOnFetchAbort;
		/**
		* {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
		*/
		allowStaleOnFetchRejection;
		/**
		* {@link LRUCache.OptionsBase.ignoreFetchAbort}
		*/
		ignoreFetchAbort;
		#size;
		#calculatedSize;
		#keyMap;
		#keyList;
		#valList;
		#next;
		#prev;
		#head;
		#tail;
		#free;
		#disposed;
		#sizes;
		#starts;
		#ttls;
		#hasDispose;
		#hasFetchMethod;
		#hasDisposeAfter;
		/**
		* Do not call this method unless you need to inspect the
		* inner workings of the cache.  If anything returned by this
		* object is modified in any way, strange breakage may occur.
		*
		* These fields are private for a reason!
		*
		* @internal
		*/
		static unsafeExposeInternals(c) {
			return {
				starts: c.#starts,
				ttls: c.#ttls,
				sizes: c.#sizes,
				keyMap: c.#keyMap,
				keyList: c.#keyList,
				valList: c.#valList,
				next: c.#next,
				prev: c.#prev,
				get head() {
					return c.#head;
				},
				get tail() {
					return c.#tail;
				},
				free: c.#free,
				isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
				backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
				moveToTail: (index) => c.#moveToTail(index),
				indexes: (options) => c.#indexes(options),
				rindexes: (options) => c.#rindexes(options),
				isStale: (index) => c.#isStale(index)
			};
		}
		/**
		* {@link LRUCache.OptionsBase.max} (read-only)
		*/
		get max() {
			return this.#max;
		}
		/**
		* {@link LRUCache.OptionsBase.maxSize} (read-only)
		*/
		get maxSize() {
			return this.#maxSize;
		}
		/**
		* The total computed size of items in the cache (read-only)
		*/
		get calculatedSize() {
			return this.#calculatedSize;
		}
		/**
		* The number of items stored in the cache (read-only)
		*/
		get size() {
			return this.#size;
		}
		/**
		* {@link LRUCache.OptionsBase.fetchMethod} (read-only)
		*/
		get fetchMethod() {
			return this.#fetchMethod;
		}
		get memoMethod() {
			return this.#memoMethod;
		}
		/**
		* {@link LRUCache.OptionsBase.dispose} (read-only)
		*/
		get dispose() {
			return this.#dispose;
		}
		/**
		* {@link LRUCache.OptionsBase.disposeAfter} (read-only)
		*/
		get disposeAfter() {
			return this.#disposeAfter;
		}
		constructor(options) {
			const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
			if (max !== 0 && !isPosInt(max)) throw new TypeError("max option must be a nonnegative integer");
			const UintArray = max ? getUintArray(max) : Array;
			if (!UintArray) throw new Error("invalid max value: " + max);
			this.#max = max;
			this.#maxSize = maxSize;
			this.maxEntrySize = maxEntrySize || this.#maxSize;
			this.sizeCalculation = sizeCalculation;
			if (this.sizeCalculation) {
				if (!this.#maxSize && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
				if (typeof this.sizeCalculation !== "function") throw new TypeError("sizeCalculation set to non-function");
			}
			if (memoMethod !== void 0 && typeof memoMethod !== "function") throw new TypeError("memoMethod must be a function if defined");
			this.#memoMethod = memoMethod;
			if (fetchMethod !== void 0 && typeof fetchMethod !== "function") throw new TypeError("fetchMethod must be a function if specified");
			this.#fetchMethod = fetchMethod;
			this.#hasFetchMethod = !!fetchMethod;
			this.#keyMap = /* @__PURE__ */ new Map();
			this.#keyList = new Array(max).fill(void 0);
			this.#valList = new Array(max).fill(void 0);
			this.#next = new UintArray(max);
			this.#prev = new UintArray(max);
			this.#head = 0;
			this.#tail = 0;
			this.#free = Stack.create(max);
			this.#size = 0;
			this.#calculatedSize = 0;
			if (typeof dispose === "function") this.#dispose = dispose;
			if (typeof disposeAfter === "function") {
				this.#disposeAfter = disposeAfter;
				this.#disposed = [];
			} else {
				this.#disposeAfter = void 0;
				this.#disposed = void 0;
			}
			this.#hasDispose = !!this.#dispose;
			this.#hasDisposeAfter = !!this.#disposeAfter;
			this.noDisposeOnSet = !!noDisposeOnSet;
			this.noUpdateTTL = !!noUpdateTTL;
			this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
			this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
			this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
			this.ignoreFetchAbort = !!ignoreFetchAbort;
			if (this.maxEntrySize !== 0) {
				if (this.#maxSize !== 0) {
					if (!isPosInt(this.#maxSize)) throw new TypeError("maxSize must be a positive integer if specified");
				}
				if (!isPosInt(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
				this.#initializeSizeTracking();
			}
			this.allowStale = !!allowStale;
			this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
			this.updateAgeOnGet = !!updateAgeOnGet;
			this.updateAgeOnHas = !!updateAgeOnHas;
			this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
			this.ttlAutopurge = !!ttlAutopurge;
			this.ttl = ttl || 0;
			if (this.ttl) {
				if (!isPosInt(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
				this.#initializeTTLTracking();
			}
			if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
			if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
				const code = "LRU_CACHE_UNBOUNDED";
				if (shouldWarn(code)) {
					warned.add(code);
					emitWarning("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", code, LRUCache);
				}
			}
		}
		/**
		* Return the number of ms left in the item's TTL. If item is not in cache,
		* returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
		*/
		getRemainingTTL(key) {
			return this.#keyMap.has(key) ? Infinity : 0;
		}
		#initializeTTLTracking() {
			const ttls = new ZeroArray(this.#max);
			const starts = new ZeroArray(this.#max);
			this.#ttls = ttls;
			this.#starts = starts;
			this.#setItemTTL = (index, ttl, start = perf.now()) => {
				starts[index] = ttl !== 0 ? start : 0;
				ttls[index] = ttl;
				if (ttl !== 0 && this.ttlAutopurge) {
					const t = setTimeout(() => {
						if (this.#isStale(index)) this.#delete(this.#keyList[index], "expire");
					}, ttl + 1);
					/* c8 ignore start */
					if (t.unref) t.unref();
				}
			};
			this.#updateItemAge = (index) => {
				starts[index] = ttls[index] !== 0 ? perf.now() : 0;
			};
			this.#statusTTL = (status, index) => {
				if (ttls[index]) {
					const ttl = ttls[index];
					const start = starts[index];
					/* c8 ignore next */
					if (!ttl || !start) return;
					status.ttl = ttl;
					status.start = start;
					status.now = cachedNow || getNow();
					status.remainingTTL = ttl - (status.now - start);
				}
			};
			let cachedNow = 0;
			const getNow = () => {
				const n = perf.now();
				if (this.ttlResolution > 0) {
					cachedNow = n;
					const t = setTimeout(() => cachedNow = 0, this.ttlResolution);
					/* c8 ignore start */
					if (t.unref) t.unref();
				}
				return n;
			};
			this.getRemainingTTL = (key) => {
				const index = this.#keyMap.get(key);
				if (index === void 0) return 0;
				const ttl = ttls[index];
				const start = starts[index];
				if (!ttl || !start) return Infinity;
				return ttl - ((cachedNow || getNow()) - start);
			};
			this.#isStale = (index) => {
				const s = starts[index];
				const t = ttls[index];
				return !!t && !!s && (cachedNow || getNow()) - s > t;
			};
		}
		#updateItemAge = () => {};
		#statusTTL = () => {};
		#setItemTTL = () => {};
		/* c8 ignore stop */
		#isStale = () => false;
		#initializeSizeTracking() {
			const sizes = new ZeroArray(this.#max);
			this.#calculatedSize = 0;
			this.#sizes = sizes;
			this.#removeItemSize = (index) => {
				this.#calculatedSize -= sizes[index];
				sizes[index] = 0;
			};
			this.#requireSize = (k, v, size, sizeCalculation) => {
				if (this.#isBackgroundFetch(v)) return 0;
				if (!isPosInt(size)) if (sizeCalculation) {
					if (typeof sizeCalculation !== "function") throw new TypeError("sizeCalculation must be a function");
					size = sizeCalculation(v, k);
					if (!isPosInt(size)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
				} else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
				return size;
			};
			this.#addItemSize = (index, size, status) => {
				sizes[index] = size;
				if (this.#maxSize) {
					const maxSize = this.#maxSize - sizes[index];
					while (this.#calculatedSize > maxSize) this.#evict(true);
				}
				this.#calculatedSize += sizes[index];
				if (status) {
					status.entrySize = size;
					status.totalCalculatedSize = this.#calculatedSize;
				}
			};
		}
		#removeItemSize = (_i) => {};
		#addItemSize = (_i, _s, _st) => {};
		#requireSize = (_k, _v, size, sizeCalculation) => {
			if (size || sizeCalculation) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
			return 0;
		};
		*#indexes({ allowStale = this.allowStale } = {}) {
			if (this.#size) for (let i = this.#tail;;) {
				if (!this.#isValidIndex(i)) break;
				if (allowStale || !this.#isStale(i)) yield i;
				if (i === this.#head) break;
				else i = this.#prev[i];
			}
		}
		*#rindexes({ allowStale = this.allowStale } = {}) {
			if (this.#size) for (let i = this.#head;;) {
				if (!this.#isValidIndex(i)) break;
				if (allowStale || !this.#isStale(i)) yield i;
				if (i === this.#tail) break;
				else i = this.#next[i];
			}
		}
		#isValidIndex(index) {
			return index !== void 0 && this.#keyMap.get(this.#keyList[index]) === index;
		}
		/**
		* Return a generator yielding `[key, value]` pairs,
		* in order from most recently used to least recently used.
		*/
		*entries() {
			for (const i of this.#indexes()) if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) yield [this.#keyList[i], this.#valList[i]];
		}
		/**
		* Inverse order version of {@link LRUCache.entries}
		*
		* Return a generator yielding `[key, value]` pairs,
		* in order from least recently used to most recently used.
		*/
		*rentries() {
			for (const i of this.#rindexes()) if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) yield [this.#keyList[i], this.#valList[i]];
		}
		/**
		* Return a generator yielding the keys in the cache,
		* in order from most recently used to least recently used.
		*/
		*keys() {
			for (const i of this.#indexes()) {
				const k = this.#keyList[i];
				if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) yield k;
			}
		}
		/**
		* Inverse order version of {@link LRUCache.keys}
		*
		* Return a generator yielding the keys in the cache,
		* in order from least recently used to most recently used.
		*/
		*rkeys() {
			for (const i of this.#rindexes()) {
				const k = this.#keyList[i];
				if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) yield k;
			}
		}
		/**
		* Return a generator yielding the values in the cache,
		* in order from most recently used to least recently used.
		*/
		*values() {
			for (const i of this.#indexes()) if (this.#valList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) yield this.#valList[i];
		}
		/**
		* Inverse order version of {@link LRUCache.values}
		*
		* Return a generator yielding the values in the cache,
		* in order from least recently used to most recently used.
		*/
		*rvalues() {
			for (const i of this.#rindexes()) if (this.#valList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) yield this.#valList[i];
		}
		/**
		* Iterating over the cache itself yields the same results as
		* {@link LRUCache.entries}
		*/
		[Symbol.iterator]() {
			return this.entries();
		}
		/**
		* A String value that is used in the creation of the default string
		* description of an object. Called by the built-in method
		* `Object.prototype.toString`.
		*/
		[Symbol.toStringTag] = "LRUCache";
		/**
		* Find a value for which the supplied fn method returns a truthy value,
		* similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
		*/
		find(fn, getOptions = {}) {
			for (const i of this.#indexes()) {
				const v = this.#valList[i];
				const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
				if (value === void 0) continue;
				if (fn(value, this.#keyList[i], this)) return this.get(this.#keyList[i], getOptions);
			}
		}
		/**
		* Call the supplied function on each item in the cache, in order from most
		* recently used to least recently used.
		*
		* `fn` is called as `fn(value, key, cache)`.
		*
		* If `thisp` is provided, function will be called in the `this`-context of
		* the provided object, or the cache if no `thisp` object is provided.
		*
		* Does not update age or recenty of use, or iterate over stale values.
		*/
		forEach(fn, thisp = this) {
			for (const i of this.#indexes()) {
				const v = this.#valList[i];
				const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
				if (value === void 0) continue;
				fn.call(thisp, value, this.#keyList[i], this);
			}
		}
		/**
		* The same as {@link LRUCache.forEach} but items are iterated over in
		* reverse order.  (ie, less recently used items are iterated over first.)
		*/
		rforEach(fn, thisp = this) {
			for (const i of this.#rindexes()) {
				const v = this.#valList[i];
				const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
				if (value === void 0) continue;
				fn.call(thisp, value, this.#keyList[i], this);
			}
		}
		/**
		* Delete any stale entries. Returns true if anything was removed,
		* false otherwise.
		*/
		purgeStale() {
			let deleted = false;
			for (const i of this.#rindexes({ allowStale: true })) if (this.#isStale(i)) {
				this.#delete(this.#keyList[i], "expire");
				deleted = true;
			}
			return deleted;
		}
		/**
		* Get the extended info about a given entry, to get its value, size, and
		* TTL info simultaneously. Returns `undefined` if the key is not present.
		*
		* Unlike {@link LRUCache#dump}, which is designed to be portable and survive
		* serialization, the `start` value is always the current timestamp, and the
		* `ttl` is a calculated remaining time to live (negative if expired).
		*
		* Always returns stale values, if their info is found in the cache, so be
		* sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
		* if relevant.
		*/
		info(key) {
			const i = this.#keyMap.get(key);
			if (i === void 0) return void 0;
			const v = this.#valList[i];
			const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
			if (value === void 0) return void 0;
			const entry = { value };
			if (this.#ttls && this.#starts) {
				const ttl = this.#ttls[i];
				const start = this.#starts[i];
				if (ttl && start) {
					entry.ttl = ttl - (perf.now() - start);
					entry.start = Date.now();
				}
			}
			if (this.#sizes) entry.size = this.#sizes[i];
			return entry;
		}
		/**
		* Return an array of [key, {@link LRUCache.Entry}] tuples which can be
		* passed to {@link LRLUCache#load}.
		*
		* The `start` fields are calculated relative to a portable `Date.now()`
		* timestamp, even if `performance.now()` is available.
		*
		* Stale entries are always included in the `dump`, even if
		* {@link LRUCache.OptionsBase.allowStale} is false.
		*
		* Note: this returns an actual array, not a generator, so it can be more
		* easily passed around.
		*/
		dump() {
			const arr = [];
			for (const i of this.#indexes({ allowStale: true })) {
				const key = this.#keyList[i];
				const v = this.#valList[i];
				const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
				if (value === void 0 || key === void 0) continue;
				const entry = { value };
				if (this.#ttls && this.#starts) {
					entry.ttl = this.#ttls[i];
					const age = perf.now() - this.#starts[i];
					entry.start = Math.floor(Date.now() - age);
				}
				if (this.#sizes) entry.size = this.#sizes[i];
				arr.unshift([key, entry]);
			}
			return arr;
		}
		/**
		* Reset the cache and load in the items in entries in the order listed.
		*
		* The shape of the resulting cache may be different if the same options are
		* not used in both caches.
		*
		* The `start` fields are assumed to be calculated relative to a portable
		* `Date.now()` timestamp, even if `performance.now()` is available.
		*/
		load(arr) {
			this.clear();
			for (const [key, entry] of arr) {
				if (entry.start) {
					const age = Date.now() - entry.start;
					entry.start = perf.now() - age;
				}
				this.set(key, entry.value, entry);
			}
		}
		/**
		* Add a value to the cache.
		*
		* Note: if `undefined` is specified as a value, this is an alias for
		* {@link LRUCache#delete}
		*
		* Fields on the {@link LRUCache.SetOptions} options param will override
		* their corresponding values in the constructor options for the scope
		* of this single `set()` operation.
		*
		* If `start` is provided, then that will set the effective start
		* time for the TTL calculation. Note that this must be a previous
		* value of `performance.now()` if supported, or a previous value of
		* `Date.now()` if not.
		*
		* Options object may also include `size`, which will prevent
		* calling the `sizeCalculation` function and just use the specified
		* number if it is a positive integer, and `noDisposeOnSet` which
		* will prevent calling a `dispose` function in the case of
		* overwrites.
		*
		* If the `size` (or return value of `sizeCalculation`) for a given
		* entry is greater than `maxEntrySize`, then the item will not be
		* added to the cache.
		*
		* Will update the recency of the entry.
		*
		* If the value is `undefined`, then this is an alias for
		* `cache.delete(key)`. `undefined` is never stored in the cache.
		*/
		set(k, v, setOptions = {}) {
			if (v === void 0) {
				this.delete(k);
				return this;
			}
			const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
			let { noUpdateTTL = this.noUpdateTTL } = setOptions;
			const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
			if (this.maxEntrySize && size > this.maxEntrySize) {
				if (status) {
					status.set = "miss";
					status.maxEntrySizeExceeded = true;
				}
				this.#delete(k, "set");
				return this;
			}
			let index = this.#size === 0 ? void 0 : this.#keyMap.get(k);
			if (index === void 0) {
				index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
				this.#keyList[index] = k;
				this.#valList[index] = v;
				this.#keyMap.set(k, index);
				this.#next[this.#tail] = index;
				this.#prev[index] = this.#tail;
				this.#tail = index;
				this.#size++;
				this.#addItemSize(index, size, status);
				if (status) status.set = "add";
				noUpdateTTL = false;
			} else {
				this.#moveToTail(index);
				const oldVal = this.#valList[index];
				if (v !== oldVal) {
					if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
						oldVal.__abortController.abort(/* @__PURE__ */ new Error("replaced"));
						const { __staleWhileFetching: s } = oldVal;
						if (s !== void 0 && !noDisposeOnSet) {
							if (this.#hasDispose) this.#dispose?.(s, k, "set");
							if (this.#hasDisposeAfter) this.#disposed?.push([
								s,
								k,
								"set"
							]);
						}
					} else if (!noDisposeOnSet) {
						if (this.#hasDispose) this.#dispose?.(oldVal, k, "set");
						if (this.#hasDisposeAfter) this.#disposed?.push([
							oldVal,
							k,
							"set"
						]);
					}
					this.#removeItemSize(index);
					this.#addItemSize(index, size, status);
					this.#valList[index] = v;
					if (status) {
						status.set = "replace";
						const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
						if (oldValue !== void 0) status.oldValue = oldValue;
					}
				} else if (status) status.set = "update";
			}
			if (ttl !== 0 && !this.#ttls) this.#initializeTTLTracking();
			if (this.#ttls) {
				if (!noUpdateTTL) this.#setItemTTL(index, ttl, start);
				if (status) this.#statusTTL(status, index);
			}
			if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
				const dt = this.#disposed;
				let task;
				while (task = dt?.shift()) this.#disposeAfter?.(...task);
			}
			return this;
		}
		/**
		* Evict the least recently used item, returning its value or
		* `undefined` if cache is empty.
		*/
		pop() {
			try {
				while (this.#size) {
					const val = this.#valList[this.#head];
					this.#evict(true);
					if (this.#isBackgroundFetch(val)) {
						if (val.__staleWhileFetching) return val.__staleWhileFetching;
					} else if (val !== void 0) return val;
				}
			} finally {
				if (this.#hasDisposeAfter && this.#disposed) {
					const dt = this.#disposed;
					let task;
					while (task = dt?.shift()) this.#disposeAfter?.(...task);
				}
			}
		}
		#evict(free) {
			const head = this.#head;
			const k = this.#keyList[head];
			const v = this.#valList[head];
			if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) v.__abortController.abort(/* @__PURE__ */ new Error("evicted"));
			else if (this.#hasDispose || this.#hasDisposeAfter) {
				if (this.#hasDispose) this.#dispose?.(v, k, "evict");
				if (this.#hasDisposeAfter) this.#disposed?.push([
					v,
					k,
					"evict"
				]);
			}
			this.#removeItemSize(head);
			if (free) {
				this.#keyList[head] = void 0;
				this.#valList[head] = void 0;
				this.#free.push(head);
			}
			if (this.#size === 1) {
				this.#head = this.#tail = 0;
				this.#free.length = 0;
			} else this.#head = this.#next[head];
			this.#keyMap.delete(k);
			this.#size--;
			return head;
		}
		/**
		* Check if a key is in the cache, without updating the recency of use.
		* Will return false if the item is stale, even though it is technically
		* in the cache.
		*
		* Check if a key is in the cache, without updating the recency of
		* use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
		* to `true` in either the options or the constructor.
		*
		* Will return `false` if the item is stale, even though it is technically in
		* the cache. The difference can be determined (if it matters) by using a
		* `status` argument, and inspecting the `has` field.
		*
		* Will not update item age unless
		* {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
		*/
		has(k, hasOptions = {}) {
			const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
			const index = this.#keyMap.get(k);
			if (index !== void 0) {
				const v = this.#valList[index];
				if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === void 0) return false;
				if (!this.#isStale(index)) {
					if (updateAgeOnHas) this.#updateItemAge(index);
					if (status) {
						status.has = "hit";
						this.#statusTTL(status, index);
					}
					return true;
				} else if (status) {
					status.has = "stale";
					this.#statusTTL(status, index);
				}
			} else if (status) status.has = "miss";
			return false;
		}
		/**
		* Like {@link LRUCache#get} but doesn't update recency or delete stale
		* items.
		*
		* Returns `undefined` if the item is stale, unless
		* {@link LRUCache.OptionsBase.allowStale} is set.
		*/
		peek(k, peekOptions = {}) {
			const { allowStale = this.allowStale } = peekOptions;
			const index = this.#keyMap.get(k);
			if (index === void 0 || !allowStale && this.#isStale(index)) return;
			const v = this.#valList[index];
			return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
		}
		#backgroundFetch(k, index, options, context) {
			const v = index === void 0 ? void 0 : this.#valList[index];
			if (this.#isBackgroundFetch(v)) return v;
			const ac = new AC();
			const { signal } = options;
			signal?.addEventListener("abort", () => ac.abort(signal.reason), { signal: ac.signal });
			const fetchOpts = {
				signal: ac.signal,
				options,
				context
			};
			const cb = (v, updateCache = false) => {
				const { aborted } = ac.signal;
				const ignoreAbort = options.ignoreFetchAbort && v !== void 0;
				if (options.status) if (aborted && !updateCache) {
					options.status.fetchAborted = true;
					options.status.fetchError = ac.signal.reason;
					if (ignoreAbort) options.status.fetchAbortIgnored = true;
				} else options.status.fetchResolved = true;
				if (aborted && !ignoreAbort && !updateCache) return fetchFail(ac.signal.reason);
				const bf = p;
				if (this.#valList[index] === p) if (v === void 0) if (bf.__staleWhileFetching) this.#valList[index] = bf.__staleWhileFetching;
				else this.#delete(k, "fetch");
				else {
					if (options.status) options.status.fetchUpdated = true;
					this.set(k, v, fetchOpts.options);
				}
				return v;
			};
			const eb = (er) => {
				if (options.status) {
					options.status.fetchRejected = true;
					options.status.fetchError = er;
				}
				return fetchFail(er);
			};
			const fetchFail = (er) => {
				const { aborted } = ac.signal;
				const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
				const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
				const noDelete = allowStale || options.noDeleteOnFetchRejection;
				const bf = p;
				if (this.#valList[index] === p) {
					if (!noDelete || bf.__staleWhileFetching === void 0) this.#delete(k, "fetch");
					else if (!allowStaleAborted) this.#valList[index] = bf.__staleWhileFetching;
				}
				if (allowStale) {
					if (options.status && bf.__staleWhileFetching !== void 0) options.status.returnedStale = true;
					return bf.__staleWhileFetching;
				} else if (bf.__returned === bf) throw er;
			};
			const pcall = (res, rej) => {
				const fmp = this.#fetchMethod?.(k, v, fetchOpts);
				if (fmp && fmp instanceof Promise) fmp.then((v) => res(v === void 0 ? void 0 : v), rej);
				ac.signal.addEventListener("abort", () => {
					if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
						res(void 0);
						if (options.allowStaleOnFetchAbort) res = (v) => cb(v, true);
					}
				});
			};
			if (options.status) options.status.fetchDispatched = true;
			const p = new Promise(pcall).then(cb, eb);
			const bf = Object.assign(p, {
				__abortController: ac,
				__staleWhileFetching: v,
				__returned: void 0
			});
			if (index === void 0) {
				this.set(k, bf, {
					...fetchOpts.options,
					status: void 0
				});
				index = this.#keyMap.get(k);
			} else this.#valList[index] = bf;
			return bf;
		}
		#isBackgroundFetch(p) {
			if (!this.#hasFetchMethod) return false;
			const b = p;
			return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
		}
		async fetch(k, fetchOptions = {}) {
			const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal } = fetchOptions;
			if (!this.#hasFetchMethod) {
				if (status) status.fetch = "get";
				return this.get(k, {
					allowStale,
					updateAgeOnGet,
					noDeleteOnStaleGet,
					status
				});
			}
			const options = {
				allowStale,
				updateAgeOnGet,
				noDeleteOnStaleGet,
				ttl,
				noDisposeOnSet,
				size,
				sizeCalculation,
				noUpdateTTL,
				noDeleteOnFetchRejection,
				allowStaleOnFetchRejection,
				allowStaleOnFetchAbort,
				ignoreFetchAbort,
				status,
				signal
			};
			let index = this.#keyMap.get(k);
			if (index === void 0) {
				if (status) status.fetch = "miss";
				const p = this.#backgroundFetch(k, index, options, context);
				return p.__returned = p;
			} else {
				const v = this.#valList[index];
				if (this.#isBackgroundFetch(v)) {
					const stale = allowStale && v.__staleWhileFetching !== void 0;
					if (status) {
						status.fetch = "inflight";
						if (stale) status.returnedStale = true;
					}
					return stale ? v.__staleWhileFetching : v.__returned = v;
				}
				const isStale = this.#isStale(index);
				if (!forceRefresh && !isStale) {
					if (status) status.fetch = "hit";
					this.#moveToTail(index);
					if (updateAgeOnGet) this.#updateItemAge(index);
					if (status) this.#statusTTL(status, index);
					return v;
				}
				const p = this.#backgroundFetch(k, index, options, context);
				const staleVal = p.__staleWhileFetching !== void 0 && allowStale;
				if (status) {
					status.fetch = isStale ? "stale" : "refresh";
					if (staleVal && isStale) status.returnedStale = true;
				}
				return staleVal ? p.__staleWhileFetching : p.__returned = p;
			}
		}
		async forceFetch(k, fetchOptions = {}) {
			const v = await this.fetch(k, fetchOptions);
			if (v === void 0) throw new Error("fetch() returned undefined");
			return v;
		}
		memo(k, memoOptions = {}) {
			const memoMethod = this.#memoMethod;
			if (!memoMethod) throw new Error("no memoMethod provided to constructor");
			const { context, forceRefresh, ...options } = memoOptions;
			const v = this.get(k, options);
			if (!forceRefresh && v !== void 0) return v;
			const vv = memoMethod(k, v, {
				options,
				context
			});
			this.set(k, vv, options);
			return vv;
		}
		/**
		* Return a value from the cache. Will update the recency of the cache
		* entry found.
		*
		* If the key is not found, get() will return `undefined`.
		*/
		get(k, getOptions = {}) {
			const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
			const index = this.#keyMap.get(k);
			if (index !== void 0) {
				const value = this.#valList[index];
				const fetching = this.#isBackgroundFetch(value);
				if (status) this.#statusTTL(status, index);
				if (this.#isStale(index)) {
					if (status) status.get = "stale";
					if (!fetching) {
						if (!noDeleteOnStaleGet) this.#delete(k, "expire");
						if (status && allowStale) status.returnedStale = true;
						return allowStale ? value : void 0;
					} else {
						if (status && allowStale && value.__staleWhileFetching !== void 0) status.returnedStale = true;
						return allowStale ? value.__staleWhileFetching : void 0;
					}
				} else {
					if (status) status.get = "hit";
					if (fetching) return value.__staleWhileFetching;
					this.#moveToTail(index);
					if (updateAgeOnGet) this.#updateItemAge(index);
					return value;
				}
			} else if (status) status.get = "miss";
		}
		#connect(p, n) {
			this.#prev[n] = p;
			this.#next[p] = n;
		}
		#moveToTail(index) {
			if (index !== this.#tail) {
				if (index === this.#head) this.#head = this.#next[index];
				else this.#connect(this.#prev[index], this.#next[index]);
				this.#connect(this.#tail, index);
				this.#tail = index;
			}
		}
		/**
		* Deletes a key out of the cache.
		*
		* Returns true if the key was deleted, false otherwise.
		*/
		delete(k) {
			return this.#delete(k, "delete");
		}
		#delete(k, reason) {
			let deleted = false;
			if (this.#size !== 0) {
				const index = this.#keyMap.get(k);
				if (index !== void 0) {
					deleted = true;
					if (this.#size === 1) this.#clear(reason);
					else {
						this.#removeItemSize(index);
						const v = this.#valList[index];
						if (this.#isBackgroundFetch(v)) v.__abortController.abort(/* @__PURE__ */ new Error("deleted"));
						else if (this.#hasDispose || this.#hasDisposeAfter) {
							if (this.#hasDispose) this.#dispose?.(v, k, reason);
							if (this.#hasDisposeAfter) this.#disposed?.push([
								v,
								k,
								reason
							]);
						}
						this.#keyMap.delete(k);
						this.#keyList[index] = void 0;
						this.#valList[index] = void 0;
						if (index === this.#tail) this.#tail = this.#prev[index];
						else if (index === this.#head) this.#head = this.#next[index];
						else {
							const pi = this.#prev[index];
							this.#next[pi] = this.#next[index];
							const ni = this.#next[index];
							this.#prev[ni] = this.#prev[index];
						}
						this.#size--;
						this.#free.push(index);
					}
				}
			}
			if (this.#hasDisposeAfter && this.#disposed?.length) {
				const dt = this.#disposed;
				let task;
				while (task = dt?.shift()) this.#disposeAfter?.(...task);
			}
			return deleted;
		}
		/**
		* Clear the cache entirely, throwing away all values.
		*/
		clear() {
			return this.#clear("delete");
		}
		#clear(reason) {
			for (const index of this.#rindexes({ allowStale: true })) {
				const v = this.#valList[index];
				if (this.#isBackgroundFetch(v)) v.__abortController.abort(/* @__PURE__ */ new Error("deleted"));
				else {
					const k = this.#keyList[index];
					if (this.#hasDispose) this.#dispose?.(v, k, reason);
					if (this.#hasDisposeAfter) this.#disposed?.push([
						v,
						k,
						reason
					]);
				}
			}
			this.#keyMap.clear();
			this.#valList.fill(void 0);
			this.#keyList.fill(void 0);
			if (this.#ttls && this.#starts) {
				this.#ttls.fill(0);
				this.#starts.fill(0);
			}
			if (this.#sizes) this.#sizes.fill(0);
			this.#head = 0;
			this.#tail = 0;
			this.#free.length = 0;
			this.#calculatedSize = 0;
			this.#size = 0;
			if (this.#hasDisposeAfter && this.#disposed) {
				const dt = this.#disposed;
				let task;
				while (task = dt?.shift()) this.#disposeAfter?.(...task);
			}
		}
	};
}));
//#endregion
//#region node_modules/@csstools/color-helpers/dist/index.cjs
var require_dist$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	function multiplyMatrices(t, _) {
		return [
			t[0] * _[0] + t[1] * _[1] + t[2] * _[2],
			t[3] * _[0] + t[4] * _[1] + t[5] * _[2],
			t[6] * _[0] + t[7] * _[1] + t[8] * _[2]
		];
	}
	var t = [
		.955473421488075,
		-.02309845494876471,
		.06325924320057072,
		-.0283697093338637,
		1.0099953980813041,
		.021041441191917323,
		.012314014864481998,
		-.020507649298898964,
		1.330365926242124
	];
	/**
	* Bradford chromatic adaptation from D50 to D65
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function D50_to_D65(_) {
		return multiplyMatrices(t, _);
	}
	var _ = [
		1.0479297925449969,
		.022946870601609652,
		-.05019226628920524,
		.02962780877005599,
		.9904344267538799,
		-.017073799063418826,
		-.009243040646204504,
		.015055191490298152,
		.7518742814281371
	];
	/**
	* Bradford chromatic adaptation from D65 to D50
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html
	*/ function D65_to_D50(t) {
		return multiplyMatrices(_, t);
	}
	/**
	* @param {number} hue - Hue as degrees 0..360
	* @param {number} sat - Saturation as percentage 0..100
	* @param {number} light - Lightness as percentage 0..100
	* @return {number[]} Array of sRGB components; in-gamut colors in range [0..1]
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hslToRgb.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hslToRgb.js
	*/ function HSL_to_sRGB(t) {
		let _ = t[0] % 360;
		const n = t[1] / 100, o = t[2] / 100;
		return _ < 0 && (_ += 360), [
			HSL_to_sRGB_channel(0, _, n, o),
			HSL_to_sRGB_channel(8, _, n, o),
			HSL_to_sRGB_channel(4, _, n, o)
		];
	}
	function HSL_to_sRGB_channel(t, _, n, o) {
		const e = (t + _ / 30) % 12;
		return o - n * Math.min(o, 1 - o) * Math.max(-1, Math.min(e - 3, 9 - e, 1));
	}
	/**
	* @param {number} hue -  Hue as degrees 0..360
	* @param {number} white -  Whiteness as percentage 0..100
	* @param {number} black -  Blackness as percentage 0..100
	* @return {number[]} Array of RGB components 0..1
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hwbToRgb.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hwbToRgb.js
	*/ function HWB_to_sRGB(t) {
		const _ = t[0], n = t[1] / 100, o = t[2] / 100;
		if (n + o >= 1) {
			const t = n / (n + o);
			return [
				t,
				t,
				t
			];
		}
		const e = HSL_to_sRGB([
			_,
			100,
			50
		]), r = 1 - n - o;
		return [
			e[0] * r + n,
			e[1] * r + n,
			e[2] * r + n
		];
	}
	/**
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function LCH_to_Lab(t) {
		const _ = t[2] * Math.PI / 180;
		return [
			t[0],
			t[1] * Math.cos(_),
			t[1] * Math.sin(_)
		];
	}
	/**
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function Lab_to_LCH(t) {
		const _ = 180 * Math.atan2(t[2], t[1]) / Math.PI;
		return [
			t[0],
			Math.sqrt(Math.pow(t[1], 2) + Math.pow(t[2], 2)),
			_ >= 0 ? _ : _ + 360
		];
	}
	var n = [
		.3457 / .3585,
		1,
		.2958 / .3585
	];
	/**
	* Convert Lab to D50-adapted XYZ
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	*/ function Lab_to_XYZ(t) {
		const _ = 24389 / 27, o = 216 / 24389, e = (t[0] + 16) / 116, r = t[1] / 500 + e, a = e - t[2] / 200;
		return [
			(Math.pow(r, 3) > o ? Math.pow(r, 3) : (116 * r - 16) / _) * n[0],
			(t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / _) * n[1],
			(Math.pow(a, 3) > o ? Math.pow(a, 3) : (116 * a - 16) / _) * n[2]
		];
	}
	/**
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
	*/ function OKLCH_to_OKLab(t) {
		const _ = t[2] * Math.PI / 180;
		return [
			t[0],
			t[1] * Math.cos(_),
			t[1] * Math.sin(_)
		];
	}
	/**
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
	*/ function OKLab_to_OKLCH(t) {
		const _ = 180 * Math.atan2(t[2], t[1]) / Math.PI;
		return [
			t[0],
			Math.sqrt(t[1] ** 2 + t[2] ** 2),
			_ >= 0 ? _ : _ + 360
		];
	}
	var o = [
		1.2268798758459243,
		-.5578149944602171,
		.2813910456659647,
		-.0405757452148008,
		1.112286803280317,
		-.0717110580655164,
		-.0763729366746601,
		-.4214933324022432,
		1.5869240198367816
	];
	var e = [
		1,
		.3963377773761749,
		.2158037573099136,
		1,
		-.1055613458156586,
		-.0638541728258133,
		1,
		-.0894841775298119,
		-1.2914855480194092
	];
	/**
	* Given OKLab, convert to XYZ relative to D65
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
	*/
	function OKLab_to_XYZ(t) {
		const _ = multiplyMatrices(e, t);
		return multiplyMatrices(o, [
			_[0] ** 3,
			_[1] ** 3,
			_[2] ** 3
		]);
	}
	/**
	* Assuming XYZ is relative to D50, convert to CIE Lab
	* from CIE standard, which now defines these as a rational fraction
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function XYZ_to_Lab(t) {
		const _ = compute_f(t[0] / n[0]), o = compute_f(t[1] / n[1]);
		return [
			116 * o - 16,
			500 * (_ - o),
			200 * (o - compute_f(t[2] / n[2]))
		];
	}
	var r = 216 / 24389;
	var a = 24389 / 27;
	function compute_f(t) {
		return t > r ? Math.cbrt(t) : (a * t + 16) / 116;
	}
	var i = [
		.819022437996703,
		.3619062600528904,
		-.1288737815209879,
		.0329836539323885,
		.9292868615863434,
		.0361446663506424,
		.0481771893596242,
		.2642395317527308,
		.6335478284694309
	];
	var l = [
		.210454268309314,
		.7936177747023054,
		-.0040720430116193,
		1.9779985324311684,
		-2.42859224204858,
		.450593709617411,
		.0259040424655478,
		.7827717124575296,
		-.8086757549230774
	];
	/**
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*
	* XYZ <-> LMS matrices recalculated for consistent reference white
	* @see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
	*/
	function XYZ_to_OKLab(t) {
		const _ = multiplyMatrices(i, t);
		return multiplyMatrices(l, [
			Math.cbrt(_[0]),
			Math.cbrt(_[1]),
			Math.cbrt(_[2])
		]);
	}
	var s = [
		30757411 / 17917100,
		-6372589 / 17917100,
		-4539589 / 17917100,
		-.666684351832489,
		1.616481236634939,
		467509 / 29648200,
		792561 / 44930125,
		-1921689 / 44930125,
		.942103121235474
	];
	/**
	* Convert XYZ to linear-light rec2020
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ var c = [
		446124 / 178915,
		-333277 / 357830,
		-72051 / 178915,
		-14852 / 17905,
		63121 / 35810,
		423 / 17905,
		11844 / 330415,
		-50337 / 660830,
		316169 / 330415
	];
	/**
	* Convert XYZ to linear-light P3
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function XYZ_to_lin_P3(t) {
		return multiplyMatrices(c, t);
	}
	var u = [
		1.3457868816471583,
		-.25557208737979464,
		-.05110186497554526,
		-.5446307051249019,
		1.5082477428451468,
		.02052744743642139,
		0,
		0,
		1.2119675456389452
	];
	/**
	* Convert D50 XYZ to linear-light prophoto-rgb
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	*/ var h = [
		1829569 / 896150,
		-506331 / 896150,
		-308931 / 896150,
		-851781 / 878810,
		1648619 / 878810,
		36519 / 878810,
		16779 / 1248040,
		-147721 / 1248040,
		1266979 / 1248040
	];
	/**
	* Convert XYZ to linear-light a98-rgb
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ var m = [
		12831 / 3959,
		-329 / 214,
		-1974 / 3959,
		-851781 / 878810,
		1648619 / 878810,
		36519 / 878810,
		705 / 12673,
		-2585 / 12673,
		705 / 667
	];
	/**
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function XYZ_to_lin_sRGB(t) {
		return multiplyMatrices(m, t);
	}
	/**
	* Convert an array of linear-light rec2020 RGB  in the range 0.0-1.0
	* to gamma corrected form ITU-R BT.2020-2 p.4
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ var p = 1.09929682680944;
	var D = .018053968510807;
	function gam_2020_channel(t) {
		const _ = t < 0 ? -1 : 1, n = Math.abs(t);
		return n > D ? _ * (p * Math.pow(n, .45) - .09929682680944008) : 4.5 * t;
	}
	/**
	* Convert an array of linear-light sRGB values in the range 0.0-1.0 to gamma corrected form
	* Extended transfer function:
	*  For negative values, linear portion extends on reflection
	*  of axis, then uses reflected pow below that
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://en.wikipedia.org/wiki/SRGB
	*/ function gam_sRGB(t) {
		return [
			gam_sRGB_channel(t[0]),
			gam_sRGB_channel(t[1]),
			gam_sRGB_channel(t[2])
		];
	}
	function gam_sRGB_channel(t) {
		const _ = t < 0 ? -1 : 1, n = Math.abs(t);
		return n > .0031308 ? _ * (1.055 * Math.pow(n, 1 / 2.4) - .055) : 12.92 * t;
	}
	/**
	* Convert an array of linear-light display-p3 RGB in the range 0.0-1.0
	* to gamma corrected form
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function gam_P3(t) {
		return gam_sRGB(t);
	}
	/**
	* Convert an array of linear-light prophoto-rgb in the range 0.0-1.0
	* to gamma corrected form.
	* Transfer curve is gamma 1.8 with a small linear portion.
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ var X = 1 / 512;
	function gam_ProPhoto_channel(t) {
		const _ = t < 0 ? -1 : 1, n = Math.abs(t);
		return n >= X ? _ * Math.pow(n, 1 / 1.8) : 16 * t;
	}
	/**
	* Convert an array of linear-light a98-rgb in the range 0.0-1.0
	* to gamma corrected form. Negative values are also now accepted
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function gam_a98rgb_channel(t) {
		return (t < 0 ? -1 : 1) * Math.pow(Math.abs(t), 256 / 563);
	}
	/**
	* Convert an array of rec2020 RGB values in the range 0.0 - 1.0
	* to linear light (un-companded) form.
	* ITU-R BT.2020-2 p.4
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ var Y = 1.09929682680944;
	var Z = .018053968510807;
	function lin_2020_channel(t) {
		const _ = t < 0 ? -1 : 1, n = Math.abs(t);
		return n < 4.5 * Z ? t / 4.5 : _ * Math.pow((n + Y - 1) / Y, 1 / .45);
	}
	var b = [
		63426534 / 99577255,
		20160776 / 139408157,
		47086771 / 278816314,
		26158966 / 99577255,
		.677998071518871,
		8267143 / 139408157,
		0,
		19567812 / 697040785,
		1.0609850577107909
	];
	/**
	* Convert an array of linear-light rec2020 values to CIE XYZ
	* using  D65 (no chromatic adaptation)
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	*/
	/**
	* Convert an array of of sRGB values where in-gamut values are in the range
	* [0 - 1] to linear light (un-companded) form.
	* Extended transfer function:
	*  For negative values, linear portion is extended on reflection of axis,
	*  then reflected power function is used.
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://en.wikipedia.org/wiki/SRGB
	*/
	function lin_sRGB(t) {
		return [
			lin_sRGB_channel(t[0]),
			lin_sRGB_channel(t[1]),
			lin_sRGB_channel(t[2])
		];
	}
	function lin_sRGB_channel(t) {
		const _ = t < 0 ? -1 : 1, n = Math.abs(t);
		return n <= .04045 ? t / 12.92 : _ * Math.pow((n + .055) / 1.055, 2.4);
	}
	/**
	* Convert an array of display-p3 RGB values in the range 0.0 - 1.0
	* to linear light (un-companded) form.
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function lin_P3(t) {
		return lin_sRGB(t);
	}
	var g = [
		608311 / 1250200,
		189793 / 714400,
		198249 / 1000160,
		35783 / 156275,
		247089 / 357200,
		198249 / 2500400,
		0,
		32229 / 714400,
		5220557 / 5000800
	];
	/**
	* Convert an array of linear-light display-p3 values to CIE XYZ
	* using D65 (no chromatic adaptation)
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	*/ function lin_P3_to_XYZ(t) {
		return multiplyMatrices(g, t);
	}
	/**
	* Convert an array of prophoto-rgb values where in-gamut Colors are in the
	* range [0.0 - 1.0] to linear light (un-companded) form. Transfer curve is
	* gamma 1.8 with a small linear portion. Extended transfer function
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ var f = 16 / 512;
	function lin_ProPhoto_channel(t) {
		const _ = t < 0 ? -1 : 1, n = Math.abs(t);
		return n <= f ? t / 16 : _ * Math.pow(n, 1.8);
	}
	var L = [
		.7977666449006423,
		.13518129740053308,
		.0313477341283922,
		.2880748288194013,
		.711835234241873,
		8993693872564e-17,
		0,
		0,
		.8251046025104602
	];
	/**
	* Convert an array of linear-light prophoto-rgb values to CIE D50 XYZ.
	* Matrix cannot be expressed in rational form, but is calculated to 64 bit accuracy.
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see see https://github.com/w3c/csswg-drafts/issues/7675
	*/ function lin_a98rgb_channel(t) {
		return (t < 0 ? -1 : 1) * Math.pow(Math.abs(t), 563 / 256);
	}
	var M = [
		573536 / 994567,
		263643 / 1420810,
		187206 / 994567,
		591459 / 1989134,
		6239551 / 9945670,
		374412 / 4972835,
		53769 / 1989134,
		351524 / 4972835,
		4929758 / 4972835
	];
	/**
	* Convert an array of linear-light a98-rgb values to CIE XYZ
	* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	* has greater numerical precision than section 4.3.5.3 of
	* https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
	* but the values below were calculated from first principles
	* from the chromaticity coordinates of R G B W
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	* @see https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/matrixmaker.html
	*/ var d = [
		506752 / 1228815,
		87881 / 245763,
		12673 / 70218,
		87098 / 409605,
		175762 / 245763,
		12673 / 175545,
		7918 / 409605,
		87881 / 737289,
		1001167 / 1053270
	];
	/**
	* Convert an array of linear-light sRGB values to CIE XYZ
	* using sRGB's own white, D65 (no chromatic adaptation)
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*/ function lin_sRGB_to_XYZ(t) {
		return multiplyMatrices(d, t);
	}
	/**
	* Convert an array of gamma-corrected sRGB values in the 0.0 to 1.0 range to HSL.
	*
	* @param {Color} RGB [r, g, b]
	* - Red component 0..1
	* - Green component 0..1
	* - Blue component 0..1
	* @return {number[]} Array of HSL values: Hue as degrees 0..360, Saturation and Lightness as percentages 0..100
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/utilities.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	*
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/better-rgbToHsl.js
	*/ function sRGB_to_HSL(t) {
		const _ = t[0], n = t[1], o = t[2], e = Math.max(_, n, o), r = Math.min(_, n, o), a = (r + e) / 2, i = e - r;
		let l = NaN, s = 0;
		if (0 !== Math.round(1e5 * i)) {
			const t = Math.round(1e5 * a);
			switch (s = 0 === t || 1e5 === t ? 0 : (e - a) / Math.min(a, 1 - a), e) {
				case _:
					l = (n - o) / i + (n < o ? 6 : 0);
					break;
				case n:
					l = (o - _) / i + 2;
					break;
				case o: l = (_ - n) / i + 4;
			}
			l *= 60;
		}
		return s < 0 && (l += 180, s = Math.abs(s)), l >= 360 && (l -= 360), [
			l,
			100 * s,
			100 * a
		];
	}
	function sRGB_to_Hue(t) {
		const _ = t[0], n = t[1], o = t[2], e = Math.max(_, n, o), r = Math.min(_, n, o);
		let a = NaN;
		const i = e - r;
		if (0 !== i) {
			switch (e) {
				case _:
					a = (n - o) / i + (n < o ? 6 : 0);
					break;
				case n:
					a = (o - _) / i + 2;
					break;
				case o: a = (_ - n) / i + 4;
			}
			a *= 60;
		}
		return a >= 360 && (a -= 360), a;
	}
	function inGamut(t) {
		return t[0] >= -1e-4 && t[0] <= 1.0001 && t[1] >= -1e-4 && t[1] <= 1.0001 && t[2] >= -1e-4 && t[2] <= 1.0001;
	}
	function clip(t) {
		return [
			t[0] < 0 ? 0 : t[0] > 1 ? 1 : t[0],
			t[1] < 0 ? 0 : t[1] > 1 ? 1 : t[1],
			t[2] < 0 ? 0 : t[2] > 1 ? 1 : t[2]
		];
	}
	/**
	* @description Calculate deltaE OK which is the simple root sum of squares
	* @param {number[]} reference - Array of OKLab values: L as 0..1, a and b as -1..1
	* @param {number[]} sample - Array of OKLab values: L as 0..1, a and b as -1..1
	* @return {number} How different a color sample is from reference
	*
	* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
	* @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js
	*/ function deltaEOK(t, _) {
		const [n, o, e] = t, [r, a, i] = _, l = n - r, s = o - a, c = e - i;
		return Math.sqrt(l ** 2 + s ** 2 + c ** 2);
	}
	var B = .02;
	var G = 1e-4;
	function rayTraceBox(t, _) {
		let n = Infinity, o = -Infinity;
		const e = [
			0,
			0,
			0
		];
		for (let r = 0; r < 3; r++) {
			const a = t[r], i = _[r] - a;
			e[r] = i;
			const l = 0, s = 1;
			if (i) {
				const t = 1 / i, _ = (l - a) * t, e = (s - a) * t;
				o = Math.max(Math.min(_, e), o), n = Math.min(Math.max(_, e), n);
			} else if (a < l || a > s) return !1;
		}
		return !(o > n || n < 0) && (o < 0 && (o = n), !!isFinite(o) && [
			t[0] + e[0] * o,
			t[1] + e[1] * o,
			t[2] + e[2] * o
		]);
	}
	function luminance(t) {
		const [_, n, o] = t.map((t) => t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4));
		return .2126 * _ + .7152 * n + .0722 * o;
	}
	exports.HSL_to_XYZ_D50 = function HSL_to_XYZ_D50(t) {
		let _ = t;
		return _ = HSL_to_sRGB(_), _ = lin_sRGB(_), _ = lin_sRGB_to_XYZ(_), _ = D65_to_D50(_), _;
	}, exports.HWB_to_XYZ_D50 = function HWB_to_XYZ_D50(t) {
		let _ = t;
		return _ = HWB_to_sRGB(_), _ = lin_sRGB(_), _ = lin_sRGB_to_XYZ(_), _ = D65_to_D50(_), _;
	}, exports.LCH_to_XYZ_D50 = function LCH_to_XYZ_D50(t) {
		let _ = t;
		return _ = LCH_to_Lab(_), _ = Lab_to_XYZ(_), _;
	}, exports.Lab_to_XYZ_D50 = function Lab_to_XYZ_D50(t) {
		let _ = t;
		return _ = Lab_to_XYZ(_), _;
	}, exports.OKLCH_to_OKLab = OKLCH_to_OKLab, exports.OKLCH_to_XYZ_D50 = function OKLCH_to_XYZ_D50(t) {
		let _ = t;
		return _ = OKLCH_to_OKLab(_), _ = OKLab_to_XYZ(_), _ = D65_to_D50(_), _;
	}, exports.OKLab_to_OKLCH = OKLab_to_OKLCH, exports.OKLab_to_XYZ = OKLab_to_XYZ, exports.OKLab_to_XYZ_D50 = function OKLab_to_XYZ_D50(t) {
		let _ = t;
		return _ = OKLab_to_XYZ(_), _ = D65_to_D50(_), _;
	}, exports.P3_to_XYZ_D50 = function P3_to_XYZ_D50(t) {
		let _ = t;
		return _ = lin_P3(_), _ = lin_P3_to_XYZ(_), _ = D65_to_D50(_), _;
	}, exports.ProPhoto_RGB_to_XYZ_D50 = function ProPhoto_RGB_to_XYZ_D50(t) {
		let _ = t;
		var n;
		return _ = [
			lin_ProPhoto_channel((n = _)[0]),
			lin_ProPhoto_channel(n[1]),
			lin_ProPhoto_channel(n[2])
		], _ = multiplyMatrices(L, _), _;
	}, exports.XYZ_D50_to_HSL = function XYZ_D50_to_HSL(t) {
		let _ = t;
		return _ = D50_to_D65(_), _ = XYZ_to_lin_sRGB(_), _ = gam_sRGB(_), _ = sRGB_to_HSL(_), _;
	}, exports.XYZ_D50_to_HWB = function XYZ_D50_to_HWB(t) {
		let _ = t;
		_ = D50_to_D65(_), _ = XYZ_to_lin_sRGB(_);
		const n = gam_sRGB(_), o = Math.min(n[0], n[1], n[2]), e = 1 - Math.max(n[0], n[1], n[2]);
		return [
			sRGB_to_Hue(n),
			100 * o,
			100 * e
		];
	}, exports.XYZ_D50_to_LCH = function XYZ_D50_to_LCH(t) {
		let _ = t;
		return _ = XYZ_to_Lab(_), _ = Lab_to_LCH(_), _;
	}, exports.XYZ_D50_to_Lab = function XYZ_D50_to_Lab(t) {
		let _ = t;
		return _ = XYZ_to_Lab(_), _;
	}, exports.XYZ_D50_to_OKLCH = function XYZ_D50_to_OKLCH(t) {
		let _ = t;
		return _ = D50_to_D65(_), _ = XYZ_to_OKLab(_), _ = OKLab_to_OKLCH(_), _;
	}, exports.XYZ_D50_to_OKLab = function XYZ_D50_to_OKLab(t) {
		let _ = t;
		return _ = D50_to_D65(_), _ = XYZ_to_OKLab(_), _;
	}, exports.XYZ_D50_to_P3 = function XYZ_D50_to_P3(t) {
		let _ = t;
		return _ = D50_to_D65(_), _ = XYZ_to_lin_P3(_), _ = gam_P3(_), _;
	}, exports.XYZ_D50_to_ProPhoto = function XYZ_D50_to_ProPhoto(t) {
		let _ = t;
		var n;
		return _ = multiplyMatrices(u, _), _ = [
			gam_ProPhoto_channel((n = _)[0]),
			gam_ProPhoto_channel(n[1]),
			gam_ProPhoto_channel(n[2])
		], _;
	}, exports.XYZ_D50_to_XYZ_D50 = function XYZ_D50_to_XYZ_D50(t) {
		return t;
	}, exports.XYZ_D50_to_XYZ_D65 = function XYZ_D50_to_XYZ_D65(t) {
		let _ = t;
		return _ = D50_to_D65(_), _;
	}, exports.XYZ_D50_to_a98_RGB = function XYZ_D50_to_a98_RGB(t) {
		let _ = t;
		var n;
		return _ = D50_to_D65(_), _ = multiplyMatrices(h, _), _ = [
			gam_a98rgb_channel((n = _)[0]),
			gam_a98rgb_channel(n[1]),
			gam_a98rgb_channel(n[2])
		], _;
	}, exports.XYZ_D50_to_lin_P3 = function XYZ_D50_to_lin_P3(t) {
		let _ = t;
		return _ = D50_to_D65(_), _ = XYZ_to_lin_P3(_), _;
	}, exports.XYZ_D50_to_lin_sRGB = function XYZ_D50_to_lin_sRGB(t) {
		let _ = t;
		return _ = D50_to_D65(_), _ = XYZ_to_lin_sRGB(_), _;
	}, exports.XYZ_D50_to_rec_2020 = function XYZ_D50_to_rec_2020(t) {
		let _ = t;
		var n;
		return _ = D50_to_D65(_), _ = multiplyMatrices(s, _), _ = [
			gam_2020_channel((n = _)[0]),
			gam_2020_channel(n[1]),
			gam_2020_channel(n[2])
		], _;
	}, exports.XYZ_D50_to_sRGB = function XYZ_D50_to_sRGB(t) {
		let _ = t;
		return _ = D50_to_D65(_), _ = XYZ_to_lin_sRGB(_), _ = gam_sRGB(_), _;
	}, exports.XYZ_D65_to_XYZ_D50 = function XYZ_D65_to_XYZ_D50(t) {
		let _ = t;
		return _ = D65_to_D50(_), _;
	}, exports.XYZ_to_OKLab = XYZ_to_OKLab, exports.XYZ_to_lin_P3 = XYZ_to_lin_P3, exports.XYZ_to_lin_sRGB = XYZ_to_lin_sRGB, exports.a98_RGB_to_XYZ_D50 = function a98_RGB_to_XYZ_D50(t) {
		let _ = t;
		/**
		* Convert an array of a98-rgb values in the range 0.0 - 1.0
		* to linear light (un-companded) form. Negative values are also now accepted
		*
		* @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
		* @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
		*/
		var n;
		return _ = [
			lin_a98rgb_channel((n = _)[0]),
			lin_a98rgb_channel(n[1]),
			lin_a98rgb_channel(n[2])
		], _ = multiplyMatrices(M, _), _ = D65_to_D50(_), _;
	}, exports.clip = clip, exports.contrast_ratio_wcag_2_1 = function contrast_ratio_wcag_2_1(t, _) {
		const n = luminance(t), o = luminance(_);
		return (Math.max(n, o) + .05) / (Math.min(n, o) + .05);
	}, exports.gam_P3 = gam_P3, exports.gam_sRGB = gam_sRGB, exports.inGamut = inGamut, exports.lin_P3 = lin_P3, exports.lin_P3_to_XYZ = lin_P3_to_XYZ, exports.lin_P3_to_XYZ_D50 = function lin_P3_to_XYZ_D50(t) {
		let _ = t;
		return _ = lin_P3_to_XYZ(_), _ = D65_to_D50(_), _;
	}, exports.lin_sRGB = lin_sRGB, exports.lin_sRGB_to_XYZ = lin_sRGB_to_XYZ, exports.lin_sRGB_to_XYZ_D50 = function lin_sRGB_to_XYZ_D50(t) {
		let _ = t;
		return _ = lin_sRGB_to_XYZ(_), _ = D65_to_D50(_), _;
	}, exports.mapGamut = function mapGamut(t, _, n) {
		const o = t;
		let e = clip(_(o)), r = deltaEOK(OKLCH_to_OKLab(n(e)), OKLCH_to_OKLab(o));
		if (r < B) return e;
		let a = 0, i = o[1], l = !0;
		for (; i - a > G;) {
			const t = (a + i) / 2;
			if (o[1] = t, l && inGamut(_(o))) a = t;
			else if (e = clip(_(o)), r = deltaEOK(OKLCH_to_OKLab(n(e)), OKLCH_to_OKLab(o)), r < B) {
				if (B - r < G) return e;
				l = !1, a = t;
			} else i = t;
		}
		return clip(_([...o]));
	}, exports.mapGamutRayTrace = function mapGamutRayTrace(t, _, n) {
		/**
		* @license MIT https://github.com/facelessuser/coloraide/blob/main/LICENSE.md
		*/
		const o = t[0], e = t[2];
		let r = _(t);
		const a = _([
			o,
			0,
			e
		]);
		for (let t = 0; t < 4; t++) {
			if (t > 0) {
				const t = n(r);
				t[0] = o, t[2] = e, r = _(t);
			}
			const i = rayTraceBox(a, r);
			if (!i) break;
			r = i;
		}
		return clip(r);
	}, exports.namedColors = {
		aliceblue: [
			240,
			248,
			255
		],
		antiquewhite: [
			250,
			235,
			215
		],
		aqua: [
			0,
			255,
			255
		],
		aquamarine: [
			127,
			255,
			212
		],
		azure: [
			240,
			255,
			255
		],
		beige: [
			245,
			245,
			220
		],
		bisque: [
			255,
			228,
			196
		],
		black: [
			0,
			0,
			0
		],
		blanchedalmond: [
			255,
			235,
			205
		],
		blue: [
			0,
			0,
			255
		],
		blueviolet: [
			138,
			43,
			226
		],
		brown: [
			165,
			42,
			42
		],
		burlywood: [
			222,
			184,
			135
		],
		cadetblue: [
			95,
			158,
			160
		],
		chartreuse: [
			127,
			255,
			0
		],
		chocolate: [
			210,
			105,
			30
		],
		coral: [
			255,
			127,
			80
		],
		cornflowerblue: [
			100,
			149,
			237
		],
		cornsilk: [
			255,
			248,
			220
		],
		crimson: [
			220,
			20,
			60
		],
		cyan: [
			0,
			255,
			255
		],
		darkblue: [
			0,
			0,
			139
		],
		darkcyan: [
			0,
			139,
			139
		],
		darkgoldenrod: [
			184,
			134,
			11
		],
		darkgray: [
			169,
			169,
			169
		],
		darkgreen: [
			0,
			100,
			0
		],
		darkgrey: [
			169,
			169,
			169
		],
		darkkhaki: [
			189,
			183,
			107
		],
		darkmagenta: [
			139,
			0,
			139
		],
		darkolivegreen: [
			85,
			107,
			47
		],
		darkorange: [
			255,
			140,
			0
		],
		darkorchid: [
			153,
			50,
			204
		],
		darkred: [
			139,
			0,
			0
		],
		darksalmon: [
			233,
			150,
			122
		],
		darkseagreen: [
			143,
			188,
			143
		],
		darkslateblue: [
			72,
			61,
			139
		],
		darkslategray: [
			47,
			79,
			79
		],
		darkslategrey: [
			47,
			79,
			79
		],
		darkturquoise: [
			0,
			206,
			209
		],
		darkviolet: [
			148,
			0,
			211
		],
		deeppink: [
			255,
			20,
			147
		],
		deepskyblue: [
			0,
			191,
			255
		],
		dimgray: [
			105,
			105,
			105
		],
		dimgrey: [
			105,
			105,
			105
		],
		dodgerblue: [
			30,
			144,
			255
		],
		firebrick: [
			178,
			34,
			34
		],
		floralwhite: [
			255,
			250,
			240
		],
		forestgreen: [
			34,
			139,
			34
		],
		fuchsia: [
			255,
			0,
			255
		],
		gainsboro: [
			220,
			220,
			220
		],
		ghostwhite: [
			248,
			248,
			255
		],
		gold: [
			255,
			215,
			0
		],
		goldenrod: [
			218,
			165,
			32
		],
		gray: [
			128,
			128,
			128
		],
		green: [
			0,
			128,
			0
		],
		greenyellow: [
			173,
			255,
			47
		],
		grey: [
			128,
			128,
			128
		],
		honeydew: [
			240,
			255,
			240
		],
		hotpink: [
			255,
			105,
			180
		],
		indianred: [
			205,
			92,
			92
		],
		indigo: [
			75,
			0,
			130
		],
		ivory: [
			255,
			255,
			240
		],
		khaki: [
			240,
			230,
			140
		],
		lavender: [
			230,
			230,
			250
		],
		lavenderblush: [
			255,
			240,
			245
		],
		lawngreen: [
			124,
			252,
			0
		],
		lemonchiffon: [
			255,
			250,
			205
		],
		lightblue: [
			173,
			216,
			230
		],
		lightcoral: [
			240,
			128,
			128
		],
		lightcyan: [
			224,
			255,
			255
		],
		lightgoldenrodyellow: [
			250,
			250,
			210
		],
		lightgray: [
			211,
			211,
			211
		],
		lightgreen: [
			144,
			238,
			144
		],
		lightgrey: [
			211,
			211,
			211
		],
		lightpink: [
			255,
			182,
			193
		],
		lightsalmon: [
			255,
			160,
			122
		],
		lightseagreen: [
			32,
			178,
			170
		],
		lightskyblue: [
			135,
			206,
			250
		],
		lightslategray: [
			119,
			136,
			153
		],
		lightslategrey: [
			119,
			136,
			153
		],
		lightsteelblue: [
			176,
			196,
			222
		],
		lightyellow: [
			255,
			255,
			224
		],
		lime: [
			0,
			255,
			0
		],
		limegreen: [
			50,
			205,
			50
		],
		linen: [
			250,
			240,
			230
		],
		magenta: [
			255,
			0,
			255
		],
		maroon: [
			128,
			0,
			0
		],
		mediumaquamarine: [
			102,
			205,
			170
		],
		mediumblue: [
			0,
			0,
			205
		],
		mediumorchid: [
			186,
			85,
			211
		],
		mediumpurple: [
			147,
			112,
			219
		],
		mediumseagreen: [
			60,
			179,
			113
		],
		mediumslateblue: [
			123,
			104,
			238
		],
		mediumspringgreen: [
			0,
			250,
			154
		],
		mediumturquoise: [
			72,
			209,
			204
		],
		mediumvioletred: [
			199,
			21,
			133
		],
		midnightblue: [
			25,
			25,
			112
		],
		mintcream: [
			245,
			255,
			250
		],
		mistyrose: [
			255,
			228,
			225
		],
		moccasin: [
			255,
			228,
			181
		],
		navajowhite: [
			255,
			222,
			173
		],
		navy: [
			0,
			0,
			128
		],
		oldlace: [
			253,
			245,
			230
		],
		olive: [
			128,
			128,
			0
		],
		olivedrab: [
			107,
			142,
			35
		],
		orange: [
			255,
			165,
			0
		],
		orangered: [
			255,
			69,
			0
		],
		orchid: [
			218,
			112,
			214
		],
		palegoldenrod: [
			238,
			232,
			170
		],
		palegreen: [
			152,
			251,
			152
		],
		paleturquoise: [
			175,
			238,
			238
		],
		palevioletred: [
			219,
			112,
			147
		],
		papayawhip: [
			255,
			239,
			213
		],
		peachpuff: [
			255,
			218,
			185
		],
		peru: [
			205,
			133,
			63
		],
		pink: [
			255,
			192,
			203
		],
		plum: [
			221,
			160,
			221
		],
		powderblue: [
			176,
			224,
			230
		],
		purple: [
			128,
			0,
			128
		],
		rebeccapurple: [
			102,
			51,
			153
		],
		red: [
			255,
			0,
			0
		],
		rosybrown: [
			188,
			143,
			143
		],
		royalblue: [
			65,
			105,
			225
		],
		saddlebrown: [
			139,
			69,
			19
		],
		salmon: [
			250,
			128,
			114
		],
		sandybrown: [
			244,
			164,
			96
		],
		seagreen: [
			46,
			139,
			87
		],
		seashell: [
			255,
			245,
			238
		],
		sienna: [
			160,
			82,
			45
		],
		silver: [
			192,
			192,
			192
		],
		skyblue: [
			135,
			206,
			235
		],
		slateblue: [
			106,
			90,
			205
		],
		slategray: [
			112,
			128,
			144
		],
		slategrey: [
			112,
			128,
			144
		],
		snow: [
			255,
			250,
			250
		],
		springgreen: [
			0,
			255,
			127
		],
		steelblue: [
			70,
			130,
			180
		],
		tan: [
			210,
			180,
			140
		],
		teal: [
			0,
			128,
			128
		],
		thistle: [
			216,
			191,
			216
		],
		tomato: [
			255,
			99,
			71
		],
		turquoise: [
			64,
			224,
			208
		],
		violet: [
			238,
			130,
			238
		],
		wheat: [
			245,
			222,
			179
		],
		white: [
			255,
			255,
			255
		],
		whitesmoke: [
			245,
			245,
			245
		],
		yellow: [
			255,
			255,
			0
		],
		yellowgreen: [
			154,
			205,
			50
		]
	}, exports.rec_2020_to_XYZ_D50 = function rec_2020_to_XYZ_D50(t) {
		let _ = t;
		var n;
		return _ = [
			lin_2020_channel((n = _)[0]),
			lin_2020_channel(n[1]),
			lin_2020_channel(n[2])
		], _ = multiplyMatrices(b, _), _ = D65_to_D50(_), _;
	}, exports.sRGB_to_XYZ_D50 = function sRGB_to_XYZ_D50(t) {
		let _ = t;
		return _ = lin_sRGB(_), _ = lin_sRGB_to_XYZ(_), _ = D65_to_D50(_), _;
	};
}));
//#endregion
//#region node_modules/@csstools/css-color-parser/dist/index.cjs
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	var e;
	var o;
	var a = require_dist$4();
	var n = require_dist$1();
	var t = require_dist$3();
	var r = require_dist$2();
	function convertNaNToZero(e) {
		return [
			Number.isNaN(e[0]) ? 0 : e[0],
			Number.isNaN(e[1]) ? 0 : e[1],
			Number.isNaN(e[2]) ? 0 : e[2]
		];
	}
	function colorData_to_XYZ_D50(e) {
		switch (e.colorNotation) {
			case exports.ColorNotation.HEX:
			case exports.ColorNotation.RGB:
			case exports.ColorNotation.sRGB: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.sRGB_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.Linear_sRGB: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.lin_sRGB_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.Display_P3: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.P3_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.Linear_Display_P3: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.lin_P3_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.Rec2020: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.rec_2020_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.A98_RGB: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.a98_RGB_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.ProPhoto_RGB: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.ProPhoto_RGB_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.HSL: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.HSL_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.HWB: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.HWB_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.Lab: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.Lab_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.OKLab: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.OKLab_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.LCH: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.LCH_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.OKLCH: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.OKLCH_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.XYZ_D50: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.XYZ_D50_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			case exports.ColorNotation.XYZ_D65: return {
				...e,
				colorNotation: exports.ColorNotation.XYZ_D50,
				channels: n.XYZ_D65_to_XYZ_D50(convertNaNToZero(e.channels))
			};
			default: throw new Error("Unsupported color notation");
		}
	}
	exports.ColorNotation = void 0, (e = exports.ColorNotation || (exports.ColorNotation = {})).A98_RGB = "a98-rgb", e.Display_P3 = "display-p3", e.Linear_Display_P3 = "display-p3-linear", e.HEX = "hex", e.HSL = "hsl", e.HWB = "hwb", e.LCH = "lch", e.Lab = "lab", e.Linear_sRGB = "srgb-linear", e.OKLCH = "oklch", e.OKLab = "oklab", e.ProPhoto_RGB = "prophoto-rgb", e.RGB = "rgb", e.sRGB = "srgb", e.Rec2020 = "rec2020", e.XYZ_D50 = "xyz-d50", e.XYZ_D65 = "xyz-d65", exports.SyntaxFlag = void 0, (o = exports.SyntaxFlag || (exports.SyntaxFlag = {})).ColorKeyword = "color-keyword", o.HasAlpha = "has-alpha", o.HasDimensionValues = "has-dimension-values", o.HasNoneKeywords = "has-none-keywords", o.HasNumberValues = "has-number-values", o.HasPercentageAlpha = "has-percentage-alpha", o.HasPercentageValues = "has-percentage-values", o.HasVariableAlpha = "has-variable-alpha", o.Hex = "hex", o.LegacyHSL = "legacy-hsl", o.LegacyRGB = "legacy-rgb", o.NamedColor = "named-color", o.RelativeColorSyntax = "relative-color-syntax", o.ColorMix = "color-mix", o.ColorMixVariadic = "color-mix-variadic", o.ContrastColor = "contrast-color", o.RelativeAlphaSyntax = "relative-alpha-syntax", o.Experimental = "experimental";
	var l = /* @__PURE__ */ new Set([
		exports.ColorNotation.A98_RGB,
		exports.ColorNotation.Display_P3,
		exports.ColorNotation.Linear_Display_P3,
		exports.ColorNotation.HEX,
		exports.ColorNotation.Linear_sRGB,
		exports.ColorNotation.ProPhoto_RGB,
		exports.ColorNotation.RGB,
		exports.ColorNotation.sRGB,
		exports.ColorNotation.Rec2020,
		exports.ColorNotation.XYZ_D50,
		exports.ColorNotation.XYZ_D65
	]);
	function colorDataTo(e, o) {
		const a = { ...e };
		if (e.colorNotation !== o) {
			const e = colorData_to_XYZ_D50(a);
			switch (o) {
				case exports.ColorNotation.HEX:
				case exports.ColorNotation.RGB:
					a.colorNotation = exports.ColorNotation.RGB, a.channels = n.XYZ_D50_to_sRGB(e.channels);
					break;
				case exports.ColorNotation.sRGB:
					a.colorNotation = exports.ColorNotation.sRGB, a.channels = n.XYZ_D50_to_sRGB(e.channels);
					break;
				case exports.ColorNotation.Linear_sRGB:
					a.colorNotation = exports.ColorNotation.Linear_sRGB, a.channels = n.XYZ_D50_to_lin_sRGB(e.channels);
					break;
				case exports.ColorNotation.Display_P3:
					a.colorNotation = exports.ColorNotation.Display_P3, a.channels = n.XYZ_D50_to_P3(e.channels);
					break;
				case exports.ColorNotation.Linear_Display_P3:
					a.colorNotation = exports.ColorNotation.Linear_Display_P3, a.channels = n.XYZ_D50_to_lin_P3(e.channels);
					break;
				case exports.ColorNotation.Rec2020:
					a.colorNotation = exports.ColorNotation.Rec2020, a.channels = n.XYZ_D50_to_rec_2020(e.channels);
					break;
				case exports.ColorNotation.ProPhoto_RGB:
					a.colorNotation = exports.ColorNotation.ProPhoto_RGB, a.channels = n.XYZ_D50_to_ProPhoto(e.channels);
					break;
				case exports.ColorNotation.A98_RGB:
					a.colorNotation = exports.ColorNotation.A98_RGB, a.channels = n.XYZ_D50_to_a98_RGB(e.channels);
					break;
				case exports.ColorNotation.HSL:
					a.colorNotation = exports.ColorNotation.HSL, a.channels = n.XYZ_D50_to_HSL(e.channels);
					break;
				case exports.ColorNotation.HWB:
					a.colorNotation = exports.ColorNotation.HWB, a.channels = n.XYZ_D50_to_HWB(e.channels);
					break;
				case exports.ColorNotation.Lab:
					a.colorNotation = exports.ColorNotation.Lab, a.channels = n.XYZ_D50_to_Lab(e.channels);
					break;
				case exports.ColorNotation.LCH:
					a.colorNotation = exports.ColorNotation.LCH, a.channels = n.XYZ_D50_to_LCH(e.channels);
					break;
				case exports.ColorNotation.OKLCH:
					a.colorNotation = exports.ColorNotation.OKLCH, a.channels = n.XYZ_D50_to_OKLCH(e.channels);
					break;
				case exports.ColorNotation.OKLab:
					a.colorNotation = exports.ColorNotation.OKLab, a.channels = n.XYZ_D50_to_OKLab(e.channels);
					break;
				case exports.ColorNotation.XYZ_D50:
					a.colorNotation = exports.ColorNotation.XYZ_D50, a.channels = n.XYZ_D50_to_XYZ_D50(e.channels);
					break;
				case exports.ColorNotation.XYZ_D65:
					a.colorNotation = exports.ColorNotation.XYZ_D65, a.channels = n.XYZ_D50_to_XYZ_D65(e.channels);
					break;
				default: throw new Error("Unsupported color notation");
			}
		} else a.channels = convertNaNToZero(e.channels);
		if (o === e.colorNotation) a.channels = carryForwardMissingComponents(e.channels, [
			0,
			1,
			2
		], a.channels, [
			0,
			1,
			2
		]);
		else if (l.has(o) && l.has(e.colorNotation)) a.channels = carryForwardMissingComponents(e.channels, [
			0,
			1,
			2
		], a.channels, [
			0,
			1,
			2
		]);
		else switch (o) {
			case exports.ColorNotation.HSL:
				switch (e.colorNotation) {
					case exports.ColorNotation.HWB:
						a.channels = carryForwardMissingComponents(e.channels, [0], a.channels, [0]);
						break;
					case exports.ColorNotation.Lab:
					case exports.ColorNotation.OKLab:
						a.channels = carryForwardMissingComponents(e.channels, [2], a.channels, [0]);
						break;
					case exports.ColorNotation.LCH:
					case exports.ColorNotation.OKLCH: a.channels = carryForwardMissingComponents(e.channels, [
						0,
						1,
						2
					], a.channels, [
						2,
						1,
						0
					]);
				}
				break;
			case exports.ColorNotation.HWB:
				switch (e.colorNotation) {
					case exports.ColorNotation.HSL:
						a.channels = carryForwardMissingComponents(e.channels, [0], a.channels, [0]);
						break;
					case exports.ColorNotation.LCH:
					case exports.ColorNotation.OKLCH: a.channels = carryForwardMissingComponents(e.channels, [0], a.channels, [2]);
				}
				break;
			case exports.ColorNotation.Lab:
			case exports.ColorNotation.OKLab:
				switch (e.colorNotation) {
					case exports.ColorNotation.HSL:
						a.channels = carryForwardMissingComponents(e.channels, [0], a.channels, [2]);
						break;
					case exports.ColorNotation.Lab:
					case exports.ColorNotation.OKLab:
						a.channels = carryForwardMissingComponents(e.channels, [
							0,
							1,
							2
						], a.channels, [
							0,
							1,
							2
						]);
						break;
					case exports.ColorNotation.LCH:
					case exports.ColorNotation.OKLCH: a.channels = carryForwardMissingComponents(e.channels, [0], a.channels, [0]);
				}
				break;
			case exports.ColorNotation.LCH:
			case exports.ColorNotation.OKLCH: switch (e.colorNotation) {
				case exports.ColorNotation.HSL:
					a.channels = carryForwardMissingComponents(e.channels, [
						0,
						1,
						2
					], a.channels, [
						2,
						1,
						0
					]);
					break;
				case exports.ColorNotation.HWB:
					a.channels = carryForwardMissingComponents(e.channels, [0], a.channels, [2]);
					break;
				case exports.ColorNotation.Lab:
				case exports.ColorNotation.OKLab:
					a.channels = carryForwardMissingComponents(e.channels, [0], a.channels, [0]);
					break;
				case exports.ColorNotation.LCH:
				case exports.ColorNotation.OKLCH: a.channels = carryForwardMissingComponents(e.channels, [
					0,
					1,
					2
				], a.channels, [
					0,
					1,
					2
				]);
			}
		}
		return a.channels = convertPowerlessComponentsToMissingComponents(a.channels, o), a;
	}
	function convertPowerlessComponentsToMissingComponents(e, o) {
		const a = [...e];
		switch (o) {
			case exports.ColorNotation.HSL:
				!Number.isNaN(a[1]) && reducePrecision(a[1], 4) <= 0 && (a[0] = NaN);
				break;
			case exports.ColorNotation.HWB:
				Math.max(0, reducePrecision(a[1], 4)) + Math.max(0, reducePrecision(a[2], 4)) >= 100 && (a[0] = NaN);
				break;
			case exports.ColorNotation.LCH:
				!Number.isNaN(a[1]) && reducePrecision(a[1], 4) <= 0 && (a[2] = NaN);
				break;
			case exports.ColorNotation.OKLCH: !Number.isNaN(a[1]) && reducePrecision(a[1], 6) <= 0 && (a[2] = NaN);
		}
		return a;
	}
	function convertPowerlessComponentsToZeroValuesForDisplay(e, o) {
		const a = [...e];
		switch (o) {
			case exports.ColorNotation.HSL:
				(reducePrecision(a[2]) <= 0 || reducePrecision(a[2]) >= 100) && (a[0] = NaN, a[1] = NaN), reducePrecision(a[1]) <= 0 && (a[0] = NaN);
				break;
			case exports.ColorNotation.HWB:
				Math.max(0, reducePrecision(a[1])) + Math.max(0, reducePrecision(a[2])) >= 100 && (a[0] = NaN);
				break;
			case exports.ColorNotation.Lab:
				(reducePrecision(a[0]) <= 0 || reducePrecision(a[0]) >= 100) && (a[1] = NaN, a[2] = NaN);
				break;
			case exports.ColorNotation.LCH:
				reducePrecision(a[1]) <= 0 && (a[2] = NaN), (reducePrecision(a[0]) <= 0 || reducePrecision(a[0]) >= 100) && (a[1] = NaN, a[2] = NaN);
				break;
			case exports.ColorNotation.OKLab:
				(reducePrecision(a[0]) <= 0 || reducePrecision(a[0]) >= 1) && (a[1] = NaN, a[2] = NaN);
				break;
			case exports.ColorNotation.OKLCH: reducePrecision(a[1]) <= 0 && (a[2] = NaN), (reducePrecision(a[0]) <= 0 || reducePrecision(a[0]) >= 1) && (a[1] = NaN, a[2] = NaN);
		}
		return a;
	}
	function carryForwardMissingComponents(e, o, a, n) {
		const t = [...a];
		for (const a of o) Number.isNaN(e[o[a]]) && (t[n[a]] = NaN);
		return t;
	}
	function normalizeRelativeColorDataChannels(e) {
		const o = /* @__PURE__ */ new Map();
		switch (e.colorNotation) {
			case exports.ColorNotation.RGB:
			case exports.ColorNotation.HEX:
				o.set("r", dummyNumberToken(255 * e.channels[0])), o.set("g", dummyNumberToken(255 * e.channels[1])), o.set("b", dummyNumberToken(255 * e.channels[2])), "number" == typeof e.alpha && o.set("alpha", dummyNumberToken(e.alpha));
				break;
			case exports.ColorNotation.HSL:
				o.set("h", dummyNumberToken(e.channels[0])), o.set("s", dummyNumberToken(e.channels[1])), o.set("l", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && o.set("alpha", dummyNumberToken(e.alpha));
				break;
			case exports.ColorNotation.HWB:
				o.set("h", dummyNumberToken(e.channels[0])), o.set("w", dummyNumberToken(e.channels[1])), o.set("b", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && o.set("alpha", dummyNumberToken(e.alpha));
				break;
			case exports.ColorNotation.Lab:
			case exports.ColorNotation.OKLab:
				o.set("l", dummyNumberToken(e.channels[0])), o.set("a", dummyNumberToken(e.channels[1])), o.set("b", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && o.set("alpha", dummyNumberToken(e.alpha));
				break;
			case exports.ColorNotation.LCH:
			case exports.ColorNotation.OKLCH:
				o.set("l", dummyNumberToken(e.channels[0])), o.set("c", dummyNumberToken(e.channels[1])), o.set("h", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && o.set("alpha", dummyNumberToken(e.alpha));
				break;
			case exports.ColorNotation.sRGB:
			case exports.ColorNotation.A98_RGB:
			case exports.ColorNotation.Display_P3:
			case exports.ColorNotation.Linear_Display_P3:
			case exports.ColorNotation.Rec2020:
			case exports.ColorNotation.Linear_sRGB:
			case exports.ColorNotation.ProPhoto_RGB:
				o.set("r", dummyNumberToken(e.channels[0])), o.set("g", dummyNumberToken(e.channels[1])), o.set("b", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && o.set("alpha", dummyNumberToken(e.alpha));
				break;
			case exports.ColorNotation.XYZ_D50:
			case exports.ColorNotation.XYZ_D65: o.set("x", dummyNumberToken(e.channels[0])), o.set("y", dummyNumberToken(e.channels[1])), o.set("z", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && o.set("alpha", dummyNumberToken(e.alpha));
		}
		return o;
	}
	function noneToZeroInRelativeColorDataChannels(e) {
		const o = new Map(e);
		for (const [a, n] of e) Number.isNaN(n[4].value) && o.set(a, dummyNumberToken(0));
		return o;
	}
	function dummyNumberToken(e) {
		return Number.isNaN(e) ? [
			a.TokenType.Number,
			"none",
			-1,
			-1,
			{
				value: NaN,
				type: a.NumberType.Number
			}
		] : [
			a.TokenType.Number,
			e.toString(),
			-1,
			-1,
			{
				value: e,
				type: a.NumberType.Number
			}
		];
	}
	function reducePrecision(e, o = 7) {
		if (Number.isNaN(e)) return 0;
		const a = Math.pow(10, o);
		return Math.round(e * a) / a;
	}
	function normalize(e, o, a, n) {
		return Math.min(Math.max(e / o, a), n);
	}
	var s = /[A-Z]/g;
	function toLowerCaseAZ(e) {
		return e.replace(s, (e) => String.fromCharCode(e.charCodeAt(0) + 32));
	}
	function normalize_Color_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === toLowerCaseAZ(e[4].value)) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (a.isTokenPercentage(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = normalize(e[4].value, 100, -2147483647, 2147483647);
			return 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = normalize(e[4].value, 1, -2147483647, 2147483647);
			return 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	var i = /* @__PURE__ */ new Set([
		"srgb",
		"srgb-linear",
		"display-p3",
		"display-p3-linear",
		"a98-rgb",
		"prophoto-rgb",
		"rec2020",
		"xyz",
		"xyz-d50",
		"xyz-d65"
	]);
	function color$1(e, o) {
		const n = [], l = [], s = [], u = [];
		let c, p, N = !1, m = !1;
		const h = {
			colorNotation: exports.ColorNotation.sRGB,
			channels: [
				0,
				0,
				0
			],
			alpha: 1,
			syntaxFlags: /* @__PURE__ */ new Set([])
		};
		let x = n;
		for (let y = 0; y < e.value.length; y++) {
			let b = e.value[y];
			if (t.isWhitespaceNode(b) || t.isCommentNode(b)) for (; t.isWhitespaceNode(e.value[y + 1]) || t.isCommentNode(e.value[y + 1]);) y++;
			else if (x === n && n.length && (x = l), x === l && l.length && (x = s), t.isTokenNode(b) && a.isTokenDelim(b.value) && "/" === b.value[4].value) {
				if (x === u) return !1;
				x = u;
			} else {
				if (t.isFunctionNode(b)) {
					if (x === u && "var" === toLowerCaseAZ(b.getName())) {
						h.syntaxFlags.add(exports.SyntaxFlag.HasVariableAlpha), x.push(b);
						continue;
					}
					if (!r.mathFunctionNames.has(toLowerCaseAZ(b.getName()))) return !1;
					const [[e]] = r.calcFromComponentValues([[b]], {
						censorIntoStandardRepresentableValues: !0,
						globals: p,
						precision: -1,
						toCanonicalUnits: !0,
						rawPercentages: !0
					});
					if (!e || !t.isTokenNode(e) || !a.isTokenNumeric(e.value)) return !1;
					Number.isNaN(e.value[4].value) && (e.value[4].value = 0), b = e;
				}
				if (x === n && 0 === n.length && t.isTokenNode(b) && a.isTokenIdent(b.value) && i.has(toLowerCaseAZ(b.value[4].value))) {
					if (N) return !1;
					N = toLowerCaseAZ(b.value[4].value), h.colorNotation = colorSpaceNameToColorNotation(N), m && (m.colorNotation !== h.colorNotation && (m = colorDataTo(m, h.colorNotation)), c = normalizeRelativeColorDataChannels(m), p = noneToZeroInRelativeColorDataChannels(c));
				} else if (x === n && 0 === n.length && t.isTokenNode(b) && a.isTokenIdent(b.value) && "from" === toLowerCaseAZ(b.value[4].value)) {
					if (m) return !1;
					if (N) return !1;
					for (; t.isWhitespaceNode(e.value[y + 1]) || t.isCommentNode(e.value[y + 1]);) y++;
					if (y++, b = e.value[y], m = o(b), !1 === m) return !1;
					m.syntaxFlags.has(exports.SyntaxFlag.Experimental) && h.syntaxFlags.add(exports.SyntaxFlag.Experimental), h.syntaxFlags.add(exports.SyntaxFlag.RelativeColorSyntax);
				} else {
					if (!t.isTokenNode(b)) return !1;
					if (a.isTokenIdent(b.value) && c && c.has(toLowerCaseAZ(b.value[4].value))) {
						x.push(new t.TokenNode(c.get(toLowerCaseAZ(b.value[4].value))));
						continue;
					}
					x.push(b);
				}
			}
		}
		if (!N) return !1;
		if (1 !== x.length) return !1;
		if (1 !== n.length || 1 !== l.length || 1 !== s.length) return !1;
		if (!t.isTokenNode(n[0]) || !t.isTokenNode(l[0]) || !t.isTokenNode(s[0])) return !1;
		if (c && !c.has("alpha")) return !1;
		const y = normalize_Color_ChannelValues(n[0].value, 0, h);
		if (!y || !a.isTokenNumber(y)) return !1;
		const b = normalize_Color_ChannelValues(l[0].value, 1, h);
		if (!b || !a.isTokenNumber(b)) return !1;
		const C = normalize_Color_ChannelValues(s[0].value, 2, h);
		if (!C || !a.isTokenNumber(C)) return !1;
		const d = [
			y,
			b,
			C
		];
		if (1 === u.length) if (h.syntaxFlags.add(exports.SyntaxFlag.HasAlpha), t.isTokenNode(u[0])) {
			const e = normalize_Color_ChannelValues(u[0].value, 3, h);
			if (!e || !a.isTokenNumber(e)) return !1;
			d.push(e);
		} else h.alpha = u[0];
		else if (c && c.has("alpha")) {
			const e = normalize_Color_ChannelValues(c.get("alpha"), 3, h);
			if (!e || !a.isTokenNumber(e)) return !1;
			d.push(e);
		}
		return h.channels = [
			d[0][4].value,
			d[1][4].value,
			d[2][4].value
		], 4 === d.length && (h.alpha = d[3][4].value), h;
	}
	function colorSpaceNameToColorNotation(e) {
		switch (e) {
			case "srgb": return exports.ColorNotation.sRGB;
			case "srgb-linear": return exports.ColorNotation.Linear_sRGB;
			case "display-p3": return exports.ColorNotation.Display_P3;
			case "display-p3-linear": return exports.ColorNotation.Linear_Display_P3;
			case "a98-rgb": return exports.ColorNotation.A98_RGB;
			case "prophoto-rgb": return exports.ColorNotation.ProPhoto_RGB;
			case "rec2020": return exports.ColorNotation.Rec2020;
			case "xyz":
			case "xyz-d65": return exports.ColorNotation.XYZ_D65;
			case "xyz-d50": return exports.ColorNotation.XYZ_D50;
			default: throw new Error("Unknown color space name: " + e);
		}
	}
	var u = /* @__PURE__ */ new Set([
		"srgb",
		"srgb-linear",
		"display-p3",
		"display-p3-linear",
		"a98-rgb",
		"prophoto-rgb",
		"rec2020",
		"lab",
		"oklab",
		"xyz",
		"xyz-d50",
		"xyz-d65"
	]);
	var c = /* @__PURE__ */ new Set([
		"hsl",
		"hwb",
		"lch",
		"oklch"
	]);
	var p = /* @__PURE__ */ new Set([
		"shorter",
		"longer",
		"increasing",
		"decreasing"
	]);
	function colorMix(e, o) {
		let n = null, r = null, l = null, s = !1;
		for (let i = 0; i < e.value.length; i++) {
			const N = e.value[i];
			if (!t.isWhiteSpaceOrCommentNode(N)) {
				if (!(n || t.isTokenNode(N) && a.isTokenIdent(N.value) && "in" === toLowerCaseAZ(N.value[4].value))) return colorMixRectangular("oklab", colorMixComponents(e.value, o));
				if (t.isTokenNode(N) && a.isTokenIdent(N.value)) {
					if (!n && "in" === toLowerCaseAZ(N.value[4].value)) {
						n = N;
						continue;
					}
					if (n && !r) {
						r = toLowerCaseAZ(N.value[4].value);
						continue;
					}
					if (n && r && !l && c.has(r)) {
						l = toLowerCaseAZ(N.value[4].value);
						continue;
					}
					if (n && r && l && !s && "hue" === toLowerCaseAZ(N.value[4].value)) {
						s = !0;
						continue;
					}
					return !1;
				}
				return !(!t.isTokenNode(N) || !a.isTokenComma(N.value)) && !!r && (l || s ? !!(r && l && s && c.has(r) && p.has(l)) && colorMixPolar(r, l, colorMixComponents(e.value.slice(i + 1), o)) : u.has(r) ? colorMixRectangular(r, colorMixComponents(e.value.slice(i + 1), o)) : !!c.has(r) && colorMixPolar(r, "shorter", colorMixComponents(e.value.slice(i + 1), o)));
			}
		}
		return !1;
	}
	function colorMixComponents(e, o) {
		const n = [];
		let l = 1, s = !1, i = !1;
		for (let l = 0; l < e.length; l++) {
			let u = e[l];
			if (!t.isWhiteSpaceOrCommentNode(u)) {
				if (!t.isTokenNode(u) || !a.isTokenComma(u.value)) {
					if (!s) {
						const e = o(u);
						if (e) {
							s = e;
							continue;
						}
					}
					if (!i) {
						if (t.isFunctionNode(u) && r.mathFunctionNames.has(toLowerCaseAZ(u.getName()))) {
							if ([[u]] = r.calcFromComponentValues([[u]], {
								censorIntoStandardRepresentableValues: !0,
								precision: -1,
								toCanonicalUnits: !0,
								rawPercentages: !0
							}), !u || !t.isTokenNode(u) || !a.isTokenNumeric(u.value)) return !1;
							Number.isNaN(u.value[4].value) && (u.value[4].value = 0);
						}
						if (t.isTokenNode(u) && a.isTokenPercentage(u.value) && u.value[4].value >= 0) {
							i = u.value[4].value;
							continue;
						}
					}
					return !1;
				}
				if (!s) return !1;
				n.push({
					color: s,
					percentage: i
				}), s = !1, i = !1;
			}
		}
		if (!s) return !1;
		n.push({
			color: s,
			percentage: i
		});
		let u = 0, c = 0;
		for (let e = 0; e < n.length; e++) {
			const o = n[e].percentage;
			if (!1 !== o) {
				if (o < 0 || o > 100) return !1;
				u += o;
			} else c++;
		}
		const p = Math.max(0, 100 - u);
		u = 0;
		for (let e = 0; e < n.length; e++) !1 === n[e].percentage && (n[e].percentage = p / c), u += n[e].percentage;
		if (0 === u) return {
			colors: [{
				color: {
					channels: [
						0,
						0,
						0
					],
					colorNotation: exports.ColorNotation.sRGB,
					alpha: 0,
					syntaxFlags: /* @__PURE__ */ new Set()
				},
				percentage: 0
			}],
			alphaMultiplier: 0
		};
		if (u > 100) for (let e = 0; e < n.length; e++) {
			let o = n[e].percentage;
			o = o / u * 100, n[e].percentage = o;
		}
		if (u < 100) {
			l = u / 100;
			for (let e = 0; e < n.length; e++) {
				let o = n[e].percentage;
				o = o / u * 100, n[e].percentage = o;
			}
		}
		return {
			colors: n,
			alphaMultiplier: l
		};
	}
	function colorMixRectangular(e, o) {
		if (!o || !o.colors.length) return !1;
		const a = o.colors.slice();
		a.reverse();
		let n = exports.ColorNotation.RGB;
		switch (e) {
			case "srgb":
				n = exports.ColorNotation.RGB;
				break;
			case "srgb-linear":
				n = exports.ColorNotation.Linear_sRGB;
				break;
			case "display-p3":
				n = exports.ColorNotation.Display_P3;
				break;
			case "display-p3-linear":
				n = exports.ColorNotation.Linear_Display_P3;
				break;
			case "a98-rgb":
				n = exports.ColorNotation.A98_RGB;
				break;
			case "prophoto-rgb":
				n = exports.ColorNotation.ProPhoto_RGB;
				break;
			case "rec2020":
				n = exports.ColorNotation.Rec2020;
				break;
			case "lab":
				n = exports.ColorNotation.Lab;
				break;
			case "oklab":
				n = exports.ColorNotation.OKLab;
				break;
			case "xyz-d50":
				n = exports.ColorNotation.XYZ_D50;
				break;
			case "xyz":
			case "xyz-d65":
				n = exports.ColorNotation.XYZ_D65;
				break;
			default: return !1;
		}
		if (1 === a.length) {
			const e = colorDataTo(a[0].color, n);
			return e.colorNotation = n, e.syntaxFlags.add(exports.SyntaxFlag.ColorMixVariadic), "number" != typeof e.alpha ? !1 : (e.alpha = e.alpha * o.alphaMultiplier, e);
		}
		for (; a.length >= 2;) {
			const e = a.pop(), o = a.pop();
			if (!e || !o) return !1;
			const t = colorMixRectangularPair(n, e.color, e.percentage, o.color, o.percentage);
			if (!t) return !1;
			a.push({
				color: t,
				percentage: e.percentage + o.percentage
			});
		}
		const t = a[0]?.color;
		return !!t && (o.colors.some((e) => e.color.syntaxFlags.has(exports.SyntaxFlag.Experimental)) && t.syntaxFlags.add(exports.SyntaxFlag.Experimental), "number" == typeof t.alpha && (t.alpha = t.alpha * o.alphaMultiplier, 2 !== o.colors.length && t.syntaxFlags.add(exports.SyntaxFlag.ColorMixVariadic), t));
	}
	function colorMixRectangularPair(e, o, a, n, t) {
		const r = a / (a + t);
		let l = o.alpha;
		if ("number" != typeof l) return !1;
		let s = n.alpha;
		if ("number" != typeof s) return !1;
		l = Number.isNaN(l) ? s : l, s = Number.isNaN(s) ? l : s;
		const i = colorDataTo(o, e).channels, u = colorDataTo(n, e).channels;
		i[0] = fillInMissingComponent(i[0], u[0]), u[0] = fillInMissingComponent(u[0], i[0]), i[1] = fillInMissingComponent(i[1], u[1]), u[1] = fillInMissingComponent(u[1], i[1]), i[2] = fillInMissingComponent(i[2], u[2]), u[2] = fillInMissingComponent(u[2], i[2]), i[0] = premultiply(i[0], l), i[1] = premultiply(i[1], l), i[2] = premultiply(i[2], l), u[0] = premultiply(u[0], s), u[1] = premultiply(u[1], s), u[2] = premultiply(u[2], s);
		const c = interpolate(l, s, r);
		return {
			colorNotation: e,
			channels: [
				un_premultiply(interpolate(i[0], u[0], r), c),
				un_premultiply(interpolate(i[1], u[1], r), c),
				un_premultiply(interpolate(i[2], u[2], r), c)
			],
			alpha: c,
			syntaxFlags: /* @__PURE__ */ new Set([exports.SyntaxFlag.ColorMix])
		};
	}
	function colorMixPolar(e, o, a) {
		if (!a || !a.colors.length) return !1;
		const n = a.colors.slice();
		n.reverse();
		let t = exports.ColorNotation.HSL;
		switch (e) {
			case "hsl":
				t = exports.ColorNotation.HSL;
				break;
			case "hwb":
				t = exports.ColorNotation.HWB;
				break;
			case "lch":
				t = exports.ColorNotation.LCH;
				break;
			case "oklch":
				t = exports.ColorNotation.OKLCH;
				break;
			default: return !1;
		}
		if (1 === n.length) {
			const e = colorDataTo(n[0].color, t);
			return e.colorNotation = t, e.syntaxFlags.add(exports.SyntaxFlag.ColorMixVariadic), "number" != typeof e.alpha ? !1 : (e.alpha = e.alpha * a.alphaMultiplier, e);
		}
		for (; n.length >= 2;) {
			const e = n.pop(), a = n.pop();
			if (!e || !a) return !1;
			const r = colorMixPolarPair(t, o, e.color, e.percentage, a.color, a.percentage);
			if (!r) return !1;
			n.push({
				color: r,
				percentage: e.percentage + a.percentage
			});
		}
		const r = n[0]?.color;
		return !!r && (a.colors.some((e) => e.color.syntaxFlags.has(exports.SyntaxFlag.Experimental)) && r.syntaxFlags.add(exports.SyntaxFlag.Experimental), "number" == typeof r.alpha && (r.alpha = r.alpha * a.alphaMultiplier, 2 !== a.colors.length && r.syntaxFlags.add(exports.SyntaxFlag.ColorMixVariadic), r));
	}
	function colorMixPolarPair(e, o, a, n, t, r) {
		const l = n / (n + r);
		let s = 0, i = 0, u = 0, c = 0, p = 0, N = 0, m = a.alpha;
		if ("number" != typeof m) return !1;
		let h = t.alpha;
		if ("number" != typeof h) return !1;
		m = Number.isNaN(m) ? h : m, h = Number.isNaN(h) ? m : h;
		const x = colorDataTo(a, e).channels, y = colorDataTo(t, e).channels;
		switch (e) {
			case exports.ColorNotation.HSL:
			case exports.ColorNotation.HWB:
				s = x[0], i = y[0], u = x[1], c = y[1], p = x[2], N = y[2];
				break;
			case exports.ColorNotation.LCH:
			case exports.ColorNotation.OKLCH: u = x[0], c = y[0], p = x[1], N = y[1], s = x[2], i = y[2];
		}
		s = fillInMissingComponent(s, i), Number.isNaN(s) && (s = 0), i = fillInMissingComponent(i, s), Number.isNaN(i) && (i = 0), u = fillInMissingComponent(u, c), c = fillInMissingComponent(c, u), p = fillInMissingComponent(p, N), N = fillInMissingComponent(N, p);
		const b = i - s;
		switch (o) {
			case "shorter":
				b > 180 ? s += 360 : b < -180 && (i += 360);
				break;
			case "longer":
				-180 < b && b < 180 && (b > 0 ? s += 360 : i += 360);
				break;
			case "increasing":
				b < 0 && (i += 360);
				break;
			case "decreasing":
				b > 0 && (s += 360);
				break;
			default: throw new Error("Unknown hue interpolation method");
		}
		u = premultiply(u, m), p = premultiply(p, m), c = premultiply(c, h), N = premultiply(N, h);
		let C = [
			0,
			0,
			0
		];
		const d = interpolate(m, h, l);
		switch (e) {
			case exports.ColorNotation.HSL:
			case exports.ColorNotation.HWB:
				C = [
					interpolate(s, i, l),
					un_premultiply(interpolate(u, c, l), d),
					un_premultiply(interpolate(p, N, l), d)
				];
				break;
			case exports.ColorNotation.LCH:
			case exports.ColorNotation.OKLCH: C = [
				un_premultiply(interpolate(u, c, l), d),
				un_premultiply(interpolate(p, N, l), d),
				interpolate(s, i, l)
			];
		}
		return {
			colorNotation: e,
			channels: C,
			alpha: d,
			syntaxFlags: /* @__PURE__ */ new Set([exports.SyntaxFlag.ColorMix])
		};
	}
	function fillInMissingComponent(e, o) {
		return Number.isNaN(e) ? o : e;
	}
	function interpolate(e, o, a) {
		return e * a + o * (1 - a);
	}
	function premultiply(e, o) {
		return Number.isNaN(o) ? e : Number.isNaN(e) ? NaN : e * o;
	}
	function un_premultiply(e, o) {
		return 0 === o || Number.isNaN(o) ? e : Number.isNaN(e) ? NaN : e / o;
	}
	function hex(e) {
		const o = toLowerCaseAZ(e[4].value);
		if (o.match(/[^a-f0-9]/)) return !1;
		const a = {
			colorNotation: exports.ColorNotation.HEX,
			channels: [
				0,
				0,
				0
			],
			alpha: 1,
			syntaxFlags: /* @__PURE__ */ new Set([exports.SyntaxFlag.Hex])
		}, n = o.length;
		if (3 === n) {
			const e = o[0], n = o[1], t = o[2];
			return a.channels = [
				parseInt(e + e, 16) / 255,
				parseInt(n + n, 16) / 255,
				parseInt(t + t, 16) / 255
			], a;
		}
		if (6 === n) {
			const e = o[0] + o[1], n = o[2] + o[3], t = o[4] + o[5];
			return a.channels = [
				parseInt(e, 16) / 255,
				parseInt(n, 16) / 255,
				parseInt(t, 16) / 255
			], a;
		}
		if (4 === n) {
			const e = o[0], n = o[1], t = o[2], r = o[3];
			return a.channels = [
				parseInt(e + e, 16) / 255,
				parseInt(n + n, 16) / 255,
				parseInt(t + t, 16) / 255
			], a.alpha = parseInt(r + r, 16) / 255, a.syntaxFlags.add(exports.SyntaxFlag.HasAlpha), a;
		}
		if (8 === n) {
			const e = o[0] + o[1], n = o[2] + o[3], t = o[4] + o[5], r = o[6] + o[7];
			return a.channels = [
				parseInt(e, 16) / 255,
				parseInt(n, 16) / 255,
				parseInt(t, 16) / 255
			], a.alpha = parseInt(r, 16) / 255, a.syntaxFlags.add(exports.SyntaxFlag.HasAlpha), a;
		}
		return !1;
	}
	function normalizeHue(e) {
		if (a.isTokenNumber(e)) return e[4].value = e[4].value % 360, e[1] = e[4].value.toString(), e;
		if (a.isTokenDimension(e)) {
			let o = e[4].value;
			switch (toLowerCaseAZ(e[4].unit)) {
				case "deg": break;
				case "rad":
					o = 180 * e[4].value / Math.PI;
					break;
				case "grad":
					o = .9 * e[4].value;
					break;
				case "turn":
					o = 360 * e[4].value;
					break;
				default: return !1;
			}
			return o %= 360, [
				a.TokenType.Number,
				o.toString(),
				e[2],
				e[3],
				{
					value: o,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function normalize_legacy_HSL_ChannelValues(e, o, n) {
		if (0 === o) {
			const o = normalizeHue(e);
			return !1 !== o && (a.isTokenDimension(e) && n.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues), o);
		}
		if (a.isTokenPercentage(e)) {
			3 === o ? n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha) : n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = normalize(e[4].value, 1, 0, 100);
			return 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			if (3 !== o) return !1;
			let n = normalize(e[4].value, 1, 0, 100);
			return 3 === o && (n = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				n.toString(),
				e[2],
				e[3],
				{
					value: n,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function normalize_modern_HSL_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === toLowerCaseAZ(e[4].value)) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (0 === o) {
			const o = normalizeHue(e);
			return !1 !== o && (a.isTokenDimension(e) && n.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues), o);
		}
		if (a.isTokenPercentage(e)) {
			3 === o ? n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha) : n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = e[4].value;
			return 3 === o ? t = normalize(e[4].value, 100, 0, 1) : 1 === o && (t = normalize(e[4].value, 1, 0, 2147483647)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = e[4].value;
			return 3 === o ? t = normalize(e[4].value, 1, 0, 1) : 1 === o && (t = normalize(e[4].value, 1, 0, 2147483647)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function threeChannelLegacySyntax(e, o, n, l) {
		const s = [], i = [], u = [], c = [], p = {
			colorNotation: n,
			channels: [
				0,
				0,
				0
			],
			alpha: 1,
			syntaxFlags: new Set(l)
		};
		let N = s;
		for (let o = 0; o < e.value.length; o++) {
			let n = e.value[o];
			if (!t.isWhitespaceNode(n) && !t.isCommentNode(n)) {
				if (t.isTokenNode(n) && a.isTokenComma(n.value)) {
					if (N === s) {
						N = i;
						continue;
					}
					if (N === i) {
						N = u;
						continue;
					}
					if (N === u) {
						N = c;
						continue;
					}
					if (N === c) return !1;
				}
				if (t.isFunctionNode(n)) {
					if (N === c && "var" === n.getName().toLowerCase()) {
						p.syntaxFlags.add(exports.SyntaxFlag.HasVariableAlpha), N.push(n);
						continue;
					}
					if (!r.mathFunctionNames.has(n.getName().toLowerCase())) return !1;
					const [[e]] = r.calcFromComponentValues([[n]], {
						censorIntoStandardRepresentableValues: !0,
						precision: -1,
						toCanonicalUnits: !0,
						rawPercentages: !0
					});
					if (!e || !t.isTokenNode(e) || !a.isTokenNumeric(e.value)) return !1;
					Number.isNaN(e.value[4].value) && (e.value[4].value = 0), n = e;
				}
				if (!t.isTokenNode(n)) return !1;
				N.push(n);
			}
		}
		if (1 !== N.length) return !1;
		if (1 !== s.length || 1 !== i.length || 1 !== u.length) return !1;
		if (!t.isTokenNode(s[0]) || !t.isTokenNode(i[0]) || !t.isTokenNode(u[0])) return !1;
		const m = o(s[0].value, 0, p);
		if (!m || !a.isTokenNumber(m)) return !1;
		const h = o(i[0].value, 1, p);
		if (!h || !a.isTokenNumber(h)) return !1;
		const x = o(u[0].value, 2, p);
		if (!x || !a.isTokenNumber(x)) return !1;
		const y = [
			m,
			h,
			x
		];
		if (1 === c.length) if (p.syntaxFlags.add(exports.SyntaxFlag.HasAlpha), t.isTokenNode(c[0])) {
			const e = o(c[0].value, 3, p);
			if (!e || !a.isTokenNumber(e)) return !1;
			y.push(e);
		} else p.alpha = c[0];
		return p.channels = [
			y[0][4].value,
			y[1][4].value,
			y[2][4].value
		], 4 === y.length && (p.alpha = y[3][4].value), p;
	}
	function threeChannelSpaceSeparated(e, o, n, l, s) {
		const i = [], u = [], c = [], p = [];
		let N, m, h = !1;
		const x = {
			colorNotation: n,
			channels: [
				0,
				0,
				0
			],
			alpha: 1,
			syntaxFlags: new Set(l)
		};
		let y = i;
		for (let o = 0; o < e.value.length; o++) {
			let l = e.value[o];
			if (t.isWhitespaceNode(l) || t.isCommentNode(l)) for (; t.isWhitespaceNode(e.value[o + 1]) || t.isCommentNode(e.value[o + 1]);) o++;
			else if (y === i && i.length && (y = u), y === u && u.length && (y = c), t.isTokenNode(l) && a.isTokenDelim(l.value) && "/" === l.value[4].value) {
				if (y === p) return !1;
				y = p;
			} else {
				if (t.isFunctionNode(l)) {
					if (y === p && "var" === l.getName().toLowerCase()) {
						x.syntaxFlags.add(exports.SyntaxFlag.HasVariableAlpha), y.push(l);
						continue;
					}
					if (!r.mathFunctionNames.has(l.getName().toLowerCase())) return !1;
					const [[e]] = r.calcFromComponentValues([[l]], {
						censorIntoStandardRepresentableValues: !0,
						globals: m,
						precision: -1,
						toCanonicalUnits: !0,
						rawPercentages: !0
					});
					if (!e || !t.isTokenNode(e) || !a.isTokenNumeric(e.value)) return !1;
					Number.isNaN(e.value[4].value) && (e.value[4].value = 0), l = e;
				}
				if (y === i && 0 === i.length && t.isTokenNode(l) && a.isTokenIdent(l.value) && "from" === l.value[4].value.toLowerCase()) {
					if (h) return !1;
					for (; t.isWhitespaceNode(e.value[o + 1]) || t.isCommentNode(e.value[o + 1]);) o++;
					if (o++, l = e.value[o], h = s(l), !1 === h) return !1;
					h.syntaxFlags.has(exports.SyntaxFlag.Experimental) && x.syntaxFlags.add(exports.SyntaxFlag.Experimental), x.syntaxFlags.add(exports.SyntaxFlag.RelativeColorSyntax), h.colorNotation !== n && (h = colorDataTo(h, n)), N = normalizeRelativeColorDataChannels(h), m = noneToZeroInRelativeColorDataChannels(N);
				} else {
					if (!t.isTokenNode(l)) return !1;
					if (a.isTokenIdent(l.value) && N) {
						const e = l.value[4].value.toLowerCase();
						if (N.has(e)) {
							y.push(new t.TokenNode(N.get(e)));
							continue;
						}
					}
					y.push(l);
				}
			}
		}
		if (1 !== y.length) return !1;
		if (1 !== i.length || 1 !== u.length || 1 !== c.length) return !1;
		if (!t.isTokenNode(i[0]) || !t.isTokenNode(u[0]) || !t.isTokenNode(c[0])) return !1;
		if (N && !N.has("alpha")) return !1;
		const b = o(i[0].value, 0, x);
		if (!b || !a.isTokenNumber(b)) return !1;
		const C = o(u[0].value, 1, x);
		if (!C || !a.isTokenNumber(C)) return !1;
		const d = o(c[0].value, 2, x);
		if (!d || !a.isTokenNumber(d)) return !1;
		const g = [
			b,
			C,
			d
		];
		if (1 === p.length) if (x.syntaxFlags.add(exports.SyntaxFlag.HasAlpha), t.isTokenNode(p[0])) {
			const e = o(p[0].value, 3, x);
			if (!e || !a.isTokenNumber(e)) return !1;
			g.push(e);
		} else x.alpha = p[0];
		else if (N && N.has("alpha")) {
			const e = o(N.get("alpha"), 3, x);
			if (!e || !a.isTokenNumber(e)) return !1;
			g.push(e);
		}
		return x.channels = [
			g[0][4].value,
			g[1][4].value,
			g[2][4].value
		], 4 === g.length && (x.alpha = g[3][4].value), x;
	}
	function hsl(e, o) {
		if (e.value.some((e) => t.isTokenNode(e) && a.isTokenComma(e.value))) {
			const o = hslCommaSeparated(e);
			if (!1 !== o) return o;
		}
		{
			const a = hslSpaceSeparated(e, o);
			if (!1 !== a) return a;
		}
		return !1;
	}
	function hslCommaSeparated(e) {
		return threeChannelLegacySyntax(e, normalize_legacy_HSL_ChannelValues, exports.ColorNotation.HSL, [exports.SyntaxFlag.LegacyHSL]);
	}
	function hslSpaceSeparated(e, o) {
		return threeChannelSpaceSeparated(e, normalize_modern_HSL_ChannelValues, exports.ColorNotation.HSL, [], o);
	}
	function normalize_HWB_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === toLowerCaseAZ(e[4].value)) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (0 === o) {
			const o = normalizeHue(e);
			return !1 !== o && (a.isTokenDimension(e) && n.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues), o);
		}
		if (a.isTokenPercentage(e)) {
			3 === o ? n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha) : n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = e[4].value;
			return 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = e[4].value;
			return 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function normalize_Lab_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === toLowerCaseAZ(e[4].value)) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (a.isTokenPercentage(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = normalize(e[4].value, 1, 0, 100);
			return 1 === o || 2 === o ? t = normalize(e[4].value, .8, -2147483647, 2147483647) : 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = normalize(e[4].value, 1, 0, 100);
			return 1 === o || 2 === o ? t = normalize(e[4].value, 1, -2147483647, 2147483647) : 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function lab(e, o) {
		return threeChannelSpaceSeparated(e, normalize_Lab_ChannelValues, exports.ColorNotation.Lab, [], o);
	}
	function normalize_LCH_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === toLowerCaseAZ(e[4].value)) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (2 === o) {
			const o = normalizeHue(e);
			return !1 !== o && (a.isTokenDimension(e) && n.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues), o);
		}
		if (a.isTokenPercentage(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = normalize(e[4].value, 1, 0, 100);
			return 1 === o ? t = normalize(e[4].value, 100 / 150, 0, 2147483647) : 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = normalize(e[4].value, 1, 0, 100);
			return 1 === o ? t = normalize(e[4].value, 1, 0, 2147483647) : 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function lch(e, o) {
		return threeChannelSpaceSeparated(e, normalize_LCH_ChannelValues, exports.ColorNotation.LCH, [], o);
	}
	var N = /* @__PURE__ */ new Map();
	for (const [e, o] of Object.entries(n.namedColors)) N.set(e, o);
	function namedColor(e) {
		const o = N.get(toLowerCaseAZ(e));
		return !!o && {
			colorNotation: exports.ColorNotation.RGB,
			channels: [
				o[0] / 255,
				o[1] / 255,
				o[2] / 255
			],
			alpha: 1,
			syntaxFlags: /* @__PURE__ */ new Set([exports.SyntaxFlag.ColorKeyword, exports.SyntaxFlag.NamedColor])
		};
	}
	function normalize_OKLab_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === toLowerCaseAZ(e[4].value)) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (a.isTokenPercentage(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = normalize(e[4].value, 100, 0, 1);
			return 1 === o || 2 === o ? t = normalize(e[4].value, 250, -2147483647, 2147483647) : 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = normalize(e[4].value, 1, 0, 1);
			return 1 === o || 2 === o ? t = normalize(e[4].value, 1, -2147483647, 2147483647) : 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function oklab(e, o) {
		return threeChannelSpaceSeparated(e, normalize_OKLab_ChannelValues, exports.ColorNotation.OKLab, [], o);
	}
	function normalize_OKLCH_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === toLowerCaseAZ(e[4].value)) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (2 === o) {
			const o = normalizeHue(e);
			return !1 !== o && (a.isTokenDimension(e) && n.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues), o);
		}
		if (a.isTokenPercentage(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = normalize(e[4].value, 100, 0, 1);
			return 1 === o ? t = normalize(e[4].value, 250, 0, 2147483647) : 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = normalize(e[4].value, 1, 0, 1);
			return 1 === o ? t = normalize(e[4].value, 1, 0, 2147483647) : 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function oklch(e, o) {
		return threeChannelSpaceSeparated(e, normalize_OKLCH_ChannelValues, exports.ColorNotation.OKLCH, [], o);
	}
	function normalize_legacy_sRGB_ChannelValues(e, o, n) {
		if (a.isTokenPercentage(e)) {
			3 === o ? n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha) : n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			const t = normalize(e[4].value, 100, 0, 1);
			return [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = normalize(e[4].value, 255, 0, 1);
			return 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function normalize_modern_sRGB_ChannelValues(e, o, n) {
		if (a.isTokenIdent(e) && "none" === e[4].value.toLowerCase()) return n.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords), [
			a.TokenType.Number,
			"none",
			e[2],
			e[3],
			{
				value: NaN,
				type: a.NumberType.Number
			}
		];
		if (a.isTokenPercentage(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);
			let t = normalize(e[4].value, 100, -2147483647, 2147483647);
			return 3 === o && (t = normalize(e[4].value, 100, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		if (a.isTokenNumber(e)) {
			3 !== o && n.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);
			let t = normalize(e[4].value, 255, -2147483647, 2147483647);
			return 3 === o && (t = normalize(e[4].value, 1, 0, 1)), [
				a.TokenType.Number,
				t.toString(),
				e[2],
				e[3],
				{
					value: t,
					type: a.NumberType.Number
				}
			];
		}
		return !1;
	}
	function rgb(e, o) {
		if (e.value.some((e) => t.isTokenNode(e) && a.isTokenComma(e.value))) {
			const o = rgbCommaSeparated(e);
			if (!1 !== o) return (!o.syntaxFlags.has(exports.SyntaxFlag.HasNumberValues) || !o.syntaxFlags.has(exports.SyntaxFlag.HasPercentageValues)) && o;
		} else {
			const a = rgbSpaceSeparated(e, o);
			if (!1 !== a) return a;
		}
		return !1;
	}
	function rgbCommaSeparated(e) {
		return threeChannelLegacySyntax(e, normalize_legacy_sRGB_ChannelValues, exports.ColorNotation.RGB, [exports.SyntaxFlag.LegacyRGB]);
	}
	function rgbSpaceSeparated(e, o) {
		return threeChannelSpaceSeparated(e, normalize_modern_sRGB_ChannelValues, exports.ColorNotation.RGB, [], o);
	}
	function XYZ_D50_to_sRGB_Gamut(e) {
		const o = n.XYZ_D50_to_sRGB(e);
		if (n.inGamut(o)) return n.clip(o);
		let a = e;
		return a = n.XYZ_D50_to_OKLCH(a), a[0] < 1e-6 && (a = [
			0,
			0,
			0
		]), a[0] > .999999 && (a = [
			1,
			0,
			0
		]), n.gam_sRGB(n.mapGamutRayTrace(a, oklch_to_lin_srgb, lin_srgb_to_oklch));
	}
	function oklch_to_lin_srgb(e) {
		return e = n.OKLCH_to_OKLab(e), e = n.OKLab_to_XYZ(e), n.XYZ_to_lin_sRGB(e);
	}
	function lin_srgb_to_oklch(e) {
		return e = n.lin_sRGB_to_XYZ(e), e = n.XYZ_to_OKLab(e), n.OKLab_to_OKLCH(e);
	}
	function contrastColor(e, o) {
		let a = !1;
		for (let n = 0; n < e.value.length; n++) {
			const r = e.value[n];
			if (!t.isWhitespaceNode(r) && !t.isCommentNode(r) && (a || (a = o(r), !a))) return !1;
		}
		if (!a) return !1;
		a.channels = convertNaNToZero(a.channels), a.channels = XYZ_D50_to_sRGB_Gamut(colorData_to_XYZ_D50(a).channels), a.colorNotation = exports.ColorNotation.sRGB;
		const r = {
			colorNotation: exports.ColorNotation.sRGB,
			channels: [
				0,
				0,
				0
			],
			alpha: 1,
			syntaxFlags: /* @__PURE__ */ new Set([exports.SyntaxFlag.ContrastColor, exports.SyntaxFlag.Experimental])
		};
		return r.channels = n.contrast_ratio_wcag_2_1(a.channels, [
			1,
			1,
			1
		]) > n.contrast_ratio_wcag_2_1(a.channels, [
			0,
			0,
			0
		]) ? [
			1,
			1,
			1
		] : [
			0,
			0,
			0
		], r;
	}
	function alpha(e, o) {
		let n, l, s = !1, i = !1, u = !1;
		const c = {
			colorNotation: exports.ColorNotation.sRGB,
			channels: [
				0,
				0,
				0
			],
			alpha: 1,
			syntaxFlags: /* @__PURE__ */ new Set([])
		};
		for (let p = 0; p < e.value.length; p++) {
			let N = e.value[p];
			if (t.isWhitespaceNode(N) || t.isCommentNode(N)) for (; t.isWhitespaceNode(e.value[p + 1]) || t.isCommentNode(e.value[p + 1]);) p++;
			else if (u && !s && !i && t.isTokenNode(N) && a.isTokenDelim(N.value) && "/" === N.value[4].value) s = !0;
			else {
				if (t.isFunctionNode(N) && r.mathFunctionNames.has(toLowerCaseAZ(N.getName()))) {
					const [[e]] = r.calcFromComponentValues([[N]], {
						censorIntoStandardRepresentableValues: !0,
						globals: l,
						precision: -1,
						toCanonicalUnits: !0,
						rawPercentages: !0
					});
					if (!e || !t.isTokenNode(e) || !a.isTokenNumeric(e.value)) return !1;
					Number.isNaN(e.value[4].value) && (e.value[4].value = 0), N = e;
				}
				if (s || i || !t.isTokenNode(N) || !a.isTokenIdent(N.value) || "from" !== toLowerCaseAZ(N.value[4].value)) {
					if (!s) return !1;
					if (i) return !1;
					if (t.isTokenNode(N)) {
						if (a.isTokenIdent(N.value) && "alpha" === toLowerCaseAZ(N.value[4].value) && n && n.has("alpha")) {
							c.alpha = n.get("alpha")[4].value, i = !0;
							continue;
						}
						const e = normalize_Color_ChannelValues(N.value, 3, c);
						if (!e || !a.isTokenNumber(e)) return !1;
						c.alpha = new t.TokenNode(e), i = !0;
						continue;
					}
					if (t.isFunctionNode(N)) {
						c.alpha = t.replaceComponentValues([[N]], (e) => {
							if (t.isTokenNode(e) && a.isTokenIdent(e.value) && "alpha" === toLowerCaseAZ(e.value[4].value) && n && n.has("alpha")) return new t.TokenNode(n.get("alpha"));
						})[0][0], i = !0;
						continue;
					}
					return !1;
				}
				if (u) return !1;
				for (; t.isWhitespaceNode(e.value[p + 1]) || t.isCommentNode(e.value[p + 1]);) p++;
				if (p++, N = e.value[p], u = o(N), !1 === u) return !1;
				n = normalizeRelativeColorDataChannels(u), l = noneToZeroInRelativeColorDataChannels(n), c.syntaxFlags = new Set(u.syntaxFlags), c.syntaxFlags.add(exports.SyntaxFlag.RelativeAlphaSyntax), c.channels = [...u.channels], c.colorNotation = u.colorNotation, c.alpha = u.alpha;
			}
		}
		return !!n && c;
	}
	function XYZ_D50_to_P3_Gamut(e) {
		const o = n.XYZ_D50_to_P3(e);
		if (n.inGamut(o)) return n.clip(o);
		let a = e;
		return a = n.XYZ_D50_to_OKLCH(a), a[0] < 1e-6 && (a = [
			0,
			0,
			0
		]), a[0] > .999999 && (a = [
			1,
			0,
			0
		]), n.gam_P3(n.mapGamutRayTrace(a, oklch_to_lin_p3, lin_p3_to_oklch));
	}
	function oklch_to_lin_p3(e) {
		return e = n.OKLCH_to_OKLab(e), e = n.OKLab_to_XYZ(e), n.XYZ_to_lin_P3(e);
	}
	function lin_p3_to_oklch(e) {
		return e = n.lin_P3_to_XYZ(e), e = n.XYZ_to_OKLab(e), n.OKLab_to_OKLCH(e);
	}
	function toPrecision(e, o = 7) {
		e = +e, o = +o;
		const a = (Math.floor(Math.abs(e)) + "").length;
		if (o > a) return +e.toFixed(o - a);
		{
			const n = 10 ** (a - o);
			return Math.round(e / n) * n;
		}
	}
	function serializeWithAlpha(e, o, n, r) {
		const l = [
			a.TokenType.CloseParen,
			")",
			-1,
			-1,
			void 0
		];
		if ("number" == typeof e.alpha) {
			const s = Math.min(1, Math.max(0, toPrecision(Number.isNaN(e.alpha) ? 0 : e.alpha)));
			return 1 === toPrecision(s, 4) ? new t.FunctionNode(o, l, r) : new t.FunctionNode(o, l, [
				...r,
				new t.WhitespaceNode([n]),
				new t.TokenNode([
					a.TokenType.Delim,
					"/",
					-1,
					-1,
					{ value: "/" }
				]),
				new t.WhitespaceNode([n]),
				new t.TokenNode([
					a.TokenType.Number,
					toPrecision(s, 4).toString(),
					-1,
					-1,
					{
						value: e.alpha,
						type: a.NumberType.Integer
					}
				])
			]);
		}
		return new t.FunctionNode(o, l, [
			...r,
			new t.WhitespaceNode([n]),
			new t.TokenNode([
				a.TokenType.Delim,
				"/",
				-1,
				-1,
				{ value: "/" }
			]),
			new t.WhitespaceNode([n]),
			e.alpha
		]);
	}
	exports.color = function color(e) {
		if (t.isFunctionNode(e)) switch (toLowerCaseAZ(e.getName())) {
			case "rgb":
			case "rgba": return rgb(e, color);
			case "hsl":
			case "hsla": return hsl(e, color);
			case "hwb": return o = color, threeChannelSpaceSeparated(e, normalize_HWB_ChannelValues, exports.ColorNotation.HWB, [], o);
			case "lab": return lab(e, color);
			case "lch": return lch(e, color);
			case "oklab": return oklab(e, color);
			case "oklch": return oklch(e, color);
			case "color": return color$1(e, color);
			case "color-mix": return colorMix(e, color);
			case "contrast-color": return contrastColor(e, color);
			case "alpha": return alpha(e, color);
		}
		var o;
		if (t.isTokenNode(e)) {
			if (a.isTokenHash(e.value)) return hex(e.value);
			if (a.isTokenIdent(e.value)) {
				const o = namedColor(e.value[4].value);
				return !1 !== o ? o : "transparent" === toLowerCaseAZ(e.value[4].value) && {
					colorNotation: exports.ColorNotation.RGB,
					channels: [
						0,
						0,
						0
					],
					alpha: 0,
					syntaxFlags: /* @__PURE__ */ new Set([exports.SyntaxFlag.ColorKeyword])
				};
			}
		}
		return !1;
	}, exports.colorDataFitsDisplayP3_Gamut = function colorDataFitsDisplayP3_Gamut(e) {
		const o = {
			...e,
			channels: [...e.channels]
		};
		return o.channels = convertPowerlessComponentsToZeroValuesForDisplay(o.channels, o.colorNotation), !colorDataTo(o, exports.ColorNotation.Display_P3).channels.find((e) => e < -1e-5 || e > 1.00001);
	}, exports.colorDataFitsRGB_Gamut = function colorDataFitsRGB_Gamut(e) {
		const o = {
			...e,
			channels: [...e.channels]
		};
		return o.channels = convertPowerlessComponentsToZeroValuesForDisplay(o.channels, o.colorNotation), !colorDataTo(o, exports.ColorNotation.RGB).channels.find((e) => e < -1e-5 || e > 1.00001);
	}, exports.serializeHSL = function serializeHSL(e, o = !0) {
		e.channels = convertPowerlessComponentsToZeroValuesForDisplay(e.channels, e.colorNotation);
		let r = e.channels.map((e) => Number.isNaN(e) ? 0 : e);
		r = o ? n.XYZ_D50_to_HSL(n.sRGB_to_XYZ_D50(XYZ_D50_to_sRGB_Gamut(colorData_to_XYZ_D50(e).channels))) : n.XYZ_D50_to_HSL(colorData_to_XYZ_D50(e).channels), r = r.map((e) => Number.isNaN(e) ? 0 : e);
		const l = Math.min(360, Math.max(0, Math.round(toPrecision(r[0])))), s = Math.min(100, Math.max(0, Math.round(toPrecision(r[1])))), i = Math.min(100, Math.max(0, Math.round(toPrecision(r[2])))), u = [
			a.TokenType.CloseParen,
			")",
			-1,
			-1,
			void 0
		], c = [
			a.TokenType.Whitespace,
			" ",
			-1,
			-1,
			void 0
		], p = [
			a.TokenType.Comma,
			",",
			-1,
			-1,
			void 0
		], N = [
			new t.TokenNode([
				a.TokenType.Number,
				l.toString(),
				-1,
				-1,
				{
					value: r[0],
					type: a.NumberType.Integer
				}
			]),
			new t.TokenNode(p),
			new t.WhitespaceNode([c]),
			new t.TokenNode([
				a.TokenType.Percentage,
				s.toString() + "%",
				-1,
				-1,
				{ value: r[1] }
			]),
			new t.TokenNode(p),
			new t.WhitespaceNode([c]),
			new t.TokenNode([
				a.TokenType.Percentage,
				i.toString() + "%",
				-1,
				-1,
				{ value: r[2] }
			])
		];
		if ("number" == typeof e.alpha) {
			const o = Math.min(1, Math.max(0, toPrecision(Number.isNaN(e.alpha) ? 0 : e.alpha)));
			return 1 === toPrecision(o, 4) ? new t.FunctionNode([
				a.TokenType.Function,
				"hsl(",
				-1,
				-1,
				{ value: "hsl" }
			], u, N) : new t.FunctionNode([
				a.TokenType.Function,
				"hsla(",
				-1,
				-1,
				{ value: "hsla" }
			], u, [
				...N,
				new t.TokenNode(p),
				new t.WhitespaceNode([c]),
				new t.TokenNode([
					a.TokenType.Number,
					toPrecision(o, 4).toString(),
					-1,
					-1,
					{
						value: e.alpha,
						type: a.NumberType.Number
					}
				])
			]);
		}
		return new t.FunctionNode([
			a.TokenType.Function,
			"hsla(",
			-1,
			-1,
			{ value: "hsla" }
		], u, [
			...N,
			new t.TokenNode(p),
			new t.WhitespaceNode([c]),
			e.alpha
		]);
	}, exports.serializeOKLCH = function serializeOKLCH(e) {
		e.channels = convertPowerlessComponentsToZeroValuesForDisplay(e.channels, e.colorNotation);
		let o = e.channels.map((e) => Number.isNaN(e) ? 0 : e);
		e.colorNotation !== exports.ColorNotation.OKLCH && (o = n.XYZ_D50_to_OKLCH(colorData_to_XYZ_D50(e).channels));
		const r = toPrecision(o[0], 6), l = toPrecision(o[1], 6), s = toPrecision(o[2], 6), i = [
			a.TokenType.Function,
			"oklch(",
			-1,
			-1,
			{ value: "oklch" }
		], u = [
			a.TokenType.Whitespace,
			" ",
			-1,
			-1,
			void 0
		];
		return serializeWithAlpha(e, i, u, [
			new t.TokenNode([
				a.TokenType.Number,
				r.toString(),
				-1,
				-1,
				{
					value: o[0],
					type: a.NumberType.Number
				}
			]),
			new t.WhitespaceNode([u]),
			new t.TokenNode([
				a.TokenType.Number,
				l.toString(),
				-1,
				-1,
				{
					value: o[1],
					type: a.NumberType.Number
				}
			]),
			new t.WhitespaceNode([u]),
			new t.TokenNode([
				a.TokenType.Number,
				s.toString(),
				-1,
				-1,
				{
					value: o[2],
					type: a.NumberType.Number
				}
			])
		]);
	}, exports.serializeP3 = function serializeP3(e, o = !0) {
		e.channels = convertPowerlessComponentsToZeroValuesForDisplay(e.channels, e.colorNotation);
		let r = e.channels.map((e) => Number.isNaN(e) ? 0 : e);
		o ? r = XYZ_D50_to_P3_Gamut(colorData_to_XYZ_D50(e).channels) : e.colorNotation !== exports.ColorNotation.Display_P3 && (r = n.XYZ_D50_to_P3(colorData_to_XYZ_D50(e).channels));
		const l = o ? Math.min(1, Math.max(0, toPrecision(r[0], 6))) : toPrecision(r[0], 6), s = o ? Math.min(1, Math.max(0, toPrecision(r[1], 6))) : toPrecision(r[1], 6), i = o ? Math.min(1, Math.max(0, toPrecision(r[2], 6))) : toPrecision(r[2], 6), u = [
			a.TokenType.Function,
			"color(",
			-1,
			-1,
			{ value: "color" }
		], c = [
			a.TokenType.Whitespace,
			" ",
			-1,
			-1,
			void 0
		];
		return serializeWithAlpha(e, u, c, [
			new t.TokenNode([
				a.TokenType.Ident,
				"display-p3",
				-1,
				-1,
				{ value: "display-p3" }
			]),
			new t.WhitespaceNode([c]),
			new t.TokenNode([
				a.TokenType.Number,
				l.toString(),
				-1,
				-1,
				{
					value: r[0],
					type: a.NumberType.Number
				}
			]),
			new t.WhitespaceNode([c]),
			new t.TokenNode([
				a.TokenType.Number,
				s.toString(),
				-1,
				-1,
				{
					value: r[1],
					type: a.NumberType.Number
				}
			]),
			new t.WhitespaceNode([c]),
			new t.TokenNode([
				a.TokenType.Number,
				i.toString(),
				-1,
				-1,
				{
					value: r[2],
					type: a.NumberType.Number
				}
			])
		]);
	}, exports.serializeRGB = function serializeRGB(e, o = !0) {
		e.channels = convertPowerlessComponentsToZeroValuesForDisplay(e.channels, e.colorNotation);
		let r = e.channels.map((e) => Number.isNaN(e) ? 0 : e);
		r = o ? XYZ_D50_to_sRGB_Gamut(colorData_to_XYZ_D50(e).channels) : n.XYZ_D50_to_sRGB(colorData_to_XYZ_D50(e).channels);
		const l = Math.min(255, Math.max(0, Math.round(255 * toPrecision(r[0])))), s = Math.min(255, Math.max(0, Math.round(255 * toPrecision(r[1])))), i = Math.min(255, Math.max(0, Math.round(255 * toPrecision(r[2])))), u = [
			a.TokenType.CloseParen,
			")",
			-1,
			-1,
			void 0
		], c = [
			a.TokenType.Whitespace,
			" ",
			-1,
			-1,
			void 0
		], p = [
			a.TokenType.Comma,
			",",
			-1,
			-1,
			void 0
		], N = [
			new t.TokenNode([
				a.TokenType.Number,
				l.toString(),
				-1,
				-1,
				{
					value: Math.min(255, 255 * Math.max(0, r[0])),
					type: a.NumberType.Integer
				}
			]),
			new t.TokenNode(p),
			new t.WhitespaceNode([c]),
			new t.TokenNode([
				a.TokenType.Number,
				s.toString(),
				-1,
				-1,
				{
					value: Math.min(255, 255 * Math.max(0, r[1])),
					type: a.NumberType.Integer
				}
			]),
			new t.TokenNode(p),
			new t.WhitespaceNode([c]),
			new t.TokenNode([
				a.TokenType.Number,
				i.toString(),
				-1,
				-1,
				{
					value: Math.min(255, 255 * Math.max(0, r[2])),
					type: a.NumberType.Integer
				}
			])
		];
		if ("number" == typeof e.alpha) {
			const o = Math.min(1, Math.max(0, toPrecision(Number.isNaN(e.alpha) ? 0 : e.alpha)));
			return 1 === toPrecision(o, 4) ? new t.FunctionNode([
				a.TokenType.Function,
				"rgb(",
				-1,
				-1,
				{ value: "rgb" }
			], u, N) : new t.FunctionNode([
				a.TokenType.Function,
				"rgba(",
				-1,
				-1,
				{ value: "rgba" }
			], u, [
				...N,
				new t.TokenNode(p),
				new t.WhitespaceNode([c]),
				new t.TokenNode([
					a.TokenType.Number,
					toPrecision(o, 4).toString(),
					-1,
					-1,
					{
						value: e.alpha,
						type: a.NumberType.Number
					}
				])
			]);
		}
		return new t.FunctionNode([
			a.TokenType.Function,
			"rgba(",
			-1,
			-1,
			{ value: "rgba" }
		], u, [
			...N,
			new t.TokenNode(p),
			new t.WhitespaceNode([c]),
			e.alpha
		]);
	};
}));
//#endregion
//#region node_modules/@asamuzakjp/css-color/dist/cjs/index.cjs
var require_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_exports = {};
	__export(index_exports, {
		convert: () => convert,
		cssCalc: () => cssCalc2,
		isColor: () => isColor2,
		resolve: () => resolve,
		utils: () => utils
	});
	module.exports = __toCommonJS(index_exports);
	var import_css_calc4 = require_dist$2();
	var import_css_tokenizer4 = require_dist$4();
	var import_lru_cache = require_commonjs();
	var import_css_tokenizer3 = require_dist$4();
	var isString = (o) => typeof o === "string" || o instanceof String;
	var isStringOrNumber = (o) => isString(o) || typeof o === "number";
	var _DIGIT = "(?:0|[1-9]\\d*)";
	var _MATH = `clamp|max|min|exp|hypot|log|pow|sqrt|abs|sign|mod|rem|round|a?(?:cos|sin|tan)|atan2`;
	var _CALC = `calc|${_MATH}`;
	var _VAR = `var|${_CALC}`;
	var ANGLE = "deg|g?rad|turn";
	var LENGTH = "[cm]m|[dls]?v(?:[bhiw]|max|min)|in|p[ctx]|q|r?(?:[cl]h|cap|e[mx]|ic)";
	var NUM = `[+-]?(?:${_DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${_DIGIT})?`;
	var NUM_POSITIVE = `\\+?(?:${_DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${_DIGIT})?`;
	var NONE = "none";
	var PCT = `${NUM}%`;
	var SYN_FN_CALC = `^(?:${_CALC})\\(|(?<=[*\\/\\s\\(])(?:${_CALC})\\(`;
	var SYN_FN_MATH_START = `^(?:${_MATH})\\($`;
	var SYN_FN_VAR = "^var\\(|(?<=[*\\/\\s\\(])var\\(";
	var SYN_FN_VAR_START = `^(?:${_VAR})\\(`;
	var _ALPHA = `(?:\\s*\\/\\s*(?:${NUM}|${PCT}|${NONE}))?`;
	var _ALPHA_LV3 = `(?:\\s*,\\s*(?:${NUM}|${PCT}))?`;
	var _COLOR_FUNC = "(?:ok)?l(?:ab|ch)|color|hsla?|hwb|rgba?";
	var _COLOR_KEY = "[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}";
	var _CS_HUE = "(?:ok)?lch|hsl|hwb";
	var _CS_HUE_ARC = "(?:de|in)creasing|longer|shorter";
	var _NUM_ANGLE = `${NUM}(?:${ANGLE})?`;
	var _NUM_ANGLE_NONE = `(?:${NUM}(?:${ANGLE})?|${NONE})`;
	var _NUM_PCT_NONE = `(?:${NUM}|${PCT}|${NONE})`;
	var CS_HUE = `(?:${_CS_HUE})(?:\\s(?:${_CS_HUE_ARC})\\shue)?`;
	var CS_HUE_CAPT = `(${_CS_HUE})(?:\\s(${_CS_HUE_ARC})\\shue)?`;
	var CS_LAB = "(?:ok)?lab";
	var CS_LCH = "(?:ok)?lch";
	var CS_RGB = `(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?`;
	var CS_XYZ = "xyz(?:-d(?:50|65))?";
	var CS_RECT = `${CS_LAB}|${CS_RGB}|${CS_XYZ}`;
	var CS_MIX = `${CS_HUE}|${CS_RECT}`;
	var FN_COLOR = "color(";
	var FN_MIX = "color-mix(";
	var FN_REL = `(?:${_COLOR_FUNC})\\(\\s*from\\s+`;
	var FN_REL_CAPT = `(${_COLOR_FUNC})\\(\\s*from\\s+`;
	var FN_VAR = "var(";
	var SYN_FN_COLOR = `(?:${CS_RGB}|${CS_XYZ})(?:\\s+${_NUM_PCT_NONE}){3}${_ALPHA}`;
	var SYN_FN_REL = `^${FN_REL}|(?<=[\\s])${FN_REL}`;
	var SYN_HSL = `${_NUM_ANGLE_NONE}(?:\\s+${_NUM_PCT_NONE}){2}${_ALPHA}`;
	var SYN_HSL_LV3 = `${_NUM_ANGLE}(?:\\s*,\\s*${PCT}){2}${_ALPHA_LV3}`;
	var SYN_LCH = `(?:${_NUM_PCT_NONE}\\s+){2}${_NUM_ANGLE_NONE}${_ALPHA}`;
	var SYN_MOD = `${_NUM_PCT_NONE}(?:\\s+${_NUM_PCT_NONE}){2}${_ALPHA}`;
	var SYN_RGB_LV3 = `(?:${NUM}(?:\\s*,\\s*${NUM}){2}|${PCT}(?:\\s*,\\s*${PCT}){2})${_ALPHA_LV3}`;
	var SYN_COLOR_TYPE = `${_COLOR_KEY}|hsla?\\(\\s*${SYN_HSL_LV3}\\s*\\)|rgba?\\(\\s*${SYN_RGB_LV3}\\s*\\)|(?:hsla?|hwb)\\(\\s*${SYN_HSL}\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*${SYN_MOD}\\s*\\)|(?:ok)?lch\\(\\s*${SYN_LCH}\\s*\\)|color\\(\\s*${SYN_FN_COLOR}\\s*\\)`;
	var SYN_MIX_PART = `(?:${SYN_COLOR_TYPE})(?:\\s+${PCT})?`;
	var SYN_MIX = `color-mix\\(\\s*in\\s+(?:${CS_MIX})\\s*,\\s*${SYN_MIX_PART}\\s*,\\s*${SYN_MIX_PART}\\s*\\)`;
	var SYN_MIX_CAPT = `color-mix\\(\\s*in\\s+(${CS_MIX})\\s*,\\s*(${SYN_MIX_PART})\\s*,\\s*(${SYN_MIX_PART})\\s*\\)`;
	var VAL_COMP = "computedValue";
	var VAL_MIX = "mixValue";
	var VAL_SPEC = "specifiedValue";
	var NAMESPACE = "color";
	var PPTH = .001;
	var HALF = .5;
	var DUO = 2;
	var TRIA = 3;
	var QUAD = 4;
	var OCT = 8;
	var DEC = 10;
	var DOZ = 12;
	var HEX = 16;
	var SEXA = 60;
	var DEG_HALF = 180;
	var DEG = 360;
	var MAX_PCT = 100;
	var MAX_RGB = 255;
	var POW_SQR = 2;
	var POW_CUBE = 3;
	var POW_LINEAR = 2.4;
	var LINEAR_COEF = 12.92;
	var LINEAR_OFFSET = .055;
	var LAB_L = 116;
	var LAB_A = 500;
	var LAB_B = 200;
	var LAB_EPSILON = 216 / 24389;
	var LAB_KAPPA = 24389 / 27;
	var D50 = [
		.3457 / .3585,
		1,
		.2958 / .3585
	];
	var MATRIX_D50_TO_D65 = [
		[
			.955473421488075,
			-.02309845494876471,
			.06325924320057072
		],
		[
			-.0283697093338637,
			1.0099953980813041,
			.021041441191917323
		],
		[
			.012314014864481998,
			-.020507649298898964,
			1.330365926242124
		]
	];
	var MATRIX_D65_TO_D50 = [
		[
			1.0479297925449969,
			.022946870601609652,
			-.05019226628920524
		],
		[
			.02962780877005599,
			.9904344267538799,
			-.017073799063418826
		],
		[
			-.009243040646204504,
			.015055191490298152,
			.7518742814281371
		]
	];
	var MATRIX_L_RGB_TO_XYZ = [
		[
			506752 / 1228815,
			87881 / 245763,
			12673 / 70218
		],
		[
			87098 / 409605,
			175762 / 245763,
			12673 / 175545
		],
		[
			7918 / 409605,
			87881 / 737289,
			1001167 / 1053270
		]
	];
	var MATRIX_XYZ_TO_L_RGB = [
		[
			12831 / 3959,
			-329 / 214,
			-1974 / 3959
		],
		[
			-851781 / 878810,
			1648619 / 878810,
			36519 / 878810
		],
		[
			705 / 12673,
			-2585 / 12673,
			705 / 667
		]
	];
	var MATRIX_XYZ_TO_LMS = [
		[
			.819022437996703,
			.3619062600528904,
			-.1288737815209879
		],
		[
			.0329836539323885,
			.9292868615863434,
			.0361446663506424
		],
		[
			.0481771893596242,
			.2642395317527308,
			.6335478284694309
		]
	];
	var MATRIX_LMS_TO_XYZ = [
		[
			1.2268798758459243,
			-.5578149944602171,
			.2813910456659647
		],
		[
			-.0405757452148008,
			1.112286803280317,
			-.0717110580655164
		],
		[
			-.0763729366746601,
			-.4214933324022432,
			1.5869240198367816
		]
	];
	var MATRIX_OKLAB_TO_LMS = [
		[
			1,
			.3963377773761749,
			.2158037573099136
		],
		[
			1,
			-.1055613458156586,
			-.0638541728258133
		],
		[
			1,
			-.0894841775298119,
			-1.2914855480194092
		]
	];
	var MATRIX_LMS_TO_OKLAB = [
		[
			.210454268309314,
			.7936177747023054,
			-.0040720430116193
		],
		[
			1.9779985324311684,
			-2.42859224204858,
			.450593709617411
		],
		[
			.0259040424655478,
			.7827717124575296,
			-.8086757549230774
		]
	];
	var MATRIX_P3_TO_XYZ = [
		[
			608311 / 1250200,
			189793 / 714400,
			198249 / 1000160
		],
		[
			35783 / 156275,
			247089 / 357200,
			198249 / 2500400
		],
		[
			0 / 1,
			32229 / 714400,
			5220557 / 5000800
		]
	];
	var MATRIX_REC2020_TO_XYZ = [
		[
			63426534 / 99577255,
			20160776 / 139408157,
			47086771 / 278816314
		],
		[
			26158966 / 99577255,
			472592308 / 697040785,
			8267143 / 139408157
		],
		[
			0 / 1,
			19567812 / 697040785,
			295819943 / 278816314
		]
	];
	var MATRIX_A98_TO_XYZ = [
		[
			573536 / 994567,
			263643 / 1420810,
			187206 / 994567
		],
		[
			591459 / 1989134,
			6239551 / 9945670,
			374412 / 4972835
		],
		[
			53769 / 1989134,
			351524 / 4972835,
			4929758 / 4972835
		]
	];
	var MATRIX_PROPHOTO_TO_XYZ_D50 = [
		[
			.7977666449006423,
			.13518129740053308,
			.0313477341283922
		],
		[
			.2880748288194013,
			.711835234241873,
			8993693872564e-17
		],
		[
			0,
			0,
			.8251046025104602
		]
	];
	var REG_COLOR = new RegExp(`^(?:${SYN_COLOR_TYPE})$`);
	var REG_CS_HUE = new RegExp(`^${CS_HUE_CAPT}$`);
	var REG_CS_XYZ = /^xyz(?:-d(?:50|65))?$/;
	var REG_CURRENT = /^currentColor$/i;
	var REG_FN_COLOR = new RegExp(`^color\\(\\s*(${SYN_FN_COLOR})\\s*\\)$`);
	var REG_HSL = new RegExp(`^hsla?\\(\\s*(${SYN_HSL}|${SYN_HSL_LV3})\\s*\\)$`);
	var REG_HWB = new RegExp(`^hwb\\(\\s*(${SYN_HSL})\\s*\\)$`);
	var REG_LAB = new RegExp(`^lab\\(\\s*(${SYN_MOD})\\s*\\)$`);
	var REG_LCH = new RegExp(`^lch\\(\\s*(${SYN_LCH})\\s*\\)$`);
	var REG_MIX = new RegExp(`^${SYN_MIX}$`);
	var REG_MIX_CAPT = new RegExp(`^${SYN_MIX_CAPT}$`);
	var REG_MIX_NEST = new RegExp(`${SYN_MIX}`, "g");
	var REG_OKLAB = new RegExp(`^oklab\\(\\s*(${SYN_MOD})\\s*\\)$`);
	var REG_OKLCH = new RegExp(`^oklch\\(\\s*(${SYN_LCH})\\s*\\)$`);
	var REG_SPEC = /^(?:specifi|comput)edValue$/;
	var NAMED_COLORS = {
		aliceblue: [
			240,
			248,
			255
		],
		antiquewhite: [
			250,
			235,
			215
		],
		aqua: [
			0,
			255,
			255
		],
		aquamarine: [
			127,
			255,
			212
		],
		azure: [
			240,
			255,
			255
		],
		beige: [
			245,
			245,
			220
		],
		bisque: [
			255,
			228,
			196
		],
		black: [
			0,
			0,
			0
		],
		blanchedalmond: [
			255,
			235,
			205
		],
		blue: [
			0,
			0,
			255
		],
		blueviolet: [
			138,
			43,
			226
		],
		brown: [
			165,
			42,
			42
		],
		burlywood: [
			222,
			184,
			135
		],
		cadetblue: [
			95,
			158,
			160
		],
		chartreuse: [
			127,
			255,
			0
		],
		chocolate: [
			210,
			105,
			30
		],
		coral: [
			255,
			127,
			80
		],
		cornflowerblue: [
			100,
			149,
			237
		],
		cornsilk: [
			255,
			248,
			220
		],
		crimson: [
			220,
			20,
			60
		],
		cyan: [
			0,
			255,
			255
		],
		darkblue: [
			0,
			0,
			139
		],
		darkcyan: [
			0,
			139,
			139
		],
		darkgoldenrod: [
			184,
			134,
			11
		],
		darkgray: [
			169,
			169,
			169
		],
		darkgreen: [
			0,
			100,
			0
		],
		darkgrey: [
			169,
			169,
			169
		],
		darkkhaki: [
			189,
			183,
			107
		],
		darkmagenta: [
			139,
			0,
			139
		],
		darkolivegreen: [
			85,
			107,
			47
		],
		darkorange: [
			255,
			140,
			0
		],
		darkorchid: [
			153,
			50,
			204
		],
		darkred: [
			139,
			0,
			0
		],
		darksalmon: [
			233,
			150,
			122
		],
		darkseagreen: [
			143,
			188,
			143
		],
		darkslateblue: [
			72,
			61,
			139
		],
		darkslategray: [
			47,
			79,
			79
		],
		darkslategrey: [
			47,
			79,
			79
		],
		darkturquoise: [
			0,
			206,
			209
		],
		darkviolet: [
			148,
			0,
			211
		],
		deeppink: [
			255,
			20,
			147
		],
		deepskyblue: [
			0,
			191,
			255
		],
		dimgray: [
			105,
			105,
			105
		],
		dimgrey: [
			105,
			105,
			105
		],
		dodgerblue: [
			30,
			144,
			255
		],
		firebrick: [
			178,
			34,
			34
		],
		floralwhite: [
			255,
			250,
			240
		],
		forestgreen: [
			34,
			139,
			34
		],
		fuchsia: [
			255,
			0,
			255
		],
		gainsboro: [
			220,
			220,
			220
		],
		ghostwhite: [
			248,
			248,
			255
		],
		gold: [
			255,
			215,
			0
		],
		goldenrod: [
			218,
			165,
			32
		],
		gray: [
			128,
			128,
			128
		],
		green: [
			0,
			128,
			0
		],
		greenyellow: [
			173,
			255,
			47
		],
		grey: [
			128,
			128,
			128
		],
		honeydew: [
			240,
			255,
			240
		],
		hotpink: [
			255,
			105,
			180
		],
		indianred: [
			205,
			92,
			92
		],
		indigo: [
			75,
			0,
			130
		],
		ivory: [
			255,
			255,
			240
		],
		khaki: [
			240,
			230,
			140
		],
		lavender: [
			230,
			230,
			250
		],
		lavenderblush: [
			255,
			240,
			245
		],
		lawngreen: [
			124,
			252,
			0
		],
		lemonchiffon: [
			255,
			250,
			205
		],
		lightblue: [
			173,
			216,
			230
		],
		lightcoral: [
			240,
			128,
			128
		],
		lightcyan: [
			224,
			255,
			255
		],
		lightgoldenrodyellow: [
			250,
			250,
			210
		],
		lightgray: [
			211,
			211,
			211
		],
		lightgreen: [
			144,
			238,
			144
		],
		lightgrey: [
			211,
			211,
			211
		],
		lightpink: [
			255,
			182,
			193
		],
		lightsalmon: [
			255,
			160,
			122
		],
		lightseagreen: [
			32,
			178,
			170
		],
		lightskyblue: [
			135,
			206,
			250
		],
		lightslategray: [
			119,
			136,
			153
		],
		lightslategrey: [
			119,
			136,
			153
		],
		lightsteelblue: [
			176,
			196,
			222
		],
		lightyellow: [
			255,
			255,
			224
		],
		lime: [
			0,
			255,
			0
		],
		limegreen: [
			50,
			205,
			50
		],
		linen: [
			250,
			240,
			230
		],
		magenta: [
			255,
			0,
			255
		],
		maroon: [
			128,
			0,
			0
		],
		mediumaquamarine: [
			102,
			205,
			170
		],
		mediumblue: [
			0,
			0,
			205
		],
		mediumorchid: [
			186,
			85,
			211
		],
		mediumpurple: [
			147,
			112,
			219
		],
		mediumseagreen: [
			60,
			179,
			113
		],
		mediumslateblue: [
			123,
			104,
			238
		],
		mediumspringgreen: [
			0,
			250,
			154
		],
		mediumturquoise: [
			72,
			209,
			204
		],
		mediumvioletred: [
			199,
			21,
			133
		],
		midnightblue: [
			25,
			25,
			112
		],
		mintcream: [
			245,
			255,
			250
		],
		mistyrose: [
			255,
			228,
			225
		],
		moccasin: [
			255,
			228,
			181
		],
		navajowhite: [
			255,
			222,
			173
		],
		navy: [
			0,
			0,
			128
		],
		oldlace: [
			253,
			245,
			230
		],
		olive: [
			128,
			128,
			0
		],
		olivedrab: [
			107,
			142,
			35
		],
		orange: [
			255,
			165,
			0
		],
		orangered: [
			255,
			69,
			0
		],
		orchid: [
			218,
			112,
			214
		],
		palegoldenrod: [
			238,
			232,
			170
		],
		palegreen: [
			152,
			251,
			152
		],
		paleturquoise: [
			175,
			238,
			238
		],
		palevioletred: [
			219,
			112,
			147
		],
		papayawhip: [
			255,
			239,
			213
		],
		peachpuff: [
			255,
			218,
			185
		],
		peru: [
			205,
			133,
			63
		],
		pink: [
			255,
			192,
			203
		],
		plum: [
			221,
			160,
			221
		],
		powderblue: [
			176,
			224,
			230
		],
		purple: [
			128,
			0,
			128
		],
		rebeccapurple: [
			102,
			51,
			153
		],
		red: [
			255,
			0,
			0
		],
		rosybrown: [
			188,
			143,
			143
		],
		royalblue: [
			65,
			105,
			225
		],
		saddlebrown: [
			139,
			69,
			19
		],
		salmon: [
			250,
			128,
			114
		],
		sandybrown: [
			244,
			164,
			96
		],
		seagreen: [
			46,
			139,
			87
		],
		seashell: [
			255,
			245,
			238
		],
		sienna: [
			160,
			82,
			45
		],
		silver: [
			192,
			192,
			192
		],
		skyblue: [
			135,
			206,
			235
		],
		slateblue: [
			106,
			90,
			205
		],
		slategray: [
			112,
			128,
			144
		],
		slategrey: [
			112,
			128,
			144
		],
		snow: [
			255,
			250,
			250
		],
		springgreen: [
			0,
			255,
			127
		],
		steelblue: [
			70,
			130,
			180
		],
		tan: [
			210,
			180,
			140
		],
		teal: [
			0,
			128,
			128
		],
		thistle: [
			216,
			191,
			216
		],
		tomato: [
			255,
			99,
			71
		],
		turquoise: [
			64,
			224,
			208
		],
		violet: [
			238,
			130,
			238
		],
		wheat: [
			245,
			222,
			179
		],
		white: [
			255,
			255,
			255
		],
		whitesmoke: [
			245,
			245,
			245
		],
		yellow: [
			255,
			255,
			0
		],
		yellowgreen: [
			154,
			205,
			50
		]
	};
	var cacheInvalidColorValue = (cacheKey, format, nullable = false) => {
		if (format === VAL_SPEC) {
			const res2 = "";
			setCache(cacheKey, res2);
			return res2;
		}
		if (nullable) {
			setCache(cacheKey, null);
			return new NullObject();
		}
		const res = [
			"rgb",
			0,
			0,
			0,
			0
		];
		setCache(cacheKey, res);
		return res;
	};
	var resolveInvalidColorValue = (format, nullable = false) => {
		switch (format) {
			case "hsl":
			case "hwb":
			case VAL_MIX: return new NullObject();
			case VAL_SPEC: return "";
			default:
				if (nullable) return new NullObject();
				return [
					"rgb",
					0,
					0,
					0,
					0
				];
		}
	};
	var validateColorComponents = (arr, opt = {}) => {
		if (!Array.isArray(arr)) throw new TypeError(`${arr} is not an array.`);
		const { alpha = false, minLength = TRIA, maxLength = QUAD, minRange = 0, maxRange = 1, validateRange = true } = opt;
		if (!Number.isFinite(minLength)) throw new TypeError(`${minLength} is not a number.`);
		if (!Number.isFinite(maxLength)) throw new TypeError(`${maxLength} is not a number.`);
		if (!Number.isFinite(minRange)) throw new TypeError(`${minRange} is not a number.`);
		if (!Number.isFinite(maxRange)) throw new TypeError(`${maxRange} is not a number.`);
		const l = arr.length;
		if (l < minLength || l > maxLength) throw new Error(`Unexpected array length ${l}.`);
		let i = 0;
		while (i < l) {
			const v = arr[i];
			if (!Number.isFinite(v)) throw new TypeError(`${v} is not a number.`);
			else if (i < TRIA && validateRange && (v < minRange || v > maxRange)) throw new RangeError(`${v} is not between ${minRange} and ${maxRange}.`);
			else if (i === TRIA && (v < 0 || v > 1)) throw new RangeError(`${v} is not between 0 and 1.`);
			i++;
		}
		if (alpha && l === TRIA) arr.push(1);
		return arr;
	};
	var transformMatrix = (mtx, vct, skip = false) => {
		if (!Array.isArray(mtx)) throw new TypeError(`${mtx} is not an array.`);
		else if (mtx.length !== TRIA) throw new Error(`Unexpected array length ${mtx.length}.`);
		else if (!skip) for (let i of mtx) i = validateColorComponents(i, {
			maxLength: TRIA,
			validateRange: false
		});
		const [[r1c1, r1c2, r1c3], [r2c1, r2c2, r2c3], [r3c1, r3c2, r3c3]] = mtx;
		let v1, v2, v3;
		if (skip) [v1, v2, v3] = vct;
		else [v1, v2, v3] = validateColorComponents(vct, {
			maxLength: TRIA,
			validateRange: false
		});
		return [
			r1c1 * v1 + r1c2 * v2 + r1c3 * v3,
			r2c1 * v1 + r2c2 * v2 + r2c3 * v3,
			r3c1 * v1 + r3c2 * v2 + r3c3 * v3
		];
	};
	var normalizeColorComponents = (colorA, colorB, skip = false) => {
		if (!Array.isArray(colorA)) throw new TypeError(`${colorA} is not an array.`);
		else if (colorA.length !== QUAD) throw new Error(`Unexpected array length ${colorA.length}.`);
		if (!Array.isArray(colorB)) throw new TypeError(`${colorB} is not an array.`);
		else if (colorB.length !== QUAD) throw new Error(`Unexpected array length ${colorB.length}.`);
		let i = 0;
		while (i < QUAD) {
			if (colorA[i] === NONE && colorB[i] === NONE) {
				colorA[i] = 0;
				colorB[i] = 0;
			} else if (colorA[i] === NONE) colorA[i] = colorB[i];
			else if (colorB[i] === NONE) colorB[i] = colorA[i];
			i++;
		}
		if (skip) return [colorA, colorB];
		return [validateColorComponents(colorA, {
			minLength: QUAD,
			validateRange: false
		}), validateColorComponents(colorB, {
			minLength: QUAD,
			validateRange: false
		})];
	};
	var numberToHexString = (value) => {
		if (!Number.isFinite(value)) throw new TypeError(`${value} is not a number.`);
		else {
			value = Math.round(value);
			if (value < 0 || value > MAX_RGB) throw new RangeError(`${value} is not between 0 and ${MAX_RGB}.`);
		}
		let hex = value.toString(HEX);
		if (hex.length === 1) hex = `0${hex}`;
		return hex;
	};
	var angleToDeg = (angle) => {
		if (isString(angle)) angle = angle.trim();
		else throw new TypeError(`${angle} is not a string.`);
		const GRAD = DEG / 400;
		const RAD = DEG / (Math.PI * DUO);
		const reg = new RegExp(`^(${NUM})(${ANGLE})?$`);
		if (!reg.test(angle)) throw new SyntaxError(`Invalid property value: ${angle}`);
		const [, value, unit] = angle.match(reg);
		let deg;
		switch (unit) {
			case "grad":
				deg = parseFloat(value) * GRAD;
				break;
			case "rad":
				deg = parseFloat(value) * RAD;
				break;
			case "turn":
				deg = parseFloat(value) * DEG;
				break;
			default: deg = parseFloat(value);
		}
		deg %= DEG;
		if (deg < 0) deg += DEG;
		else if (Object.is(deg, -0)) deg = 0;
		return deg;
	};
	var parseAlpha = (alpha = "") => {
		if (isString(alpha)) {
			alpha = alpha.trim();
			if (!alpha) alpha = "1";
			else if (alpha === NONE) alpha = "0";
			else {
				let a;
				if (alpha.endsWith("%")) a = parseFloat(alpha) / MAX_PCT;
				else a = parseFloat(alpha);
				if (!Number.isFinite(a)) throw new TypeError(`${a} is not a finite number.`);
				if (a < PPTH) alpha = "0";
				else if (a > 1) alpha = "1";
				else alpha = a.toFixed(TRIA);
			}
		} else alpha = "1";
		return parseFloat(alpha);
	};
	var parseHexAlpha = (value) => {
		if (isString(value)) {
			if (value === "") throw new SyntaxError("Invalid property value: (empty string)");
			value = value.trim();
		} else throw new TypeError(`${value} is not a string.`);
		let alpha = parseInt(value, HEX);
		if (alpha <= 0) return 0;
		if (alpha >= MAX_RGB) return 1;
		const alphaMap = /* @__PURE__ */ new Map();
		for (let i = 1; i < MAX_PCT; i++) alphaMap.set(Math.round(i * MAX_RGB / MAX_PCT), i);
		if (alphaMap.has(alpha)) alpha = alphaMap.get(alpha) / MAX_PCT;
		else alpha = Math.round(alpha / MAX_RGB / PPTH) * PPTH;
		return parseFloat(alpha.toFixed(TRIA));
	};
	var transformRgbToLinearRgb = (rgb, skip = false) => {
		let rr, gg, bb;
		if (skip) [rr, gg, bb] = rgb;
		else [rr, gg, bb] = validateColorComponents(rgb, {
			maxLength: TRIA,
			maxRange: MAX_RGB
		});
		let r = rr / MAX_RGB;
		let g = gg / MAX_RGB;
		let b = bb / MAX_RGB;
		const COND_POW = .04045;
		if (r > COND_POW) r = Math.pow((r + LINEAR_OFFSET) / (1 + LINEAR_OFFSET), POW_LINEAR);
		else r /= LINEAR_COEF;
		if (g > COND_POW) g = Math.pow((g + LINEAR_OFFSET) / (1 + LINEAR_OFFSET), POW_LINEAR);
		else g /= LINEAR_COEF;
		if (b > COND_POW) b = Math.pow((b + LINEAR_OFFSET) / (1 + LINEAR_OFFSET), POW_LINEAR);
		else b /= LINEAR_COEF;
		return [
			r,
			g,
			b
		];
	};
	var transformRgbToXyz = (rgb, skip = false) => {
		if (!skip) rgb = validateColorComponents(rgb, {
			maxLength: TRIA,
			maxRange: MAX_RGB
		});
		rgb = transformRgbToLinearRgb(rgb, true);
		return transformMatrix(MATRIX_L_RGB_TO_XYZ, rgb, true);
	};
	var transformLinearRgbToRgb = (rgb, round = false) => {
		let [r, g, b] = validateColorComponents(rgb, { maxLength: TRIA });
		const COND_POW = 809 / 258400;
		if (r > COND_POW) r = Math.pow(r, 1 / POW_LINEAR) * (1 + LINEAR_OFFSET) - LINEAR_OFFSET;
		else r *= LINEAR_COEF;
		r *= MAX_RGB;
		if (g > COND_POW) g = Math.pow(g, 1 / POW_LINEAR) * (1 + LINEAR_OFFSET) - LINEAR_OFFSET;
		else g *= LINEAR_COEF;
		g *= MAX_RGB;
		if (b > COND_POW) b = Math.pow(b, 1 / POW_LINEAR) * (1 + LINEAR_OFFSET) - LINEAR_OFFSET;
		else b *= LINEAR_COEF;
		b *= MAX_RGB;
		return [
			round ? Math.round(r) : r,
			round ? Math.round(g) : g,
			round ? Math.round(b) : b
		];
	};
	var transformXyzToRgb = (xyz, skip = false) => {
		if (!skip) xyz = validateColorComponents(xyz, {
			maxLength: TRIA,
			validateRange: false
		});
		let [r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, xyz, true);
		[r, g, b] = transformLinearRgbToRgb([
			Math.min(Math.max(r, 0), 1),
			Math.min(Math.max(g, 0), 1),
			Math.min(Math.max(b, 0), 1)
		], true);
		return [
			r,
			g,
			b
		];
	};
	var transformXyzToHsl = (xyz, skip = false) => {
		const [rr, gg, bb] = transformXyzToRgb(xyz, skip);
		const r = rr / MAX_RGB;
		const g = gg / MAX_RGB;
		const b = bb / MAX_RGB;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const d = max - min;
		const l = (max + min) * HALF * MAX_PCT;
		let h, s;
		if (Math.round(l) === 0 || Math.round(l) === MAX_PCT) {
			h = 0;
			s = 0;
		} else {
			s = d / (1 - Math.abs(max + min - 1)) * MAX_PCT;
			if (s === 0) h = 0;
			else {
				switch (max) {
					case r:
						h = (g - b) / d;
						break;
					case g:
						h = (b - r) / d + DUO;
						break;
					case b:
					default: h = (r - g) / d + QUAD;
				}
				h = h * SEXA % DEG;
				if (h < 0) h += DEG;
			}
		}
		return [
			h,
			s,
			l
		];
	};
	var transformXyzToHwb = (xyz, skip = false) => {
		const [r, g, b] = transformXyzToRgb(xyz, skip);
		const wh = Math.min(r, g, b) / MAX_RGB;
		const bk = 1 - Math.max(r, g, b) / MAX_RGB;
		let h;
		if (wh + bk === 1) h = 0;
		else [h] = transformXyzToHsl(xyz);
		return [
			h,
			wh * MAX_PCT,
			bk * MAX_PCT
		];
	};
	var transformXyzToOklab = (xyz, skip = false) => {
		if (!skip) xyz = validateColorComponents(xyz, {
			maxLength: TRIA,
			validateRange: false
		});
		let [l, a, b] = transformMatrix(MATRIX_LMS_TO_OKLAB, transformMatrix(MATRIX_XYZ_TO_LMS, xyz, true).map((c) => Math.cbrt(c)), true);
		l = Math.min(Math.max(l, 0), 1);
		const lPct = Math.round(parseFloat(l.toFixed(QUAD)) * MAX_PCT);
		if (lPct === 0 || lPct === MAX_PCT) {
			a = 0;
			b = 0;
		}
		return [
			l,
			a,
			b
		];
	};
	var transformXyzToOklch = (xyz, skip = false) => {
		const [l, a, b] = transformXyzToOklab(xyz, skip);
		let c, h;
		const lPct = Math.round(parseFloat(l.toFixed(QUAD)) * MAX_PCT);
		if (lPct === 0 || lPct === MAX_PCT) {
			c = 0;
			h = 0;
		} else {
			c = Math.max(Math.sqrt(Math.pow(a, POW_SQR) + Math.pow(b, POW_SQR)), 0);
			if (parseFloat(c.toFixed(QUAD)) === 0) h = 0;
			else {
				h = Math.atan2(b, a) * DEG_HALF / Math.PI;
				if (h < 0) h += DEG;
			}
		}
		return [
			l,
			c,
			h
		];
	};
	var transformXyzD50ToRgb = (xyz, skip = false) => {
		if (!skip) xyz = validateColorComponents(xyz, {
			maxLength: TRIA,
			validateRange: false
		});
		return transformXyzToRgb(transformMatrix(MATRIX_D50_TO_D65, xyz, true), true);
	};
	var transformXyzD50ToLab = (xyz, skip = false) => {
		if (!skip) xyz = validateColorComponents(xyz, {
			maxLength: TRIA,
			validateRange: false
		});
		const [f0, f1, f2] = xyz.map((val, i) => val / D50[i]).map((val) => val > LAB_EPSILON ? Math.cbrt(val) : (val * LAB_KAPPA + HEX) / LAB_L);
		const l = Math.min(Math.max(LAB_L * f1 - HEX, 0), MAX_PCT);
		let a, b;
		if (l === 0 || l === MAX_PCT) {
			a = 0;
			b = 0;
		} else {
			a = (f0 - f1) * LAB_A;
			b = (f1 - f2) * LAB_B;
		}
		return [
			l,
			a,
			b
		];
	};
	var transformXyzD50ToLch = (xyz, skip = false) => {
		const [l, a, b] = transformXyzD50ToLab(xyz, skip);
		let c, h;
		if (l === 0 || l === MAX_PCT) {
			c = 0;
			h = 0;
		} else {
			c = Math.max(Math.sqrt(Math.pow(a, POW_SQR) + Math.pow(b, POW_SQR)), 0);
			h = Math.atan2(b, a) * DEG_HALF / Math.PI;
			if (h < 0) h += DEG;
		}
		return [
			l,
			c,
			h
		];
	};
	var convertRgbToHex = (rgb) => {
		const [r, g, b, alpha] = validateColorComponents(rgb, {
			alpha: true,
			maxRange: MAX_RGB
		});
		const rr = numberToHexString(r);
		const gg = numberToHexString(g);
		const bb = numberToHexString(b);
		const aa = numberToHexString(alpha * MAX_RGB);
		let hex;
		if (aa === "ff") hex = `#${rr}${gg}${bb}`;
		else hex = `#${rr}${gg}${bb}${aa}`;
		return hex;
	};
	var convertHexToRgb = (value) => {
		if (isString(value)) value = value.toLowerCase().trim();
		else throw new TypeError(`${value} is not a string.`);
		if (!(/^#[\da-f]{6}$/.test(value) || /^#[\da-f]{3}$/.test(value) || /^#[\da-f]{8}$/.test(value) || /^#[\da-f]{4}$/.test(value))) throw new SyntaxError(`Invalid property value: ${value}`);
		const arr = [];
		if (/^#[\da-f]{3}$/.test(value)) {
			const [, r, g, b] = value.match(/^#([\da-f])([\da-f])([\da-f])$/);
			arr.push(parseInt(`${r}${r}`, HEX), parseInt(`${g}${g}`, HEX), parseInt(`${b}${b}`, HEX), 1);
		} else if (/^#[\da-f]{4}$/.test(value)) {
			const [, r, g, b, alpha] = value.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])$/);
			arr.push(parseInt(`${r}${r}`, HEX), parseInt(`${g}${g}`, HEX), parseInt(`${b}${b}`, HEX), parseHexAlpha(`${alpha}${alpha}`));
		} else if (/^#[\da-f]{8}$/.test(value)) {
			const [, r, g, b, alpha] = value.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/);
			arr.push(parseInt(r, HEX), parseInt(g, HEX), parseInt(b, HEX), parseHexAlpha(alpha));
		} else {
			const [, r, g, b] = value.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/);
			arr.push(parseInt(r, HEX), parseInt(g, HEX), parseInt(b, HEX), 1);
		}
		return arr;
	};
	var convertHexToLinearRgb = (value) => {
		const [rr, gg, bb, alpha] = convertHexToRgb(value);
		const [r, g, b] = transformRgbToLinearRgb([
			rr,
			gg,
			bb
		], true);
		return [
			r,
			g,
			b,
			alpha
		];
	};
	var convertHexToXyz = (value) => {
		const [r, g, b, alpha] = convertHexToLinearRgb(value);
		const [x, y, z] = transformMatrix(MATRIX_L_RGB_TO_XYZ, [
			r,
			g,
			b
		], true);
		return [
			x,
			y,
			z,
			alpha
		];
	};
	var parseRgb = (value, opt = {}) => {
		if (isString(value)) value = value.toLowerCase().trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		const reg = new RegExp(`^rgba?\\(\\s*(${SYN_MOD}|${SYN_RGB_LV3})\\s*\\)$`);
		if (!reg.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const [, val] = value.match(reg);
		const [v1, v2, v3, v4 = ""] = val.replace(/[,/]/g, " ").split(/\s+/);
		let r, g, b;
		if (v1 === NONE) r = 0;
		else {
			if (v1.endsWith("%")) r = parseFloat(v1) * MAX_RGB / MAX_PCT;
			else r = parseFloat(v1);
			r = Math.min(Math.max(roundToPrecision(r, OCT), 0), MAX_RGB);
		}
		if (v2 === NONE) g = 0;
		else {
			if (v2.endsWith("%")) g = parseFloat(v2) * MAX_RGB / MAX_PCT;
			else g = parseFloat(v2);
			g = Math.min(Math.max(roundToPrecision(g, OCT), 0), MAX_RGB);
		}
		if (v3 === NONE) b = 0;
		else {
			if (v3.endsWith("%")) b = parseFloat(v3) * MAX_RGB / MAX_PCT;
			else b = parseFloat(v3);
			b = Math.min(Math.max(roundToPrecision(b, OCT), 0), MAX_RGB);
		}
		const alpha = parseAlpha(v4);
		return [
			"rgb",
			r,
			g,
			b,
			format === VAL_MIX && v4 === NONE ? NONE : alpha
		];
	};
	var parseHsl = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		if (!REG_HSL.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const [, val] = value.match(REG_HSL);
		const [v1, v2, v3, v4 = ""] = val.replace(/[,/]/g, " ").split(/\s+/);
		let h, s, l;
		if (v1 === NONE) h = 0;
		else h = angleToDeg(v1);
		if (v2 === NONE) s = 0;
		else s = Math.min(Math.max(parseFloat(v2), 0), MAX_PCT);
		if (v3 === NONE) l = 0;
		else l = Math.min(Math.max(parseFloat(v3), 0), MAX_PCT);
		const alpha = parseAlpha(v4);
		if (format === "hsl") return [
			format,
			v1 === NONE ? v1 : h,
			v2 === NONE ? v2 : s,
			v3 === NONE ? v3 : l,
			v4 === NONE ? v4 : alpha
		];
		h = h / DEG * DOZ;
		l /= MAX_PCT;
		const sa = s / MAX_PCT * Math.min(l, 1 - l);
		const rk = h % DOZ;
		const gk = (8 + h) % DOZ;
		const bk = (4 + h) % DOZ;
		const r = l - sa * Math.max(-1, Math.min(rk - TRIA, TRIA ** POW_SQR - rk, 1));
		const g = l - sa * Math.max(-1, Math.min(gk - TRIA, TRIA ** POW_SQR - gk, 1));
		const b = l - sa * Math.max(-1, Math.min(bk - TRIA, TRIA ** POW_SQR - bk, 1));
		return [
			"rgb",
			Math.min(Math.max(roundToPrecision(r * MAX_RGB, OCT), 0), MAX_RGB),
			Math.min(Math.max(roundToPrecision(g * MAX_RGB, OCT), 0), MAX_RGB),
			Math.min(Math.max(roundToPrecision(b * MAX_RGB, OCT), 0), MAX_RGB),
			alpha
		];
	};
	var parseHwb = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		if (!REG_HWB.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const [, val] = value.match(REG_HWB);
		const [v1, v2, v3, v4 = ""] = val.replace("/", " ").split(/\s+/);
		let h, wh, bk;
		if (v1 === NONE) h = 0;
		else h = angleToDeg(v1);
		if (v2 === NONE) wh = 0;
		else wh = Math.min(Math.max(parseFloat(v2), 0), MAX_PCT) / MAX_PCT;
		if (v3 === NONE) bk = 0;
		else bk = Math.min(Math.max(parseFloat(v3), 0), MAX_PCT) / MAX_PCT;
		const alpha = parseAlpha(v4);
		if (format === "hwb") return [
			format,
			v1 === NONE ? v1 : h,
			v2 === NONE ? v2 : wh * MAX_PCT,
			v3 === NONE ? v3 : bk * MAX_PCT,
			v4 === NONE ? v4 : alpha
		];
		if (wh + bk >= 1) {
			const v = roundToPrecision(wh / (wh + bk) * MAX_RGB, OCT);
			return [
				"rgb",
				v,
				v,
				v,
				alpha
			];
		}
		const factor = (1 - wh - bk) / MAX_RGB;
		let [, r, g, b] = parseHsl(`hsl(${h} 100 50)`);
		r = roundToPrecision((r * factor + wh) * MAX_RGB, OCT);
		g = roundToPrecision((g * factor + wh) * MAX_RGB, OCT);
		b = roundToPrecision((b * factor + wh) * MAX_RGB, OCT);
		return [
			"rgb",
			Math.min(Math.max(r, 0), MAX_RGB),
			Math.min(Math.max(g, 0), MAX_RGB),
			Math.min(Math.max(b, 0), MAX_RGB),
			alpha
		];
	};
	var parseLab = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		if (!REG_LAB.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const COEF_PCT = 1.25;
		const COND_POW = 8;
		const [, val] = value.match(REG_LAB);
		const [v1, v2, v3, v4 = ""] = val.replace("/", " ").split(/\s+/);
		let l, a, b;
		if (v1 === NONE) l = 0;
		else {
			if (v1.endsWith("%")) {
				l = parseFloat(v1);
				if (l > MAX_PCT) l = MAX_PCT;
			} else l = parseFloat(v1);
			if (l < 0) l = 0;
		}
		if (v2 === NONE) a = 0;
		else a = v2.endsWith("%") ? parseFloat(v2) * COEF_PCT : parseFloat(v2);
		if (v3 === NONE) b = 0;
		else b = v3.endsWith("%") ? parseFloat(v3) * COEF_PCT : parseFloat(v3);
		const alpha = parseAlpha(v4);
		if (REG_SPEC.test(format)) return [
			"lab",
			v1 === NONE ? v1 : roundToPrecision(l, HEX),
			v2 === NONE ? v2 : roundToPrecision(a, HEX),
			v3 === NONE ? v3 : roundToPrecision(b, HEX),
			v4 === NONE ? v4 : alpha
		];
		const fl = (l + HEX) / LAB_L;
		const fa = a / LAB_A + fl;
		const fb = fl - b / LAB_B;
		const powFl = Math.pow(fl, POW_CUBE);
		const powFa = Math.pow(fa, POW_CUBE);
		const powFb = Math.pow(fb, POW_CUBE);
		const [x, y, z] = [
			powFa > LAB_EPSILON ? powFa : (fa * LAB_L - HEX) / LAB_KAPPA,
			l > COND_POW ? powFl : l / LAB_KAPPA,
			powFb > LAB_EPSILON ? powFb : (fb * LAB_L - HEX) / LAB_KAPPA
		].map((val2, i) => val2 * D50[i]);
		return [
			"xyz-d50",
			roundToPrecision(x, HEX),
			roundToPrecision(y, HEX),
			roundToPrecision(z, HEX),
			alpha
		];
	};
	var parseLch = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		if (!REG_LCH.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const COEF_PCT = 1.5;
		const [, val] = value.match(REG_LCH);
		const [v1, v2, v3, v4 = ""] = val.replace("/", " ").split(/\s+/);
		let l, c, h;
		if (v1 === NONE) l = 0;
		else {
			l = parseFloat(v1);
			if (l < 0) l = 0;
		}
		if (v2 === NONE) c = 0;
		else c = v2.endsWith("%") ? parseFloat(v2) * COEF_PCT : parseFloat(v2);
		if (v3 === NONE) h = 0;
		else h = angleToDeg(v3);
		const alpha = parseAlpha(v4);
		if (REG_SPEC.test(format)) return [
			"lch",
			v1 === NONE ? v1 : roundToPrecision(l, HEX),
			v2 === NONE ? v2 : roundToPrecision(c, HEX),
			v3 === NONE ? v3 : roundToPrecision(h, HEX),
			v4 === NONE ? v4 : alpha
		];
		const a = c * Math.cos(h * Math.PI / DEG_HALF);
		const b = c * Math.sin(h * Math.PI / DEG_HALF);
		const [, x, y, z] = parseLab(`lab(${l} ${a} ${b})`);
		return [
			"xyz-d50",
			roundToPrecision(x, HEX),
			roundToPrecision(y, HEX),
			roundToPrecision(z, HEX),
			alpha
		];
	};
	var parseOklab = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		if (!REG_OKLAB.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const COEF_PCT = .4;
		const [, val] = value.match(REG_OKLAB);
		const [v1, v2, v3, v4 = ""] = val.replace("/", " ").split(/\s+/);
		let l, a, b;
		if (v1 === NONE) l = 0;
		else {
			l = v1.endsWith("%") ? parseFloat(v1) / MAX_PCT : parseFloat(v1);
			if (l < 0) l = 0;
		}
		if (v2 === NONE) a = 0;
		else if (v2.endsWith("%")) a = parseFloat(v2) * COEF_PCT / MAX_PCT;
		else a = parseFloat(v2);
		if (v3 === NONE) b = 0;
		else if (v3.endsWith("%")) b = parseFloat(v3) * COEF_PCT / MAX_PCT;
		else b = parseFloat(v3);
		const alpha = parseAlpha(v4);
		if (REG_SPEC.test(format)) return [
			"oklab",
			v1 === NONE ? v1 : roundToPrecision(l, HEX),
			v2 === NONE ? v2 : roundToPrecision(a, HEX),
			v3 === NONE ? v3 : roundToPrecision(b, HEX),
			v4 === NONE ? v4 : alpha
		];
		const [x, y, z] = transformMatrix(MATRIX_LMS_TO_XYZ, transformMatrix(MATRIX_OKLAB_TO_LMS, [
			l,
			a,
			b
		]).map((c) => Math.pow(c, POW_CUBE)), true);
		return [
			"xyz-d65",
			roundToPrecision(x, HEX),
			roundToPrecision(y, HEX),
			roundToPrecision(z, HEX),
			alpha
		];
	};
	var parseOklch = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		if (!REG_OKLCH.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const COEF_PCT = .4;
		const [, val] = value.match(REG_OKLCH);
		const [v1, v2, v3, v4 = ""] = val.replace("/", " ").split(/\s+/);
		let l, c, h;
		if (v1 === NONE) l = 0;
		else {
			l = v1.endsWith("%") ? parseFloat(v1) / MAX_PCT : parseFloat(v1);
			if (l < 0) l = 0;
		}
		if (v2 === NONE) c = 0;
		else {
			if (v2.endsWith("%")) c = parseFloat(v2) * COEF_PCT / MAX_PCT;
			else c = parseFloat(v2);
			if (c < 0) c = 0;
		}
		if (v3 === NONE) h = 0;
		else h = angleToDeg(v3);
		const alpha = parseAlpha(v4);
		if (REG_SPEC.test(format)) return [
			"oklch",
			v1 === NONE ? v1 : roundToPrecision(l, HEX),
			v2 === NONE ? v2 : roundToPrecision(c, HEX),
			v3 === NONE ? v3 : roundToPrecision(h, HEX),
			v4 === NONE ? v4 : alpha
		];
		const a = c * Math.cos(h * Math.PI / DEG_HALF);
		const b = c * Math.sin(h * Math.PI / DEG_HALF);
		const [x, y, z] = transformMatrix(MATRIX_LMS_TO_XYZ, transformMatrix(MATRIX_OKLAB_TO_LMS, [
			l,
			a,
			b
		]).map((cc) => Math.pow(cc, POW_CUBE)), true);
		return [
			"xyz-d65",
			roundToPrecision(x, HEX),
			roundToPrecision(y, HEX),
			roundToPrecision(z, HEX),
			alpha
		];
	};
	var parseColorFunc = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { colorSpace = "", d50 = false, format = "", nullable = false } = opt;
		if (!REG_FN_COLOR.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		const [, val] = value.match(REG_FN_COLOR);
		let [cs, v1, v2, v3, v4 = ""] = val.replace("/", " ").split(/\s+/);
		let r, g, b;
		if (cs === "xyz") cs = "xyz-d65";
		if (v1 === NONE) r = 0;
		else r = v1.endsWith("%") ? parseFloat(v1) / MAX_PCT : parseFloat(v1);
		if (v2 === NONE) g = 0;
		else g = v2.endsWith("%") ? parseFloat(v2) / MAX_PCT : parseFloat(v2);
		if (v3 === NONE) b = 0;
		else b = v3.endsWith("%") ? parseFloat(v3) / MAX_PCT : parseFloat(v3);
		const alpha = parseAlpha(v4);
		if (REG_SPEC.test(format) || format === VAL_MIX && cs === colorSpace) return [
			cs,
			v1 === NONE ? v1 : roundToPrecision(r, DEC),
			v2 === NONE ? v2 : roundToPrecision(g, DEC),
			v3 === NONE ? v3 : roundToPrecision(b, DEC),
			v4 === NONE ? v4 : alpha
		];
		let x = 0;
		let y = 0;
		let z = 0;
		if (cs === "srgb-linear") {
			[x, y, z] = transformMatrix(MATRIX_L_RGB_TO_XYZ, [
				r,
				g,
				b
			]);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else if (cs === "display-p3") {
			const linearRgb = transformRgbToLinearRgb([
				r * MAX_RGB,
				g * MAX_RGB,
				b * MAX_RGB
			]);
			[x, y, z] = transformMatrix(MATRIX_P3_TO_XYZ, linearRgb);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else if (cs === "rec2020") {
			const ALPHA = 1.09929682680944;
			const BETA = .018053968510807;
			const REC_COEF = .45;
			const rgb = [
				r,
				g,
				b
			].map((c) => {
				let cl;
				if (c < BETA * REC_COEF * DEC) cl = c / (REC_COEF * DEC);
				else cl = Math.pow((c + ALPHA - 1) / ALPHA, 1 / REC_COEF);
				return cl;
			});
			[x, y, z] = transformMatrix(MATRIX_REC2020_TO_XYZ, rgb);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else if (cs === "a98-rgb") {
			const POW_A98 = 563 / 256;
			const rgb = [
				r,
				g,
				b
			].map((c) => {
				return Math.pow(c, POW_A98);
			});
			[x, y, z] = transformMatrix(MATRIX_A98_TO_XYZ, rgb);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else if (cs === "prophoto-rgb") {
			const POW_PROPHOTO = 1.8;
			const rgb = [
				r,
				g,
				b
			].map((c) => {
				let cl;
				if (c > 1 / (HEX * DUO)) cl = Math.pow(c, POW_PROPHOTO);
				else cl = c / HEX;
				return cl;
			});
			[x, y, z] = transformMatrix(MATRIX_PROPHOTO_TO_XYZ_D50, rgb);
			if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
				x,
				y,
				z
			], true);
		} else if (/^xyz(?:-d(?:50|65))?$/.test(cs)) {
			[x, y, z] = [
				r,
				g,
				b
			];
			if (cs === "xyz-d50") {
				if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
					x,
					y,
					z
				]);
			} else if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else {
			[x, y, z] = transformRgbToXyz([
				r * MAX_RGB,
				g * MAX_RGB,
				b * MAX_RGB
			]);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		}
		return [
			d50 ? "xyz-d50" : "xyz-d65",
			roundToPrecision(x, HEX),
			roundToPrecision(y, HEX),
			roundToPrecision(z, HEX),
			format === VAL_MIX && v4 === NONE ? v4 : alpha
		];
	};
	var parseColorValue = (value, opt = {}) => {
		if (isString(value)) value = value.toLowerCase().trim();
		else throw new TypeError(`${value} is not a string.`);
		const { d50 = false, format = "", nullable = false } = opt;
		if (!REG_COLOR.test(value)) {
			const res = resolveInvalidColorValue(format, nullable);
			if (res instanceof NullObject) return res;
			if (isString(res)) return res;
			return res;
		}
		let x = 0;
		let y = 0;
		let z = 0;
		let alpha = 0;
		if (REG_CURRENT.test(value)) {
			if (format === VAL_COMP) return [
				"rgb",
				0,
				0,
				0,
				0
			];
			if (format === VAL_SPEC) return value;
		} else if (/^[a-z]+$/.test(value)) if (Object.prototype.hasOwnProperty.call(NAMED_COLORS, value)) {
			if (format === VAL_SPEC) return value;
			const [r, g, b] = NAMED_COLORS[value];
			alpha = 1;
			if (format === VAL_COMP) return [
				"rgb",
				r,
				g,
				b,
				alpha
			];
			[x, y, z] = transformRgbToXyz([
				r,
				g,
				b
			], true);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else switch (format) {
			case VAL_COMP:
				if (nullable && value !== "transparent") return new NullObject();
				return [
					"rgb",
					0,
					0,
					0,
					0
				];
			case VAL_SPEC:
				if (value === "transparent") return value;
				return "";
			case VAL_MIX:
				if (value === "transparent") return [
					"rgb",
					0,
					0,
					0,
					0
				];
				return new NullObject();
		}
		else if (value[0] === "#") {
			if (REG_SPEC.test(format)) return ["rgb", ...convertHexToRgb(value)];
			[x, y, z, alpha] = convertHexToXyz(value);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else if (value.startsWith("lab")) {
			if (REG_SPEC.test(format)) return parseLab(value, opt);
			[, x, y, z, alpha] = parseLab(value);
			if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
				x,
				y,
				z
			], true);
		} else if (value.startsWith("lch")) {
			if (REG_SPEC.test(format)) return parseLch(value, opt);
			[, x, y, z, alpha] = parseLch(value);
			if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
				x,
				y,
				z
			], true);
		} else if (value.startsWith("oklab")) {
			if (REG_SPEC.test(format)) return parseOklab(value, opt);
			[, x, y, z, alpha] = parseOklab(value);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else if (value.startsWith("oklch")) {
			if (REG_SPEC.test(format)) return parseOklch(value, opt);
			[, x, y, z, alpha] = parseOklch(value);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		} else {
			let r, g, b;
			if (value.startsWith("hsl")) [, r, g, b, alpha] = parseHsl(value);
			else if (value.startsWith("hwb")) [, r, g, b, alpha] = parseHwb(value);
			else [, r, g, b, alpha] = parseRgb(value, opt);
			if (REG_SPEC.test(format)) return [
				"rgb",
				Math.round(r),
				Math.round(g),
				Math.round(b),
				alpha
			];
			[x, y, z] = transformRgbToXyz([
				r,
				g,
				b
			]);
			if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
				x,
				y,
				z
			], true);
		}
		return [
			d50 ? "xyz-d50" : "xyz-d65",
			roundToPrecision(x, HEX),
			roundToPrecision(y, HEX),
			roundToPrecision(z, HEX),
			alpha
		];
	};
	var resolveColorValue = (value, opt = {}) => {
		if (isString(value)) value = value.toLowerCase().trim();
		else throw new TypeError(`${value} is not a string.`);
		const { colorSpace = "", format = "", nullable = false } = opt;
		const cacheKey = createCacheKey({
			namespace: NAMESPACE,
			name: "resolveColorValue",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			const cachedItem = cachedResult.item;
			if (isString(cachedItem)) return cachedItem;
			return cachedItem;
		}
		if (!REG_COLOR.test(value)) {
			const res2 = resolveInvalidColorValue(format, nullable);
			if (res2 instanceof NullObject) {
				setCache(cacheKey, null);
				return res2;
			}
			setCache(cacheKey, res2);
			if (isString(res2)) return res2;
			return res2;
		}
		let cs = "";
		let r = 0;
		let g = 0;
		let b = 0;
		let alpha = 0;
		if (REG_CURRENT.test(value)) {
			if (format === VAL_SPEC) {
				setCache(cacheKey, value);
				return value;
			}
		} else if (/^[a-z]+$/.test(value)) if (Object.prototype.hasOwnProperty.call(NAMED_COLORS, value)) {
			if (format === VAL_SPEC) {
				setCache(cacheKey, value);
				return value;
			}
			[r, g, b] = NAMED_COLORS[value];
			alpha = 1;
		} else switch (format) {
			case VAL_SPEC: {
				if (value === "transparent") {
					setCache(cacheKey, value);
					return value;
				}
				const res2 = "";
				setCache(cacheKey, res2);
				return res2;
			}
			case VAL_MIX:
				if (value === "transparent") {
					const res2 = [
						"rgb",
						0,
						0,
						0,
						0
					];
					setCache(cacheKey, res2);
					return res2;
				}
				setCache(cacheKey, null);
				return new NullObject();
			case VAL_COMP:
			default: {
				if (nullable && value !== "transparent") {
					setCache(cacheKey, null);
					return new NullObject();
				}
				const res2 = [
					"rgb",
					0,
					0,
					0,
					0
				];
				setCache(cacheKey, res2);
				return res2;
			}
		}
		else if (value[0] === "#") [r, g, b, alpha] = convertHexToRgb(value);
		else if (value.startsWith("hsl")) [, r, g, b, alpha] = parseHsl(value, opt);
		else if (value.startsWith("hwb")) [, r, g, b, alpha] = parseHwb(value, opt);
		else if (/^l(?:ab|ch)/.test(value)) {
			let x, y, z;
			if (value.startsWith("lab")) [cs, x, y, z, alpha] = parseLab(value, opt);
			else [cs, x, y, z, alpha] = parseLch(value, opt);
			if (REG_SPEC.test(format)) {
				const res2 = [
					cs,
					x,
					y,
					z,
					alpha
				];
				setCache(cacheKey, res2);
				return res2;
			}
			[r, g, b] = transformXyzD50ToRgb([
				x,
				y,
				z
			]);
		} else if (/^okl(?:ab|ch)/.test(value)) {
			let x, y, z;
			if (value.startsWith("oklab")) [cs, x, y, z, alpha] = parseOklab(value, opt);
			else [cs, x, y, z, alpha] = parseOklch(value, opt);
			if (REG_SPEC.test(format)) {
				const res2 = [
					cs,
					x,
					y,
					z,
					alpha
				];
				setCache(cacheKey, res2);
				return res2;
			}
			[r, g, b] = transformXyzToRgb([
				x,
				y,
				z
			]);
		} else [, r, g, b, alpha] = parseRgb(value, opt);
		if (format === VAL_MIX && colorSpace === "srgb") {
			const res2 = [
				"srgb",
				r / MAX_RGB,
				g / MAX_RGB,
				b / MAX_RGB,
				alpha
			];
			setCache(cacheKey, res2);
			return res2;
		}
		const res = [
			"rgb",
			Math.round(r),
			Math.round(g),
			Math.round(b),
			alpha
		];
		setCache(cacheKey, res);
		return res;
	};
	var resolveColorFunc = (value, opt = {}) => {
		if (isString(value)) value = value.toLowerCase().trim();
		else throw new TypeError(`${value} is not a string.`);
		const { colorSpace = "", format = "", nullable = false } = opt;
		const cacheKey = createCacheKey({
			namespace: NAMESPACE,
			name: "resolveColorFunc",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			const cachedItem = cachedResult.item;
			if (isString(cachedItem)) return cachedItem;
			return cachedItem;
		}
		if (!REG_FN_COLOR.test(value)) {
			const res2 = resolveInvalidColorValue(format, nullable);
			if (res2 instanceof NullObject) {
				setCache(cacheKey, null);
				return res2;
			}
			setCache(cacheKey, res2);
			if (isString(res2)) return res2;
			return res2;
		}
		const [cs, v1, v2, v3, v4] = parseColorFunc(value, opt);
		if (REG_SPEC.test(format) || format === VAL_MIX && cs === colorSpace) {
			const res2 = [
				cs,
				v1,
				v2,
				v3,
				v4
			];
			setCache(cacheKey, res2);
			return res2;
		}
		const x = parseFloat(`${v1}`);
		const y = parseFloat(`${v2}`);
		const z = parseFloat(`${v3}`);
		const alpha = parseAlpha(`${v4}`);
		const [r, g, b] = transformXyzToRgb([
			x,
			y,
			z
		], true);
		const res = [
			"rgb",
			r,
			g,
			b,
			alpha
		];
		setCache(cacheKey, res);
		return res;
	};
	var convertColorToLinearRgb = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { colorSpace = "", format = "" } = opt;
		let cs = "";
		let r, g, b, alpha, x, y, z;
		if (format === VAL_MIX) {
			let xyz;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[cs, x, y, z, alpha] = xyz;
			if (cs === colorSpace) return [
				x,
				y,
				z,
				alpha
			];
			[r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, [
				x,
				y,
				z
			], true);
		} else if (value.startsWith(FN_COLOR)) {
			const [, val] = value.match(REG_FN_COLOR);
			const [cs2] = val.replace("/", " ").split(/\s+/);
			if (cs2 === "srgb-linear") [, r, g, b, alpha] = resolveColorFunc(value, { format: VAL_COMP });
			else {
				[, x, y, z, alpha] = parseColorFunc(value);
				[r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, [
					x,
					y,
					z
				], true);
			}
		} else {
			[, x, y, z, alpha] = parseColorValue(value);
			[r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, [
				x,
				y,
				z
			], true);
		}
		return [
			Math.min(Math.max(r, 0), 1),
			Math.min(Math.max(g, 0), 1),
			Math.min(Math.max(b, 0), 1),
			alpha
		];
	};
	var convertColorToRgb = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "" } = opt;
		let r, g, b, alpha;
		if (format === VAL_MIX) {
			let rgb;
			if (value.startsWith(FN_COLOR)) rgb = resolveColorFunc(value, opt);
			else rgb = resolveColorValue(value, opt);
			if (rgb instanceof NullObject) return rgb;
			[, r, g, b, alpha] = rgb;
		} else if (value.startsWith(FN_COLOR)) {
			const [, val] = value.match(REG_FN_COLOR);
			const [cs] = val.replace("/", " ").split(/\s+/);
			if (cs === "srgb") {
				[, r, g, b, alpha] = resolveColorFunc(value, { format: VAL_COMP });
				r *= MAX_RGB;
				g *= MAX_RGB;
				b *= MAX_RGB;
			} else [, r, g, b, alpha] = resolveColorFunc(value);
		} else if (/^(?:ok)?l(?:ab|ch)/.test(value)) {
			[r, g, b, alpha] = convertColorToLinearRgb(value);
			[r, g, b] = transformLinearRgbToRgb([
				r,
				g,
				b
			]);
		} else [, r, g, b, alpha] = resolveColorValue(value, { format: VAL_COMP });
		return [
			r,
			g,
			b,
			alpha
		];
	};
	var convertColorToXyz = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { d50 = false, format = "" } = opt;
		let x, y, z, alpha;
		if (format === VAL_MIX) {
			let xyz;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[, x, y, z, alpha] = xyz;
		} else if (value.startsWith(FN_COLOR)) {
			const [, val] = value.match(REG_FN_COLOR);
			const [cs] = val.replace("/", " ").split(/\s+/);
			if (d50) if (cs === "xyz-d50") [, x, y, z, alpha] = resolveColorFunc(value, { format: VAL_COMP });
			else [, x, y, z, alpha] = parseColorFunc(value, opt);
			else if (/^xyz(?:-d65)?$/.test(cs)) [, x, y, z, alpha] = resolveColorFunc(value, { format: VAL_COMP });
			else [, x, y, z, alpha] = parseColorFunc(value);
		} else [, x, y, z, alpha] = parseColorValue(value, opt);
		return [
			x,
			y,
			z,
			alpha
		];
	};
	var convertColorToHsl = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "" } = opt;
		let h, s, l, alpha;
		if (REG_HSL.test(value)) {
			[, h, s, l, alpha] = parseHsl(value, { format: "hsl" });
			if (format === "hsl") return [
				Math.round(h),
				Math.round(s),
				Math.round(l),
				alpha
			];
			return [
				h,
				s,
				l,
				alpha
			];
		}
		let x, y, z;
		if (format === VAL_MIX) {
			let xyz;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[, x, y, z, alpha] = xyz;
		} else if (value.startsWith(FN_COLOR)) [, x, y, z, alpha] = parseColorFunc(value);
		else [, x, y, z, alpha] = parseColorValue(value);
		[h, s, l] = transformXyzToHsl([
			x,
			y,
			z
		], true);
		if (format === "hsl") return [
			Math.round(h),
			Math.round(s),
			Math.round(l),
			alpha
		];
		return [
			format === VAL_MIX && s === 0 ? NONE : h,
			s,
			l,
			alpha
		];
	};
	var convertColorToHwb = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "" } = opt;
		let h, w, b, alpha;
		if (REG_HWB.test(value)) {
			[, h, w, b, alpha] = parseHwb(value, { format: "hwb" });
			if (format === "hwb") return [
				Math.round(h),
				Math.round(w),
				Math.round(b),
				alpha
			];
			return [
				h,
				w,
				b,
				alpha
			];
		}
		let x, y, z;
		if (format === VAL_MIX) {
			let xyz;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[, x, y, z, alpha] = xyz;
		} else if (value.startsWith(FN_COLOR)) [, x, y, z, alpha] = parseColorFunc(value);
		else [, x, y, z, alpha] = parseColorValue(value);
		[h, w, b] = transformXyzToHwb([
			x,
			y,
			z
		], true);
		if (format === "hwb") return [
			Math.round(h),
			Math.round(w),
			Math.round(b),
			alpha
		];
		return [
			format === VAL_MIX && w + b >= 100 ? NONE : h,
			w,
			b,
			alpha
		];
	};
	var convertColorToLab = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "" } = opt;
		let l, a, b, alpha;
		if (REG_LAB.test(value)) {
			[, l, a, b, alpha] = parseLab(value, { format: VAL_COMP });
			return [
				l,
				a,
				b,
				alpha
			];
		}
		let x, y, z;
		if (format === VAL_MIX) {
			let xyz;
			opt.d50 = true;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[, x, y, z, alpha] = xyz;
		} else if (value.startsWith(FN_COLOR)) [, x, y, z, alpha] = parseColorFunc(value, { d50: true });
		else [, x, y, z, alpha] = parseColorValue(value, { d50: true });
		[l, a, b] = transformXyzD50ToLab([
			x,
			y,
			z
		], true);
		return [
			l,
			a,
			b,
			alpha
		];
	};
	var convertColorToLch = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "" } = opt;
		let l, c, h, alpha;
		if (REG_LCH.test(value)) {
			[, l, c, h, alpha] = parseLch(value, { format: VAL_COMP });
			return [
				l,
				c,
				h,
				alpha
			];
		}
		let x, y, z;
		if (format === VAL_MIX) {
			let xyz;
			opt.d50 = true;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[, x, y, z, alpha] = xyz;
		} else if (value.startsWith(FN_COLOR)) [, x, y, z, alpha] = parseColorFunc(value, { d50: true });
		else [, x, y, z, alpha] = parseColorValue(value, { d50: true });
		[l, c, h] = transformXyzD50ToLch([
			x,
			y,
			z
		], true);
		return [
			l,
			c,
			format === VAL_MIX && c === 0 ? NONE : h,
			alpha
		];
	};
	var convertColorToOklab = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "" } = opt;
		let l, a, b, alpha;
		if (REG_OKLAB.test(value)) {
			[, l, a, b, alpha] = parseOklab(value, { format: VAL_COMP });
			return [
				l,
				a,
				b,
				alpha
			];
		}
		let x, y, z;
		if (format === VAL_MIX) {
			let xyz;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[, x, y, z, alpha] = xyz;
		} else if (value.startsWith(FN_COLOR)) [, x, y, z, alpha] = parseColorFunc(value);
		else [, x, y, z, alpha] = parseColorValue(value);
		[l, a, b] = transformXyzToOklab([
			x,
			y,
			z
		], true);
		return [
			l,
			a,
			b,
			alpha
		];
	};
	var convertColorToOklch = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "" } = opt;
		let l, c, h, alpha;
		if (REG_OKLCH.test(value)) {
			[, l, c, h, alpha] = parseOklch(value, { format: VAL_COMP });
			return [
				l,
				c,
				h,
				alpha
			];
		}
		let x, y, z;
		if (format === VAL_MIX) {
			let xyz;
			if (value.startsWith(FN_COLOR)) xyz = parseColorFunc(value, opt);
			else xyz = parseColorValue(value, opt);
			if (xyz instanceof NullObject) return xyz;
			[, x, y, z, alpha] = xyz;
		} else if (value.startsWith(FN_COLOR)) [, x, y, z, alpha] = parseColorFunc(value);
		else [, x, y, z, alpha] = parseColorValue(value);
		[l, c, h] = transformXyzToOklch([
			x,
			y,
			z
		], true);
		return [
			l,
			c,
			format === VAL_MIX && c === 0 ? NONE : h,
			alpha
		];
	};
	var resolveColorMix = (value, opt = {}) => {
		if (isString(value)) value = value.toLowerCase().trim();
		else throw new TypeError(`${value} is not a string.`);
		const { format = "", nullable = false } = opt;
		const cacheKey = createCacheKey({
			namespace: NAMESPACE,
			name: "resolveColorMix",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			const cachedItem = cachedResult.item;
			if (isString(cachedItem)) return cachedItem;
			return cachedItem;
		}
		const nestedItems = [];
		if (!REG_MIX.test(value)) if (value.startsWith(FN_MIX) && REG_MIX_NEST.test(value)) {
			const regColorSpace = new RegExp(`^(?:${CS_RGB}|${CS_XYZ})$`);
			const items = value.match(REG_MIX_NEST);
			for (const item of items) if (item) {
				let val = resolveColorMix(item, { format: format === VAL_SPEC ? format : VAL_COMP });
				if (Array.isArray(val)) {
					const [cs, v1, v2, v3, v4] = val;
					if (v1 === 0 && v2 === 0 && v3 === 0 && v4 === 0) {
						value = "";
						break;
					}
					if (regColorSpace.test(cs)) if (v4 === 1) val = `color(${cs} ${v1} ${v2} ${v3})`;
					else val = `color(${cs} ${v1} ${v2} ${v3} / ${v4})`;
					else if (v4 === 1) val = `${cs}(${v1} ${v2} ${v3})`;
					else val = `${cs}(${v1} ${v2} ${v3} / ${v4})`;
				} else if (!REG_MIX.test(val)) {
					value = "";
					break;
				}
				nestedItems.push(val);
				value = value.replace(item, val);
			}
			if (!value) return cacheInvalidColorValue(cacheKey, format, nullable);
		} else return cacheInvalidColorValue(cacheKey, format, nullable);
		let colorSpace = "";
		let hueArc = "";
		let colorA = "";
		let pctA = "";
		let colorB = "";
		let pctB = "";
		if (nestedItems.length && format === VAL_SPEC) {
			const regColorSpace = new RegExp(`^color-mix\\(\\s*in\\s+(${CS_MIX})\\s*,`);
			const [, cs] = value.match(regColorSpace);
			if (REG_CS_HUE.test(cs)) [, colorSpace, hueArc] = cs.match(REG_CS_HUE);
			else colorSpace = cs;
			if (nestedItems.length === 2) {
				let [itemA, itemB] = nestedItems;
				itemA = itemA.replace(/(?=[()])/g, "\\");
				itemB = itemB.replace(/(?=[()])/g, "\\");
				const regA = new RegExp(`(${itemA})(?:\\s+(${PCT}))?`);
				const regB = new RegExp(`(${itemB})(?:\\s+(${PCT}))?`);
				[, colorA, pctA] = value.match(regA);
				[, colorB, pctB] = value.match(regB);
			} else {
				let [item] = nestedItems;
				item = item.replace(/(?=[()])/g, "\\");
				const itemPart = `${item}(?:\\s+${PCT})?`;
				const itemPartCapt = `(${item})(?:\\s+(${PCT}))?`;
				const regItemPart = new RegExp(`^${itemPartCapt}$`);
				const regLastItem = new RegExp(`${itemPartCapt}\\s*\\)$`);
				const regColorPart = new RegExp(`^(${SYN_COLOR_TYPE})(?:\\s+(${PCT}))?$`);
				if (regLastItem.test(value)) {
					const reg = new RegExp(`(${SYN_MIX_PART})\\s*,\\s*(${itemPart})\\s*\\)$`);
					const [, colorPartA, colorPartB] = value.match(reg);
					[, colorA, pctA] = colorPartA.match(regColorPart);
					[, colorB, pctB] = colorPartB.match(regItemPart);
				} else {
					const reg = new RegExp(`(${itemPart})\\s*,\\s*(${SYN_MIX_PART})\\s*\\)$`);
					const [, colorPartA, colorPartB] = value.match(reg);
					[, colorA, pctA] = colorPartA.match(regItemPart);
					[, colorB, pctB] = colorPartB.match(regColorPart);
				}
			}
		} else {
			const [, cs, colorPartA, colorPartB] = value.match(REG_MIX_CAPT);
			const reg = new RegExp(`^(${SYN_COLOR_TYPE})(?:\\s+(${PCT}))?$`);
			[, colorA, pctA] = colorPartA.match(reg);
			[, colorB, pctB] = colorPartB.match(reg);
			if (REG_CS_HUE.test(cs)) [, colorSpace, hueArc] = cs.match(REG_CS_HUE);
			else colorSpace = cs;
		}
		let pA, pB, m;
		if (pctA && pctB) {
			const p1 = parseFloat(pctA) / MAX_PCT;
			const p2 = parseFloat(pctB) / MAX_PCT;
			if (p1 < 0 || p1 > 1 || p2 < 0 || p2 > 1) return cacheInvalidColorValue(cacheKey, format, nullable);
			const factor = p1 + p2;
			if (factor === 0) return cacheInvalidColorValue(cacheKey, format, nullable);
			pA = p1 / factor;
			pB = p2 / factor;
			m = factor < 1 ? factor : 1;
		} else {
			if (pctA) {
				pA = parseFloat(pctA) / MAX_PCT;
				if (pA < 0 || pA > 1) return cacheInvalidColorValue(cacheKey, format, nullable);
				pB = 1 - pA;
			} else if (pctB) {
				pB = parseFloat(pctB) / MAX_PCT;
				if (pB < 0 || pB > 1) return cacheInvalidColorValue(cacheKey, format, nullable);
				pA = 1 - pB;
			} else {
				pA = HALF;
				pB = HALF;
			}
			m = 1;
		}
		if (colorSpace === "xyz") colorSpace = "xyz-d65";
		if (format === VAL_SPEC) {
			let valueA = "";
			let valueB = "";
			if (colorA.startsWith(FN_MIX)) valueA = colorA;
			else if (colorA.startsWith(FN_COLOR)) {
				const [cs, v1, v2, v3, v4] = parseColorFunc(colorA, opt);
				if (v4 === 1) valueA = `color(${cs} ${v1} ${v2} ${v3})`;
				else valueA = `color(${cs} ${v1} ${v2} ${v3} / ${v4})`;
			} else {
				const val = parseColorValue(colorA, opt);
				if (Array.isArray(val)) {
					const [cs, v1, v2, v3, v4] = val;
					if (v4 === 1) if (cs === "rgb") valueA = `${cs}(${v1}, ${v2}, ${v3})`;
					else valueA = `${cs}(${v1} ${v2} ${v3})`;
					else if (cs === "rgb") valueA = `${cs}a(${v1}, ${v2}, ${v3}, ${v4})`;
					else valueA = `${cs}(${v1} ${v2} ${v3} / ${v4})`;
				} else {
					if (!isString(val) || !val) {
						setCache(cacheKey, "");
						return "";
					}
					valueA = val;
				}
			}
			if (colorB.startsWith(FN_MIX)) valueB = colorB;
			else if (colorB.startsWith(FN_COLOR)) {
				const [cs, v1, v2, v3, v4] = parseColorFunc(colorB, opt);
				if (v4 === 1) valueB = `color(${cs} ${v1} ${v2} ${v3})`;
				else valueB = `color(${cs} ${v1} ${v2} ${v3} / ${v4})`;
			} else {
				const val = parseColorValue(colorB, opt);
				if (Array.isArray(val)) {
					const [cs, v1, v2, v3, v4] = val;
					if (v4 === 1) if (cs === "rgb") valueB = `${cs}(${v1}, ${v2}, ${v3})`;
					else valueB = `${cs}(${v1} ${v2} ${v3})`;
					else if (cs === "rgb") valueB = `${cs}a(${v1}, ${v2}, ${v3}, ${v4})`;
					else valueB = `${cs}(${v1} ${v2} ${v3} / ${v4})`;
				} else {
					if (!isString(val) || !val) {
						setCache(cacheKey, "");
						return "";
					}
					valueB = val;
				}
			}
			if (pctA && pctB) {
				valueA += ` ${parseFloat(pctA)}%`;
				valueB += ` ${parseFloat(pctB)}%`;
			} else if (pctA) {
				const pA2 = parseFloat(pctA);
				if (pA2 !== MAX_PCT * HALF) valueA += ` ${pA2}%`;
			} else if (pctB) {
				const pA2 = MAX_PCT - parseFloat(pctB);
				if (pA2 !== MAX_PCT * HALF) valueA += ` ${pA2}%`;
			}
			if (hueArc) {
				const res2 = `color-mix(in ${colorSpace} ${hueArc} hue, ${valueA}, ${valueB})`;
				setCache(cacheKey, res2);
				return res2;
			} else {
				const res2 = `color-mix(in ${colorSpace}, ${valueA}, ${valueB})`;
				setCache(cacheKey, res2);
				return res2;
			}
		}
		let r = 0;
		let g = 0;
		let b = 0;
		let alpha = 0;
		if (/^srgb(?:-linear)?$/.test(colorSpace)) {
			let rgbA, rgbB;
			if (colorSpace === "srgb") {
				if (REG_CURRENT.test(colorA)) rgbA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else rgbA = convertColorToRgb(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) rgbB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else rgbB = convertColorToRgb(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			} else {
				if (REG_CURRENT.test(colorA)) rgbA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else rgbA = convertColorToLinearRgb(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) rgbB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else rgbB = convertColorToLinearRgb(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			}
			if (rgbA instanceof NullObject || rgbB instanceof NullObject) return cacheInvalidColorValue(cacheKey, format, nullable);
			const [rrA, ggA, bbA, aaA] = rgbA;
			const [rrB, ggB, bbB, aaB] = rgbB;
			const rNone = rrA === NONE && rrB === NONE;
			const gNone = ggA === NONE && ggB === NONE;
			const bNone = bbA === NONE && bbB === NONE;
			const alphaNone = aaA === NONE && aaB === NONE;
			const [[rA, gA, bA, alphaA], [rB, gB, bB, alphaB]] = normalizeColorComponents([
				rrA,
				ggA,
				bbA,
				aaA
			], [
				rrB,
				ggB,
				bbB,
				aaB
			], true);
			const factorA = alphaA * pA;
			const factorB = alphaB * pB;
			alpha = factorA + factorB;
			if (alpha === 0) {
				r = rA * pA + rB * pB;
				g = gA * pA + gB * pB;
				b = bA * pA + bB * pB;
			} else {
				r = (rA * factorA + rB * factorB) / alpha;
				g = (gA * factorA + gB * factorB) / alpha;
				b = (bA * factorA + bB * factorB) / alpha;
				alpha = parseFloat(alpha.toFixed(3));
			}
			if (format === VAL_COMP) {
				const res2 = [
					colorSpace,
					rNone ? NONE : roundToPrecision(r, HEX),
					gNone ? NONE : roundToPrecision(g, HEX),
					bNone ? NONE : roundToPrecision(b, HEX),
					alphaNone ? NONE : alpha * m
				];
				setCache(cacheKey, res2);
				return res2;
			}
			r *= MAX_RGB;
			g *= MAX_RGB;
			b *= MAX_RGB;
		} else if (REG_CS_XYZ.test(colorSpace)) {
			let xyzA, xyzB;
			if (REG_CURRENT.test(colorA)) xyzA = [
				NONE,
				NONE,
				NONE,
				NONE
			];
			else xyzA = convertColorToXyz(colorA, {
				colorSpace,
				d50: colorSpace === "xyz-d50",
				format: VAL_MIX
			});
			if (REG_CURRENT.test(colorB)) xyzB = [
				NONE,
				NONE,
				NONE,
				NONE
			];
			else xyzB = convertColorToXyz(colorB, {
				colorSpace,
				d50: colorSpace === "xyz-d50",
				format: VAL_MIX
			});
			if (xyzA instanceof NullObject || xyzB instanceof NullObject) return cacheInvalidColorValue(cacheKey, format, nullable);
			const [xxA, yyA, zzA, aaA] = xyzA;
			const [xxB, yyB, zzB, aaB] = xyzB;
			const xNone = xxA === NONE && xxB === NONE;
			const yNone = yyA === NONE && yyB === NONE;
			const zNone = zzA === NONE && zzB === NONE;
			const alphaNone = aaA === NONE && aaB === NONE;
			const [[xA, yA, zA, alphaA], [xB, yB, zB, alphaB]] = normalizeColorComponents([
				xxA,
				yyA,
				zzA,
				aaA
			], [
				xxB,
				yyB,
				zzB,
				aaB
			], true);
			const factorA = alphaA * pA;
			const factorB = alphaB * pB;
			alpha = factorA + factorB;
			let x, y, z;
			if (alpha === 0) {
				x = xA * pA + xB * pB;
				y = yA * pA + yB * pB;
				z = zA * pA + zB * pB;
			} else {
				x = (xA * factorA + xB * factorB) / alpha;
				y = (yA * factorA + yB * factorB) / alpha;
				z = (zA * factorA + zB * factorB) / alpha;
				alpha = parseFloat(alpha.toFixed(3));
			}
			if (format === VAL_COMP) {
				const res2 = [
					colorSpace,
					xNone ? NONE : roundToPrecision(x, HEX),
					yNone ? NONE : roundToPrecision(y, HEX),
					zNone ? NONE : roundToPrecision(z, HEX),
					alphaNone ? NONE : alpha * m
				];
				setCache(cacheKey, res2);
				return res2;
			}
			if (colorSpace === "xyz-d50") [r, g, b] = transformXyzD50ToRgb([
				x,
				y,
				z
			], true);
			else [r, g, b] = transformXyzToRgb([
				x,
				y,
				z
			], true);
		} else if (/^h(?:sl|wb)$/.test(colorSpace)) {
			let hslA, hslB;
			if (colorSpace === "hsl") {
				if (REG_CURRENT.test(colorA)) hslA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else hslA = convertColorToHsl(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) hslB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else hslB = convertColorToHsl(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			} else {
				if (REG_CURRENT.test(colorA)) hslA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else hslA = convertColorToHwb(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) hslB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else hslB = convertColorToHwb(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			}
			if (hslA instanceof NullObject || hslB instanceof NullObject) return cacheInvalidColorValue(cacheKey, format, nullable);
			const [hhA, ssA, llA, aaA] = hslA;
			const [hhB, ssB, llB, aaB] = hslB;
			const alphaNone = aaA === NONE && aaB === NONE;
			let [[hA, sA, lA, alphaA], [hB, sB, lB, alphaB]] = normalizeColorComponents([
				hhA,
				ssA,
				llA,
				aaA
			], [
				hhB,
				ssB,
				llB,
				aaB
			], true);
			if (hueArc) [hA, hB] = interpolateHue(hA, hB, hueArc);
			const factorA = alphaA * pA;
			const factorB = alphaB * pB;
			alpha = factorA + factorB;
			const h = (hA * pA + hB * pB) % DEG;
			let s, l;
			if (alpha === 0) {
				s = sA * pA + sB * pB;
				l = lA * pA + lB * pB;
			} else {
				s = (sA * factorA + sB * factorB) / alpha;
				l = (lA * factorA + lB * factorB) / alpha;
				alpha = parseFloat(alpha.toFixed(3));
			}
			[r, g, b] = convertColorToRgb(`${colorSpace}(${h} ${s} ${l})`);
			if (format === VAL_COMP) {
				const res2 = [
					"srgb",
					roundToPrecision(r / MAX_RGB, HEX),
					roundToPrecision(g / MAX_RGB, HEX),
					roundToPrecision(b / MAX_RGB, HEX),
					alphaNone ? NONE : alpha * m
				];
				setCache(cacheKey, res2);
				return res2;
			}
		} else if (/^(?:ok)?lch$/.test(colorSpace)) {
			let lchA, lchB;
			if (colorSpace === "lch") {
				if (REG_CURRENT.test(colorA)) lchA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else lchA = convertColorToLch(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) lchB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else lchB = convertColorToLch(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			} else {
				if (REG_CURRENT.test(colorA)) lchA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else lchA = convertColorToOklch(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) lchB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else lchB = convertColorToOklch(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			}
			if (lchA instanceof NullObject || lchB instanceof NullObject) return cacheInvalidColorValue(cacheKey, format, nullable);
			const [llA, ccA, hhA, aaA] = lchA;
			const [llB, ccB, hhB, aaB] = lchB;
			const lNone = llA === NONE && llB === NONE;
			const cNone = ccA === NONE && ccB === NONE;
			const hNone = hhA === NONE && hhB === NONE;
			const alphaNone = aaA === NONE && aaB === NONE;
			let [[lA, cA, hA, alphaA], [lB, cB, hB, alphaB]] = normalizeColorComponents([
				llA,
				ccA,
				hhA,
				aaA
			], [
				llB,
				ccB,
				hhB,
				aaB
			], true);
			if (hueArc) [hA, hB] = interpolateHue(hA, hB, hueArc);
			const factorA = alphaA * pA;
			const factorB = alphaB * pB;
			alpha = factorA + factorB;
			const h = (hA * pA + hB * pB) % DEG;
			let l, c;
			if (alpha === 0) {
				l = lA * pA + lB * pB;
				c = cA * pA + cB * pB;
			} else {
				l = (lA * factorA + lB * factorB) / alpha;
				c = (cA * factorA + cB * factorB) / alpha;
				alpha = parseFloat(alpha.toFixed(3));
			}
			if (format === VAL_COMP) {
				const res2 = [
					colorSpace,
					lNone ? NONE : roundToPrecision(l, HEX),
					cNone ? NONE : roundToPrecision(c, HEX),
					hNone ? NONE : roundToPrecision(h, HEX),
					alphaNone ? NONE : alpha * m
				];
				setCache(cacheKey, res2);
				return res2;
			}
			[, r, g, b] = resolveColorValue(`${colorSpace}(${l} ${c} ${h})`);
		} else {
			let labA, labB;
			if (colorSpace === "lab") {
				if (REG_CURRENT.test(colorA)) labA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else labA = convertColorToLab(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) labB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else labB = convertColorToLab(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			} else {
				if (REG_CURRENT.test(colorA)) labA = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else labA = convertColorToOklab(colorA, {
					colorSpace,
					format: VAL_MIX
				});
				if (REG_CURRENT.test(colorB)) labB = [
					NONE,
					NONE,
					NONE,
					NONE
				];
				else labB = convertColorToOklab(colorB, {
					colorSpace,
					format: VAL_MIX
				});
			}
			if (labA instanceof NullObject || labB instanceof NullObject) return cacheInvalidColorValue(cacheKey, format, nullable);
			const [llA, aaA, bbA, alA] = labA;
			const [llB, aaB, bbB, alB] = labB;
			const lNone = llA === NONE && llB === NONE;
			const aNone = aaA === NONE && aaB === NONE;
			const bNone = bbA === NONE && bbB === NONE;
			const alphaNone = alA === NONE && alB === NONE;
			const [[lA, aA, bA, alphaA], [lB, aB, bB, alphaB]] = normalizeColorComponents([
				llA,
				aaA,
				bbA,
				alA
			], [
				llB,
				aaB,
				bbB,
				alB
			], true);
			const factorA = alphaA * pA;
			const factorB = alphaB * pB;
			alpha = factorA + factorB;
			let l, aO, bO;
			if (alpha === 0) {
				l = lA * pA + lB * pB;
				aO = aA * pA + aB * pB;
				bO = bA * pA + bB * pB;
			} else {
				l = (lA * factorA + lB * factorB) / alpha;
				aO = (aA * factorA + aB * factorB) / alpha;
				bO = (bA * factorA + bB * factorB) / alpha;
				alpha = parseFloat(alpha.toFixed(3));
			}
			if (format === VAL_COMP) {
				const res2 = [
					colorSpace,
					lNone ? NONE : roundToPrecision(l, HEX),
					aNone ? NONE : roundToPrecision(aO, HEX),
					bNone ? NONE : roundToPrecision(bO, HEX),
					alphaNone ? NONE : alpha * m
				];
				setCache(cacheKey, res2);
				return res2;
			}
			[, r, g, b] = resolveColorValue(`${colorSpace}(${l} ${aO} ${bO})`);
		}
		const res = [
			"rgb",
			Math.round(r),
			Math.round(g),
			Math.round(b),
			parseFloat((alpha * m).toFixed(3))
		];
		setCache(cacheKey, res);
		return res;
	};
	var import_css_tokenizer = require_dist$4();
	var { CloseParen: PAREN_CLOSE, Comment: COMMENT, EOF, Ident: IDENT, Whitespace: W_SPACE } = import_css_tokenizer.TokenType;
	var NAMESPACE2 = "css-var";
	var REG_FN_CALC = new RegExp(SYN_FN_CALC);
	var REG_FN_VAR = new RegExp(SYN_FN_VAR);
	function resolveCustomProperty(tokens, opt = {}) {
		if (!Array.isArray(tokens)) throw new TypeError(`${tokens} is not an array.`);
		const { customProperty = {} } = opt;
		const items = [];
		while (tokens.length) {
			const token = tokens.shift();
			if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
			const [type, value] = token;
			if (type === PAREN_CLOSE) break;
			if (value === FN_VAR) {
				const [restTokens, item] = resolveCustomProperty(tokens, opt);
				tokens = restTokens;
				if (item) items.push(item);
			} else if (type === IDENT) {
				if (value.startsWith("--")) {
					let item;
					if (Object.hasOwnProperty.call(customProperty, value)) item = customProperty[value];
					else if (typeof customProperty.callback === "function") item = customProperty.callback(value);
					if (item) items.push(item);
				} else if (value) items.push(value);
			}
		}
		let resolveAsColor = false;
		if (items.length > 1) {
			const lastValue = items[items.length - 1];
			resolveAsColor = isColor(lastValue);
		}
		let resolvedValue = "";
		for (let item of items) {
			item = item.trim();
			if (REG_FN_VAR.test(item)) {
				const resolvedItem = resolveVar(item, opt);
				if (isString(resolvedItem)) if (resolveAsColor) {
					if (isColor(resolvedItem)) resolvedValue = resolvedItem;
				} else resolvedValue = resolvedItem;
			} else if (REG_FN_CALC.test(item)) {
				item = cssCalc(item, opt);
				if (resolveAsColor) {
					if (isColor(item)) resolvedValue = item;
				} else resolvedValue = item;
			} else if (item && !/^(?:inherit|initial|revert(?:-layer)?|unset)$/.test(item)) if (resolveAsColor) {
				if (isColor(item)) resolvedValue = item;
			} else resolvedValue = item;
			if (resolvedValue) break;
		}
		return [tokens, resolvedValue];
	}
	function parseTokens(tokens, opt = {}) {
		const res = [];
		while (tokens.length) {
			const [type = "", value = ""] = tokens.shift();
			if (value === FN_VAR) {
				const [restTokens, resolvedValue] = resolveCustomProperty(tokens, opt);
				if (!resolvedValue) return new NullObject();
				tokens = restTokens;
				res.push(resolvedValue);
			} else switch (type) {
				case PAREN_CLOSE:
					if (res.length) if (res[res.length - 1] === " ") res.splice(-1, 1, value);
					else res.push(value);
					else res.push(value);
					break;
				case W_SPACE:
					if (res.length) {
						const lastValue = res[res.length - 1];
						if (isString(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") res.push(value);
					}
					break;
				default: if (type !== COMMENT && type !== EOF) res.push(value);
			}
		}
		return res;
	}
	function resolveVar(value, opt = {}) {
		const { format = "" } = opt;
		if (isString(value)) {
			if (!REG_FN_VAR.test(value) || format === VAL_SPEC) return value;
			value = value.trim();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE2,
			name: "resolveVar",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			return cachedResult.item;
		}
		const values = parseTokens((0, import_css_tokenizer.tokenize)({ css: value }), opt);
		if (Array.isArray(values)) {
			let color = values.join("");
			if (REG_FN_CALC.test(color)) color = cssCalc(color, opt);
			setCache(cacheKey, color);
			return color;
		} else {
			setCache(cacheKey, null);
			return new NullObject();
		}
	}
	var cssVar = (value, opt = {}) => {
		const resolvedValue = resolveVar(value, opt);
		if (isString(resolvedValue)) return resolvedValue;
		return "";
	};
	var import_css_color_parser = require_dist();
	var import_css_parser_algorithms = require_dist$3();
	var import_css_tokenizer2 = require_dist$4();
	var { CloseParen: PAREN_CLOSE2, Comment: COMMENT2, Dimension: DIM, EOF: EOF2, Function: FUNC, Ident: IDENT2, Number: NUM2, OpenParen: PAREN_OPEN, Percentage: PCT2, Whitespace: W_SPACE2 } = import_css_tokenizer2.TokenType;
	var { HasNoneKeywords: KEY_NONE } = import_css_color_parser.SyntaxFlag;
	var NAMESPACE3 = "relative-color";
	var OCT2 = 8;
	var DEC2 = 10;
	var HEX2 = 16;
	var MAX_PCT2 = 100;
	var MAX_RGB2 = 255;
	var REG_COLOR_CAPT = new RegExp(`^${FN_REL}(${SYN_COLOR_TYPE}|${SYN_MIX})\\s+`);
	var REG_CS_HSL = /(?:hsla?|hwb)$/;
	var REG_CS_CIE = new RegExp(`^(?:${CS_LAB}|${CS_LCH})$`);
	var REG_FN_MATH_START = new RegExp(SYN_FN_MATH_START);
	var REG_FN_REL = new RegExp(FN_REL);
	var REG_FN_REL_CAPT = new RegExp(`^${FN_REL_CAPT}`);
	var REG_FN_REL_START = new RegExp(`^${FN_REL}`);
	var REG_FN_VAR2 = new RegExp(SYN_FN_VAR);
	function resolveColorChannels(tokens, opt = {}) {
		if (!Array.isArray(tokens)) throw new TypeError(`${tokens} is not an array.`);
		const { colorSpace = "", format = "" } = opt;
		const colorChannel = (/* @__PURE__ */ new Map([
			["color", [
				"r",
				"g",
				"b",
				"alpha"
			]],
			["hsl", [
				"h",
				"s",
				"l",
				"alpha"
			]],
			["hsla", [
				"h",
				"s",
				"l",
				"alpha"
			]],
			["hwb", [
				"h",
				"w",
				"b",
				"alpha"
			]],
			["lab", [
				"l",
				"a",
				"b",
				"alpha"
			]],
			["lch", [
				"l",
				"c",
				"h",
				"alpha"
			]],
			["oklab", [
				"l",
				"a",
				"b",
				"alpha"
			]],
			["oklch", [
				"l",
				"c",
				"h",
				"alpha"
			]],
			["rgb", [
				"r",
				"g",
				"b",
				"alpha"
			]],
			["rgba", [
				"r",
				"g",
				"b",
				"alpha"
			]]
		])).get(colorSpace);
		if (!colorChannel) return new NullObject();
		const mathFunc = /* @__PURE__ */ new Set();
		const channels = [
			[],
			[],
			[],
			[]
		];
		let i = 0;
		let nest = 0;
		let func = false;
		while (tokens.length) {
			const token = tokens.shift();
			if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
			const [type, value, , , detail] = token;
			const channel = channels[i];
			if (Array.isArray(channel)) switch (type) {
				case DIM: {
					const resolvedValue = resolveDimension(token, opt);
					if (isString(resolvedValue)) channel.push(resolvedValue);
					else channel.push(value);
					break;
				}
				case FUNC:
					channel.push(value);
					func = true;
					nest++;
					if (REG_FN_MATH_START.test(value)) mathFunc.add(nest);
					break;
				case IDENT2:
					if (!colorChannel.includes(value)) return new NullObject();
					channel.push(value);
					if (!func) i++;
					break;
				case NUM2:
					channel.push(Number(detail?.value));
					if (!func) i++;
					break;
				case PAREN_OPEN:
					channel.push(value);
					nest++;
					break;
				case PAREN_CLOSE2:
					if (func) {
						if (channel[channel.length - 1] === " ") channel.splice(-1, 1, value);
						else channel.push(value);
						if (mathFunc.has(nest)) mathFunc.delete(nest);
						nest--;
						if (nest === 0) {
							func = false;
							i++;
						}
					}
					break;
				case PCT2:
					channel.push(Number(detail?.value) / MAX_PCT2);
					if (!func) i++;
					break;
				case W_SPACE2:
					if (channel.length && func) {
						const lastValue = channel[channel.length - 1];
						if (typeof lastValue === "number") channel.push(value);
						else if (isString(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") channel.push(value);
					}
					break;
				default: if (type !== COMMENT2 && type !== EOF2 && func) channel.push(value);
			}
		}
		const channelValues = [];
		for (const channel of channels) if (channel.length === 1) {
			const [resolvedValue] = channel;
			if (isStringOrNumber(resolvedValue)) channelValues.push(resolvedValue);
		} else if (channel.length) {
			const resolvedValue = serializeCalc(channel.join(""), { format });
			channelValues.push(resolvedValue);
		}
		return channelValues;
	}
	function extractOriginColor(value, opt = {}) {
		const { currentColor = "", format = "" } = opt;
		if (isString(value)) {
			value = value.toLowerCase().trim();
			if (!value) return new NullObject();
			if (!REG_FN_REL_START.test(value)) return value;
		} else return new NullObject();
		const cacheKey = createCacheKey({
			namespace: NAMESPACE3,
			name: "extractOriginColor",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			return cachedResult.item;
		}
		if (/currentcolor/.test(value)) if (currentColor) value = value.replace(/currentcolor/g, currentColor);
		else {
			setCache(cacheKey, null);
			return new NullObject();
		}
		let colorSpace = "";
		if (REG_FN_REL_CAPT.test(value)) [, colorSpace] = value.match(REG_FN_REL_CAPT);
		opt.colorSpace = colorSpace;
		if (REG_COLOR_CAPT.test(value)) {
			const [, originColor] = value.match(REG_COLOR_CAPT);
			const [, restValue] = value.split(originColor);
			if (/^[a-z]+$/.test(originColor)) {
				if (!/^transparent$/.test(originColor) && !Object.prototype.hasOwnProperty.call(NAMED_COLORS, originColor)) {
					setCache(cacheKey, null);
					return new NullObject();
				}
			} else if (format === VAL_SPEC) {
				const resolvedOriginColor = resolveColor(originColor, opt);
				if (isString(resolvedOriginColor)) value = value.replace(originColor, resolvedOriginColor);
			}
			if (format === VAL_SPEC) {
				const channelValues = resolveColorChannels((0, import_css_tokenizer2.tokenize)({ css: restValue }), opt);
				if (channelValues instanceof NullObject) {
					setCache(cacheKey, null);
					return channelValues;
				}
				const [v1, v2, v3, v4] = channelValues;
				let channelValue = "";
				if (isStringOrNumber(v4)) channelValue = ` ${v1} ${v2} ${v3} / ${v4})`;
				else channelValue = ` ${channelValues.join(" ")})`;
				if (restValue !== channelValue) value = value.replace(restValue, channelValue);
			}
		} else {
			const [, restValue] = value.split(REG_FN_REL_START);
			const tokens = (0, import_css_tokenizer2.tokenize)({ css: restValue });
			const originColor = [];
			let nest = 0;
			while (tokens.length) {
				const [type, tokenValue] = tokens.shift();
				switch (type) {
					case FUNC:
					case PAREN_OPEN:
						originColor.push(tokenValue);
						nest++;
						break;
					case PAREN_CLOSE2: {
						const lastValue = originColor[originColor.length - 1];
						if (lastValue === " ") originColor.splice(-1, 1, tokenValue);
						else if (isString(lastValue)) originColor.push(tokenValue);
						nest--;
						break;
					}
					case W_SPACE2: {
						const lastValue = originColor[originColor.length - 1];
						if (isString(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") originColor.push(tokenValue);
						break;
					}
					default: if (type !== COMMENT2 && type !== EOF2) originColor.push(tokenValue);
				}
				if (nest === 0) break;
			}
			const resolvedOriginColor = resolveRelativeColor(originColor.join("").trim(), opt);
			if (resolvedOriginColor instanceof NullObject) {
				setCache(cacheKey, null);
				return resolvedOriginColor;
			}
			const channelValues = resolveColorChannels(tokens, opt);
			if (channelValues instanceof NullObject) {
				setCache(cacheKey, null);
				return channelValues;
			}
			const [v1, v2, v3, v4] = channelValues;
			let channelValue = "";
			if (isStringOrNumber(v4)) channelValue = ` ${v1} ${v2} ${v3} / ${v4})`;
			else channelValue = ` ${channelValues.join(" ")})`;
			value = value.replace(restValue, `${resolvedOriginColor}${channelValue}`);
		}
		setCache(cacheKey, value);
		return value;
	}
	function resolveRelativeColor(value, opt = {}) {
		const { format = "" } = opt;
		if (isString(value)) {
			if (REG_FN_VAR2.test(value)) if (format === VAL_SPEC) return value;
			else throw new SyntaxError(`Unexpected token ${FN_VAR} found.`);
			else if (!REG_FN_REL.test(value)) return value;
			value = value.toLowerCase().trim();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE3,
			name: "resolveRelativeColor",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			return cachedResult.item;
		}
		const originColor = extractOriginColor(value, opt);
		if (originColor instanceof NullObject) {
			setCache(cacheKey, null);
			return originColor;
		}
		value = originColor;
		if (format === VAL_SPEC) {
			if (value.startsWith("rgba(")) value = value.replace(/^rgba\(/, "rgb(");
			else if (value.startsWith("hsla(")) value = value.replace(/^hsla\(/, "hsl(");
			return value;
		}
		const tokens = (0, import_css_tokenizer2.tokenize)({ css: value });
		const components = (0, import_css_parser_algorithms.parseComponentValue)(tokens);
		const parsedComponents = (0, import_css_color_parser.color)(components);
		if (!parsedComponents) {
			setCache(cacheKey, null);
			return new NullObject();
		}
		const { alpha: alphaComponent, channels: channelsComponent, colorNotation, syntaxFlags } = parsedComponents;
		let alpha;
		if (Number.isNaN(Number(alphaComponent))) if (syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE)) alpha = NONE;
		else alpha = 0;
		else alpha = roundToPrecision(Number(alphaComponent), OCT2);
		let v1;
		let v2;
		let v3;
		[v1, v2, v3] = channelsComponent;
		let resolvedValue;
		if (REG_CS_CIE.test(colorNotation)) {
			const hasNone = syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE);
			if (Number.isNaN(v1)) if (hasNone) v1 = NONE;
			else v1 = 0;
			else v1 = roundToPrecision(v1, HEX2);
			if (Number.isNaN(v2)) if (hasNone) v2 = NONE;
			else v2 = 0;
			else v2 = roundToPrecision(v2, HEX2);
			if (Number.isNaN(v3)) if (hasNone) v3 = NONE;
			else v3 = 0;
			else v3 = roundToPrecision(v3, HEX2);
			if (alpha === 1) resolvedValue = `${colorNotation}(${v1} ${v2} ${v3})`;
			else resolvedValue = `${colorNotation}(${v1} ${v2} ${v3} / ${alpha})`;
		} else if (REG_CS_HSL.test(colorNotation)) {
			if (Number.isNaN(v1)) v1 = 0;
			if (Number.isNaN(v2)) v2 = 0;
			if (Number.isNaN(v3)) v3 = 0;
			let [r, g, b] = convertColorToRgb(`${colorNotation}(${v1} ${v2} ${v3} / ${alpha})`);
			r = roundToPrecision(r / MAX_RGB2, DEC2);
			g = roundToPrecision(g / MAX_RGB2, DEC2);
			b = roundToPrecision(b / MAX_RGB2, DEC2);
			if (alpha === 1) resolvedValue = `color(srgb ${r} ${g} ${b})`;
			else resolvedValue = `color(srgb ${r} ${g} ${b} / ${alpha})`;
		} else {
			const cs = colorNotation === "rgb" ? "srgb" : colorNotation;
			const hasNone = syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE);
			if (Number.isNaN(v1)) if (hasNone) v1 = NONE;
			else v1 = 0;
			else v1 = roundToPrecision(v1, DEC2);
			if (Number.isNaN(v2)) if (hasNone) v2 = NONE;
			else v2 = 0;
			else v2 = roundToPrecision(v2, DEC2);
			if (Number.isNaN(v3)) if (hasNone) v3 = NONE;
			else v3 = 0;
			else v3 = roundToPrecision(v3, DEC2);
			if (alpha === 1) resolvedValue = `color(${cs} ${v1} ${v2} ${v3})`;
			else resolvedValue = `color(${cs} ${v1} ${v2} ${v3} / ${alpha})`;
		}
		setCache(cacheKey, resolvedValue);
		return resolvedValue;
	}
	var NAMESPACE4 = "resolve";
	var RGB_TRANSPARENT = "rgba(0, 0, 0, 0)";
	var REG_FN_CALC2 = new RegExp(SYN_FN_CALC);
	var REG_FN_REL2 = new RegExp(SYN_FN_REL);
	var REG_FN_VAR3 = new RegExp(SYN_FN_VAR);
	var resolveColor = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { currentColor = "", format = VAL_COMP, nullable = false } = opt;
		const cacheKey = createCacheKey({
			namespace: NAMESPACE4,
			name: "resolve",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			return cachedResult.item;
		}
		if (REG_FN_VAR3.test(value)) {
			if (format === VAL_SPEC) {
				setCache(cacheKey, value);
				return value;
			}
			const resolvedValue = resolveVar(value, opt);
			if (resolvedValue instanceof NullObject) switch (format) {
				case "hex":
				case "hexAlpha":
					setCache(cacheKey, resolvedValue);
					return resolvedValue;
				default: {
					if (nullable) {
						setCache(cacheKey, resolvedValue);
						return resolvedValue;
					}
					const res2 = RGB_TRANSPARENT;
					setCache(cacheKey, res2);
					return res2;
				}
			}
			else value = resolvedValue;
		}
		if (opt.format !== format) opt.format = format;
		value = value.toLowerCase();
		if (REG_FN_REL2.test(value)) {
			const resolvedValue = resolveRelativeColor(value, opt);
			if (format === VAL_COMP) {
				let res2;
				if (resolvedValue instanceof NullObject) if (nullable) res2 = resolvedValue;
				else res2 = RGB_TRANSPARENT;
				else res2 = resolvedValue;
				setCache(cacheKey, res2);
				return res2;
			}
			if (format === VAL_SPEC) {
				let res2 = "";
				if (resolvedValue instanceof NullObject) res2 = "";
				else res2 = resolvedValue;
				setCache(cacheKey, res2);
				return res2;
			}
			if (resolvedValue instanceof NullObject) value = "";
			else value = resolvedValue;
		}
		if (REG_FN_CALC2.test(value)) value = cssCalc(value, opt);
		let cs = "";
		let r = NaN;
		let g = NaN;
		let b = NaN;
		let alpha = NaN;
		if (value === "transparent") switch (format) {
			case VAL_SPEC:
				setCache(cacheKey, value);
				return value;
			case "hex":
				setCache(cacheKey, null);
				return new NullObject();
			case "hexAlpha": {
				const res2 = "#00000000";
				setCache(cacheKey, res2);
				return res2;
			}
			case VAL_COMP:
			default: {
				const res2 = RGB_TRANSPARENT;
				setCache(cacheKey, res2);
				return res2;
			}
		}
		else if (value === "currentcolor") {
			if (format === VAL_SPEC) {
				setCache(cacheKey, value);
				return value;
			}
			if (currentColor) {
				let resolvedValue;
				if (currentColor.startsWith(FN_MIX)) resolvedValue = resolveColorMix(currentColor, opt);
				else if (currentColor.startsWith(FN_COLOR)) resolvedValue = resolveColorFunc(currentColor, opt);
				else resolvedValue = resolveColorValue(currentColor, opt);
				if (resolvedValue instanceof NullObject) {
					setCache(cacheKey, resolvedValue);
					return resolvedValue;
				}
				[cs, r, g, b, alpha] = resolvedValue;
			} else if (format === VAL_COMP) {
				const res2 = RGB_TRANSPARENT;
				setCache(cacheKey, res2);
				return res2;
			}
		} else if (format === VAL_SPEC) if (value.startsWith(FN_MIX)) {
			const res2 = resolveColorMix(value, opt);
			setCache(cacheKey, res2);
			return res2;
		} else if (value.startsWith(FN_COLOR)) {
			const [scs, rr, gg, bb, aa] = resolveColorFunc(value, opt);
			let res2 = "";
			if (aa === 1) res2 = `color(${scs} ${rr} ${gg} ${bb})`;
			else res2 = `color(${scs} ${rr} ${gg} ${bb} / ${aa})`;
			setCache(cacheKey, res2);
			return res2;
		} else {
			const rgb = resolveColorValue(value, opt);
			if (isString(rgb)) {
				setCache(cacheKey, rgb);
				return rgb;
			}
			const [scs, rr, gg, bb, aa] = rgb;
			let res2 = "";
			if (scs === "rgb") if (aa === 1) res2 = `${scs}(${rr}, ${gg}, ${bb})`;
			else res2 = `${scs}a(${rr}, ${gg}, ${bb}, ${aa})`;
			else if (aa === 1) res2 = `${scs}(${rr} ${gg} ${bb})`;
			else res2 = `${scs}(${rr} ${gg} ${bb} / ${aa})`;
			setCache(cacheKey, res2);
			return res2;
		}
		else if (value.startsWith(FN_MIX)) {
			if (/currentcolor/.test(value)) {
				if (currentColor) value = value.replace(/currentcolor/g, currentColor);
			}
			if (/transparent/.test(value)) value = value.replace(/transparent/g, RGB_TRANSPARENT);
			const resolvedValue = resolveColorMix(value, opt);
			if (resolvedValue instanceof NullObject) {
				setCache(cacheKey, resolvedValue);
				return resolvedValue;
			}
			[cs, r, g, b, alpha] = resolvedValue;
		} else if (value.startsWith(FN_COLOR)) {
			const resolvedValue = resolveColorFunc(value, opt);
			if (resolvedValue instanceof NullObject) {
				setCache(cacheKey, resolvedValue);
				return resolvedValue;
			}
			[cs, r, g, b, alpha] = resolvedValue;
		} else if (value) {
			const resolvedValue = resolveColorValue(value, opt);
			if (resolvedValue instanceof NullObject) {
				setCache(cacheKey, resolvedValue);
				return resolvedValue;
			}
			[cs, r, g, b, alpha] = resolvedValue;
		}
		let res = "";
		switch (format) {
			case "hex":
				if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || Number.isNaN(alpha) || alpha === 0) {
					setCache(cacheKey, null);
					return new NullObject();
				}
				res = convertRgbToHex([
					r,
					g,
					b,
					1
				]);
				break;
			case "hexAlpha":
				if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || Number.isNaN(alpha)) {
					setCache(cacheKey, null);
					return new NullObject();
				}
				res = convertRgbToHex([
					r,
					g,
					b,
					alpha
				]);
				break;
			case VAL_COMP:
			default: switch (cs) {
				case "rgb":
					if (alpha === 1) res = `${cs}(${r}, ${g}, ${b})`;
					else res = `${cs}a(${r}, ${g}, ${b}, ${alpha})`;
					break;
				case "lab":
				case "lch":
				case "oklab":
				case "oklch":
					if (alpha === 1) res = `${cs}(${r} ${g} ${b})`;
					else res = `${cs}(${r} ${g} ${b} / ${alpha})`;
					break;
				default: if (alpha === 1) res = `color(${cs} ${r} ${g} ${b})`;
				else res = `color(${cs} ${r} ${g} ${b} / ${alpha})`;
			}
		}
		setCache(cacheKey, res);
		return res;
	};
	var resolve = (value, opt = {}) => {
		opt.nullable = false;
		const resolvedValue = resolveColor(value, opt);
		if (resolvedValue instanceof NullObject) return null;
		return resolvedValue;
	};
	var { CloseParen: PAREN_CLOSE3, Comma: COMMA, Comment: COMMENT3, Delim: DELIM, EOF: EOF3, Function: FUNC2, Ident: IDENT3, OpenParen: PAREN_OPEN2, Whitespace: W_SPACE3 } = import_css_tokenizer3.TokenType;
	var NAMESPACE5 = "util";
	var DEC3 = 10;
	var HEX3 = 16;
	var DEG2 = 360;
	var DEG_HALF2 = 180;
	var REG_COLOR2 = new RegExp(`^(?:${SYN_COLOR_TYPE})$`);
	var REG_FN_COLOR2 = /^(?:(?:ok)?l(?:ab|ch)|color(?:-mix)?|hsla?|hwb|rgba?|var)\(/;
	var REG_MIX2 = new RegExp(SYN_MIX);
	var splitValue = (value, opt = {}) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const { delimiter = " ", preserveComment = false } = opt;
		const cacheKey = createCacheKey({
			namespace: NAMESPACE5,
			name: "splitValue",
			value
		}, {
			delimiter,
			preserveComment
		});
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		let regDelimiter;
		if (delimiter === ",") regDelimiter = /^,$/;
		else if (delimiter === "/") regDelimiter = /^\/$/;
		else regDelimiter = /^\s+$/;
		const tokens = (0, import_css_tokenizer3.tokenize)({ css: value });
		let nest = 0;
		let str = "";
		const res = [];
		while (tokens.length) {
			const [type, value2] = tokens.shift();
			switch (type) {
				case COMMA:
					if (regDelimiter.test(value2)) if (nest === 0) {
						res.push(str.trim());
						str = "";
					} else str += value2;
					else str += value2;
					break;
				case DELIM:
					if (regDelimiter.test(value2)) if (nest === 0) {
						res.push(str.trim());
						str = "";
					} else str += value2;
					else str += value2;
					break;
				case COMMENT3:
					if (preserveComment && (delimiter === "," || delimiter === "/")) str += value2;
					break;
				case FUNC2:
				case PAREN_OPEN2:
					str += value2;
					nest++;
					break;
				case PAREN_CLOSE3:
					str += value2;
					nest--;
					break;
				case W_SPACE3:
					if (regDelimiter.test(value2)) if (nest === 0) {
						if (str) {
							res.push(str.trim());
							str = "";
						}
					} else str += " ";
					else if (!str.endsWith(" ")) str += " ";
					break;
				default: if (type === EOF3) {
					res.push(str.trim());
					str = "";
				} else str += value2;
			}
		}
		setCache(cacheKey, res);
		return res;
	};
	var extractDashedIdent = (value) => {
		if (isString(value)) value = value.trim();
		else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE5,
			name: "extractDashedIdent",
			value
		});
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const tokens = (0, import_css_tokenizer3.tokenize)({ css: value });
		const items = /* @__PURE__ */ new Set();
		while (tokens.length) {
			const [type, value2] = tokens.shift();
			if (type === IDENT3 && value2.startsWith("--")) items.add(value2);
		}
		const res = [...items];
		setCache(cacheKey, res);
		return res;
	};
	var isColor = (value, opt = {}) => {
		if (isString(value)) {
			value = value.toLowerCase().trim();
			if (value && isString(value)) {
				if (/^[a-z]+$/.test(value)) {
					if (/^(?:currentcolor|transparent)$/.test(value) || Object.prototype.hasOwnProperty.call(NAMED_COLORS, value)) return true;
				} else if (REG_COLOR2.test(value) || REG_MIX2.test(value)) return true;
				else if (REG_FN_COLOR2.test(value)) {
					opt.nullable = true;
					if (!opt.format) opt.format = VAL_SPEC;
					if (resolveColor(value, opt)) return true;
				}
			}
		}
		return false;
	};
	var valueToJsonString = (value, func = false) => {
		if (typeof value === "undefined") return "";
		return JSON.stringify(value, (_key, val) => {
			let replacedValue;
			if (typeof val === "undefined") replacedValue = null;
			else if (typeof val === "function") if (func) replacedValue = val.toString().replace(/\s/g, "").substring(0, HEX3);
			else replacedValue = val.name;
			else if (val instanceof Map || val instanceof Set) replacedValue = [...val];
			else if (typeof val === "bigint") replacedValue = val.toString();
			else replacedValue = val;
			return replacedValue;
		});
	};
	var roundToPrecision = (value, bit = 0) => {
		if (!Number.isFinite(value)) throw new TypeError(`${value} is not a finite number.`);
		if (!Number.isFinite(bit)) throw new TypeError(`${bit} is not a finite number.`);
		else if (bit < 0 || bit > HEX3) throw new RangeError(`${bit} is not between 0 and ${HEX3}.`);
		if (bit === 0) return Math.round(value);
		let val;
		if (bit === HEX3) val = value.toPrecision(6);
		else if (bit < DEC3) val = value.toPrecision(4);
		else val = value.toPrecision(5);
		return parseFloat(val);
	};
	var interpolateHue = (hueA, hueB, arc = "shorter") => {
		if (!Number.isFinite(hueA)) throw new TypeError(`${hueA} is not a finite number.`);
		if (!Number.isFinite(hueB)) throw new TypeError(`${hueB} is not a finite number.`);
		switch (arc) {
			case "decreasing":
				if (hueB > hueA) hueA += DEG2;
				break;
			case "increasing":
				if (hueB < hueA) hueB += DEG2;
				break;
			case "longer":
				if (hueB > hueA && hueB < hueA + DEG_HALF2) hueA += DEG2;
				else if (hueB > hueA + DEG_HALF2 * -1 && hueB <= hueA) hueB += DEG2;
				break;
			default: if (hueB > hueA + DEG_HALF2) hueA += DEG2;
			else if (hueB < hueA + DEG_HALF2 * -1) hueB += DEG2;
		}
		return [hueA, hueB];
	};
	var MAX_CACHE = 4096;
	var CacheItem = class {
		#isNull;
		#item;
		/**
		* constructor
		*/
		constructor(item, isNull = false) {
			this.#item = item;
			this.#isNull = !!isNull;
		}
		get item() {
			return this.#item;
		}
		get isNull() {
			return this.#isNull;
		}
	};
	var NullObject = class extends CacheItem {
		/**
		* constructor
		*/
		constructor() {
			super(Symbol("null"), true);
		}
	};
	var lruCache = new import_lru_cache.LRUCache({ max: MAX_CACHE });
	var setCache = (key, value) => {
		if (key) if (value === null) lruCache.set(key, new NullObject());
		else if (value instanceof CacheItem) lruCache.set(key, value);
		else lruCache.set(key, new CacheItem(value));
	};
	var getCache = (key) => {
		if (key && lruCache.has(key)) {
			const item = lruCache.get(key);
			if (item instanceof CacheItem) return item;
			lruCache.delete(key);
			return false;
		}
		return false;
	};
	var createCacheKey = (keyData, opt = {}) => {
		const { customProperty = {}, dimension = {} } = opt;
		let cacheKey = "";
		if (keyData && Object.keys(keyData).length && typeof customProperty.callback !== "function" && typeof dimension.callback !== "function") {
			keyData.opt = valueToJsonString(opt);
			cacheKey = valueToJsonString(keyData);
		}
		return cacheKey;
	};
	var { CloseParen: PAREN_CLOSE4, Comment: COMMENT4, Dimension: DIM2, EOF: EOF4, Function: FUNC3, OpenParen: PAREN_OPEN3, Whitespace: W_SPACE4 } = import_css_tokenizer4.TokenType;
	var NAMESPACE6 = "css-calc";
	var TRIA2 = 3;
	var HEX4 = 16;
	var MAX_PCT3 = 100;
	var REG_FN_CALC3 = new RegExp(SYN_FN_CALC);
	var REG_FN_CALC_NUM = new RegExp(`^calc\\((${NUM})\\)$`);
	var REG_FN_MATH_START2 = new RegExp(SYN_FN_MATH_START);
	var REG_FN_VAR4 = new RegExp(SYN_FN_VAR);
	var REG_FN_VAR_START = new RegExp(SYN_FN_VAR_START);
	var REG_OPERATOR = /\s[*+/-]\s/;
	var REG_TYPE_DIM = new RegExp(`^(${NUM})(${ANGLE}|${LENGTH})$`);
	var REG_TYPE_DIM_PCT = new RegExp(`^(${NUM})(${ANGLE}|${LENGTH}|%)$`);
	var REG_TYPE_PCT = new RegExp(`^(${NUM})%$`);
	var Calculator = class {
		#hasNum;
		#numSum;
		#numMul;
		#hasPct;
		#pctSum;
		#pctMul;
		#hasDim;
		#dimSum;
		#dimSub;
		#dimMul;
		#dimDiv;
		#hasEtc;
		#etcSum;
		#etcSub;
		#etcMul;
		#etcDiv;
		/**
		* constructor
		*/
		constructor() {
			this.#hasNum = false;
			this.#numSum = [];
			this.#numMul = [];
			this.#hasPct = false;
			this.#pctSum = [];
			this.#pctMul = [];
			this.#hasDim = false;
			this.#dimSum = [];
			this.#dimSub = [];
			this.#dimMul = [];
			this.#dimDiv = [];
			this.#hasEtc = false;
			this.#etcSum = [];
			this.#etcSub = [];
			this.#etcMul = [];
			this.#etcDiv = [];
		}
		get hasNum() {
			return this.#hasNum;
		}
		set hasNum(value) {
			this.#hasNum = !!value;
		}
		get numSum() {
			return this.#numSum;
		}
		get numMul() {
			return this.#numMul;
		}
		get hasPct() {
			return this.#hasPct;
		}
		set hasPct(value) {
			this.#hasPct = !!value;
		}
		get pctSum() {
			return this.#pctSum;
		}
		get pctMul() {
			return this.#pctMul;
		}
		get hasDim() {
			return this.#hasDim;
		}
		set hasDim(value) {
			this.#hasDim = !!value;
		}
		get dimSum() {
			return this.#dimSum;
		}
		get dimSub() {
			return this.#dimSub;
		}
		get dimMul() {
			return this.#dimMul;
		}
		get dimDiv() {
			return this.#dimDiv;
		}
		get hasEtc() {
			return this.#hasEtc;
		}
		set hasEtc(value) {
			this.#hasEtc = !!value;
		}
		get etcSum() {
			return this.#etcSum;
		}
		get etcSub() {
			return this.#etcSub;
		}
		get etcMul() {
			return this.#etcMul;
		}
		get etcDiv() {
			return this.#etcDiv;
		}
		/**
		* clear values
		* @returns void
		*/
		clear() {
			this.#hasNum = false;
			this.#numSum = [];
			this.#numMul = [];
			this.#hasPct = false;
			this.#pctSum = [];
			this.#pctMul = [];
			this.#hasDim = false;
			this.#dimSum = [];
			this.#dimSub = [];
			this.#dimMul = [];
			this.#dimDiv = [];
			this.#hasEtc = false;
			this.#etcSum = [];
			this.#etcSub = [];
			this.#etcMul = [];
			this.#etcDiv = [];
		}
		/**
		* sort values
		* @param values - values
		* @returns sorted values
		*/
		sort(values = []) {
			const arr = [...values];
			if (arr.length > 1) arr.sort((a, b) => {
				let res;
				if (REG_TYPE_DIM_PCT.test(a) && REG_TYPE_DIM_PCT.test(b)) {
					const [, valA, unitA] = a.match(REG_TYPE_DIM_PCT);
					const [, valB, unitB] = b.match(REG_TYPE_DIM_PCT);
					if (unitA === unitB) if (Number(valA) === Number(valB)) res = 0;
					else if (Number(valA) > Number(valB)) res = 1;
					else res = -1;
					else if (unitA > unitB) res = 1;
					else res = -1;
				} else if (a === b) res = 0;
				else if (a > b) res = 1;
				else res = -1;
				return res;
			});
			return arr;
		}
		/**
		* multiply values
		* @returns resolved value
		*/
		multiply() {
			const value = [];
			let num;
			if (this.#hasNum) {
				num = 1;
				for (const i of this.#numMul) {
					num *= i;
					if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) break;
				}
				if (!this.#hasPct && !this.#hasDim && !this.hasEtc) {
					if (Number.isFinite(num)) num = roundToPrecision(num, HEX4);
					value.push(num);
				}
			}
			if (this.#hasPct) {
				if (typeof num !== "number") num = 1;
				for (const i of this.#pctMul) {
					num *= i;
					if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) break;
				}
				if (Number.isFinite(num)) num = `${roundToPrecision(num, HEX4)}%`;
				if (!this.#hasDim && !this.hasEtc) value.push(num);
			}
			if (this.#hasDim) {
				let dim = "";
				let mul = "";
				let div = "";
				if (this.#dimMul.length) if (this.#dimMul.length === 1) [mul] = this.#dimMul;
				else mul = `${this.sort(this.#dimMul).join(" * ")}`;
				if (this.#dimDiv.length) if (this.#dimDiv.length === 1) [div] = this.#dimDiv;
				else div = `${this.sort(this.#dimDiv).join(" * ")}`;
				if (Number.isFinite(num)) {
					if (mul) if (div) if (div.includes("*")) dim = (0, import_css_calc4.calc)(`calc(${num} * ${mul} / (${div}))`, { toCanonicalUnits: true });
					else dim = (0, import_css_calc4.calc)(`calc(${num} * ${mul} / ${div})`, { toCanonicalUnits: true });
					else dim = (0, import_css_calc4.calc)(`calc(${num} * ${mul})`, { toCanonicalUnits: true });
					else if (div.includes("*")) dim = (0, import_css_calc4.calc)(`calc(${num} / (${div}))`, { toCanonicalUnits: true });
					else dim = (0, import_css_calc4.calc)(`calc(${num} / ${div})`, { toCanonicalUnits: true });
					value.push(dim.replace(/^calc/, ""));
				} else {
					if (!value.length && num !== void 0) value.push(num);
					if (mul) {
						if (div) if (div.includes("*")) dim = (0, import_css_calc4.calc)(`calc(${mul} / (${div}))`, { toCanonicalUnits: true });
						else dim = (0, import_css_calc4.calc)(`calc(${mul} / ${div})`, { toCanonicalUnits: true });
						else dim = (0, import_css_calc4.calc)(`calc(${mul})`, { toCanonicalUnits: true });
						if (value.length) value.push("*", dim.replace(/^calc/, ""));
						else value.push(dim.replace(/^calc/, ""));
					} else {
						dim = (0, import_css_calc4.calc)(`calc(${div})`, { toCanonicalUnits: true });
						if (value.length) value.push("/", dim.replace(/^calc/, ""));
						else value.push("1", "/", dim.replace(/^calc/, ""));
					}
				}
			}
			if (this.#hasEtc) {
				if (this.#etcMul.length) {
					if (!value.length && num !== void 0) value.push(num);
					const mul = this.sort(this.#etcMul).join(" * ");
					if (value.length) value.push(`* ${mul}`);
					else value.push(`${mul}`);
				}
				if (this.#etcDiv.length) {
					const div = this.sort(this.#etcDiv).join(" * ");
					if (div.includes("*")) if (value.length) value.push(`/ (${div})`);
					else value.push(`1 / (${div})`);
					else if (value.length) value.push(`/ ${div}`);
					else value.push(`1 / ${div}`);
				}
			}
			if (value.length) return value.join(" ");
			return "";
		}
		/**
		* sum values
		* @returns resolved value
		*/
		sum() {
			const value = [];
			if (this.#hasNum) {
				let num = 0;
				for (const i of this.#numSum) {
					num += i;
					if (!Number.isFinite(num) || Number.isNaN(num)) break;
				}
				value.push(num);
			}
			if (this.#hasPct) {
				let num = 0;
				for (const i of this.#pctSum) {
					num += i;
					if (!Number.isFinite(num)) break;
				}
				if (Number.isFinite(num)) num = `${num}%`;
				if (value.length) value.push(`+ ${num}`);
				else value.push(num);
			}
			if (this.#hasDim) {
				let dim, sum, sub;
				if (this.#dimSum.length) sum = this.sort(this.#dimSum).join(" + ");
				if (this.#dimSub.length) sub = this.sort(this.#dimSub).join(" + ");
				if (sum) if (sub) if (sub.includes("-")) dim = (0, import_css_calc4.calc)(`calc(${sum} - (${sub}))`, { toCanonicalUnits: true });
				else dim = (0, import_css_calc4.calc)(`calc(${sum} - ${sub})`, { toCanonicalUnits: true });
				else dim = (0, import_css_calc4.calc)(`calc(${sum})`, { toCanonicalUnits: true });
				else dim = (0, import_css_calc4.calc)(`calc(-1 * (${sub}))`, { toCanonicalUnits: true });
				if (value.length) value.push("+", dim.replace(/^calc/, ""));
				else value.push(dim.replace(/^calc/, ""));
			}
			if (this.#hasEtc) {
				if (this.#etcSum.length) {
					const sum = this.sort(this.#etcSum).map((item) => {
						let res;
						if (REG_OPERATOR.test(item) && !item.startsWith("(") && !item.endsWith(")")) res = `(${item})`;
						else res = item;
						return res;
					}).join(" + ");
					if (value.length) if (this.#etcSum.length > 1) value.push(`+ (${sum})`);
					else value.push(`+ ${sum}`);
					else value.push(`${sum}`);
				}
				if (this.#etcSub.length) {
					const sub = this.sort(this.#etcSub).map((item) => {
						let res;
						if (REG_OPERATOR.test(item) && !item.startsWith("(") && !item.endsWith(")")) res = `(${item})`;
						else res = item;
						return res;
					}).join(" + ");
					if (value.length) if (this.#etcSub.length > 1) value.push(`- (${sub})`);
					else value.push(`- ${sub}`);
					else if (this.#etcSub.length > 1) value.push(`-1 * (${sub})`);
					else value.push(`-1 * ${sub}`);
				}
			}
			if (value.length) return value.join(" ");
			return "";
		}
	};
	var sortCalcValues = (values = [], finalize = false) => {
		if (values.length < TRIA2) throw new Error(`Unexpected array length ${values.length}.`);
		const start = values.shift();
		if (!isString(start) || !start.endsWith("(")) throw new Error(`Unexpected token ${start}.`);
		const end = values.pop();
		if (end !== ")") throw new Error(`Unexpected token ${end}.`);
		if (values.length === 1) {
			const [value] = values;
			if (!isStringOrNumber(value)) throw new Error(`Unexpected token ${value}.`);
			return `${start}${value}${end}`;
		}
		const sortedValues = [];
		const cal = new Calculator();
		let operator = "";
		const l = values.length;
		for (let i = 0; i < l; i++) {
			const value = values[i];
			if (!isStringOrNumber(value)) throw new Error(`Unexpected token ${value}.`);
			if (value === "*" || value === "/") operator = value;
			else if (value === "+" || value === "-") {
				const sortedValue = cal.multiply();
				if (sortedValue) sortedValues.push(sortedValue, value);
				cal.clear();
				operator = "";
			} else {
				const numValue = Number(value);
				const strValue = `${value}`;
				switch (operator) {
					case "/":
						if (Number.isFinite(numValue)) {
							cal.hasNum = true;
							cal.numMul.push(1 / numValue);
						} else if (REG_TYPE_PCT.test(strValue)) {
							const [, val] = strValue.match(REG_TYPE_PCT);
							cal.hasPct = true;
							cal.pctMul.push(MAX_PCT3 * MAX_PCT3 / Number(val));
						} else if (REG_TYPE_DIM.test(strValue)) {
							cal.hasDim = true;
							cal.dimDiv.push(strValue);
						} else {
							cal.hasEtc = true;
							cal.etcDiv.push(strValue);
						}
						break;
					default: if (Number.isFinite(numValue)) {
						cal.hasNum = true;
						cal.numMul.push(numValue);
					} else if (REG_TYPE_PCT.test(strValue)) {
						const [, val] = strValue.match(REG_TYPE_PCT);
						cal.hasPct = true;
						cal.pctMul.push(Number(val));
					} else if (REG_TYPE_DIM.test(strValue)) {
						cal.hasDim = true;
						cal.dimMul.push(strValue);
					} else {
						cal.hasEtc = true;
						cal.etcMul.push(strValue);
					}
				}
			}
			if (i === l - 1) {
				const sortedValue = cal.multiply();
				if (sortedValue) sortedValues.push(sortedValue);
				cal.clear();
				operator = "";
			}
		}
		let resolvedValue = "";
		if (finalize && (sortedValues.includes("+") || sortedValues.includes("-"))) {
			const finalizedValues = [];
			cal.clear();
			operator = "";
			const l2 = sortedValues.length;
			for (let i = 0; i < l2; i++) {
				const value = sortedValues[i];
				if (isStringOrNumber(value)) if (value === "+" || value === "-") operator = value;
				else {
					const numValue = Number(value);
					const strValue = `${value}`;
					switch (operator) {
						case "-":
							if (Number.isFinite(numValue)) {
								cal.hasNum = true;
								cal.numSum.push(-1 * numValue);
							} else if (REG_TYPE_PCT.test(strValue)) {
								const [, val] = strValue.match(REG_TYPE_PCT);
								cal.hasPct = true;
								cal.pctSum.push(-1 * Number(val));
							} else if (REG_TYPE_DIM.test(strValue)) {
								cal.hasDim = true;
								cal.dimSub.push(strValue);
							} else {
								cal.hasEtc = true;
								cal.etcSub.push(strValue);
							}
							break;
						default: if (Number.isFinite(numValue)) {
							cal.hasNum = true;
							cal.numSum.push(numValue);
						} else if (REG_TYPE_PCT.test(strValue)) {
							const [, val] = strValue.match(REG_TYPE_PCT);
							cal.hasPct = true;
							cal.pctSum.push(Number(val));
						} else if (REG_TYPE_DIM.test(strValue)) {
							cal.hasDim = true;
							cal.dimSum.push(strValue);
						} else {
							cal.hasEtc = true;
							cal.etcSum.push(strValue);
						}
					}
				}
				if (i === l2 - 1) {
					const sortedValue = cal.sum();
					if (sortedValue) finalizedValues.push(sortedValue);
					cal.clear();
					operator = "";
				}
			}
			resolvedValue = finalizedValues.join(" ").replace(/\+\s-/g, "- ");
		} else resolvedValue = sortedValues.join(" ").replace(/\+\s-/g, "- ");
		if (resolvedValue.startsWith("(") && resolvedValue.endsWith(")") && resolvedValue.lastIndexOf("(") === 0 && resolvedValue.indexOf(")") === resolvedValue.length - 1) resolvedValue = resolvedValue.replace(/^\(/, "").replace(/\)$/, "");
		return `${start}${resolvedValue}${end}`;
	};
	var serializeCalc = (value, opt = {}) => {
		const { format = "" } = opt;
		if (isString(value)) {
			if (!REG_FN_VAR_START.test(value) || format !== VAL_SPEC) return value;
			value = value.toLowerCase().trim();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE6,
			name: "serializeCalc",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const items = (0, import_css_tokenizer4.tokenize)({ css: value }).map((token) => {
			const [type, value2] = token;
			let res = "";
			if (type !== W_SPACE4 && type !== COMMENT4) res = value2;
			return res;
		}).filter((v) => v);
		let startIndex = items.findLastIndex((item) => /\($/.test(item));
		while (startIndex) {
			const endIndex = items.findIndex((item, index) => {
				return item === ")" && index > startIndex;
			});
			let serializedValue = sortCalcValues(items.slice(startIndex, endIndex + 1));
			if (REG_FN_VAR_START.test(serializedValue)) serializedValue = (0, import_css_calc4.calc)(serializedValue, { toCanonicalUnits: true });
			items.splice(startIndex, endIndex - startIndex + 1, serializedValue);
			startIndex = items.findLastIndex((item) => /\($/.test(item));
		}
		const serializedCalc = sortCalcValues(items, true);
		setCache(cacheKey, serializedCalc);
		return serializedCalc;
	};
	var resolveDimension = (token, opt = {}) => {
		if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
		const [, , , , detail = {}] = token;
		const { unit, value } = detail;
		const { dimension = {} } = opt;
		if (unit === "px") return `${value}${unit}`;
		const relativeValue = Number(value);
		if (unit && Number.isFinite(relativeValue)) {
			let pixelValue;
			if (Object.hasOwnProperty.call(dimension, unit)) pixelValue = dimension[unit];
			else if (typeof dimension.callback === "function") pixelValue = dimension.callback(unit);
			pixelValue = Number(pixelValue);
			if (Number.isFinite(pixelValue)) return `${relativeValue * pixelValue}px`;
		}
		return new NullObject();
	};
	var parseTokens2 = (tokens, opt = {}) => {
		if (!Array.isArray(tokens)) throw new TypeError(`${tokens} is not an array.`);
		const { format = "" } = opt;
		const mathFunc = /* @__PURE__ */ new Set();
		let nest = 0;
		const res = [];
		while (tokens.length) {
			const token = tokens.shift();
			if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
			const [type = "", value = ""] = token;
			switch (type) {
				case DIM2:
					if (format === VAL_SPEC && !mathFunc.has(nest)) res.push(value);
					else {
						const resolvedValue = resolveDimension(token, opt);
						if (isString(resolvedValue)) res.push(resolvedValue);
						else res.push(value);
					}
					break;
				case FUNC3:
				case PAREN_OPEN3:
					res.push(value);
					nest++;
					if (REG_FN_MATH_START2.test(value)) mathFunc.add(nest);
					break;
				case PAREN_CLOSE4:
					if (res.length) if (res[res.length - 1] === " ") res.splice(-1, 1, value);
					else res.push(value);
					else res.push(value);
					if (mathFunc.has(nest)) mathFunc.delete(nest);
					nest--;
					break;
				case W_SPACE4:
					if (res.length) {
						const lastValue = res[res.length - 1];
						if (isString(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") res.push(value);
					}
					break;
				default: if (type !== COMMENT4 && type !== EOF4) res.push(value);
			}
		}
		return res;
	};
	var cssCalc = (value, opt = {}) => {
		const { format = "" } = opt;
		if (isString(value)) {
			if (REG_FN_VAR4.test(value)) if (format === VAL_SPEC) return value;
			else {
				const resolvedValue2 = resolveVar(value, opt);
				if (isString(resolvedValue2)) return resolvedValue2;
				else return "";
			}
			else if (!REG_FN_CALC3.test(value)) return value;
			value = value.toLowerCase().trim();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE6,
			name: "cssCalc",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const values = parseTokens2((0, import_css_tokenizer4.tokenize)({ css: value }), opt);
		let resolvedValue = (0, import_css_calc4.calc)(values.join(""), { toCanonicalUnits: true });
		if (REG_FN_VAR_START.test(value)) {
			if (REG_TYPE_DIM_PCT.test(resolvedValue)) {
				const [, val, unit] = resolvedValue.match(REG_TYPE_DIM_PCT);
				resolvedValue = `${roundToPrecision(Number(val), HEX4)}${unit}`;
			}
			if (resolvedValue && !REG_FN_VAR_START.test(resolvedValue) && format === VAL_SPEC) resolvedValue = `calc(${resolvedValue})`;
		}
		if (format === VAL_SPEC) {
			if (/\s[-+*/]\s/.test(resolvedValue) && !resolvedValue.includes("NaN")) resolvedValue = serializeCalc(resolvedValue, opt);
			else if (REG_FN_CALC_NUM.test(resolvedValue)) {
				const [, val] = resolvedValue.match(REG_FN_CALC_NUM);
				resolvedValue = `calc(${roundToPrecision(Number(val), HEX4)})`;
			}
		}
		setCache(cacheKey, resolvedValue);
		return resolvedValue;
	};
	var NAMESPACE7 = "css-gradient";
	var DIM_ANGLE = `${NUM}(?:${ANGLE})`;
	var DIM_ANGLE_PCT = `${DIM_ANGLE}|${PCT}`;
	var DIM_LEN_PCT = `${`${NUM}(?:${LENGTH})|0`}|${PCT}`;
	var DIM_LEN_PCT_POSI = `${NUM_POSITIVE}(?:${LENGTH}|%)|0`;
	var DIM_LEN_POSI = `${NUM_POSITIVE}(?:${LENGTH})|0`;
	var CTR = "center";
	var L_R = "left|right";
	var T_B = "top|bottom";
	var S_E = "start|end";
	var AXIS_X = `${L_R}|x-(?:${S_E})`;
	var AXIS_Y = `${T_B}|y-(?:${S_E})`;
	var BLOCK = `block-(?:${S_E})`;
	var INLINE = `inline-(?:${S_E})`;
	var POS_1 = `${CTR}|${AXIS_X}|${AXIS_Y}|${BLOCK}|${INLINE}|${DIM_LEN_PCT}`;
	var POS_2 = [
		`(?:${CTR}|${AXIS_X})\\s+(?:${CTR}|${AXIS_Y})`,
		`(?:${CTR}|${AXIS_Y})\\s+(?:${CTR}|${AXIS_X})`,
		`(?:${CTR}|${AXIS_X}|${DIM_LEN_PCT})\\s+(?:${CTR}|${AXIS_Y}|${DIM_LEN_PCT})`,
		`(?:${CTR}|${BLOCK})\\s+(?:${CTR}|${INLINE})`,
		`(?:${CTR}|${INLINE})\\s+(?:${CTR}|${BLOCK})`,
		`(?:${CTR}|${S_E})\\s+(?:${CTR}|${S_E})`
	].join("|");
	var POS_4 = [
		`(?:${AXIS_X})\\s+(?:${DIM_LEN_PCT})\\s+(?:${AXIS_Y})\\s+(?:${DIM_LEN_PCT})`,
		`(?:${AXIS_Y})\\s+(?:${DIM_LEN_PCT})\\s+(?:${AXIS_X})\\s+(?:${DIM_LEN_PCT})`,
		`(?:${BLOCK})\\s+(?:${DIM_LEN_PCT})\\s+(?:${INLINE})\\s+(?:${DIM_LEN_PCT})`,
		`(?:${INLINE})\\s+(?:${DIM_LEN_PCT})\\s+(?:${BLOCK})\\s+(?:${DIM_LEN_PCT})`,
		`(?:${S_E})\\s+(?:${DIM_LEN_PCT})\\s+(?:${S_E})\\s+(?:${DIM_LEN_PCT})`
	].join("|");
	var RAD_EXTENT = "(?:clos|farth)est-(?:corner|side)";
	var RAD_SIZE = [
		`${RAD_EXTENT}(?:\\s+${RAD_EXTENT})?`,
		`${DIM_LEN_POSI}`,
		`(?:${DIM_LEN_PCT_POSI})\\s+(?:${DIM_LEN_PCT_POSI})`
	].join("|");
	var RAD_SHAPE = "circle|ellipse";
	var FROM_ANGLE = `from\\s+${DIM_ANGLE}`;
	var AT_POSITION = `at\\s+(?:${POS_1}|${POS_2}|${POS_4})`;
	var TO_SIDE_CORNER = `to\\s+(?:(?:${L_R})(?:\\s(?:${T_B}))?|(?:${T_B})(?:\\s(?:${L_R}))?)`;
	var IN_COLOR_SPACE = `in\\s+(?:${CS_RECT}|${CS_HUE})`;
	var REG_GRAD = /^(?:repeating-)?(?:conic|linear|radial)-gradient\(/;
	var REG_GRAD_CAPT = /^((?:repeating-)?(?:conic|linear|radial)-gradient)\(/;
	var getGradientType = (value) => {
		if (isString(value)) {
			value = value.trim();
			if (REG_GRAD.test(value)) {
				const [, type] = value.match(REG_GRAD_CAPT);
				return type;
			}
		}
		return "";
	};
	var validateGradientLine = (value, type) => {
		if (isString(value) && isString(type)) {
			value = value.trim();
			type = type.trim();
			let lineSyntax = "";
			if (/^(?:repeating-)?linear-gradient$/.test(type)) lineSyntax = [`(?:${DIM_ANGLE}|${TO_SIDE_CORNER})(?:\\s+${IN_COLOR_SPACE})?`, `${IN_COLOR_SPACE}(?:\\s+(?:${DIM_ANGLE}|${TO_SIDE_CORNER}))?`].join("|");
			else if (/^(?:repeating-)?radial-gradient$/.test(type)) lineSyntax = [
				`(?:${RAD_SHAPE})(?:\\s+(?:${RAD_SIZE}))?(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
				`(?:${RAD_SIZE})(?:\\s+(?:${RAD_SHAPE}))?(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
				`${AT_POSITION}(?:\\s+${IN_COLOR_SPACE})?`,
				`${IN_COLOR_SPACE}(?:\\s+${RAD_SHAPE})(?:\\s+(?:${RAD_SIZE}))?(?:\\s+${AT_POSITION})?`,
				`${IN_COLOR_SPACE}(?:\\s+${RAD_SIZE})(?:\\s+(?:${RAD_SHAPE}))?(?:\\s+${AT_POSITION})?`,
				`${IN_COLOR_SPACE}(?:\\s+${AT_POSITION})?`
			].join("|");
			else if (/^(?:repeating-)?conic-gradient$/.test(type)) lineSyntax = [
				`${FROM_ANGLE}(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
				`${AT_POSITION}(?:\\s+${IN_COLOR_SPACE})?`,
				`${IN_COLOR_SPACE}(?:\\s+${FROM_ANGLE})?(?:\\s+${AT_POSITION})?`
			].join("|");
			if (lineSyntax) return new RegExp(`^(?:${lineSyntax})$`).test(value);
		}
		return false;
	};
	var validateColorStopList = (list, type, opt = {}) => {
		if (Array.isArray(list) && list.length > 1) {
			const dimension = /^(?:repeating-)?conic-gradient$/.test(type) ? DIM_ANGLE_PCT : DIM_LEN_PCT;
			const regColorHint = new RegExp(`^(?:${dimension})$`);
			const regDimension = new RegExp(`(?:\\s+(?:${dimension})){1,2}$`);
			const arr = [];
			for (const item of list) if (isString(item)) if (regColorHint.test(item)) arr.push("hint");
			else if (isColor(item.replace(regDimension, ""), opt)) arr.push("color");
			else return false;
			const value = arr.join(",");
			return /^color(?:,(?:hint,)?color)+$/.test(value);
		}
		return false;
	};
	var parseGradient = (value, opt = {}) => {
		if (isString(value)) {
			value = value.trim();
			const cacheKey = createCacheKey({
				namespace: NAMESPACE7,
				name: "parseGradient",
				value
			}, opt);
			const cachedResult = getCache(cacheKey);
			if (cachedResult instanceof CacheItem) {
				if (cachedResult.isNull) return null;
				return cachedResult.item;
			}
			const type = getGradientType(value);
			const gradValue = value.replace(REG_GRAD, "").replace(/\)$/, "");
			if (type && gradValue) {
				const [lineOrColorStop = "", ...colorStops] = splitValue(gradValue, { delimiter: "," });
				const dimension = /^(?:repeating-)?conic-gradient$/.test(type) ? DIM_ANGLE_PCT : DIM_LEN_PCT;
				const regDimension = new RegExp(`(?:\\s+(?:${dimension})){1,2}$`);
				let isColorStop = false;
				if (regDimension.test(lineOrColorStop)) {
					if (isColor(lineOrColorStop.replace(regDimension, ""), opt)) isColorStop = true;
				} else if (isColor(lineOrColorStop, opt)) isColorStop = true;
				if (isColorStop) {
					colorStops.unshift(lineOrColorStop);
					if (validateColorStopList(colorStops, type, opt)) {
						const res = {
							value,
							type,
							colorStopList: colorStops
						};
						setCache(cacheKey, res);
						return res;
					}
				} else if (colorStops.length > 1) {
					const gradientLine = lineOrColorStop;
					if (validateGradientLine(gradientLine, type) && validateColorStopList(colorStops, type, opt)) {
						const res = {
							value,
							type,
							gradientLine,
							colorStopList: colorStops
						};
						setCache(cacheKey, res);
						return res;
					}
				}
			}
			setCache(cacheKey, null);
			return null;
		}
		return null;
	};
	var isGradient = (value, opt = {}) => {
		return parseGradient(value, opt) !== null;
	};
	var NAMESPACE8 = "convert";
	var REG_FN_CALC4 = new RegExp(SYN_FN_CALC);
	var REG_FN_REL3 = new RegExp(SYN_FN_REL);
	var REG_FN_VAR5 = new RegExp(SYN_FN_VAR);
	var preProcess = (value, opt = {}) => {
		if (isString(value)) {
			value = value.trim();
			if (!value) return new NullObject();
		} else return new NullObject();
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "preProcess",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return cachedResult;
			return cachedResult.item;
		}
		if (REG_FN_VAR5.test(value)) {
			const resolvedValue = resolveVar(value, opt);
			if (isString(resolvedValue)) value = resolvedValue;
			else {
				setCache(cacheKey, null);
				return new NullObject();
			}
		}
		if (REG_FN_REL3.test(value)) {
			const resolvedValue = resolveRelativeColor(value, opt);
			if (isString(resolvedValue)) value = resolvedValue;
			else {
				setCache(cacheKey, null);
				return new NullObject();
			}
		} else if (REG_FN_CALC4.test(value)) value = cssCalc(value, opt);
		if (value.startsWith("color-mix")) {
			const clonedOpt = structuredClone(opt);
			clonedOpt.format = VAL_COMP;
			clonedOpt.nullable = true;
			const resolvedValue = resolveColor(value, clonedOpt);
			setCache(cacheKey, resolvedValue);
			return resolvedValue;
		}
		setCache(cacheKey, value);
		return value;
	};
	var numberToHex = (value) => {
		return numberToHexString(value);
	};
	var colorToHex = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return null;
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const { alpha = false } = opt;
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToHex",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) {
			if (cachedResult.isNull) return null;
			return cachedResult.item;
		}
		let hex;
		opt.nullable = true;
		if (alpha) {
			opt.format = "hexAlpha";
			hex = resolveColor(value, opt);
		} else {
			opt.format = "hex";
			hex = resolveColor(value, opt);
		}
		if (isString(hex)) {
			setCache(cacheKey, hex);
			return hex;
		}
		setCache(cacheKey, null);
		return null;
	};
	var colorToHsl = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToHsl",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		opt.format = "hsl";
		const hsl = convertColorToHsl(value, opt);
		setCache(cacheKey, hsl);
		return hsl;
	};
	var colorToHwb = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToHwb",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		opt.format = "hwb";
		const hwb = convertColorToHwb(value, opt);
		setCache(cacheKey, hwb);
		return hwb;
	};
	var colorToLab = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToLab",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const lab = convertColorToLab(value, opt);
		setCache(cacheKey, lab);
		return lab;
	};
	var colorToLch = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToLch",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const lch = convertColorToLch(value, opt);
		setCache(cacheKey, lch);
		return lch;
	};
	var colorToOklab = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToOklab",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const lab = convertColorToOklab(value, opt);
		setCache(cacheKey, lab);
		return lab;
	};
	var colorToOklch = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToOklch",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const lch = convertColorToOklch(value, opt);
		setCache(cacheKey, lch);
		return lch;
	};
	var colorToRgb = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToRgb",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		const rgb = convertColorToRgb(value, opt);
		setCache(cacheKey, rgb);
		return rgb;
	};
	var colorToXyz = (value, opt = {}) => {
		if (isString(value)) {
			const resolvedValue = preProcess(value, opt);
			if (resolvedValue instanceof NullObject) return [
				0,
				0,
				0,
				0
			];
			value = resolvedValue.toLowerCase();
		} else throw new TypeError(`${value} is not a string.`);
		const cacheKey = createCacheKey({
			namespace: NAMESPACE8,
			name: "colorToXyz",
			value
		}, opt);
		const cachedResult = getCache(cacheKey);
		if (cachedResult instanceof CacheItem) return cachedResult.item;
		let xyz;
		if (value.startsWith("color(")) [, ...xyz] = parseColorFunc(value, opt);
		else [, ...xyz] = parseColorValue(value, opt);
		setCache(cacheKey, xyz);
		return xyz;
	};
	var colorToXyzD50 = (value, opt = {}) => {
		opt.d50 = true;
		return colorToXyz(value, opt);
	};
	var convert = {
		colorToHex,
		colorToHsl,
		colorToHwb,
		colorToLab,
		colorToLch,
		colorToOklab,
		colorToOklch,
		colorToRgb,
		colorToXyz,
		colorToXyzD50,
		numberToHex
	};
	var utils = {
		cssCalc,
		cssVar,
		extractDashedIdent,
		isColor,
		isGradient,
		splitValue
	};
	var isColor2 = utils.isColor;
	var cssCalc2 = utils.cssCalc;
	0 && (module.exports = {
		convert,
		cssCalc,
		isColor,
		resolve,
		utils
	});
}));
/*!
* CSS color - Resolve, parse, convert CSS color.
* @license MIT
* @copyright asamuzaK (Kazz)
* @see {@link https://github.com/asamuzaK/cssColor/blob/main/LICENSE}
*/
//#endregion
export { require_cjs as t };
