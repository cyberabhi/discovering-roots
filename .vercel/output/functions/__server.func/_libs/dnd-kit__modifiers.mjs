import "./@dnd-kit/core+[...].mjs";
//#region node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var restrictToHorizontalAxis = (_ref) => {
	let { transform } = _ref;
	return {
		...transform,
		y: 0
	};
};
var restrictToVerticalAxis = (_ref) => {
	let { transform } = _ref;
	return {
		...transform,
		x: 0
	};
};
//#endregion
export { restrictToVerticalAxis as n, restrictToHorizontalAxis as t };
