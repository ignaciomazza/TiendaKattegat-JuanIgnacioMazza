import React, {createContext, useState} from 'react'

export const GlobalContext = createContext();

const CartContext = ({children}) => {   

    // const [carrito, setCarrito] = useState([1,2,3,4,5]);
    // let text = "asd"
    // const [producto, setProducto] = useState([]);

    // const addItem = (item, quantity) => {
    //     const buscarCarrito = carrito.some((el) => el.tittle == item.tittle);
    //     if (buscarCarrito == false) {
    //         setCarrito([...carrito, item]);
    //     }
    // }

    // const clear = () => {
    //     setCarrito([]);
    // }

    // const removeItem = (itemId) => {
    //     const buscarCarrito = carrito.some((el) => el.id == itemId);
    //     if (buscarCarrito) {
    //         const nuevoCarrito = carrito.filter((el) => el.id != itemId);;
    //         setCarrito([...nuevoCarrito, producto]);
    //     }
    // }

  return (
    <GlobalContext.Provider value={{
        // carrito, 
        // text,
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default CartContext