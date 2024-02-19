'use client'

import { useState } from "react"

export default function AddProject() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [alert, setAlert] = useState('')


    const handelAddProject = async (e) => {
        e.preventDefault()

        if (title && image && link && description && category) {
            
            try {
                const res = await fetch('api/projects', {
                    method : "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ title, image, link, description, category })
                })

                if (res.ok) {
                    setAlert('Added Successfully')
                    setTitle('')
                    setImage('')
                    setLink('')
                    setDescription('')
                    setCategory('')
                } else {
                    setAlert('Something wrong happend')
                }


            } catch (error) {
                console.log(error);
            }

            



        } else {
            setAlert('All Data Are Required!')
        }

    }

    return (
        <>
            <h2>Add Project</h2>
            <div className="addProject">
                <form onSubmit={handelAddProject} onChange={() => setAlert('')}>
                    <div className="inputs">
                        <input type="text" name='title' value={title} placeholder='Add The Title of The Project' onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" name='image' value={image} placeholder='The Link of the Image from Cloudnary' onChange={(e) => setImage(e.target.value)} />
                        <input type="text" name="link" value={link} placeholder='The Link of the Project' onChange={(e) => setLink(e.target.value)} />
                        <input type="text" name='category' list="category" value={category} placeholder="The Type of The Project" onChange={(e) => setCategory(e.target.value)} />
                        <datalist id="category">
                            <option value="Web_Development" >Web Development</option>
                            <option value="Mobile_App_Development" >Mobile App Development</option>
                            <option value="Desktop_App_Development" >Desktop App Development</option>
                            <option value="AI_Development" >AI Development</option>
                            <option value="Systems" >Systems</option>
                            <option value="SEO" >SEO</option>
                        </datalist>
                        <textarea name="description" value={description} placeholder='About The Project' onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <h3>{alert}</h3>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
