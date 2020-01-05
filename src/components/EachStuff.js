import React, { Component } from 'react'
import ThingsToDo from './ThingsToDo';

export default class EachStuff extends Component {
    styleChanger = () => {
        return {
            'textDecoration': this.props.thing.completed ?
            'line-through' : 'none',
            'backgroundColor': this.props.thing.completed ? 'rgb(122, 253, 122)' : '',
        }
    }
    
    render() {
        const { id, title, completed } = this.props.thing;
        return (
            <tr className="thing" style={this.styleChanger()}> 
                <td> {title} </td>
                <td>
                <input type="checkbox"
                    checked={completed}
                    onChange={ this.props.checkChanger.bind(this, id) }
                />
                </td>
                <td> <button className="btn btn-danger"
                style={btnDelStyle}
                onClick={this.props.delThing.bind(ThingsToDo, id)}
                >x</button> </td>
            </tr>
        )
    }
}

const btnDelStyle = {
    borderRadius: '50%',    
}

//// className="thing" style={this.styleChanger()}>
/*
<div>                    
                    {title}
                    {'  '}
                    <input type="checkbox"
                    checked={check}
                    onChange={ this.props.checkChanger.bind(this, id) }
                    />
                </div>
*/