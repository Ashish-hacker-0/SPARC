import styles from '../styles/Home.module.css'
import {FcDocument} from 'react-icons/fc';
import Head from 'next/head';
import {FaBriefcaseMedical} from 'react-icons/fa';
import {GiMedicinePills} from 'react-icons/gi';
import Image from 'next/image';
import neuro from '../public/neuro.jpg';
import ortho from '../public/ortho.jpg';
import phy from '../public/phy.jpg';
import {FiCoffee} from 'react-icons/fi';
import {HiDocumentText} from 'react-icons/hi';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiCalendar} from 'react-icons/bi';
import doctor from '../public/doctor.png';
export default function Home() {
  return (
    <div className={styles.home}>
    <Head>
        <title>SPARC</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="SPARC is a Physiotherapy, Orthopaedic and Neuro-Research Center in Darbhnaga. Managed by Dr. Shashi Mishra, BPT(PAT) - M.U. and having 14 years of experience in this field."/>
        <meta property="og:title" content="SPARC is a Physiotherapy, Orthopaedic and Neuro-Research Center in Darbhnaga"/>
        <meta property="og:description" content="SPARC is a Physiotherapy, Orthopaedic and Neuro-Research Center in Darbhnaga. Managed by Dr. Shashi Mishra, BPT(PAT) - M.U. and having 14 years of experience in this field."/>
        <meta property="og:url" content="https://sparcdbg.co.in/"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
        <nav>
          <p className="logo">STEP PHYSIOTHERAPY AND REHAB CENTRE (SPARC)</p>
          <ul>
            <li>
              7004055752 / 7319793671
            </li>
            <li>
              We are available 24/7 a week
            </li>
            
          </ul>
        </nav>
        <div className="carsouel">
        <div className="black">
        <div>
          <span className="c-top"> SPARC is the best in-home <span className="bold">care for seniors & disabled adults</span></span>
          SPARC offers quality for the elderly and people of all ages,
          to give you the peace of mind you need.<br></br>
          <button><a href="https://wa.me/917319793671" target="_blank"> Make Appointment </a></button>
        </div>
        
        </div>
        </div>
        <div className="service">
            <p>Daily SPARC assistance</p>
            <p className="service-detail">We are one of the leading providers of domiciliary care and health care staffing services.</p>
            <div className="service-card">
              <div>
                <FcDocument/>
                <p>Residential Care</p>
                <p>Get helpful tips on what to look for when touring residential care facilities.</p>
              </div>
              <div>
                 <FaBriefcaseMedical/>
                 <p>Urgent Care at Home</p>
                 <p>Provides convenient walk-in services for individuals of all ages.</p>
              </div>
              <div>
                <GiMedicinePills/>
                <p>Home Live in care</p>
                <p>Many families struggle to make decisions about the best living situation for their aging.</p>
              </div>
            </div>
        </div>
        <div className="provide">
            <p>SPARC services</p>
            <p className="provide-detail">We are one of the leading providers of domiciliary care and health care staffing services.</p>
            <div className="provide-card">
              <div>
                <Image src={neuro} width="350px" height="220px" />
                <p>Neuro - Research Center</p>
                <p>NRI is a group of investigators whose collective goal is to create an intellectual atmosphere conducive to exploration at the frontiers of human knowledge where disciplinary boundaries disappear.</p>
              </div>
              <div>
              <Image src={phy} width="350px" height="220px" />

                 <p>Physiotherapy</p>
                 <p>Physiotherapy is treatment to restore, maintain, and make the most of a patient's mobility, function, and well-being. Physiotherapy helps through physical rehabilitation, injury prevention, and health and fitness.</p>
              </div>
              <div>
              <Image src={ortho} width="350px" height="220px" />
                <p>Orthopaedic</p>
                <p>Orthopaedics is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves.</p>
              </div>
            </div>
        </div>
        <div className="about">
          <div>
            <p>Who we are</p>
            <p>More than 20 years of providing innovative solutions that improve health and quality of life for those in need of in-home health services. Staff on call 24 hours a day, seven days a week, to help ensure continuity.</p>
          </div>
          <div>
            <p>What we offer</p>
            <p>Services is focused on patients and dedicated to delivering quality patient care and service???all supported by a nationwide network of experienced SPARC professionals and staff.</p>
          </div>
        </div>
        <div className="choose">
        <p>Why choose Us</p>
        <p>More than 20 years of providing innovative solutions that improve health and quality of life</p>
        <div className="choose-card">
          <div>
          <FiCoffee/>
          <p>Quality care</p>
          <p>SPARC center providing quality care for the elderly, children, adult</p>
          </div>
          <div>
          <HiDocumentText />
          <p>Certified SPARC</p>
          <p>SPARC is Licensing and Certification is a unit in the Division of SPARC Services.</p>
          </div>
          <div>
          <BsFillPersonFill/>
          <p>Professional staff</p>
          <p>Professionals and Experienced staff provide the most timely & efficient services possible.</p>
          </div>
          <div>
          <BiCalendar/>
          <p>24 hours a day</p>
          <p>Safe environments with friendly and professional teams of highly trained staff 24 hours a day</p>
          </div>
        </div>
        </div>
        <div className="doctor">
          <div className="Image">
            <Image src={doctor} />
          </div>
          <div className="about-doctor">
          
             <p>DR. SHASHI MISHRA</p>
             <p>( B.P.T. - M.U. )</p>
             <p>14 Year Experience</p>
             <div className="circle"></div>
          </div>
        </div>
        <div className="image-gallery">
        <p className="title">Image Gallery</p>
          <div className="images">
      
              <div className="image">
                
              </div>  
              <div className="image">
            

              </div>
              <div className="image">

              </div>  
              <div className="image">
              

                </div>
                <div className="image">
                

              </div>  
              <div className="image">
              
              </div>
              <div className="image">
           
              </div>  
              <div className="image">
           
              </div>
              <div className="image">
           
              </div>

          </div>  

        </div>
        <footer>
           <div className="flex">
             <div className="footer-about">
             <p >About Us</p>
             <p>SPARC is well established and trusted care provider providing care for the elderly since 2000.
              SPARC have comfortable relaxed interiors which are tastefully decorated to high standards.
              </p>
             <p></p>
             </div>
             <div className="timing">
             <p>Timing</p>
                  <ul>
                    <li>Mon-Sat : 3:00 PM - 8:00 PM</li>

               <li>Sunday : 9:00AM to 12:30PM</li>                  </ul>
             </div>
             <div className="contact">
              <p>Contact Us</p>
              <p>Radio Station, Beside Reliance Digital, GM Road, Road, Darbhanga, Bihar 846004</p>
              <p>Phone: 7004055752 / 7319793671</p>
              <p>We are available 24 hours 7 days a week</p>
             </div>
           </div>
           <div className="footer-bottom">
        <p> ?? 2021: SPARC</p>
        <p>Developed by <a href="https://www.facebook.com/softcelldbg" target="_blank"> Soft Cell </a></p>
        </div>  
        </footer>
    </div>
  )
}
