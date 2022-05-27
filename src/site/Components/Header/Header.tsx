import React from 'react';


type HeaderPropsType = {
    titleForHeader: string
}


const Header = (props: HeaderPropsType) => {
    return (
        <div>{props.titleForHeader}</div>
    )
}

export default Header;