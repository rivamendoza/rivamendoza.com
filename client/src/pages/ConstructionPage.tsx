import React, { Component } from "react";
import './../stylesheets/Construction.scss';
// import anime from './../../node_modules/animejs/lib/anime';

class ConstructionPage extends Component {

    private animate() {
        // const anime = require('animejs');
        // anime({
        //     targets: 'div',
        //     translateX: 250,
        //     rotate: '1turn',
        //     backgroundColor: '#FFF',
        //     duration: 800
        //   });
        // return(<></>)
    }
    render() {
        return (
            <div>
                <div className="text">
                    oh hi there! riva is currently building this space, feel free to <a href="https://www.linkedin.com/in/rivamendoza/">nudge her</a> to get it done!
                </div>
                {this.animate()}
            </div>

        );
    }
}

export default ConstructionPage;