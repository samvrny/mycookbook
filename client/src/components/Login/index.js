import React, { useState } from "react";

function Login() {

    const [formState, setFormState] = useState({ email: '', password: '' });

    function formUpdate(e) {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    async function handleLogin(e) {
        e.preventDefault()
        console.log(formState)

        let response = await fetch('/user/login', {
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
        console.log('SEE ME', response.message)
    }

    return (
        <section>
            <form onSubmit={handleLogin}>
                <label htmlFor='username'>Email:</label>
                <input
                    id='email'
                    name='email'
                    type='text'
                    onChange={formUpdate}
                >
                </input>
                <label htmlFor='password'>Password:</label>
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

export default Login;