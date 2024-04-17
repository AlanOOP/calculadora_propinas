export type MenuItem = {
    id: number;
    name: string;
    price: number;
};

export type OrderItem = {
    item: MenuItem;
    quantity: number;
};