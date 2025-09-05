import Order from "./strategy/order.class.js";
const lineItems = [
    { name: "Laptop", price: 50, weight: 2 },
    { name: "Mouse", price: 5, weight: 0.2 }
];
const order = new Order(lineItems, "ground");
console.log("Total:", order.getTotal());
console.log("Peso:", order.getTotalWeight());
console.log("Costo envío (tierra):", order.getShippingCost());
order.setShippingType("air");
console.log("Costo envío (aire):", order.getShippingCost());
//# sourceMappingURL=main.js.map