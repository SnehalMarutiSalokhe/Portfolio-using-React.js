import React from 'react'
import { useState } from "react";
import { Container } from "react-bootstrap";
import ContactImg from "../../assets/img/contact-img.svg";
export const contact = () => {
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const [formDtails, setformDtails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send')  ;
    const [setstatus, setSetstatus] = useState({});

    const onFormUpdate =(category , value) =>{
        setformDtails({
            ...formDtails,
            [category]:value
        })
    }

    const handleSubmit =()=>{
        
    }
  return (
    <div>
      <section className="contact" id="connect">
        <Container >
            <Row className="align-items-center">
                <Col md ={6}>
                    <img src={ContactImg} alt="Contact Us" />
                </Col>
                <Col md ={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit} >
                        <Row>
                            <Col sm={6} ClassName="px-1">
                                <input type="text" vlaue={formDtails.firstName} placeholder="First Name" onChange= {(e) =>onFormUpdate('firstName',e.target.value)} />
                            </Col>
                            <Col sm={6} ClassName="px-1">
                                <input type="text" vlaue={formDtails.lasttName} placeholder="Last Name" onChange= {(e) =>onFormUpdate('lastName',e.target.value)} />
                            </Col>
                            <Col sm={6} ClassName="px-1">
                                <input type="email" vlaue={formDtails.email} placeholder="email" onChange= {(e) =>onFormUpdate('email',e.target.value)} />
                            </Col>
                            <Col sm={6} ClassName="px-1">
                                <input type="tel" vlaue={formDtails.phone} placeholder="phone NO" onChange= {(e) =>onFormUpdate('phone',e.target.value)} />
                            </Col>
                            <Col sm={6} ClassName="px-1">
                                <textarea  row="6" vlaue={formDtails.message} placeholder="Message" onChange= {(e) =>onFormUpdate('message',e.target.value)}> < textarea/>
                                <button type="submit"> <span> {buttonText}</span> </button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                  <p ClassName = {status.success === false ? "danger" : "succes"}> {status.message}</p>

                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>

      </section>
    </div>
  )
}
