import React, { Component } from 'react'

export class AddThings extends Component {

    state = {
        'title': '',

    }

    inputChange = (e) => this.setState(
        { [e.target.name]: e.target.value }
    );

    formSubmit = (e) => {
        e.preventDefault();
        this.props.addThing(this.state.title);
        this.setState({'title': ''});
    }


    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className="row form-group"
                style={{textAlign:'center', padding:'0px 0px 0px 20px'}}>
                    {/* <div className="col-1">{' '}</div> */}
                    <input type="text"
                    className="form-control col-9"
                    name="title"
                    placeholder="Add Something I like ..."
                    value={this.state.title}
                    onChange={this.inputChange}
                    />
                    <button className=" btn btn-success"
                    type="submit"
                    value="Submit"
                    >
                        Add New Thing
                    </button>
                </div>
            </form>
        )
    }
}

export default AddThings
