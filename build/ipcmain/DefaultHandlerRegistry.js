"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultHandlerRegistry {
    constructor() {
        this.handlers = new Map();
    }
    getHandler(channel) {
        return this.handlers.get(channel);
    }
    register(channel, handler) {
        this.handlers.set(channel, handler);
        return this;
    }
}
exports.DefaultHandlerRegistry = DefaultHandlerRegistry;
//# sourceMappingURL=DefaultHandlerRegistry.js.map