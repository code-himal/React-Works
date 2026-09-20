import Profile from './Profile'

function SideBar ({ users }) {
    return (
        <div className="sidebar">
            SideBar

            {users.map((user) => (
                <Profile key={user.name} user={user} />
            ))}
        </div>
    );
}

export default SideBar;