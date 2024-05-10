import ContactForm from "../Components/contactus/ContactForm";
import TitlePage from "../Components/main/titlePage";
import "./contact.css"

export const metadata = {
  title: "Contact Us | Rockai Dev",
  description: "The Best Programming Company in Egypt and Middel East | Specialists in various fields of programming and professionals in helping you build a permanent brand on the Internet | أفضل شركة برمجة في مصر والشرق الأوسط",
};

export default function Contactus() {
 
  return (
    <>
      <TitlePage title={'Contact Us'} />
      <ContactForm />
    </>
  )
}
