import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import WhatsAppButton from "../Contact/WhatsAppButton";
import zihan2 from "../../Assets/zihan2.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      {/* <WhatsAppButton /> */}
      <Card.Body>
      {/* <img src={zihan2} alt="about" className="img-fluid" /> */}
      <blockquote className="blockquote mb-0">
  <p className="block-quote-text" style={{}}>
    Hello, I'm <span className="purple">Dr. Thanzeeha Umar (MBBS) (MD)</span>, a clinical psychologist based in <span className="purple">New York City</span>.
    <br /><br /> I hold a Ph.D. in Clinical Psychology and have dedicated years to understanding and helping individuals navigate their mental well-being.
    <br />
    <br />
    My professional journey includes meaningful experiences, including providing therapy to diverse populations and conducting research in mental health.
    <br />
    <br />
    Currently, I'm deeply involved in my private practice, where I offer support and guidance to individuals seeking a positive change in their lives.
    <br />
    <br />
    In addition to my clinical work, I'm passionate about:
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Advocating for Mental Health Awareness
    </li>
    <li className="about-activity">
      <ImPointRight /> Writing Articles on Psychological Well-being
    </li>
    <li className="about-activity">
      <ImPointRight /> Exploring the Connection Between Mind and Body
    </li>
    <li className="about-activity">
      <ImPointRight /> Conducting Workshops on Stress Management
    </li>
  </ul>

  <p style={{ color: "#5dfeff" }}>
    "Dedicated to fostering mental wellness and resilience in every individual I work with!"{" "}
  </p>
  <footer className="blockquote-footer">Dr. Emily Richardson, Ph.D.</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
