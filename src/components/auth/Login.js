import React, {useState} from 'react'
import axios from 'axios'

function Login(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    async function loginUser() {
        if(login && password) {
            //password validation
            try {
                const userResult = await axios.post('/api/login', {login, password});
                // props.handleLogin(userResult.data)
                console.log(userResult.data);
                setLogin('');
                setPassword('');
                setError('Success');
            } catch(error) {
                if(error.response.data.error)
                    setError(error.response.data.error);
            }
        }
    }

    return (
        <div>
            <form>
                <h3>Login</h3>
                {error && <h4>{error}</h4>}
                <input value={login} onChange={e => setLogin(e.target.value)} placeholder='Username/Email'/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
                <button onClick={(e) => {e.preventDefault(); loginUser()}}>Login</button>
            </form>
        </div>
    )
}

export default Login;