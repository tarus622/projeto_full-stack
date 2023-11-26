import { useState } from 'react';
import './formulario.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log(response)

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            const responseData = response;
            setFormData({
                nome: '',
                email: '',
                senha: ''
            })
            console.log(responseData);
        } catch (error) {
            console.error('Erro na requisição:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Senha:
                <input
                    type="password"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
