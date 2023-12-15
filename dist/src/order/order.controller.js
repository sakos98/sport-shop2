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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const products_service_1 = require("../products/products.service");
let OrderController = class OrderController {
    constructor(orderService, productService) {
        this.orderService = orderService;
        this.productService = productService;
    }
    async getAll() {
        return this.orderService.getAll();
    }
    async getById(id) {
        const prod = await this.orderService.getById(id);
        if (!prod)
            throw new common_1.NotFoundException('Product not found');
        return prod;
    }
    async deleteById(id) {
        if (!(await this.orderService.getById(id)))
            throw new common_1.NotFoundException('Product not found');
        await this.orderService.deleteById(id);
        return { success: true };
    }
    async createOrder(orderData) {
        const product = await this.productService.getById(orderData.productId);
        if (!product) {
            throw new Error('Product not found');
        }
        const createdOrder = await this.orderService.createOrder({
            productId: product.id,
            userId: orderData.userId,
            address: orderData.address,
        });
        return createdOrder;
    }
    async updateOrder(orderId, updatedOrderData) {
        const updatedOrder = await this.orderService.updateOrder(orderId, updatedOrderData);
        return updatedOrder;
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        products_service_1.ProductsService])
], OrderController);
//# sourceMappingURL=order.controller.js.map