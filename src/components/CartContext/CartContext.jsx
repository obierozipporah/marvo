import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // set the state for the cartContext
    const [cartProducts, setCartProducts] = useState([]);

    // create a function that adds items to the cart
    const addToCart = (item, quantity) => {
        // search for existing products in the cartProducts array
        const existingProduct = cartProducts.find((cartProduct) => cartProduct.id === item.id)

        if (existingProduct) {
            setCartProducts((prevCartProducts =>
                prevCartProducts.map((cartProduct) =>
                    cartProduct.id === item.id
                    ? {...cartProduct, quantity: cartProduct.quantity + quantity}
                    : cartProduct)
                )
            )
        } else {
            setCartProducts((prevCartProducts) => [...prevCartProducts, {...item, quantity}])
        }
    }

    // create a function to remove items from the cart
    const removeFromCart = (itemId) => {
        setCartProducts((prevCartProducts) => prevCartProducts.filter((cartProduct) => cartProduct.id !== itemId))
    }

    // create a function to delete items from the cart
    const clearCart = () => {
        setCartProducts([])
    }

    // create a function to update the
    // quantity of items in the cart
    const updateQuantity = (itemId, newQuantity) => {
        setCartProducts((prevCartProducts) =>
            prevCartProducts.map((cartProduct) =>
                cartProduct.id === itemId 
                ? {...cartProduct, quantity: newQuantity}
                : cartProduct
            )
        )
    }

    // create a function to get the total
    // of items in the cart
    const getTotalCost = () => {
        return cartProducts.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                addToCart,
                removeFromCart,
                clearCart,
                updateQuantity,
                getTotalCost
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}