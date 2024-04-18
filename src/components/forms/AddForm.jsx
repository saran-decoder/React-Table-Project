import { useState } from "react";

const Form = (props) => {

    const initformState = {
        id: null,
        name: '',
        email: ''
    }

    const [user, setUser] = useState(initformState);

    const handleChange = (event) => {
        const {name, value} = event.target

        setUser({...user, [name]: value})

    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if (!user.name || !user.email) return;
                props.addUser(user);
                setUser(initformState);
            }
        }>
            <div className="form-row">
                <h4>Add User Item</h4>
                <div className="col">
                    <input type="text" className="form-control mb-2" onChange={handleChange} name="name" placeholder="Name" value={user.name} />
                </div>
                <div className="col">
                    <input type="text" className="form-control mb-2" onChange={handleChange} name="email" placeholder="Email Address" value={user.email} />
                </div>
                <div className="col text-center">
                    <button type="submit" className="btn btn-success mb-4">Add Item</button>
                </div>
            </div>
        </form>
    )
}

export default Form;