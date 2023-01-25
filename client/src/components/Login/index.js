import React, { useState } from "react";
import Auth from "../../utils/auth";

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

        const newDate = new Date().toUTCString(response.session.cookie.expires)
        console.log(newDate)
        Auth.login(newDate)

        console.log('SEE ME', response.session)

        //TEST FETCH RECIPES HOLY FUCKING FUCK IT FUCKING FUCKING WORKS OH MY ASS
        // let test = await fetch('/recipe')
        // .then(test => {
        //     if(test.ok) {
        //         return test.json()
        //     } else {
        //         console.log('Error')
        //     }
        // })

        // console.log(test)
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