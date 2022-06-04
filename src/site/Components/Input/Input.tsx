import React, {ChangeEvent, useState} from "react";
import '../../../App.css'

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <div className={'message'}>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    )
}
