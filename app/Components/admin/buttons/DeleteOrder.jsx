'use client'

export default function DeleteOrder({id , name}) {
    const deleteOrder = async (id , name) => {
        if (confirm(`Delete ${name}'s Oreder ?`)) {   
            await fetch(`/api/orders?id=${id}`, {
                method: "DELETE"
            })

            location.reload()
        }
    }
  return (
      <>
          <button onClick={() => deleteOrder(id,name)}>Delete</button>
      </>
  )
}
