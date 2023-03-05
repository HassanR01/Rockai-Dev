import { useState } from "react";
import TitlePage from "../components/titlePage";

const Projects = () => {
    const [product , setProduct] = useState('')
    function changePro(e) {
        setProduct(e)
    }



    return (
        <>
        <TitlePage titlePage={"Projects"} />

        <div className="projectsDone">
            <h3>How Many Projects We Did ?</h3>
            <div className="counterUp">
                <h5 id="NumC" data-target="200">{}</h5>
                <p>Projects</p>
            </div>
        </div>

        <div className="searchEng">
            <div className="inpBtn">
                <input type="text" onChange={(e) => changePro(e.target.value) } id="product" placeholder="Search..." /><input type="button" className="btn" value="Search" />
                <label htmlFor="product">{`You want to see : ${product}`}</label>
            </div>
        </div>

        <div className="projectItems">

            <div className="item">
                <div className="view">
                    <div className="img"><img src="https://via.placeholder.com/250x150/red" alt="" /></div>
                    <div className="text">
                        <h4>project name</h4>
                        <p>contant</p>
                    </div>
                    <a href="/" >Details</a>
                </div>
            </div>

            <div className="item">
                <div className="view">
                    <div className="img"><img src="https://via.placeholder.com/250x150/red" alt="" /></div>
                    <div className="text">
                        <h4>project name</h4>
                        <p>contant</p>
                    </div>
                    <a href="/" >Details</a>
                </div>
            </div>

            <div className="item">
                <div className="view">
                    <div className="img"><img src="https://via.placeholder.com/250x150/red" alt="" /></div>
                    <div className="text">
                        <h4>project name</h4>
                        <p>contant</p>
                    </div>
                    <a href="/" >Details</a>
                </div>
            </div>

            <div className="item">
                <div className="view">
                    <div className="img"><img src="https://via.placeholder.com/250x150/red" alt="" /></div>
                    <div className="text">
                        <h4>project name</h4>
                        <p>contant</p>
                    </div>
                    <a href="/" >Details</a>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Projects;
