import { getImgUrl } from "../../utils/getImageUrl";
import './style.css';

export default function HomePage() {
    return (

        <section className="hero">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div className="hero__article">
                        <h1 className="hero__title">Beautiful food &<br /> takeaway, <span className="color-text">delivered</span> <br />to your door.</h1>
                        <p className="hero__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                    <button className="button_order">Place an Order</button>
                    <div className="hero_rating">
                        <div className="hero_star">
                            <img src={getImgUrl('star.svg')} alt="" />
                            <p className="trustpilot">Trustpilot</p>
                        </div>
                        <div className="hero_reviews">
                            <p className="rating"><span className="rating-color">4.8 out of 5</span> based on 2000+ reviews</p>
                        </div>
                    </div>
                </div>
                <img src={getImgUrl('hero-image.png')} alt="hero-image" />
            </div>
        </section>

    )
}