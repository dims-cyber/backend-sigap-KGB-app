"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const totalPegawai = await this.prisma.pegawai.count();
        const totalKgb = await this.prisma.kgb.count();
        const today = new Date();
        const batas6Bulan = new Date(today);
        batas6Bulan.setMonth(today.getMonth() + 6);
        const batas30Hari = new Date(today);
        batas30Hari.setDate(today.getDate() + 30);
        const listKgb30Hari = await this.prisma.kgb.findMany({
            where: {
                tmtBerikutnya: {
                    gte: today,
                    lte: batas30Hari,
                },
            },
            include: {
                pegawai: true,
            },
        });
        const listPensiun6Bulan = await this.prisma.pensiun.findMany({
            where: {
                tanggalPensiun: {
                    gte: today,
                    lte: batas6Bulan,
                },
            },
            include: {
                pegawai: true,
            },
        });
        const statusSudah = await this.prisma.kgb.count({
            where: {
                tmtBerikutnya: {
                    lt: today,
                },
            },
        });
        const statusSegera = await this.prisma.kgb.count({
            where: {
                tmtBerikutnya: {
                    gte: today,
                    lte: batas30Hari,
                },
            },
        });
        const statusNormal = await this.prisma.kgb.count({
            where: {
                tmtBerikutnya: {
                    gt: batas30Hari,
                },
            },
        });
        const listKgbSudah = await this.prisma.kgb.findMany({
            where: {
                tmtBerikutnya: {
                    lt: today,
                },
            },
            include: {
                pegawai: true,
            },
        });
        return {
            totalPegawai,
            totalKgb,
            kgb30Hari: listKgb30Hari.length,
            kgbSudah: listKgbSudah.length,
            statistik: {
                sudah: statusSudah,
                segera: statusSegera,
                normal: statusNormal,
            },
            pensiun6Bulan: listPensiun6Bulan.length,
            listPensiun6Bulan,
            listKgb30Hari,
            listKgbSudah,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map