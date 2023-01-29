
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">

      <h1>Hello world</h1>
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
   
    </div>
  );
}

function ExternalUsers(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])
  
  const loadUsers = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    setUsers(data);
  }
 

  return (
    <div>
      <h1>Users Information :{users.length}</h1>
      {
        users.map(user => <User user={user}></User>)
      }
      
    </div>
  )
}

function User({ user }) {
  return (
    <div className="person">
      <h1>Name:{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>UserName : {user.username }</p>
    </div>
  )
  
}


// function Counter(props) {
//   const [count, setCount] = useState(5);
//   console.log(count,setCount)
//   const increaseCount = () => {
//     setCount(count + 1);
//   }

//   const decreaseCount = () => {
//     setCount(count - 1);
//   }
  
//   return (
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={increaseCount} className="btn btn-primary">Increase</button>
//       <button onClick={decreaseCount} className="btn btn-danger">Decrease</button>

//     </div>
//   )
 
 
  
// }




export default App;
