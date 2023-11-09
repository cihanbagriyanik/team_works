
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

import { Card } from 'react-bootstrap';

import HastaListe from '../components/HastaListe';
import HastaEkle from '../components/HastaEkle';


import Data from "../helper/data"
import { doktorData } from "../helper/doktorData"
import { useState } from 'react';


const Home = () => {
    // console.log(Data);

    const [liste, setListe] = useState(Data)

    const filtered = (doktor) => {
        const filteredData = Data.filter((filter) => filter.doktor === doktor)
        setListe(filteredData)
    }


    return (
        <div>
            <div className="text-center text-danger pt-4 " >
                <h1 className='fw-semibold' >HOSPITAL</h1>
            </div>

            <div className='d-flex justify-content-center align-items-center text-center m-4 gap-3'>
                {doktorData.map((x) =>
                    <Card
                        className='kart' style={{ width: '18rem' }}
                        onClick={() => filtered(x.doktor)}

                    >
                        <Card.Img className='fotoS' src={x.resim} variant="top" role='button' />
                        <Card.Footer>
                            <Card.Title>{x.doktor}</Card.Title>
                        </Card.Footer>
                    </Card>
                )}
            </div>



            {liste.map((a) => <HastaListe {...a} key={a.id} />)}




            <HastaEkle  />


        </div>
    )
}

export default Home