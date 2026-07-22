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
exports.KenaikanPangkatController = void 0;
const common_1 = require("@nestjs/common");
const kenaikan_pangkat_service_1 = require("./kenaikan-pangkat.service");
const create_kenaikan_pangkat_dto_1 = require("./dto/create-kenaikan-pangkat.dto");
const update_kenaikan_pangkat_dto_1 = require("./dto/update-kenaikan-pangkat.dto");
let KenaikanPangkatController = class KenaikanPangkatController {
    kenaikanPangkatService;
    constructor(kenaikanPangkatService) {
        this.kenaikanPangkatService = kenaikanPangkatService;
    }
    create(createDto) {
        return this.kenaikanPangkatService.create(createDto);
    }
    findAll() {
        return this.kenaikanPangkatService.findAll();
    }
    findOne(id) {
        return this.kenaikanPangkatService.findOne(id);
    }
    update(id, updateDto) {
        return this.kenaikanPangkatService.update(id, updateDto);
    }
    remove(id) {
        return this.kenaikanPangkatService.remove(id);
    }
};
exports.KenaikanPangkatController = KenaikanPangkatController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kenaikan_pangkat_dto_1.CreateKenaikanPangkatDto]),
    __metadata("design:returntype", void 0)
], KenaikanPangkatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KenaikanPangkatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KenaikanPangkatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_kenaikan_pangkat_dto_1.UpdateKenaikanPangkatDto]),
    __metadata("design:returntype", void 0)
], KenaikanPangkatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KenaikanPangkatController.prototype, "remove", null);
exports.KenaikanPangkatController = KenaikanPangkatController = __decorate([
    (0, common_1.Controller)('kenaikan-pangkat'),
    __metadata("design:paramtypes", [kenaikan_pangkat_service_1.KenaikanPangkatService])
], KenaikanPangkatController);
//# sourceMappingURL=kenaikan-pangkat.controller.js.map