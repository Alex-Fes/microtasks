import React from 'react';

type NewComponentPropsType = {
    // topCars: Array<topCarsPropsType>;
    autoCheck: Array<topCarsPropsType>
}

type topCarsPropsType = {
    manufacturer: string,
    model: string
}

const Auto = (props: NewComponentPropsType) => {
    return (
        <div>
            {props.autoCheck.map((objectFromTopCars, index) => {
                return (
                    <div>
                        <table>
                            <tr>
                                <th>№</th>
                                <th>Auto</th>
                                <th>Model</th>
                            </tr>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{objectFromTopCars.manufacturer}</td>
                                <td>{objectFromTopCars.model}</td>
                            </tr>

                        </table>

                    </div>
                )
            })}


        </div>
    )
}

export default Auto;