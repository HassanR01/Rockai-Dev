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

              <Link className="icon" href="https://www.behance.net/RockaiDev" target='_blank'><svg data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.07,6.35H15V7.76h5.09ZM19,16.05a2.23,2.23,0,0,1-1.3.37A2.23,2.23,0,0,1,16,15.88a2.49,2.49,0,0,1-.62-1.76H22a6.47,6.47,0,0,0-.17-2,5.08,5.08,0,0,0-.8-1.73,4.17,4.17,0,0,0-1.42-1.21,4.37,4.37,0,0,0-2-.45,4.88,4.88,0,0,0-1.9.37,4.51,4.51,0,0,0-1.47,1,4.4,4.4,0,0,0-.95,1.52,5.4,5.4,0,0,0-.33,1.91,5.52,5.52,0,0,0,.32,1.94A4.46,4.46,0,0,0,14.16,17a4,4,0,0,0,1.46,1,5.2,5.2,0,0,0,1.94.34,4.77,4.77,0,0,0,2.64-.7,4.21,4.21,0,0,0,1.63-2.35H19.62A1.54,1.54,0,0,1,19,16.05Zm-3.43-4.12a1.87,1.87,0,0,1,1-1.14,2.28,2.28,0,0,1,1-.2,1.73,1.73,0,0,1,1.36.49,2.91,2.91,0,0,1,.63,1.45H15.41A3,3,0,0,1,15.52,11.93Zm-5.29-.48a3.06,3.06,0,0,0,1.28-1,2.72,2.72,0,0,0,.43-1.58,3.28,3.28,0,0,0-.29-1.48,2.4,2.4,0,0,0-.82-1,3.24,3.24,0,0,0-1.27-.52,7.54,7.54,0,0,0-1.64-.16H2V18.29H8.1a6.55,6.55,0,0,0,1.65-.21,4.55,4.55,0,0,0,1.43-.65,3.13,3.13,0,0,0,1-1.14,3.41,3.41,0,0,0,.37-1.65,3.47,3.47,0,0,0-.57-2A3,3,0,0,0,10.23,11.45ZM4.77,7.86H7.36a4.17,4.17,0,0,1,.71.06,1.64,1.64,0,0,1,.61.22,1.05,1.05,0,0,1,.42.44,1.42,1.42,0,0,1,.16.72,1.36,1.36,0,0,1-.47,1.15,2,2,0,0,1-1.22.35H4.77ZM9.61,15.3a1.28,1.28,0,0,1-.45.5,2,2,0,0,1-.65.26,3.33,3.33,0,0,1-.78.08h-3V12.69h3a2.4,2.4,0,0,1,1.45.41,1.65,1.65,0,0,1,.54,1.39A1.77,1.77,0,0,1,9.61,15.3Z" /></svg></Link>

              <Link className="icon" href="mailto:rockaidev@gmail.com" target='_blank'><svg data-name="Layer 1" viewBox="0 0 16 16"><path d="M14.5 2h-13A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm-1.766 1L8 6.738 3.266 3h9.468zM2 13V4.646l6 4.615 6-4.616V13H2z" /></svg></Link>

              <Link className="icon" href="https://github.com/RockaiDev" target='_blank'><svg data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z" /></svg></Link>
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
