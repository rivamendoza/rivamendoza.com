import React, { Component } from 'react';
import Personal from './Personal';
import './stylesheets/Main.scss';
import $ from 'jquery';

class Main extends Component {  
    // public componentDidMount() {
    
    // }

    render() {
        return (
            <section>
                <div id="pers" className="split pers" onClick={() => this.expandPers()}>
                    <div className="centered">
                        <h1>personal riva</h1>
                    </div>
                </div>
                <div id="prof" className="split prof" onClick={() => this.expandProf()}>
                    <div className="centered">
                        <h1>Professional Riva.</h1>
                    </div>
                </div>
            </section>
        );
    }

    private expandPers() {
        $(`#pers`).on('click', function() {
            $(this).toggleClass('clicked');
        });
    }    
    private expandProf() {
        $(`#prof`).on('click', function() {
            $(this).toggleClass('clicked');
        });
    }
}

export default Main;
