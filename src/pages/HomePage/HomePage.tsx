import { getImgUrl } from "../../utils/getImageUrl";

export default function HomePage() {
    return (

        <section>
            <div>
                <h1>Beautiful food & takeaway, delivered to your door.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            </div>
            <button>Place an Order</button>
            <div>
                <img src={getImgUrl('star.svg')} alt="" />
                <p>Trustpilot</p>
                <div><p>4.8 out of 5</p>
                    <p>based on 2000+ reviews</p>
                </div>
            </div>
        </section>

    )
}