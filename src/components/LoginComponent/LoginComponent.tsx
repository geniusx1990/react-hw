import './style.css';
export default function LoginComponentn() {
    return (
        <>
            <h1 className='login-title'>Log In</h1>
            <form className="form">
                <label className='label'>
                    User name
                    <input className='input' type="text" />
                </label>
                <label className='label'>
                    Password
                    <input className='input' type="password" />
                </label>
            </form>
        </>
    )
}