import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';
// uuidv4();


function HastaEkle({ yenile, hastalar, setHastalar, dr }) {

    const [patientName, setName] = useState("")
    const [tarih, setTarih] = useState("")


    const handleSubmiT = (e) => {
        e.preventDefault(); //direk submit olayi yapmadan once alttaki kodlara bak

        setHastalar([...hastalar, yeniHasta])

        setName("")
        setTarih("")
    }
    
    const yeniHasta = {
        id: uuidv4(),
        text: { patientName },
        day: { tarih },
        bittiMi: false,
        doktor: { dr },
    }



    return (
        <Form className='m-4 w-100 forM' onSubmit={handleSubmiT}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Please enter your Full Name"
                        className='inputs'
                        // value={patientName}
                    />

                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control className='inputs' type="datetime-local" required
                        // value={tarih}

                    />
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