import "./VoucherCode.css";

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
                        <div className="code"><h4>USE CODE: WCDCL150</h4></div>
                        <p>on OB-GYN consultation</p> 
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
                <div class="row mobile-hide">
                    <div class="col-md-2"></div>
                    <div class="col-md-4">
                            <h5>How to use your voucher</h5>
                            <ol>
                                <li>Download and register on the HealthNow app.</li>
                                <li>Select Consult Later > OB-GYN, and browse through the available doctors.</li>
                                <li>Choose your doctor and preferred date and time for the video consultation.</li>
                                <li>Input promo code upon payment to get P150 OFF.</li>
                                <li>Access the HealthNow app on the scheduled date and time to start your consultation!</li>
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