import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }
    , [id]);

    const fetchUser = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${id}`);
            const data = await response.json();
            setUser(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    const { name, email, phone, website } = user;

    return (
        <div>
            <h1>User</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
}

export default User;