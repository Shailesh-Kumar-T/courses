import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      I loved the course I took on digital marketing. The material 
                      was well-organized and easy to follow, and the instructors 
                      were knowledgeable and responsive to my questions.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Wick</h6>
                        <p>Las, Vegas</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      I recently took a course on project management and was pleasantly 
                      surprised by how engaging and informative it was. The instructors were 
                      passionate and experienced, and the course content was well
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Hulk </h6>
                        <p>Calgary, Canada</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      I loved the course I took on digital marketing. The material 
                      was well-organized and easy to follow, and the instructors 
                      were knowledgeable and responsive to my questions.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Robert Browny</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
