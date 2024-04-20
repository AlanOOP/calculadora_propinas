import { menuItems } from "./data/db"
import { MenuItem, OrderContents, OrderTotal, TipPercentageForm } from "./components";
import useOrder from "./hooks/useOrder";


function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();


  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="grid max-w-7xl mx-auto py-20 md:grid-cols-2 ">
        <div>
          <h2 className="text-3xl font-black">Menú</h2>
          <div className="space-y-2 mt-10">
            {
              menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onAdd={addItem}
                />
              ))
            }
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 space-y-10">
          <OrderContents
            order={order}
            onRemove={removeItem}
          />


          {
            order.length > 0 && (
              <>
                <TipPercentageForm
                  tip={tip}
                  setTip={setTip}
                />

                <OrderTotal
                  tip={tip}
                  order={order}
                  onPlaceOrder={placeOrder}
                />
              </>
            )
          }

        </div>
      </main>


    </>
  )
}

export default App
