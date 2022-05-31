import React from 'react';
import '../../../App.css'

type HeaderPropsType = {
    titleForHeader: string
}


const Header = (props: HeaderPropsType) => {
    return (
        <div className='App'>{props.titleForHeader}</div>
    )
}

export default Header;