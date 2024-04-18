const Table = (props) => {
    return (
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {props.addData.length > 0 ? (
                    props.addData.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button type="button" className="btn btn-outline-secondary me-2" onClick={() => props.editUser(item)}>Edit</button>
                                <button type="button" className="btn btn-outline-danger" onClick={() => props.removeData(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <th colSpan={4} className="text-center">User Data Not Found</th>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;