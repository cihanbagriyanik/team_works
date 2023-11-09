import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';


function HastaEkle() {




    return (
        <Form className='m-4'>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Please enter your Full Name"

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control type="datetime-local" required />
                </Form.Group>
            </Row>

            <div className='mt-3'>
                <Button type="submit">..... icin kayit olustur</Button>
            </div>

            <div className='mt-3'>
                <Button type="submit">Ana Sayfa</Button>
            </div>

        </Form>
    );
}

export default HastaEkle;