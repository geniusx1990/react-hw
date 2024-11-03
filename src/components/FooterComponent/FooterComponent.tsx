import { Link } from "react-router-dom";
import { FOOTERCONTENT } from "../../utils/constants";
import { getImgUrl } from "../../utils/getImageUrl";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import './style.css'
export default function FooterComponent() {
    return (
        <footer>
            <div className="footer__content">
                <div className="footer__content-top">
                    <div className="footer__content_main">
                        <span><img src={getImgUrl('logo.svg')} alt="" /></span>
                        <h5 className="foooter_text">Takeaway & Delivery template<br />for small - medium businesses.</h5>
                    </div>
                    <div className="footer__section_links">
                        {FOOTERCONTENT.map((section) => (
                            <div key={section.id} className="footer__section">
                                <h4 className="footer__title">{section.title}</h4>
                                <ul className="footer__links">
                                    {section.links.map((link) => (
                                        <li key={link.id} className="footer__link-item">
                                            <Link to={link.route} className="footer__link">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer_bottom__links">
                        <p className="footer_bottom-title">
                            Built by{' '}
                        </p>
                        <span className="footer_bottom-space"></span>
                        <Link to={'#'} className="footer_bottom-link">
                            Flowbase
                        </Link>
                        <span className="footer_bottom-separator">·</span>
                        <p className="footer_bottom-title">
                            Powered by
                        </p>
                        <span className="footer_bottom-space"></span>
                        <Link to={'#'} className="footer_bottom-link">
                            Webflow
                        </Link>
                    </div>
                    <div className="social__links">
                        <Link to={'#'}>
                            <div className="circle">
                                <FaInstagram color="#0C2050" />
                            </div>
                        </Link>
                        <Link to={'#'}>
                            <div className="circle">
                                <FaTwitter color="#0C2050" />
                            </div>
                        </Link>
                        <Link to={'#'}>
                            <div className="circle">
                                <FaYoutube color="#0C2050" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}