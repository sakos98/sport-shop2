"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerInterceptor = void 0;
const rxjs_1 = require("rxjs");
class LoggerInterceptor {
    intercept(context, next) {
        const url = context.getArgs()[0].url;
        const method = context.getArgs()[0].method;
        console.log('================================');
        console.log(`${method} ${url} `);
        console.log(`Start request in ${context.getClass().name}`);
        const start = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            console.log(`Request ended in: ${Date.now() - start}ms`);
            console.log('================================');
        }));
    }
}
exports.LoggerInterceptor = LoggerInterceptor;
//# sourceMappingURL=logger.interceptor.js.map