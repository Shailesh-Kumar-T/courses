import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  
  {
    title: "Quick Learning",
    desc: "We offer a range of courses that are structured to provide you with the most important and relevant information in a condensed format.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "At our online course website, we strive to provide you with the support you need to succeed in your learning journey.",
    icon: "ri-discuss-line",
  },
 
  {
    title: "Certification",
    desc: " Upon successful completion of a course, you will receive a certificate of completion that validates your new skills and knowledge.",
    icon: "ri-contacts-book-line",
  },
  
];


const Features = () => {
  return (
    <section>
      <Container className="rebas">
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
