import type { MenuItem } from "../types"



type MenuItemProps = {
    item: MenuItem;
    onAdd?: (item: MenuItem) => void;
};

const MenuItem = ({ item, onAdd }: MenuItemProps) => {
    return (
        <>
            <button
                className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 hover:text-white"
                onClick={() => onAdd && onAdd(item)}
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
        </>
    )
}


export { MenuItem }