const Footer = () => {

    let date = new Date()
    let year = date.getFullYear()

    return (
        <footer>
            <p>Copyright<sup>&copy;</sup>{ year } Rockai Dev | All Rights Reserved.</p>
            <p><a href="/">Teams {`&`} conditions</a> <a href="/">Privacy Policy</a></p>
        </footer>
    );
}
 
export default Footer;