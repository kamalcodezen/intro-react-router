import { useLoaderData } from "react-router";

const User = () => {

const user = useLoaderData()
console.log(user)
    return (
        <div>
            <h2>This is User</h2>
        </div>
    );
};

export default User;