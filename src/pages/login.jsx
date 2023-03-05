import TitlePage from "../components/titlePage";

function Login(){
    return(
        <div className="forms">
                <TitlePage titlePage={"Login"} />
                <form action="" method="post" className="create">
                    <input className="input" type="text" placeholder="First name"/>
                    <input className="input" type="text" placeholder="Second name"/>
                    <input className="input" type="email" placeholder="Email"/>
                    <input className="input" type="password" placeholder="password"/>
                    <input className="input" type="password" placeholder="confairm password"/>
                    <input className="submit" type="submit" value="create account" />
                </form>
                <hr /> 
                <form className="login" action="" method="post">
                    <input className="input" type="email" placeholder="Email" />
                    <input className="input" type="password" placeholder="password"/>
                    <input className="submit" type="submit" value="login" />
                </form>
        </div>
    )
}

export default Login