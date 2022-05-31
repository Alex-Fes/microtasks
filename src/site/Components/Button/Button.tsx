import React, {MouseEvent} from 'react';
import '../../../App.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
}


const Button = (props: ButtonPropsType) => {

    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello, im Vasa')
    // }
    // const myFirstSubscriber1 = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello, im Ivan')
    // }
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    // const foo1 = (name: number) => {
    //     console.log(name)
    // }
    // const foo2 = () => {
    //     console.log(100200)
    // }
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <>
            <div className="App">
                <button onClick={onClickHandler}> {props.name}</button>


                {/*<button*/}
                {/*    onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyYouTubeChannel*/}
                {/*</button>*/}

                {/*<button*/}
                {/*    onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>MyYouTubeChannel-1*/}
                {/*</button>*/}
                {/*<button onClick={(event: React.MouseEvent<HTMLButtonElement>)=>foo1(100500)}> 1</button>*/}
                {/*<button onClick={foo2}> 2</button>*/}
            </div>
        </>

    );

}
export default Button;






