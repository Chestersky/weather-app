import React from 'react';
import './Day.css';

const day = (props) => {
    let icon = <img src={"http://openweathermap.org/img/w/" + props.icon + ".png"} alt='cos' />
    
    return(
        <article className='Post'>
        <h3>{props.date}</h3>
        <h1>{Math.round(props.temp)} &#176;C</h1>
        <div className="Description">
            {props.description}
            {icon}
        </div>
    </article>
    )
}
export default day