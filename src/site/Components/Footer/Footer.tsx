import React from 'react';
import '../../../App.css'

type FooterPropsType =  {
    titleForFooter: string
}



const Footer = (props: FooterPropsType) => {
    return (
        <div className='App'>{props.titleForFooter}</div>
    )
}

export default Footer;