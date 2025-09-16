import React from "react";

function About() {
  return (
    <section className="section3" id="About">
      <div className="about container">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Founded in 2010, Little Lemon is a charming family-owned
            Mediterranean restaurant that brings the flavors of the
            Mediterranean to the heart of Chicago. Our culinary philosophy
            centers on traditional recipes prepared with a contemporary twist.
            <br />
            Our chefs source the freshest ingredients from local markets to
            create dishes that honor our heritage while delighting modern
            palates. From our signature Greek salad to our renowned lemon
            dessert, every item on our menu tells a story of tradition and
            innovation.
          </p>
        </div>
        <img src="./images/about.png" alt="two men" />
      </div>
    </section>
  );
}

export default About;
