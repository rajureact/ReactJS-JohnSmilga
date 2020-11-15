import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { falseLink } = useGlobalContext();
  return (
    <React.Fragment>
      <section className="hero" onMouseOver={falseLink}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>
              Payments infrastructure <br /> for the internet
            </h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <button className="btn">Start Now</button>
          </article>
          <article className="hero-images">
            <img src={phoneImg} className="phone-img" alt="phone" />
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
