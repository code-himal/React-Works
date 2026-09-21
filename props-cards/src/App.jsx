import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./components/CartPage";
import CatalogPage from "./components/CatalogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const CART_STORAGE_KEY = "gymgrid-cart";
const WISHLIST_STORAGE_KEY = "gymgrid-wishlist";
const getSavedCart = () => { try { return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || []; } catch { return []; } };
const getSavedWishlist = () => { try { return JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY)) || []; } catch { return []; } };

function Storefront() {
  const [cart, setCart] = useState(getSavedCart);
  const [wishlist, setWishlist] = useState(getSavedWishlist);
  useEffect(() => { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist)); }, [wishlist]);
  const addToCart = (product) => {
    setCart((items) => items.some((item) => item.id === product.id) ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }]);
    toast.success(`${product.name} added to your cart`);
  };
  const updateQuantity = (id, quantity) => setCart((items) => quantity < 1 ? items.filter((item) => item.id !== id) : items.map((item) => item.id === id ? { ...item, quantity } : item));
  const removeFromCart = (id) => { setCart((items) => items.filter((item) => item.id !== id)); toast.info("Item removed from your cart"); };
  const toggleWishlist = (product) => {
    setWishlist((items) => items.includes(product.id) ? items.filter((id) => id !== product.id) : [...items, product.id]);
    toast.info(wishlist.includes(product.id) ? `${product.name} removed from saved gear` : `${product.name} saved for later`);
  };
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return <><Header cartCount={cartCount} /><main><Routes><Route path="/" element={<CatalogPage onAddToCart={addToCart} wishlist={wishlist} onToggleWishlist={toggleWishlist} />} /><Route path="/cart" element={<CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} /></Routes></main><Footer /></>;
}

export default function App() { return <BrowserRouter><Storefront /><ToastContainer position="top-right" autoClose={2200} theme="dark" /></BrowserRouter>; }
