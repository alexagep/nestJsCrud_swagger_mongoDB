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
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const create_item_dto_1 = require("./dto/create-item.dto");
const items_service_1 = require("./items.service");
const swagger_1 = require("@nestjs/swagger");
let ItemsController = class ItemsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    findAll(name) {
        return this.itemsService.findAll(name);
    }
    findOne(id) {
        const item = this.itemsService.findOne(id);
        if (!item) {
            throw new common_1.NotFoundException();
        }
        else {
            return item;
        }
    }
    async create(createItemDto) {
        return await this.itemsService.create(createItemDto);
    }
    delete(id) {
        return this.itemsService.delete(id);
    }
    async update(updateItemDto, id) {
        return await this.itemsService.update(id, updateItemDto);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: create_item_dto_1.CreateItemDto,
        isArray: true,
        description: 'Get All Items',
    }),
    (0, swagger_1.ApiQuery)({ name: 'name', required: false }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: create_item_dto_1.CreateItemDto,
        isArray: false,
        description: 'Get An Item',
    }),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: create_item_dto_1.CreateItemDto, description: 'Create An Item' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: create_item_dto_1.CreateItemDto, description: 'Delete An Item' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: create_item_dto_1.CreateItemDto, description: 'Update An Item' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto, String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "update", null);
ItemsController = __decorate([
    (0, swagger_1.ApiTags)('items'),
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [items_service_1.ItemsService])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map