import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";


type OrderContentsProps = {
    order: OrderItem[];
    onRemove: (item: OrderItem) => void;
};


export const OrderContents = ({ order, onRemove }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">
                Consumo
            </h2>

            <div className="space-y-3 mt-10">
                {
                    order.length === 0 ? (
                        <p className="text-gray-500 text-center">
                            Aún no has agregado nada al pedido</p>
                    ) : (
                        order.map((orderItem) => (
                            <div
                                key={orderItem.item.id}
                                className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
                            >
                                <div>
                                    <p className="text-lg ">
                                        {orderItem.item.name} x
                                        {formatCurrency(orderItem.item.price)}
                                    </p>
                                    <p className="font-black">
                                        Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.item.price * orderItem.quantity)}
                                    </p>
                                </div>
                                <button
                                    className="bg-red-600 h-8 w-8 rounded-full  text-white font-black hover:bg-red-500"
                                    onClick={() => onRemove(orderItem)}
                                >
                                    x
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
