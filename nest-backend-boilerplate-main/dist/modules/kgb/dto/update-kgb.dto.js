"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKgbDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_kgb_dto_1 = require("./create-kgb.dto");
class UpdateKgbDto extends (0, mapped_types_1.PartialType)(create_kgb_dto_1.CreateKgbDto) {
}
exports.UpdateKgbDto = UpdateKgbDto;
//# sourceMappingURL=update-kgb.dto.js.map