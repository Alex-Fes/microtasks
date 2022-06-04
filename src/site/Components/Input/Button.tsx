import React from 'react';
import '../../../App.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
}


const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack();

    }
    return (
        <div className={'message'}>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};

export default Button;