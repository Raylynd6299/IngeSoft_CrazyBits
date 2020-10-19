import React from 'react';
import bg from '../../img/bg.jpg';
import './bg.css';

class Home extends React.Component{
    render() {
        return(
            <div className="mt-5 pt-5 bg">
            <div className="container" >
                <h1>Bootstrap starter template</h1>
                <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
            </div>
            </div>
        );
    }
}

export default Home;