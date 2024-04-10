import React from 'react';
import { Link } from "@react-email/components";

export const OrderStatusLink = () => {
    return (
        <Link href="{{ order.order_status_url }}" className="bg-black px-4 py-2 text-white text-sm">VIEW ORDER STATUS</Link>
    )
};