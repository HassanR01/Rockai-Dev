import React from 'react'
import DeleteAsk from './buttons/DeleteAsk'

const getAsks = async () => {
    const apiUrl = process.env.API_URL
    try {
        const res = await fetch(`${apiUrl}/api/asks`, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('Caonnot Fetch The Asks')
        }

        return res.json()
    } catch (error) {
        console.log(error);
    }
}

export default async function GetAsks() {
    const { asks } = await getAsks()


    const order = ["Review", "Ask", "Jobs", "Problem"];

    const comparator = (a, b) => {
        const indexA = order.indexOf(a.reason);
        const indexB = order.indexOf(b.reason);
        return indexA - indexB;
    };
    asks.sort(comparator);

    return (
        <>
            <table className='text-whiteColor w-9/12'>
                <thead className='bg-white text-black font-bold'>
                    <tr>
                        <th className='rounded-l-xl'>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Type</th>
                        <th>Message</th>
                        <th className='rounded-r-xl'></th>
                    </tr>
                </thead>
                <tbody className=' font-semibold'>
                    {asks.map(ask => (
                        <tr key={ask._id}>
                            <td>{ask.name}</td>
                            <td>{ask.email}</td>
                            <td>{ask.phone}</td>
                            <td>{ask.reason}</td>
                            <td>{ask.message}</td>
                            <DeleteAsk id={ask._id} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
