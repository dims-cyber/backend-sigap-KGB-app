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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PegawaiController = void 0;
const common_1 = require("@nestjs/common");
const pegawai_service_1 = require("./pegawai.service");
const create_pegawai_dto_1 = require("./dto/create-pegawai.dto");
const update_pegawai_dto_1 = require("./dto/update-pegawai.dto");
let PegawaiController = class PegawaiController {
    pegawaiService;
    constructor(pegawaiService) {
        this.pegawaiService = pegawaiService;
    }
    findAll() {
        return this.pegawaiService.findAll();
    }
    findOne(id) {
        return this.pegawaiService.findOne(id);
    }
    create(createPegawaiDto) {
        return this.pegawaiService.create(createPegawaiDto);
    }
    update(id, updatePegawaiDto) {
        return this.pegawaiService.update(id, updatePegawaiDto);
    }
    remove(id) {
        return this.pegawaiService.remove(id);
    }
};
exports.PegawaiController = PegawaiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PegawaiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PegawaiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pegawai_dto_1.CreatePegawaiDto]),
    __metadata("design:returntype", void 0)
], PegawaiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pegawai_dto_1.UpdatePegawaiDto]),
    __metadata("design:returntype", void 0)
], PegawaiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PegawaiController.prototype, "remove", null);
exports.PegawaiController = PegawaiController = __decorate([
    (0, common_1.Controller)('pegawai'),
    __metadata("design:paramtypes", [pegawai_service_1.PegawaiService])
], PegawaiController);
//# sourceMappingURL=pegawai.controller.js.map