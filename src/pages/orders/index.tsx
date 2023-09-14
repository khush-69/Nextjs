import React, { useEffect, useState } from 'react';
function Order() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/orders').then(res => res.json()).then(data => setOrders(data))
    }, [])


    return (
        <div>
            <h1 className='text-5xl font-bold p-2 m-10'>Orders</h1>
            <ul>{orders.map((order: any) => (<li key={order.id} className='text-lg font-bold p-1 m-10'>{order.name}</li>))}</ul>
        </div>)
}
export default Order