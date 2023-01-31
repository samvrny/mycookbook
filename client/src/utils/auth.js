class Auth {

    // check if user's logged in
    loggedIn() {
        // Checks if there is a saved session and it's still valid
        const session = this.getSession();
        return !!session && !this.isSessionExpired(session); // handwaiving here
    }

    getSession() {
        // Retrieves the user session from localStorage
        return localStorage.getItem('loggedIn');
    }

    //TODO: Redirect a user to the login screen if the session is expired or does not exist
    isSessionExpired(session) {
        try {
            if (session < Date.now() / 1000) {
                return true
            } else {
                return false
            }
        } catch (err) {
            return false;
        }
    }

    login(loggedIn) {
        // Saves user session to localStorage
        localStorage.setItem('loggedIn', loggedIn);
        window.location.assign('/dashboard');
    }

    logout() {
        // Clear user session and profile data from localStorage
        localStorage.removeItem('loggedIn');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
    }

}

export default new Auth();