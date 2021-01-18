import React, { Component } from 'react';
import Personal from './Personal';
import './stylesheets/Main.scss';

class Main extends Component {  
    // public componentDidMount() {
    
    // }

    render() {
        return (
            <section>
                <div className="split pers" onClick={() => this.renderPersonal()}>
                    <div className="centered">
                        <h1>personal riva</h1>
                    </div>
                </div>
                <div className="split prof" onClick={() => this.renderProfessional()}>
                    <div className="centered">
                        <h1>Professional Riva.</h1>
                    </div>
                </div>
            </section>
        );
    }

    private renderPersonal() {
        console.log("personal")
        return(
            <Personal>hi</Personal>
        )
    }
    private renderProfessional() {
        console.log("professional")
    }
}

export default Main;
