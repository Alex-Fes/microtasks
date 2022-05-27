import React from 'react';
import './App.css';
import Header from "./site/Components/Header/Header";
import Footer from "./site/Components/Footer/Footer";
import Body from "./site/Components/Body/Body";
import Auto from "./site/Components/Map";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (<>
            <Header titleForHeader={'NEW HEADER'} />
            <Body titleForBody={'TEXT BODY'} />
            <Footer titleForFooter={'FOOTER'} />
            <Auto autoCheck = {topCars} />
        </>
    );
}

export default App;
