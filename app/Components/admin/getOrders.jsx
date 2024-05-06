import Link from 'next/link'
import React from 'react'
import DeleteOrder from './buttons/DeleteOrder'

const getOrders = async () => {
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/orders`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Cannot Fetch The Orders')
  }

  return res.json()
}

export default async function GetOrders() {
  const { orders } = await getOrders()

  return (
    <>
      <div className="orders">
        {orders.length > 0 && orders.map(order => (
          <div className="order" key={order._id}>
            <h3>{order.service}</h3>
            <div className="client">
              <h2>Mr. {order.name}</h2>
              <h5>{order.email}</h5>
              <Link href={`tel:${order.phoneNum}`} target='_blank'>+{order.phoneNum}</Link>
              <h5>Came From: {order.hunous}</h5>
            </div>
            <div className="comp">
              <h2>Organization: {order.bName}</h2>
              <h5>Details: {order.details}</h5>
              <Link href={order.exLink} target='_blank'>Example Link</Link>
            </div>
            <DeleteOrder id={order._id} name={order.name} />
            <h6>Send Date: {order.createdAt.slice(0, 10)}</h6>
          </div>
        ))}
      </div>
    </>
  )
}
