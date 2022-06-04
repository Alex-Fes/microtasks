import React, {useState} from "react";
import '../../../App.css'
import {Input} from "./Input";
import Button from "./Button";


export const FullInput = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler =()=> {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>

            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>


            {message.map((el, index) => {
                return (
                    <div className={'wrapper'} key={index}>
                        <div className={'message'} key={index}>{el.message}</div>
                    </div>
                )
            })}
        </div>
    )
};