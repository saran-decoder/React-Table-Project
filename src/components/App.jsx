import { useState } from "react";
import Table from "./tables/Table";
import Form from './forms/AddForm';
import EditForm from "./forms/EditForm";

function App() {

    const initalFormData = [
        {
            id: 1,
            name: "John",
            email: "john@examplepetstore.com"
        },
    ];

    const addUser = (user) => {
        user.id = formData.length + 1;
        setFormData([...formData, user])
    }

    const removeData = (id) => {
        setFormData(formData.filter((user) => user.id !== id))
        setEdit(false);
    }

    const [formData, setFormData] = useState(initalFormData);
    const [edit, setEdit] = useState(false);

    const initformState = {
        id: null,
        name: '',
        email: ''
    }

    const [currentUser, setCurrentUser] = useState(initformState);

    const editUser = (user) => {
        setEdit(true);
        setCurrentUser({
            id: user.id,
            name: user.name,
            email: user.email
        })
    }

    const updateUser = (id, updateUser) => {
        setEdit(false);
        setFormData(formData.map((user) => (user.id === id ? updateUser : user)))
    }

    return (
        <div className="container">
            <div className="row">
                <h3 className="text-center my-5">Responsive ReactJS Table Project</h3>
                {edit?(
                    <EditForm updateUser={updateUser} setEdit={setEdit} currentUser={currentUser} />
                ) : (
                    <Form addUser={addUser} />
                )}
            </div>
            <Table editUser={editUser} addData={formData} removeData={removeData} />
        </div>
    )

}

export default App;