

import ListGroup from 'react-bootstrap/ListGroup';

import { TiDelete } from 'react-icons/ti';


const HastaListe = ({ id, text, day, bittiMi, doktor }) => {



    return (

        <ListGroup as="ol" >
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start ms-3 me-4 mt-2"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{text}</div>
                    <p>{day}</p>
                    <div className="fw-bold">{doktor}</div>
                </div>

                <div className="ms-2 me-auto mt-4">
                    <div className="fw-bold">{(bittiMi == true) ? "Hastayla ilgilenildi" : ""}</div>
                </div>

                <div>
                    <TiDelete className='text-danger' size={28} type='button' />
                </div>
            </ListGroup.Item>

        </ListGroup>


    )
}

export default HastaListe