export default class Order {
    lineItems;
    shipping;
    constructor(lineItems, shipping) {
        this.lineItems = lineItems;
        this.shipping = shipping;
    }
    getTotal() {
        return this.lineItems.reduce((sum, item) => sum + item.price, 0);
    }
    getTotalWeight() {
        return this.lineItems.reduce((sum, item) => sum + item.weight, 0);
    }
    setShippingType(shipping) {
        this.shipping = shipping;
    }
    getShippingCost() {
        if (this.shipping === "ground") {
            return Math.max(10, this.getTotalWeight() * 1.5);
        }
        if (this.shipping === "air") {
            return Math.max(20, this.getTotalWeight() * 3);
        }
        return 0;
    }
    getShippingDate() {
        if (this.shipping === "ground")
            return new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
        if (this.shipping === "air")
            return new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
        return new Date();
    }
}
//# sourceMappingURL=order.class.js.map