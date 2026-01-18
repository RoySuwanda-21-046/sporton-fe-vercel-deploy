"use client";

import {useState} from "react";

import OrderSubmitted from "../../components/order-status/order-submitted";
import OrderConfirmed from "../../components/order-status/order-confirm";

const OrderStatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    return (
        <main className="bg-gray-100 min-h-[80vh]">
        <div className="max-w-5xl mx-auto py-20  ">
            <h1 className="text-5xl font-bold text-center mb-11 ">Order Status</h1>
            {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
        </div>
        
        </main>
    )
}


export default OrderStatus;