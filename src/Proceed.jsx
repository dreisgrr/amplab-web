import "./Proceed.css";
import { Link } from 'react-router-dom';

import logo from "../src/assets/logo.png";
import logo2 from "../src/assets/logo_page2.png";
import footer from "../src/assets/footer_page2.png";
import playstore from "../src/assets/badge_playstore.png";
import appstore from "../src/assets/badge_appstore.png";

function Proceed() {
    return (
        <div className='body-proceed'>
            <header className="navbar navbar-dark bg-purple">
                <div className="nav-container">
                    <a className="navbar-brand text-right" href="#" >
                        <img src={logo} alt=""/>
                    </a>
                </div>
            </header>
            <div className="container-fluid page-2">
                <div className="row">
                    <div className="banner"></div>  
                </div>

                <div className="row text-center contents">
                    <div className="col-md-12">
                        <div className="logo-2"><img src={logo2}/></div>
                        <h3>Thank you for you interest to consult with an OB-GYNE.</h3>
                        <h4>Click here to get your voucher code</h4>
                        <Link className="btn btn-purple btn-lg" to={"/VoucherCode"}>PROCEED</Link>
                    </div>

                </div>
            </div>
            <footer className="footer-page2">
                <div className="row align-items-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 playstore">
                        <img src={footer} className="footer-doc " width="30%"/>
                    </div>

                    <div className="col-md-6 download">
                            <h5>Download the <br/> HealthNow app at</h5>
                            <div className="playstore">
                                <a href="#">
                                    <img src={playstore} className="badgedl mb-10" alt="" width="150px"/>
                                </a>
                            </div>
                            
                            <div className="playstore">
                                <a href="#">
                                    <img src={appstore} className="badgedl mb-20" alt="" width="150px"/>
                                </a>
                            </div>
                    </div>
                </div>
                
                <div className="col-md-12"></div>
            </footer>
        </div>
    );
}

export default Proceed;