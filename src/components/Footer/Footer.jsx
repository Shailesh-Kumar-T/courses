import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners.
            </h2>

            <div className="follows">
              <p className="rick" >Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.theknowledgeacademy.com/in/offers/facebook-marketing-certification-training-courses/?utm_term=Facebook%20Courses&utm_campaign=%5BFacebook%5D%5BIN%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=9865744776&hsa_cam=15977432095&hsa_grp=1298523594572819&hsa_ad=&hsa_src=o&hsa_tgt=kwd-81157912902207:loc-90&hsa_kw=Facebook%20Courses&hsa_mt=e&hsa_net=adwords&hsa_ver=3&utm_content=%5BFacebook%5D%5BCourse%5D">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.theknowledgeacademy.com/in/offers/instagram-marketing-certification-training-courses/?utm_term=Instagram%20Training&utm_campaign=%5BInstagram%5D%5BIN%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=9865744776&hsa_cam=15977432101&hsa_grp=1302921640893607&hsa_ad=&hsa_src=o&hsa_tgt=kwd-81432790698618:loc-90&hsa_kw=Instagram%20Training&hsa_mt=p&hsa_net=adwords&hsa_ver=3&utm_content=%5BInstagram%5D%5BTraining%5D">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.linkedin.com/learning/subscription/topics?src=pa-bi&trk=sem-bi_campid.403206117_asid.1284229926981142_crid.80264457164307_kw.linkedin%20class_d.c_tid.kwd-80264568452926:loc-90_n.o_mt.e_geo.149832&mcid=6842178359988908204&cid=&gclid=637b1056c2251888d6dd74650e91bf6c&gclsrc=3p.ds&msclkid=637b1056c2251888d6dd74650e91bf6c">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.theknowledgeacademy.com/in/offers/twitter-marketing-certification-training-courses/?utm_term=Twitter%20Courses&utm_campaign=%5BTwitter%5D%5BIN%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=9865744776&hsa_cam=15910528991&hsa_grp=1307319688310907&hsa_ad=&hsa_src=o&hsa_tgt=kwd-81707669197332:loc-90&hsa_kw=Twitter%20Courses&hsa_mt=p&hsa_net=adwords&hsa_ver=3&utm_content=%5BTwitter%5D%5BCourse%5D">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" >
            <h6 className="fw-bolds">Get in Touch</h6>

            <p className="rick">Address: Ischia, Italy</p>
            <p className="rick" > Phone: +39 03557175974 </p>
            <p className="rick" >Email: habibi@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
