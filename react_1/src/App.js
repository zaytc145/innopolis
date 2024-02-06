import './App.css';
import Modal from "./components/Modal/Modal";
import {useCallback, useMemo, useState} from "react";

function App() {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const products = useMemo(() => [
        {id: 1, title: 'Креветки', price: 100, description: 'Мы вкусные креветки'},
        {id: 2, title: 'Пицца', price: 1000, description: 'Дорогая пицца'},
    ], [])

    const selectProduct = useCallback((index) => {
        setSelectedProduct(products[index]);
        setOpen(true);
    }, [])

    return (
        <div>
            <button onClick={() => selectProduct(0)}>Креветки</button>
            <button onClick={() => selectProduct(1)}>Пицца</button>


            <Modal onClose={() => setOpen(false)} open={open}>
                <h1>{selectedProduct?.title}</h1>
                <p>{selectedProduct?.price}</p>
                <p>{selectedProduct?.description}</p>
            </Modal>
        </div>
    );
}

export default App;
