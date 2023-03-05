import { useState } from "react";
import TitlePage from "../components/titlePage";

const AddOrder = () => {

    const [valueTypePic , setValueTypePic] = useState('Choose file (optional)')
    const [valueTypeFile , setValueTypeFile] = useState('Choose color (optional)')
    
    let chValueTypePic = (e) => {
        setValueTypePic(e)
    }

    let chValueTypeFile = (e) => {
        setValueTypeFile(e)
    }
    


    return (
        <>
        <TitlePage titlePage="Add Order" />

        <div className="addingOrder">
            <h2>We Want To Know About</h2>
            <h2>Your Order..</h2>

            <form action="" method="post" className="orders">
                <div className="pData">
                    <input className="input" type="text" name="Bname" placeholder="Email" />
                    <input className="input" type="tel" name="PhoneNum" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" placeholder="your phone number" />
                </div>
                <div className="type">
                    <select name="type" id="typeP">
                        <option value="portfolio">Portfolio</option>
                        <option value="app">Mobil App</option>
                        <option value="web">Website</option>
                        <option value="ecommrace">Ecommrace</option>
                        <option value="company">Company</option>
                        <option value="start-up">Start-Up</option>
                    </select>
                </div>
                <div className="pInfo">
                    <textarea className="details" placeholder="project details" name="details"></textarea>
                    <div id="extraDetails">
                        <input type="color" onChange={(e) => chValueTypeFile(e.target.value)} name="color" id="color" />
                        <label htmlFor="color"><span style={{ backgroundColor : `${valueTypeFile}` }}>{valueTypeFile}</span></label>
                        <input type="file" onChange={(e) => chValueTypePic(e.target.value)} name="file" id="file"/>
                        <label htmlFor="file"><span>{valueTypePic}</span></label>
                    </div>
                </div>
                <input className="submit" type="submit" value="Send Order" />
            </form>
        </div>
        </>
    );
}

export default AddOrder;
