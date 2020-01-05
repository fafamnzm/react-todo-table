import React, { Component } from 'react'
import EachStuff from './EachStuff'

export default class ThingsToDo extends Component {

    render() {
        return (
                <table className="table table-bordered">
                    <thead className="tableHead">
                        <tr>
                        <th>Thing</th>
                        <th>status</th>
                        <th>Delete</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.props.things.map((thing) => (
                            <EachStuff key={thing.id} thing={thing}
                            checkChanger={this.props.checkChanger}
                            delThing={this.props.delThing}/>
                        ))}
                    </tbody>
                </table>

            /*<div>
                {this.props.things.map((thing) => (
                    <EachStuff key={thing.id} thing={thing}
                    checkChanger={this.props.checkChanger}/>
                ))}
            </div>*/
        )
    }
}
