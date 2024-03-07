import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import WhatsAppButton from "../Contact/WhatsAppButton";
import EmailButton from "../Contact/EmailButton";
import CallButton from "../Contact/CallButton";

function FixedSocialButtons () {

    return (
        <section>
            <Container>
               <WhatsAppButton />
               <EmailButton />
               <CallButton />
            </Container>
        </section>
    );

}

export default FixedSocialButtons;