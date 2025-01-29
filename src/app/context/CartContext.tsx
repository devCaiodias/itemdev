'use client'
import { createContext, useContext, useEffect, useState } from "react"

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
    isCartVisible: boolean
    setIsCartVisible: (visible: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined) 

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart deve ser usado dentro de um CartProvider')
    
    return context
}

export function CratProvider({ children }: { children: React.ReactNode }) {
    const [ cart, setCart] = useState<Product[]>([])
    const [isCartVisible, setIsCartVisible] = useState(false)

    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(product: Product) {
        setCart((prevCart) => [...prevCart, product])
    }

    function removeFromCart(id: number | string) {
        setCart((prevCart) => prevCart.filter(item => item.id !== id))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, isCartVisible, setIsCartVisible}}>
            {children}
        </CartContext.Provider>
    )
}

