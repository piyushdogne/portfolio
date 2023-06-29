import React from "react";
import akshat from "../assets/akshat.png"
import ashutosh from "../assets/ashutosh.png"
import atul from "../assets/atul.png"

const Testimonial = () => {
    return (
        <div id="testimonial">
            <h2>Testimonial</h2>

            <section>
                <TestimonialCard
                    image={akshat}
                    name={"Akshat Parihar"}
                    feedback={"Your Teaching skills are so good."}
                />

                <TestimonialCard
                    image={ashutosh}
                    name={"Ashutosh Malviya"}
                    feedback={
                        "Wow what a portfolio, doesn't expected this to be on youtube!"
                    }
                />

                <TestimonialCard
                    image={atul}
                    name={"Atul Mukati"}
                    feedback={"Amazing seems like you should the Google CEO"}
                />
            </section>
        </div>
    );
};

const TestimonialCard = ({ image, name, feedback }) => (
    <article>
        <img src={image} alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
);

export default Testimonial;