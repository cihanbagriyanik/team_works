import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';
// uuidv4();


function HastaEkle({ yenile, setHastalar, dr }) {




    const yeniHasta = {
        id: uuidv4(),
        text: {},
        day: {},
        bittiMi: false,
        doktor: {},
    }


    return (
        <Form className='m-4 w-100 forM'>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Please enter your Full Name"
                        className='inputs'
                    />

                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control className='inputs' type="datetime-local" required />
                </Form.Group>
            </Row>

            <div className='mt-3'>
                <Button type="submit">{dr} icin kayit olustur</Button>
            </div>

            <div className='mt-3'>
                <Button
                    type="button"
                    onClick={yenile}
                >
                    Ana Sayfa
                </Button>
            </div>

        </Form>

    );
}

export default HastaEkle;