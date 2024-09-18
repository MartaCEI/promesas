import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

const RandomUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }
    , []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const objeto = await response.json();
            setUsers(objeto.results);
            console.log(objeto.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Random User</h1>
            <ul>
                {
                users.map(user => (
                    <li key={user.id}>
                        <UserCard {...user} />
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default RandomUser;