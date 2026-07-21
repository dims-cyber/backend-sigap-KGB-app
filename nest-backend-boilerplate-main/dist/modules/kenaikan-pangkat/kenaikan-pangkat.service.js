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
exports.KenaikanPangkatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let KenaikanPangkatService = class KenaikanPangkatService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.kenaikanPangkat.findMany({
            include: {
                pegawai: true,
            },
            orderBy: {
                tmtKenaikan: 'asc',
            },
        });
    }
    async create(createDto) {
        return this.prisma.kenaikanPangkat.create({
            data: createDto,
        });
    }
    async findOne(id) {
        const data = await this.prisma.kenaikanPangkat.findUnique({
            where: { id },
            include: {
                pegawai: true,
            },
        });
        if (!data) {
            throw new common_1.NotFoundException(`Kenaikan Pangkat dengan ID ${id} tidak ditemukan`);
        }
        return data;
    }
    async update(id, updateDto) {
        return this.prisma.kenaikanPangkat.update({
            where: { id },
            data: updateDto,
        });
    }
    async remove(id) {
        return this.prisma.kenaikanPangkat.delete({
            where: { id },
        });
    }
};
exports.KenaikanPangkatService = KenaikanPangkatService;
exports.KenaikanPangkatService = KenaikanPangkatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], KenaikanPangkatService);
//# sourceMappingURL=kenaikan-pangkat.service.js.map