import { useState } from "react"
import { OrderItem } from "../types"
import { MenuItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [total, setTotal] = useState(0);
    const [tip, setTip] = useState(0);

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
        } else {
            setOrder([...order, { item, quantity: 1 }]);
            setTotal(total + item.price);
        }

    }

    const removeItem = (item: OrderItem) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.item.id === item.item.id) {
                return { ...orderItem, quantity: orderItem.quantity - 1 }
            } else {
                return orderItem;
            }
        });

        setOrder(newOrder.filter((orderItem) => orderItem.quantity > 0));
        setTotal(total - item.item.price);
    }

    const placeOrder = () => {
        setOrder([]);
        setTotal(0);
        setTip(0);
    }

    return {
        order,
        total,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}