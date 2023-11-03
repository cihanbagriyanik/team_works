import React from 'react'
import PlayerCard from './PlayerCard'

import { Row } from "react-bootstrap"

import { data } from "../helper/data"

const CardContainer = () => {

    //!

    return (
        <>
            <input className='w-50 m-auto form-control' type="search" placeholder='Search Player...' />

            <div className='card-container rounded-4 my-4 p-3 d-flex'>


                <Row className='justify-content-center gap-3'>
                    {data.map((item) => <PlayerCard {...item} />)}
                </Row>

            </div>
        </>
    )
}

export default CardContainer