import Link from 'next/link'
import Image from 'next/image'
import bgimage from '../public/bgimage.png'
import planing from '../public/planing.png'
import design from '../public/design.png'
import programming from '../public/programming.png'
import database from '../public/database.png'
import rating from '../public/rating.png'
import practise from '../public/practise.png'
import pay from '../public/pay.png'
import gift from '../public/giftbox.png'
import deskDevI from '../public/deskDev.svg'
import appDevI from '../public/appDev.svg'
import SEOI from '../public/SEO.svg'
import webDevI from '../public/webDev.svg'
import systemsI from '../public/systems.svg'
import AiI from '../public/AI.svg'
import FeedbacksSwiper from './Components/home/FeedbacksSwiper'
import logoRockAi from '../public/logo-Rockai.png'
import aidec from '../public/aidec.png'

export default function Home() {

  return (
    <>
      <section id="Home" style={{
        backgroundImage: `url(${bgimage.src})`
      }}>
        <div className='text'>
          <h2>Welcome To The Future</h2>
          <h2> Of <span>Technology</span> In Egypt </h2>
          <h5>We Are Working To Help Organizations Grow Up.</h5>
          <p>We are deeply inclined towards artificial intelligence and eagerly anticipate leveraging it to shape Egypt's future.</p>
          <Link href={'#services'}>Our Services</Link>
        </div>
      </section>

      {/* How Done */}
      <section className="how-done" id="howdone">
        <div className="title">
          <h3>Stages of building your great Software with Rockai Dev...</h3>
        </div>

        <div className="way">
          <div className="team top">

            <div className="trics up">
              <div className='rot up'>
                <div className="image">
                  <Image src={planing} alt="planing" />
                  <Image src={planing} alt="planing" />
                </div>
                <div className="desc">
                  <p>1. Upon receiving your request, we'll plan the project right away.</p>
                </div>
              </div>
            </div>

            <div className="trics down">
              <div className='rot'>
                <div className="image">
                  <Image src={design} alt="design" />
                  <Image src={design} alt="design" />
                </div>
                <div className="desc">
                  <p>2. Understanding your future desires enhances design.</p>
                </div>
              </div>
            </div>

            <div className="trics up">
              <div className='rot up'>
                <div className="image">
                  <Image src={programming} alt="programming" />
                  <Image src={programming} alt="programming" />
                </div>
                <div className="desc">
                  <p>3. Using premier software features for your professional growth.</p>
                </div>
              </div>
            </div>

            <div className="trics down">
              <div className='rot'>
                <div className="image">
                  <Image src={database} alt="database" />
                  <Image src={database} alt="database" />
                </div>
                <div className="desc">
                  <p>4. Maximize profits with our customer database.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="team down">

            <div className="trics up">
              <div className='rot up'>
                <div className="image">
                  <Image src={rating} alt="rating" />
                  <Image src={rating} alt="rating" />
                </div>
                <div className="desc">
                  <p>8. We're excited to hear your feedback on our service!</p>
                </div>
              </div>
            </div>

            <div className="trics down">
              <div className='rot'>
                <div className="image">
                  <Image src={practise} alt="practise" />
                  <Image src={practise} alt="practise" />
                </div>
                <div className="desc">
                  <p>7. We delight in training your team to utilize our features.</p>
                </div>
              </div>
            </div>

            <div className="trics up">
              <div className='rot up'>
                <div className="image">
                  <Image src={pay} alt="pay" />
                  <Image src={pay} alt="pay" />
                </div>
                <div className="desc">
                  <p>6. Electronic payments and diverse delivery platforms.</p>
                </div>
              </div>
            </div>

            <div className="trics down">
              <div className='rot'>
                <div className="image">
                  <Image src={gift} alt="gift" />
                  <Image src={gift} alt="gift" />
                </div>
                <div className="desc">
                  <p>5. Anticipate our delightful surprise on delivery.</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>

      {/* Services Section */}
      <section id='services'>
        <h2>Services</h2>
        <div className="services">
          <Link href={'#serTopic'} className="service" data-service='appDev'>
            <Image src={appDevI} alt='Mobile App Development Rockai Dev' width={150} height={150} />
            <h3>Mobile App Development</h3>
          </Link>
          <Link href={'#serTopic'} className="service" data-service='webDev'>
            <Image src={webDevI} alt='Web App Development Rockai Dev' width={150} height={150} />
            <h3>Website Development</h3>
          </Link>
          <Link href={'#serTopic'} className="service" data-service='deskDev'>
            <Image src={deskDevI} alt='Desktop App Development Rockai Dev' width={150} height={150} />
            <h3>Desktop App Development</h3>
          </Link>
          <Link href={'#serTopic'} className="service" data-service='SEO'>
            <Image src={SEOI} alt='SEO Rockai Dev' width={150} height={150} />
            <h3>SEO</h3>
          </Link>
          <Link href={'#serTopic'} className="service" data-service='system'>
            <Image src={systemsI} alt='System Development Rockai Dev' width={150} height={150} />
            <h3>Systems</h3>
          </Link>
          <Link href={'#serTopic'} className="service" data-service='ai'>
            <Image src={AiI} alt='Ai Development Rockai Dev' width={150} height={150} />
            <h3>Artificial intelligence</h3>
          </Link>
        </div>
        <div id="serTopic">

        </div>
        <div className="directions">
          <Link href={'/addOrder'} >Order Now</Link>
          <Link href={'/projects'} >Our Projects</Link>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section id='feedbacks'>
        <h2>Testimonials</h2>
        <FeedbacksSwiper />
      </section>

      {/* Summary Section */}

      <section className="summary-section">
        <div className="contener">
          <div className="text">
            <h4>A pioneering AI software startup.</h4>
            <Link href="/contact_us">Contact Us</Link>
          </div>
          <div className="summary">
            <div className="logo">
              <Image src={logoRockAi} alt="Our Logo" width={40} height={40} />
              <h1>Rockai<span>Dev</span></h1>
            </div>
            <div className="text-summary">
              <p>We embark on an audacious journey to enrich the digital realm, weaving simplicity and delight for every user, while leaving an indelible Egyptian mark in the realm of artificial intelligence</p>
            </div>
            <div className="social">
              <Link className="icon" href="https://www.facebook.com/rockaidev" target='_blank'><svg data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" /></svg></Link>

              <Link className="icon" href="https://www.instagram.com/rockaidev" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Instagram"><g fill="none" fillRule="evenodd"><g fill="#ffffff" transform="translate(-500 -160)" className="color000000 svgShape"><path d="M524 160c-6.518 0-7.335.028-9.895.144-2.555.117-4.3.523-5.826 1.116-1.578.613-2.917 1.434-4.25 2.768-1.335 1.334-2.156 2.673-2.769 4.251-.593 1.527-1 3.271-1.116 5.826-.116 2.56-.144 3.377-.144 9.895s.028 7.335.144 9.895c.117 2.555.523 4.3 1.116 5.826.613 1.578 1.434 2.917 2.768 4.25 1.334 1.335 2.673 2.156 4.251 2.77 1.527.592 3.271.998 5.826 1.115 2.56.116 3.377.144 9.895.144s7.335-.028 9.895-.144c2.555-.117 4.3-.523 5.826-1.116 1.578-.613 2.917-1.434 4.25-2.768 1.335-1.334 2.156-2.673 2.77-4.251.592-1.527.998-3.271 1.115-5.826.116-2.56.144-3.377.144-9.895s-.028-7.335-.144-9.895c-.117-2.555-.523-4.3-1.116-5.826-.613-1.578-1.434-2.917-2.768-4.25-1.334-1.335-2.673-2.156-4.251-2.769-1.527-.593-3.271-1-5.826-1.116-2.56-.116-3.377-.144-9.895-.144zm0 4.324c6.408 0 7.167.025 9.698.14 2.34.107 3.61.498 4.457.827 1.12.435 1.92.955 2.76 1.795.839.84 1.359 1.64 1.794 2.76.33.845.72 2.116.827 4.456.115 2.53.14 3.29.14 9.698s-.025 7.167-.14 9.698c-.107 2.34-.498 3.61-.827 4.457-.435 1.12-.955 1.92-1.795 2.76-.84.839-1.64 1.359-2.76 1.794-.845.33-2.116.72-4.456.827-2.53.115-3.29.14-9.698.14-6.409 0-7.168-.025-9.698-.14-2.34-.107-3.61-.498-4.457-.827-1.12-.435-1.92-.955-2.76-1.795-.839-.84-1.359-1.64-1.794-2.76-.33-.845-.72-2.116-.827-4.456-.115-2.53-.14-3.29-.14-9.698s.025-7.167.14-9.698c.107-2.34.498-3.61.827-4.457.435-1.12.955-1.92 1.795-2.76.84-.839 1.64-1.359 2.76-1.794.845-.33 2.116-.72 4.456-.827 2.53-.115 3.29-.14 9.698-.14zm0 7.352c-6.807 0-12.324 5.517-12.324 12.324 0 6.807 5.517 12.324 12.324 12.324 6.807 0 12.324-5.517 12.324-12.324 0-6.807-5.517-12.324-12.324-12.324zM524 192a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm15.691-20.811a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0z" fill="#ffffff" className="color000000 svgShape"></path></g></g></svg></Link>

              <Link className="icon" href="https://www.tiktok.com/@rockaidev" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 512 512" id="Tiktok"><path d="M353.97 0.43c0.03,7.81 2.31,120.68 120.76,127.72 0,32.55 0.04,56.15 0.04,87.21 -8.97,0.52 -77.98,-4.49 -120.93,-42.8l-0.13 169.78c1.63,117.84 -85.09,189.55 -198.44,164.78 -195.46,-58.47 -130.51,-348.37 65.75,-317.34 0,93.59 0.05,-0.03 0.05,93.59 -81.08,-11.93 -108.2,55.52 -86.65,103.81 19.6,43.97 100.33,53.5 128.49,-8.53 3.19,-12.14 4.78,-25.98 4.78,-41.52l0 -337.13 86.28 0.43z" fill="#ffffff" className="color000000 svgShape"></path></svg></Link>

              <Link className="icon" href="mailto:rockaidev@gmail.com" target='_blank'><svg data-name="Layer 1" viewBox="0 0 16 16"><path d="M14.5 2h-13A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm-1.766 1L8 6.738 3.266 3h9.468zM2 13V4.646l6 4.615 6-4.616V13H2z" /></svg></Link>
            </div>
          </div>
          <div className="dec">
            <Image src={aidec} alt="Ai Dec" width={600} height={500} />
          </div>
        </div>
      </section>
    </>
  )
}
