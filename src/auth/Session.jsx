function create_session(user, access_token) {
    const session_obj = {
        user: user,
        access_token: access_token,
        is_authenticated: true
    }
    localStorage.setItem("session", JSON.stringify(session_obj))
}

function get_session() {
    const session = localStorage.getItem("session");
    return JSON.parse(session)
}

export { get_session, create_session } 