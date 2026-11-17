import { a as MSG_HANDSHAKE_SYN_ACK, f as createRequestMachine, i as MSG_HANDSHAKE_SYN, n as MSG_DISCONNECT, o as MSG_HEARTBEAT, r as MSG_HANDSHAKE_ACK, s as MSG_RESPONSE, u as createListenLogic } from "./sanity__comlink+uuid.mjs";
//#region node_modules/@sanity/presentation-comlink/dist/index.js
var channelsToComlinkMap = {
	"handshake/syn": MSG_HANDSHAKE_SYN,
	"handshake/syn-ack": MSG_HANDSHAKE_SYN_ACK,
	"handshake/ack": MSG_HANDSHAKE_ACK,
	"channel/response": MSG_RESPONSE,
	"channel/heartbeat": MSG_HEARTBEAT,
	"channel/disconnect": MSG_DISCONNECT,
	"overlay/focus": "visual-editing/focus",
	"overlay/navigate": "visual-editing/navigate",
	"overlay/toggle": "visual-editing/toggle",
	"presentation/toggleOverlay": "presentation/toggle-overlay"
};
var comlinkToChannelsMap = {
	[MSG_HANDSHAKE_SYN]: "handshake/syn",
	[MSG_HANDSHAKE_SYN_ACK]: "handshake/syn-ack",
	[MSG_HANDSHAKE_ACK]: "handshake/ack",
	[MSG_RESPONSE]: "channel/response",
	[MSG_HEARTBEAT]: "channel/heartbeat",
	[MSG_DISCONNECT]: "channel/disconnect",
	"visual-editing/focus": "overlay/focus",
	"visual-editing/navigate": "overlay/navigate",
	"visual-editing/toggle": "overlay/toggle",
	"presentation/toggle-overlay": "presentation/toggleOverlay"
};
var convertToComlinkEvent = (event) => {
	let { data } = event;
	return data && typeof data == "object" && "domain" in data && "type" in data && "from" in data && "to" in data && (data.domain === "sanity/channels" && (data.domain = "sanity/comlink"), data.to === "overlays" && (data.to = "visual-editing"), data.from === "overlays" && (data.from = "visual-editing"), data.channelId = data.connectionId, delete data.connectionId, data.type = channelsToComlinkMap[data.type] ?? data.type), event;
};
var convertToChannelsMessage = (comlinkMessage) => {
	let { channelId, ...rest } = comlinkMessage, message = {
		...rest,
		connectionId: channelId
	};
	return message.domain === "sanity/comlink" && (message.domain = "sanity/channels"), message.to === "visual-editing" && (message.to = "overlays"), message.from === "visual-editing" && (message.from = "overlays"), message.type = comlinkToChannelsMap[message.type] ?? message.type, message.type === "channel/response" && message.responseTo && !message.data && (message.data = { responseTo: message.responseTo }), (message.type === "handshake/syn" || message.type === "handshake/syn-ack" || message.type === "handshake/ack") && (message.data = { id: message.connectionId }), message;
};
var sendAsChannelsMessage = ({ context }, params) => {
	let { sources, targetOrigin } = context, message = convertToChannelsMessage(params.message);
	sources.forEach((source) => {
		source.postMessage(message, { targetOrigin });
	});
};
var createCompatibilityActors = () => ({
	listen: createListenLogic(convertToComlinkEvent),
	requestMachine: createRequestMachine().provide({ actions: { "send message": sendAsChannelsMessage } })
});
//#endregion
export { createCompatibilityActors as t };
