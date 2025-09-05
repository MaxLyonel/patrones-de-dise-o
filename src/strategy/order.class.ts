export class Order {
  private lineItems: any[];
  private shipping: any;

  constructor(lineItems: any[], shipping: any) {
    this.lineItems = lineItems;
    this.shipping = shipping;
  }

  getTotal(): number {
    return this.lineItems.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalWeight(): number {
    return this.lineItems.reduce((sum, item) => sum + item.weight, 0);
  }

  setShippingType(shipping: any): void {
    this.shipping = shipping;
  }

  getShippingCost(): number {
    if (this.shipping === "ground") {
      return Math.max(10, this.getTotalWeight() * 1.5);
    }
    if (this.shipping === "air") {
      return Math.max(20, this.getTotalWeight() * 3);
    }
    return 0;
  }

  getShippingDate(): Date {
    if (this.shipping === "ground") return new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    if (this.shipping === "air") return new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    return new Date();
  }
}
