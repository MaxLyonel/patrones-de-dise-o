export default class Order {
    private lineItems;
    private shipping;
    constructor(lineItems: any[], shipping: any);
    getTotal(): number;
    getTotalWeight(): number;
    setShippingType(shipping: any): void;
    getShippingCost(): number;
    getShippingDate(): Date;
}
