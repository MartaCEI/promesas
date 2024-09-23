import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import '../css/RandomUser.css';

const RandomUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }
    , []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=20');
            const objeto = await response.json();
            setUsers(objeto.results);
            console.log(objeto.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <section>
            <h1 className='Section-h1'>Random User</h1>
            <ul className='Section-grid'>
                {
                users.map(user => (
                    <li key={user.id}>
                        <UserCard {...user} />
                    </li>
                ))
                }
            </ul>
        </section>
    );
}

export default RandomUser;