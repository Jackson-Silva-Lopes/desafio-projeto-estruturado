export class OrderDTO {
    id?: number;
    items: OrderItemDTO[] = [];
    get total(): number {
        let sum = 0;
        this.items.forEach(item => {
            sum += item.subTotal;
        })
       
        return  Number(sum.toFixed(2));
    }
}
export class OrderItemDTO {
    constructor(
        public productId: number,
        public quantity: number,
        public name: string,
        public price: number,
        public imgUrl: string
    ) { }
    get subTotal(): number {
        return Number( (this.price * this.quantity).toFixed(2));
    }
}
