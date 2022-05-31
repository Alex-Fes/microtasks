import React from 'react';
import '../../../App.css'



type BodyPropsType = {
    titleForBody: string
}



const Body = (props: BodyPropsType) => {
    return (
        <div className='App'>{props.titleForBody}</div>
    )
}

export default Body;