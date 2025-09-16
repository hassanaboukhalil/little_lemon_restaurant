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
          />
          <Rater
            firstName="Mostafa"
            lastName="Ahmed"
            image="./images/testimonials/rater-2.jpeg"
          />
          <Rater
            firstName="Kareem"
            lastName="Mohamed"
            image="./images/testimonials/rater-3.jpeg"
          />
          <Rater
            firstName="Selena"
            lastName="Jawad"
            image="./images/testimonials/rater-4.jpeg"
          />
        </Grid>
      </div>
    </section>
  );
}

export default Testimonials;
