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
exports.PegawaiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let PegawaiService = class PegawaiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.pegawai.findMany({
            orderBy: {
                nama: 'asc',
            },
        });
    }
    async findOne(id) {
        const pegawai = await this.prisma.pegawai.findUnique({
            where: { id },
        });
        if (!pegawai) {
            throw new common_1.NotFoundException('Pegawai tidak ditemukan');
        }
        return pegawai;
    }
    async create(createPegawaiDto) {
        return this.prisma.pegawai.create({
            data: createPegawaiDto,
        });
    }
    async update(id, updatePegawaiDto) {
        await this.findOne(id);
        return this.prisma.pegawai.update({
            where: { id },
            data: updatePegawaiDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pegawai.delete({
            where: { id },
        });
    }
};
exports.PegawaiService = PegawaiService;
exports.PegawaiService = PegawaiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PegawaiService);
//# sourceMappingURL=pegawai.service.js.map