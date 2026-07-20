import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PegawaiModule } from './modules/pegawai/pegawai.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // agar bisa diakses di semua modul
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    PrismaModule, 
    ProductModule, 
    UserModule, 
    AuthModule, 
    AdminModule,
    PegawaiModule,
  ],
})
export class AppModule {}
