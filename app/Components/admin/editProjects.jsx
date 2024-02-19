'use client'
import React, { useState } from 'react'

export default function EditProjects({ id, title, category, link, image, description }) {
    const [newtitle, setnewtitle] = useState(title)
    const [newcategory, setnewcategory] = useState(category)
    const [newlink, setnewlink] = useState(link)
    const [newimage, setnewimage] = useState(image)
    const [newdescription, setnewdescription] = useState(description)
    const [alert, setAlert] = useState('')

    const handelEditProject = async (e) => {
        e.preventDefault()

        if (newtitle && newimage && newlink && newdescription && newcategory) {

            try {
                const res = await fetch(`/api/projects/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": 'application/json'
                    },
                    body: JSON.stringify({ newtitle, newimage, newlink, newdescription, newcategory })
                })

                if (res.ok) {
                    setAlert("Edited Successfully")
                } else {
                    throw new Error('Cannot Edit the project')
                }

            } catch (error) {
                console.log(error);
            }


        } else {
            setAlert('All Data Are Required!')
        }
    }

    const deleteProject = async (id) => {
        if (confirm('Are you sure ?')) {
            const apiUrl = process.env.API_URL
            await fetch(`/api/projects/${id}`, {
                method: "DELETE",
            })

            location.reload()
        }
    }

    return (
        <>
            <form onSubmit={handelEditProject} onChange={() => setAlert('')}>
                <div className="inputs">
                    <input type="text" name='title' value={newtitle} placeholder='Add The Title of The Project' onChange={(e) => setnewtitle(e.target.value)} />
                    <input type="text" name='image' value={newimage} placeholder='The Link of the Image from Cloudnary' onChange={(e) => setnewimage(e.target.value)} />
                    <input type="text" name="link" value={newlink} placeholder='The Link of the Project' onChange={(e) => setnewlink(e.target.value)} />
                    <input type="text" name='category' list="category" value={newcategory} placeholder="The Type of The Project" onChange={(e) => setnewcategory(e.target.value)} />
                    <datalist id="category">
                        <option value="Web_Development" >Web Development</option>
                        <option value="Mobile_App_Development" >Mobile App Development</option>
                        <option value="Desktop_App_Development" >Desktop App Development</option>
                        <option value="AI_Development" >AI Development</option>
                        <option value="Systems" >Systems</option>
                        <option value="SEO" >SEO</option>
                    </datalist>
                    <textarea name="description" value={newdescription} placeholder='About The Project' onChange={(e) => setnewdescription(e.target.value)} ></textarea>
                </div>
                <h3>{alert}</h3>
                <button type="submit">Submit</button>
            </form>

            <button onClick={() => deleteProject(id)}>Delete</button>
        </>
    )
}
