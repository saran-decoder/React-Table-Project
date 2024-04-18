import { useEffect, useState } from "react";

const EditForm = (props) => {

    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser);
    },[props])

    const handleUpdates = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleCancel = () => {
        props.setEdit(false); // This function call will be executed onClick
    };

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if (!user.name || !user.email) return;
                props.updateUser(user.id, user);
            }
        }>
            <div className="form-row">
                <h4>Update User Item</h4>
                <div className="col">
                    <input type="text" className="form-control mb-2" name="name" onChange={handleUpdates} placeholder="Name" value={user.name} />
                </div>
                <div className="col">
                    <input type="text" className="form-control mb-2" name="email" onChange={handleUpdates} placeholder="Email Address" value={user.email} />
                </div>
                <div className="col text-center">
                    <button type="submit" className="btn btn-success mb-4 me-2">Update Item</button>
                    <button type="button" className="btn btn-outline-secondary mb-4" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default EditForm;