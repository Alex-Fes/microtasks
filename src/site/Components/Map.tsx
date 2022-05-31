import React from 'react';
import './map.css'

type NewComponentPropsType = {
    autoCheck: topCarsPropsType[]
    // autoCheck: Array<topCarsPropsType>
}

export type topCarsPropsType = {
    manufacturer: string
    model: string
}

const Auto = ({autoCheck}: NewComponentPropsType) => {

    let carFromMap = autoCheck.map((el, index) => {

    return (

        <tr key={index}>
            <th key={index}>{index + 1}</th>
            <th key={el.manufacturer}>{el.manufacturer}</th>
            <th key={el.model}>{el.model}</th>
        </tr>
    )
    })

    return (
        <table>
            {carFromMap}
        </table>
    )
};

export default Auto;