import './App.css';
import Dashboard from './Dashboard';
//classwork
function App() {
  const users = [
    { name: 'Himal', role: 'Student' },
    { name: 'Ishan', role: 'Teacher' },
    
  ];

  return (
    <Dashboard users={users} />
  );
}

export default App;

