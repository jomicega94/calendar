import React, { Component } from 'react';
import './styles.css';



class Day extends Component {

    evento(){
        var event = prompt("Por favor ingrese descripcion de evento")
        var hour = prompt("Ingrese hora de evento")
        this.props.upDate(event);
    }

    render(){
        const {id} = this.props
        return(
            <button className="day" onClick={this.evento}>
                {id}
            </button>
        )
    }
}

export default Day;