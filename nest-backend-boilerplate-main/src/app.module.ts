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
import { NotificationModule } from './modules/notification/notification.module';
import {ScheduleModule} from "@nestjs/schedule";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),

         MAIL_HOST: Joi.string().required(),
         MAIL_PORT: Joi.number().required(),
         MAIL_USER: Joi.string().required(),
         MAIL_PASSWORD: Joi.string().required(),
         MAIL_FROM: Joi.string().required(),
      }),
    }),

    ScheduleModule.forRoot(),

    PrismaModule,
    ProductModule,
    UserModule,
    AuthModule,
    AdminModule,
    PegawaiModule,
    KgbModule,
    DashboardModule,
    KenaikanPangkatModule,
    NotificationModule,
  ],
})
export class AppModule {}