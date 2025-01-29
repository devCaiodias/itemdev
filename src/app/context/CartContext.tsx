'use client'
import { createContext, useContext, useState } from "react"

interface Product {
    id: number | string,
    title: string,
    price: number,
    thumbnail: string
}

interface CartContextType {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number | string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined) 

export function CratProvider({ children }: { children: React.ReactNode }) {
    const [ cart, setCart] = useState<Product[]>([])

    function addToCart(product: Product) {
        setCart([...cart, product])
    }

    function removeFromCart(id: number | string) {
        setCart((prevCart) => prevCart.filter(item => item.id !== id))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart deve ser usado dentro de um CartProvider')
    
    return context
}