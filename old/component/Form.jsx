import { Component } from "react";

class Form extends Component {

    initialState = {
        name: '',
        email: ''
    }

    state = this.initialState;

    handlChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: [value]
        });
    }

    addItem = () => {
        let dataItem = this.state
        this.props.handleaddItem(dataItem);
        this.setState(this.initialState);
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control mb-2" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handlChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control mb-2" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handlChange} />
                    </div>
                    <div className="col text-center">
                        <button type="button" className="btn btn-success  mb-4" onClick={this.addItem}>Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;