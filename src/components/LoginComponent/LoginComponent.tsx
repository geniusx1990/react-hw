import './style.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginComponentn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <>
            <h1 className='login-title'>Log In</h1>
            <form className="form" onSubmit={handleLogin}>
                <label className='label'>
                    Email
                    <input
                        className='input'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className='label'>
                    Password
                    <input
                        className='input'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div className='button_container'>
                    <button type="submit" className='submit'>Submit</button>
                    <button className='cancel' onClick={(e) => e.preventDefault()}>Cancel</button>
                </div>
            </form>
        </>
    );
}
