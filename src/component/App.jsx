import { Component } from 'react';
import Table from "./Table";
import Form from './Form';

class App extends Component {

    state = {
        userData: []
    }

    removeData = (index) => {
        const { userData } = this.state

        let filtered = userData.filter((userDatas, i) => {
            return i!==index
        });

        this.setState({userData:filtered})
    }

    handleaddItem = (dataItem) => {
        this.setState({userData:[...this.state.userData,dataItem]})
    }

    render() {

        const { userData } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <h3 className="text-center my-5">Responsive ReactJS Table Project</h3>
                    <Form handleaddItem={this.handleaddItem} />
                </div>
                <Table removeDatas={this.removeData} userDatas={userData} />
            </div>
        )
    }
};

export default App;