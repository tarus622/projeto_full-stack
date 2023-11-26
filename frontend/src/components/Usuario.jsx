import './usuarios.css';
// eslint-disable-next-line react/prop-types
const Usuario = ({ nome, email }) => {
    return (
        <div>
            <h2>Informações do Usuário</h2>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default Usuario;
