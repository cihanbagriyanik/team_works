import React from 'react'

import "../styles/style.css"

import Picture from '../components/Picture'

const Homepage = ({ data }) => {

    return (

        <div>
            <h1>Albums</h1>

            <div className='pictures'>
                {data.map((item) => <Picture {...item} />)}
            </div>

        </div>
    )
}

export default Homepage