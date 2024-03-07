import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import hospital2FA from "../../Assets/Projects/hospital2FA.png";
import companion from "../../Assets/Projects/companion.png";
import diary from "../../Assets/Projects/diary.png";
import onlineStore from "../../Assets/Projects/onlineStore.png";
import debtorInProgress from "../../Assets/Projects/debtorInProgress.png";
import springEAD from "../../Assets/Projects/springEAD.png";
import phpDebtor from "../../Assets/Projects/phpDebtor.png";

function AllProjects() {
  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital2FA}
              isBlog={false}
              title="Hospital Management Security System"
              description="Developed a Secure Authentication System for a hospital, an individual
              project focusing on enhanced security through Role-Based Access
              Control and 2FA validation. This system offers strengthened security
              layers with attribute verification, role-based restrictions, and user
             friendly password management."

             tech ="Used technologies: MERN stack "
              
              demoLink="https://www.linkedin.com/posts/mohamed-zihan_mernstack-fullstackdevelopment-healthcaretech-activity-7154813924209557504-m7Rk?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={companion}
              isBlog={false}
              title="Companion"
              description=" Participated in a group project to create an Online Vehicle Requesting
              System, a versatile web/mobile application designed for companies to
              book vehicles (Bus, Van, Car, TukTuk) for staff transportation. The
              system allows managers to select specific drop locations and facilitates
              cash payments, streamlining the vehicle booking process."
              tech ="Used technologies: React Native, Laravel and MySQL "

              ghLink = "https://github.com/Zihan-Codes/full-code-companion"
              
              
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diary}
              isBlog={false}
              title=" Diary Mobile App"
              description=" Developed 'Diary Mobile App,' my inaugural venture into mobile
              application development, using React Native, Laravel, and MySQL. This
              app offers a personal, digital space for users to record and manage
              their daily activities and thoughts."
              tech ="Used technologies: React Native, Laravel and MySQL "

              demoLink = "https://www.linkedin.com/posts/mohamed-zihan_reactnative-laravel8-mysql-activity-6938428837026234368-OQfx/?utm_source=share&utm_medium=member_desktop"
              
              
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineStore}
              isBlog={false}
              title="Online Store website"
              description=" Initiated an individual project to create an Online Store Website,
              designed for showcasing and managing a shop's product catalog. This
              adaptable platform, currently in development, allows for customization
              including store branding changes. Detailed project insights and a demo
              video are available on my LinkedIn profile."
              tech ="Used technologies: PHP, JavaScript and MySQL "

              demoLink = "https://www.linkedin.com/posts/mohamed-zihan_php-mysql-javascript-activity-6907286172012298240-bLw6/?utm_source=share&utm_medium=member_desktop"
              
              
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={debtorInProgress}
              isBlog={false}
              title="Advanced Business Transaction Management System"
              description =" Creating the Advanced Business Transaction Management System, an
              individual project designed to streamline and enhance transaction
              management for entrepreneurs. Focused on handling various payment
              scenarios and improving communication through email, with ongoing
              development to include WhatsApp notifications."

              tech ="Used technologies: MERN stack "

              />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springEAD}
              isBlog={false}
              title="Basic Hospital Management System"
              description =" My first Spring Boot project, this system streamlines the management of
              doctor and patient details, enabling basic add, delete, and update
              functionalities."
              tech ="Used technologies: Spring Boot, React and MySQL "

              ghLink = "https://github.com/Zihan-Codes/Hospital-crud-Back-end"

              />
              
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phpDebtor}
              isBlog={false}
              title="Debtors transaction Management System"
              description =" Developed a Debtors Transaction Management System using PHP and Javascript with a MySQL database. 
              The system efficiently handled diverse transaction scenarios, offering entrepreneurs a reliable tool for managing 
              debt-related activities. While prioritizing efficiency and accuracy, the system lacked an email notification feature."
              tech ="Used technologies: PHP, JavaScript and MySQL "


              demoLink = "https://www.linkedin.com/posts/mohamed-zihan_help-html5-css-activity-6900314764573052928-yNyZ?utm_source=share&utm_medium=member_desktop"

              />
              
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default AllProjects;
