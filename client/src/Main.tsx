import React, { Component } from 'react';
import Personal from './pages/PersonalPage';
import './stylesheets/Main.scss';
import $ from 'jquery';
import { observable, action, observe } from "mobx";
import { observer } from "mobx-react";
import ConstructionPage from './pages/ConstructionPage';

@observer
class Main extends Component {  
    private underConstruction:boolean = true;

    @observable
    private expandedSection = <></>;

    render() {
        if(this.underConstruction) {
            return (
                <ConstructionPage></ConstructionPage>
            )
        } else {
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
