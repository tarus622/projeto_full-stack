import { useState, useEffect } from "react";

export default function Usuarios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }

                const usuarios = await response.json();
                console.log(usuarios);
                setUsers([...usuarios]);
            } catch (error) {
                console.error('Erro na requisição:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <ul>
            {users.map(el => (
                <li key={el.email}>
                    {el.nome} - {el.email}
                </li>
            ))}
        </ul>
    );
}
