import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import '../css/RandomUser.css';

const RandomUser = () => {
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState(null);
    const {VITE_RANDOM_USER} = import.meta.env;

    useEffect(() => {
        fetchUsers();
    }
    , []);

    const fetchUsers = async () => {
        const controller = new AbortController();
        try {
            
            const response = await fetch(`${VITE_RANDOM_USER}/?results=20`);
            const objeto = await response.json();

            if (objeto.status == "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`)
                return;
            } 
            setUsers(objeto.results);
        }
        catch (error) {
            console.error('Hubo un problema con la solicitud:', error.message);
        } finally {
            controller.abort();
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