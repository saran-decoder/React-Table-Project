import { Component } from "react";

const TableHead = () => {
    return (
        <thead className="table-dark">
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Setting</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const { userData, removeData } = props

    const rows = userData.map((row, index) => {
        const id = index + 1; // Generating the ID using the index
        return (
            <tr key={index}>
                <th scope="row">{id}</th>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td><button type="button" className="btn btn-outline-danger" onClick={()=>removeData(index)}>Delete</button></td>
            </tr>
        )
    });

    return (
        <tbody className="table-light">
            {rows}
        </tbody>
    )
}

class Table extends Component {
    render() {
        const { userDatas, removeDatas } = this.props
        return (
            <table className="table">
                
                <TableHead />
                <TableBody removeData={removeDatas} userData={userDatas} />

            </table>
        );
    }
};

export default Table;