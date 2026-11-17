import { g as Rectangle, h as Point, i as CollisionType, r as CollisionPriority } from "./@dnd-kit/abstract+[...].mjs";
//#region node_modules/@dnd-kit/collision/dist/index.js
var pointerIntersection = ({ dragOperation, droppable }) => {
	const pointerCoordinates = dragOperation.position.current;
	if (!pointerCoordinates) return null;
	const { id } = droppable;
	if (!droppable.shape) return null;
	if (droppable.shape.containsPoint(pointerCoordinates)) return {
		id,
		value: 1 / Point.distance(droppable.shape.center, pointerCoordinates),
		type: CollisionType.PointerIntersection,
		priority: CollisionPriority.High
	};
	return null;
};
var shapeIntersection = ({ dragOperation, droppable }) => {
	const { shape } = dragOperation;
	if (!droppable.shape || !(shape == null ? void 0 : shape.current)) return null;
	const intersectionArea = shape.current.intersectionArea(droppable.shape);
	if (intersectionArea) {
		const { position } = dragOperation;
		const distance = Point.distance(droppable.shape.center, position.current);
		const value = intersectionArea / (shape.current.area + droppable.shape.area - intersectionArea) / distance;
		return {
			id: droppable.id,
			value,
			type: CollisionType.ShapeIntersection,
			priority: CollisionPriority.Normal
		};
	}
	return null;
};
var defaultCollisionDetection = (args) => {
	var _a;
	return (_a = pointerIntersection(args)) != null ? _a : shapeIntersection(args);
};
var closestCorners = (input) => {
	const { dragOperation, droppable } = input;
	const { shape, position } = dragOperation;
	if (!droppable.shape) return null;
	const shapeCorners = shape ? Rectangle.from(shape.current.boundingRectangle).corners : void 0;
	const value = Rectangle.from(droppable.shape.boundingRectangle).corners.reduce((acc, corner, index) => {
		var _a;
		return acc + Point.distance(Point.from(corner), (_a = shapeCorners == null ? void 0 : shapeCorners[index]) != null ? _a : position.current);
	}, 0) / 4;
	return {
		id: droppable.id,
		value: 1 / value,
		type: CollisionType.Collision,
		priority: CollisionPriority.Normal
	};
};
//#endregion
export { defaultCollisionDetection as n, closestCorners as t };
