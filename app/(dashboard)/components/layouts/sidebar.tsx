"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBox, FiLayers, FiShoppingCart, FiCreditCard, FiLogOut } from "react-icons/fi";


const Sidebar = () =>{

    const pathname = usePathname();
    const menuItems = [
        {
            name: "Products",
            icon: FiBox,
            Link: "/admin/products"
        },
        {
            name: "Categories",
            icon:  FiLayers,
            Link: "/admin/categories"
        },
        {
            name: "Transactions",
            icon: FiShoppingCart,
            Link: "/admin/transactions"
        },
        {
            name: "Bank Informations",
            icon: FiCreditCard,
            Link: "admin/bank-info"
        }
    ]
    return (
        <aside >
        </aside>
    )
}

export default Sidebar;