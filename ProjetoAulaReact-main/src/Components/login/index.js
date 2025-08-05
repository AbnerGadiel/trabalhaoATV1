// src/Login.js
import React, { useState } from 'react';

function Login() {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

/*function handleLogin(e) {
e.preventDefault();
if (email === 'admin@email.com' && senha === '123456') {
alert('Login realizado com sucesso!');
} else {
alert('Credenciais inválidas');
}
}*/

return (
<div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
<h2>Login</h2>
<form /*onSubmit={handleLogin}*/>
<input
type="email"
placeholder="Email"
value={email}
onChange={e => setEmail(e.target.value)}
required
style={{ display: 'block', marginBottom: '10px', width: '100%' }}
/>
<input
type="password"
placeholder="Senha"
value={senha}
onChange={e => setSenha(e.target.value)}
required
style={{ display: 'block', marginBottom: '10px', width: '100%' }}
/>
<button type="submit">Entrar</button>
</form>
<p>
Olá <strong>{email}</strong>, em breve você receberá
um e-mail no endereço <strong>{senha}</strong> s
</p>
</div>
);
}

export default Login;