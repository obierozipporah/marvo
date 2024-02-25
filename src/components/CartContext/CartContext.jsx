import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addToCart = (item, quantity) => {
        
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

    const removeFromCart = (itemId) => {
        setCartProducts((prevCartProducts) => prevCartProducts.filter((cartProduct) => cartProduct.id !== itemId))
    }

    const clearCart = () => {
        setCartProducts([])
    }

    const updateQuantity = (itemId, newQuantity) => {
        setCartProducts((prevCartProducts) =>
            prevCartProducts.map((cartProduct) =>
                cartProduct.id === itemId 
                ? {...cartProduct, quantity: newQuantity}
                : cartProduct
            )
        )
    }

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