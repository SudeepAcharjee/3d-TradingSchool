import React from 'react'
import ContactForm from './ContactForm'; 


const Contact = () => {
  return (
    <section id="contact-section" className="content-width column">
        <div className="column" id="contact-header-container">
            <div >
                <h2 className='say-hello'>Say hello 👋</h2>
            </div>
            <h1 className="section-header-container">
                Contact Us
            </h1>
        </div>

           <div className="row center contact-items">
             <ContactForm ids={"contact-container"} />
             <div className="keys row center">
                    <div>
                    <b>
                        <h3>
                            
                        Goodwill Wealth Management Pvt Ltd
                        </h3>
                    </b>  MCX : 11095   |    ICEX : 2035   |    SEBI Regn. No : INZ000177036 <br />
                                                        
                                                        MSEI : 11240   |    NSE : 90097   |    BSE : 6648   <br />

                   <br /> <b>Clearing Code  </b>  |  NSE : M52003   |    BSE : 6648 <br />

                   <br /> <b>CDSL DP</b>    |  DP ID : 12084200   |    SEBI Regn. No : IN - DP - CDSL - 309 - 2017<br />

                    <br /><b>Research Analyst  </b>  |  SEBI Regn. No : INH200005179<br />

                   <br /> <b>Mutual Funds </b>  | ARN : 182218<br /><br />

                    <b>
                    please write to us : promotions@gwcindia.in
                    </b>
                    <br /> <br />
                    <b>Missed call </b> 00000000000
                    <br /> <br />
                    <b>WhatsApp </b> 00000000000
                    </div>
                </div>

           </div>
        
         
            <footer className="row center">
                

                <div id="legal-container" className="row center">
                    <span></span>
                    <a tabIndex="-1" className="legal-link" href="#" target="_blank">&copy; GWWM Education</a>
                    <a tabIndex="-1" className="legal-link" href="#" target="_blank">Disclaimer</a>
                    <a tabIndex="-1" className="legal-link" href="#" target="_blank">terms and conditions</a>
                    <a tabIndex="-1" className="legal-link" href="#" target="_blank">Risk Disclosure</a>
                    <a tabIndex="-1" className="legal-link" href="#" target="_blank">Policy</a>
                    <a tabIndex="-1" className="legal-link" href="#" target="_blank">Do's and Dont's</a>
                </div>
            </footer>
</section>

  )
}

export default Contact
