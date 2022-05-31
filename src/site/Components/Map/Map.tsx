import React from 'react';
import './map.css'
import '../../../App.css'

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
        <>
        <table key={index}>
            <tbody>
        <tr key={index}>
            <th key={index}>{index + 1}</th>
            <th key={el.manufacturer}>{el.manufacturer}</th>
            <th key={el.model}>{el.model}</th>
        </tr>
            </tbody>
        </table>
        </>
    )
    })

    return (
        <div className='App'>
        <table>
            {carFromMap}
        </table>
        </div>
    )
};

export default Auto;