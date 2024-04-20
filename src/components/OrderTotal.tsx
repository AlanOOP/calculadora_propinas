import { useMemo } from "react";
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    onPlaceOrder: () => void
};

const OrderTotal = ({ order, tip, onPlaceOrder }: OrderTotalProps) => {

    const subtotalAmount = useMemo(() => order.reduce((acc, orderItem) => acc + (orderItem.item.price * orderItem.quantity), 0), [order]);


    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">
                    Totales y Propina:
                </h2>
                <p>
                    Subtotal a pagar:
                    <span className="font-bold">
                        {formatCurrency(subtotalAmount)}
                    </span>
                </p>
                <p>
                    Propina:
                    <span className="font-bold">
                        {formatCurrency(tipAmount)}
                    </span>
                </p>
                <p>
                    Total a pagar:
                    <span className="font-bold">
                        {formatCurrency(totalAmount)}
                    </span>
                </p>
            </div>

            <button
                className="w-full bg-teal-500 p-3 uppercase text-white font-bold mt-10 hover:bg-teal-600 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={onPlaceOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}


export {
    OrderTotal
}