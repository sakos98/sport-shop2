"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const logger_interceptor_1 = require("./shared/interceptors/logger.interceptor");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
    app.setGlobalPrefix('api');
    app.enableCors();
    app.enableShutdownHooks();
    app.useStaticAssets(path.join(__dirname, '..', 'uploads'), {
        prefix: '/uploads',
        index: false,
    });
    await app.listen(8000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map