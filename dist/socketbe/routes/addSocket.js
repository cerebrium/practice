"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
let Router = express_1.default.Router();
const io = new socket_io_1.Server();
io.on("connection", (socket) => {
    console.log("socket connected");
    socket.on("disconnect", () => {
        console.log("socket disconnected");
    });
});
Router.get("/", (req, res) => {
    res.send("Hello mounted world!");
});
exports.default = Router;
//# sourceMappingURL=addSocket.js.map