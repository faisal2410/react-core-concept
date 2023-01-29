import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">

      <h1>Hello world</h1>
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter(props) {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )

}

function ExternalUsers(props) {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers()

  }, [])

  const loadUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data)
    setUsers(data)

  }
  return (
    <div>
      <h2>External Users {users.length} </h2>
      {
        users.map(user => <User user={user}></User>)
      }
    </div>
  )
}

const User = ({ user }) => {
  return (
    <div className='person'>
      <h3>Name:{user.name}</h3>
      <h4>UserName :{user.username}</h4>
      <h5>Email:{user.email}</h5>
    </div>
  )
}


export default App;
