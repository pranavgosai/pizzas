import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaRegEnvelope} from "react-icons/fa"
import payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
              
                <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias provident iusto numquam soluta id mollitia, ad nisi molestiae repellendus quo dolorum placeat? Quidem odit obcaecati sequi possimus rem soluta et!</div>
                
            </div>
            <div className="col"> <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">kaylalorm rd,punnamada,kottankulangara,alappuzha,68806</div>
           
            </div>
            
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">phone:0471 272 0261</div>
            </div>
            <div className="c-item">
                <FaRegEnvelope/>
                <div className="text">email:store@sdev.com</div>
            </div>
            </div>

            
            
            <div className="col"> 
            <div className="title">Categorys</div>
            <div className="text">Headphones</div>
            <div className="text">Smart Watches</div>
            <div className="text">bluetooth speackers</div>
            <div className="text">Wireless earbuds</div>
            <div className="text">home theatre</div>
            <div className="text">projectors</div>
            </div>
            <div className="col">
                 <div className="title">pages</div>
                 <div className="text">Home</div>
                 <div className="text">About</div>
                 <div className="text">Privacy Policy</div>
                 <div className="text">Returns</div>
                 <div className="text">Terms & Conditios</div>
                 <div className="text">Contact Us</div>
                 </div>
        </div>
        <div className="bttom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                CREATED BY S DEV. PREMIUM E_COMMERCE
        SOLUTIONS.
                </div>
                <img src={payment} alt="payment" />
            </div>
        </div> 
    </footer>;
};

export default Footer;
