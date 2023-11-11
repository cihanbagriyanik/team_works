
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
    const [drListe, setDrListe] = useState(doktorData)

    const [hastalar, setHastalar] = useState(Data)

    const [active, setInactive] = useState(true)

    const filtered = (doktor) => {
        const filteredData = hastalar.filter((filter) => filter.doktor === doktor)

        setInactive(false)

        setListe(filteredData)
        setDrListe(doktorData.filter((filter) => filter.doktor === doktor))
    }

    const yenile = () => {
        setInactive(true)

        setListe(hastalar)
        setDrListe(doktorData)
    }

    return (
        <div>
            <div className={active ? "text-center text-danger pt-4 " : "hastaEklestil"} >
                <h1 className='fw-semibold' >HOSPITAL APPOINTMENT APP</h1>
            </div>

            <div>
                <div
                    className={active ? 'd-flex justify-content-center align-items-center text-center m-4 gap-3' : "hastaEklestil"}>

                    {drListe.map((x) =>
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
                    {!active && <HastaEkle yenile={yenile} hastalar={hastalar} setHastalar={setHastalar} dr={drListe[0].doktor} />}
                </div>
            </div>



            {liste.map((a) => <HastaListe hastalar={hastalar} setHastalar={setHastalar} {...a} key={a.id} />)}






        </div>
    )
}

export default Home