import React, {Component} from 'react';
import axios from 'axios';
import Day from '../../components/Day/Day';
import './Days.css'

class Days extends Component {
    state={
        days:[]
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=3094802&lang=pl&units=metric&appid=c87d61644e288c13a5977020a0c39ad4')
            .then(response => {
                console.log(response)
                const days = response.data.list.slice();
                const updatedDays = days.map(day => {
                    return {
                        ...day
                    }
                })
                this.setState({ days: updatedDays });
                console.log(this.state)
            })
            .catch(error => {
                this.setState({error: true })
            });
    }

    onClickHandler = (id) => {
        this.props.history.push("/" + id)
    }

    render(){

        const dateTransformation = (unformattedDate) => {
            let date = new Date(unformattedDate);
            date = date.toLocaleString()
            return date
        }

        let days = <p>Something went wrong</p>

        if(!this.state.error){
            days = this.state.days.map( (day,id) => {
                return(
                    <Day 
                        key={day.dt}
                        date={dateTransformation(day.dt_txt)} 
                        temp={day.main.temp}
                        description={day.weather[0].description}
                        icon={day.weather[0].icon}
                        clicked={() => this.onClickHandler(day.dt)}
                    />
                )
            })
        }
        return(
            <selection className='Days'>
                {days}
            </selection>
        )
    }
}

export default Days