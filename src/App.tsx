import React from 'react';
import './App.css';
import Header from "./site/Components/Header/Header";
import Footer from "./site/Components/Footer/Footer";
import Body from "./site/Components/Body/Body";

function App() {
    return (<>
            <Header titleForHeader = {'NEW HEADER'}/>
            <Body titleForBody = {'TEXT BODY'}/>
            <Footer titleForFooter = {'FOOTER'}/>
        </>
    );
}

export default App;
