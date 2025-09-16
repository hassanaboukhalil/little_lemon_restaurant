import { Center, Grid } from "@chakra-ui/react";
import React from "react";
import Rater from "./Rater";
// import image_1 from "../../../public/images/testimonials/rater-1.jpeg";
// import image_2 from "../../../public/images/testimonials/rater-2.jpeg";
// import image_3 from "../../../public/images/testimonials/rater-3.jpeg";
// import image_4 from "../../../public/images/testimonials/rater-4.jpeg";

function Testimonials() {
  return (
    <section className="section3">
      <div className="testimonials container">
        <Center className="title" as="b">
          Testimonials
        </Center>
        <Grid
          className="raters"
          templateColumns="auto"
          paddingX="2rem"
          spacing="2.94rem"
          justifyItems="center"
        >
          <Rater
            firstName="Yousef"
            lastName="Ferman"
            image="./images/testimonials/rater-1.jpeg"
            description="The Greek salad at Little Lemon is absolutely divine! Fresh ingredients, perfect balance of flavors, and generous portions. A true Mediterranean delight."
          />
          <Rater
            firstName="Mostafa"
            lastName="Ahmed"
            image="./images/testimonials/rater-2.jpeg"
            description="Little Lemon's online ordering system is so convenient! Food arrived hot, perfectly packaged, and just as delicious as dining in. Their attention to detail is impressive."
          />
          <Rater
            firstName="Kareem"
            lastName="Mohamed"
            image="./images/testimonials/rater-3.jpeg"
            description="The reservation process at Little Lemon was seamless. We were seated promptly, and the staff was incredibly accommodating to our special requests. Excellent service throughout!"
          />
          <Rater
            firstName="Selena"
            lastName="Jawad"
            image="./images/testimonials/rater-4.jpeg"
            description="The dessert menu at Little Lemon is a hidden gem! Their lemon dessert is the perfect balance of sweet and tangy. They create memorable dining experiences with locally sourced ingredients."
          />
        </Grid>
      </div>
    </section>
  );
}

export default Testimonials;
