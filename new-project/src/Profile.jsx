function Profile({user}) {
    return (
        <div className="profile">
            <h2>Profile</h2>

            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
        </div>
    )
}

export default Profile
