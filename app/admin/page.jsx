import React from 'react'
import Image from 'next/image'
import TitlePage from '../Components/main/titlePage'
import projects from '../../public/checkmark.svg'
import addProject from '../../public/add-file.svg'
import orders from '../../public/orders.svg'
import GetProjects from '../Components/admin/getProjects'
import AddProject from '../Components/admin/addProject'
import GetOrders from '../Components/admin/getOrders'
import Script from 'next/script'
import './adminpage.css'


export const metadata = {
    title: "Dashboard | Rockai Dev",
    description: "The Best Programming Company in Egypt and Middel East | Specialists in various fields of programming and professionals in helping you build a permanent brand on the Internet | أفضل شركة برمجة في مصر والشرق الأوسط",
    
};


export default function Admin() {
    return (
        <>
            <TitlePage title={'Dashboard'} />
            <section className="dashboard">
                <ul className="partIcons">
                    <li className="partIcon" data-partation="addProject"><Image src={addProject} width={40} height={40} alt='Add Projects Icon' /></li>
                    <li className="partIcon selected" data-partation="projects"><Image src={projects} width={40} height={40} alt='Projects Icon' /></li>
                    <li className="partIcon" data-partation="orders"><Image src={orders} width={40} height={40} alt='Orders Icon' /></li>
                </ul>
                <div className="partations">
                    {/* Projects Section */}
                    <section id="projects" className="partation active">
                        <GetProjects />
                    </section>


                    {/* Add project Section */}
                    <section id="addProject" className="partation">
                        <AddProject />
                    </section>


                    {/* Orders Section */}
                    <section id="orders" className="partation">
                        <GetOrders />
                    </section>
                </div>
            </section>
            <Script src='/JS/admin.js' />
        </>
    )
}
