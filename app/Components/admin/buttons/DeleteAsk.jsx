'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DeleteAsk({id}) {
    const router = useRouter()

    const handleDeleteTheAsk = async (id) => {
        const confirmed = confirm('Do you Want To Delete This Question?')
        if (confirmed) {
            try {
                const res = await fetch(`/api/asks/${id}`, {
                    method: "DELETE"
                })

                if (res.ok) {
                    router.refresh()
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <td onClick={() => handleDeleteTheAsk(id)} className=' cursor-pointer font-bold'><svg class="h-6 w-6 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg></td>
        </>
    )
}
