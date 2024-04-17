import { useState } from "react"
import { OrderItem } from "../types"
import { MenuItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [total, setTotal] = useState(0);


    const addItem = (item: MenuItem) => {

        const itemExist = order.find((orderItem) => orderItem.item.id === item.id);

        if (itemExist) {
            const newOrder = order.map((orderItem) => {
                if (orderItem.item.id === item.id) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 }
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
            setTotal(total + item.price);
            console.log(order);
        } else {
            setOrder([...order, { item, quantity: 1 }]);
            setTotal(total + item.price);
            console.log(order);
        }

    }

    return {
        order,
        total,
        addItem
    }
}