import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    JwtModule.register({
      secret: '5gdfg6', // Tutaj podaj własny klucz tajny
      signOptions: { expiresIn: '1h' }, // Konfiguracja opcji podpisywania tokenów, np. czas wygaśnięcia
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client', 'build'),
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'uploads'), 
    //   serveRoot: '/uploads', 
    // }),
    ProductsModule, OrderModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
