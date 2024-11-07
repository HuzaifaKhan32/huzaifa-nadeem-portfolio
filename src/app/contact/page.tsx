import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="heading">
                <h1>Contact</h1>
            </div>
            <div className="contact-content-container">
                <div className="left">
                    <div className="phone-number utility">
                        <FontAwesomeIcon icon={faPhone} className="svg" />
                        <p>+92 319 740 8731</p>
                    </div>
                    <div className="gmail utility">
                        <FontAwesomeIcon icon={faEnvelope} className="svg" />
                        <p>huzaifakhan0856551@gmail.com</p>
                    </div>
                    <div className="address utility">
                        <FontAwesomeIcon icon={faLocationDot} className="svg" />
                        <p>5/187 Liaquatabad, Karachi, Pakistan</p>
                    </div>
                </div>
                <div className="right">
                    <div className="form">
                        <form>
                            <div className="full-name">
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div className="email">
                                <input type="text" placeholder="Email Address" />
                            </div>
                            <div className="phone-subject">
                                <input type="number" placeholder="Phone Number" className="phone"/>
                                <input type="text" placeholder="Subject" className="subject"/>
                            </div>
                            <div className="Message">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className="send">
                                <input type="submit" value="Send" className="send-button"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;