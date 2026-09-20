import SideBar from './SideBar'

function Dashboard({ users }){
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <SideBar users={users} />
        </div>
    );
}


export default Dashboard
