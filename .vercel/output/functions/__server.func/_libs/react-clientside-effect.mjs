import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./dnd-kit__accessibility+react.mjs";
import { i as _inheritsLoose, r as _defineProperty } from "./babel__runtime.mjs";
//#region node_modules/react-clientside-effect/lib/index.es.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
	function getDisplayName(WrappedComponent) {
		return WrappedComponent.displayName || WrappedComponent.name || "Component";
	}
	return function wrap(WrappedComponent) {
		var mountedInstances = [];
		var state;
		function emitChange() {
			state = reducePropsToState(mountedInstances.map(function(instance) {
				return instance.props;
			}));
			handleStateChangeOnClient(state);
		}
		var SideEffect = /*#__PURE__*/ function(_PureComponent) {
			_inheritsLoose(SideEffect, _PureComponent);
			function SideEffect() {
				return _PureComponent.apply(this, arguments) || this;
			}
			SideEffect.peek = function peek() {
				return state;
			};
			var _proto = SideEffect.prototype;
			_proto.componentDidMount = function componentDidMount() {
				mountedInstances.push(this);
				emitChange();
			};
			_proto.componentDidUpdate = function componentDidUpdate() {
				emitChange();
			};
			_proto.componentWillUnmount = function componentWillUnmount() {
				var index = mountedInstances.indexOf(this);
				mountedInstances.splice(index, 1);
				emitChange();
			};
			_proto.render = function render() {
				return /*#__PURE__*/ import_react.createElement(WrappedComponent, this.props);
			};
			return SideEffect;
		}(import_react.PureComponent);
		_defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
		return SideEffect;
	};
}
//#endregion
export { withSideEffect as t };
