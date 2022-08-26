import "./VoucherCode.css";
import { Link } from 'react-router-dom';

import logo from "../src/assets/logo.png";
import footer3 from "../src/assets/footer_page3.png";

function VoucherCode() {
    return (
        <div className='body-voucher'>
            <header className="navbar navbar-dark bg-purple">
                <div className="nav-container">
                    <a className="navbar-brand text-right" href="#" >
                        <img src={logo} alt=""/>
                    </a>
                </div>
            </header>
            <div className="container-fluid text-center page-3">
                <div className="row contents">
                    <div className="col-md-12">
                        <h2>Thank you!</h2>
                        <h3>GET P150 OFF</h3>
                        <div className="code"><h4>USE CODE: XXXXX</h4></div>
                        <p>on specialist consultation</p> 
                    </div>

                    <div className="col-md-12 mobile-show">
                        <h5>How to use your voucher</h5>
                        <ol>
                            <li>Download the HealthNow app from the Google Play/App Store.</li>
                            <li>Register your account in HealthNow.</li>
                            <li>Select from one of the services provided by HealthNow and avail the P150 discount.</li>
                            <li>Use the code above.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <footer class="footer-page2">
                <div class="row align-items-end mobile-hide">
                    <div class="col-md-4"></div>
                    <div class="col-md-2">
                            <h5>How to use your voucher</h5>
                            <ol>
                                <li>Download the HealthNow app from the Google Play/App Store.</li>
                                <li>Register your account in HealthNow.</li>
                                <li>Select from one of the services provided by HealthNow and avail the P150 discount.</li>
                                <li>Use the code above.</li>
                            </ol>
                    </div>
                    <div class="col-md-6 text-left ">
                        <img src={footer3} class="footer-doc " width="30%"/>
                    </div>
                    
                </div>
                
                <div class="col-md-12"></div>
            </footer>
        </div>
    );
}

export default VoucherCode;