import axios from 'axios';
import {useEffect, useState} from 'react';

const Axios = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then (response => {
            setUsers(response.data);
             })
            .catch(error => {

            console.log(error);
        })

        },[]);

    console.log(users)

    return () => {
        <>
        <div>
            {users.map((user) => (  
                <>
                <p>{user.id}</p>
                <h1>{user.name} </h1>
                </>
            ))}
        </div>
        </>
    }
}
export default Axios;