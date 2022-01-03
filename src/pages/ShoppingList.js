import { useEffect, useState } from "react";
import { BiTrash, BiPencil } from "react-icons/bi";
import { TheGreenButton } from "../components/Button";
import { addShoppingItem, destroyShoppingItem, fetchShoppingItems } from "../api";

export default function ShoppingList() {

    const [items, setItems] = useState([]);
    const [inputData, setInputData] = useState({
        item: "",
        quantity: "",
        unit: "",
    })

    useEffect(() => {
        async function fetch() {
            const result = await fetchShoppingItems();
            setItems(result)
        }
        fetch();
    }, []);

    useEffect(() => {
        console.log("Items from DB: ", items);
    }, [items])

    function handleChange(e) {
        const { name, value } = e.target
        setInputData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        addShoppingItem(inputData);
        setItems((prevState) => [
            ...prevState,
            {
                item: inputData.item,
                quantity: inputData.quantity,
                unit: inputData.unit,
            }])
        setInputData({
            item: "",
            quantity: "",
            unit: "",
        })
    }

    const showItems = items.map(i =>
        <section key={i.item} className="shopping-item">
            <span>{i.item}</span>
            <span>{i.quantity}</span>
            <span>{i.unit}</span>
            <BiPencil cursor="pointer" onClick={() => alert('Editing function')} />
            <BiTrash cursor="pointer" onClick={() => deleteItem(i.itemID)}/>
        </section>
    )

    function deleteItem(id) {
        setItems(items.filter((item) => {
            return item.itemID !== id
        }))
        destroyShoppingItem(id);
    };

    return (
        <div className="shopping-list">

            <h3>Shopping List:</h3>
            <br />

            <form className="shopping-add" onSubmit={handleSubmit}>
                <b>Item:</b>
                <b>Quantity:</b>
                <b>Unit:</b>
                <p></p>
                <input
                    type="text"
                    placeholder="Shopping item"
                    onChange={handleChange}
                    name="item"
                    value={inputData.item}
                    required="required"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    onChange={handleChange}
                    name="quantity"
                    value={inputData.quantity}
                    required="required"
                />
                <input
                    type="text"
                    placeholder="Unit"
                    onChange={handleChange}
                    name="unit"
                    value={inputData.unit}
                    required="required"
                />
                <TheGreenButton>Add</TheGreenButton>
            </form>
            <hr />
            {showItems}
        </div>
    )
}