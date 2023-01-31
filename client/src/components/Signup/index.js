import React, { useState } from 'react';
import Auth from '../../utils/auth';

function Signup() {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' })

    function formUpdate(e) {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
        console.log(formState)
    };

    async function handleSignup(e) {
        e.preventDefault();


        let response = await fetch('/user/createuser', {
            method: 'POST',
            body: JSON.stringify({
                ...formState
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    alert(response.statusText)
                }
            })

        const newDate = new Date().toUTCString(response.session.cookie.expires)
        Auth.login(newDate)
    }

    return (
        <section>
            <form onSubmit={handleSignup}>
                <label htmlFor='username'>Enter a Username</label>
                <input
                    id='username'
                    name='username'
                    type='text'
                    onChange={formUpdate}
                >
                </input>
                <label htmlFor='email'>Enter your email:</label>
                <input
                    id='email'
                    name='email'
                    type='text'
                    onChange={formUpdate}
                >
                </input>
                <label htmlFor='password'>Enter a password. Password must be at least 8 characters long.</label>
                <input
                    id='password'
                    name='password'
                    type='text'
                    onChange={formUpdate}
                >
                </input>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Signup;