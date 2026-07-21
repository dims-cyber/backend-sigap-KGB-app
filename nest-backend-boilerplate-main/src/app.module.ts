import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PegawaiModule } from './modules/pegawai/pegawai.module'
import { KgbModule } from './modules/kgb/kgb.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { KenaikanPangkatController } from './modules/kenaikan-pangkat/kenaikan-pangkat.controller';
import { KenaikanPangkatModule } from './modules/kenaikan-pangkat/kenaikan-pangkat.module';
import { KenaikanPangkatService } from './modules/kenaikan-pangkat/kenaikan-pangkat.service';
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
    KgbModule,
    DashboardModule,
    KenaikanPangkatModule,
  ],
  controllers: [KenaikanPangkatController],
  providers: [KenaikanPangkatService],
})
export class AppModule {}
