import React, {useState} from 'react';
import './App.css';
import Header from "./site/Components/Header/Header";
import Footer from "./site/Components/Footer/Footer";
import Body from "./site/Components/Body/Body";
import Auto from "./site/Components/Map/Map";
import Button from "./site/Components/Button/Button";
import Filter from "./site/Components/Filter/Filter";
import {FullInput} from "./site/Components/Input/FullInput";




function App() {
    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]
    // const ButtonFoo1 = (subscriber:string, age:number, city: string) => {
    //     console.log(subscriber,age,city)
    // }
    // const ButtonFoo2 = (subscriber:string) => {
    //     console.log(subscriber)
    // }
    // const ButtonFoo3 = (subscriber:string) => {
    //     console.log(subscriber)
    // }
    // let [a, setA] = useState(1)
    //
    // const onClickHandler = () => {
    //     setA(++a)
    //     console.log(a)
    // }
    // const onClickZero = () => {
    //     setA(0)
    //     console.log(a)
    // }


    return (
        <div className='App'>
            {/*<div><Header titleForHeader={'NEW HEADER'}/></div>*/}
            {/*<div><Body titleForBody={'TEXT BODY'}/></div>*/}
            {/*<div><Auto autoCheck={topCars}/></div>*/}
            {/*<div><Button name={'MyYouTubeChannel'} callBack={()=>ButtonFoo1('Im Vasya', 22, 'Live in SPb')} /></div>*/}
            {/*<div><Button name={'MyYouTubeChannel-1'} callBack={()=>ButtonFoo2('Im Ivan')} /></div>*/}
            {/*<div><Button name={'Stupid BUTTON'} callBack={()=>ButtonFoo3('Im stupid button')} /></div>*/}
            {/*<div><Footer titleForFooter={'FOOTER'}/></div>*/}
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandler}>number</button>*/}
            {/*<button onClick={onClickZero}>0</button>*/}
            {/*<div><Filter /></div>*/}
            <div><FullInput /></div>
        </div>
);
}

export default App;
