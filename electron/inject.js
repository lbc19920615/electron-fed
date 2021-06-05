"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callMain = void 0;
const callMain = (ipc, channel, param) => {
    return new Promise((resolve) => {
        ipc.send(channel, param);
        ipc.once(channel, (event, result) => {
            resolve(result);
        });
    });
};
exports.callMain = callMain;
//# sourceMappingURL=inject.js.map