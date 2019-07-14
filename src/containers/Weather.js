import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Days from './Days/Days';
import FullDay from './FullDay/FullDay';
import './Weather.css'

class Weather extends Component {
    render(){
        return (
            <div>
                <h1>Prognoza pogody dla Krakowa</h1>
                <Switch>
                    <Route path="/" exact component={Days} />
                    <Route path="/:id" exact component={FullDay}/>
                </Switch>
            </div>
        )
    }
}

export default Weather