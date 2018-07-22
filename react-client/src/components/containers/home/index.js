import React, { Component } from 'react';
import Wizard from '../wizard';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <div >
                        <Wizard className="wizard-container"/>
                </div>
            </div>
        )
    }
}

export default Home;