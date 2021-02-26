import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const dataLists = [
    {name:'Shakil', job:'Teacher'},
    {name:'Arif', job:'Banker'},
    {name:'Amin', job:'Farmer'}
  ]
  const nameLists = ['adil', 'kabir', 'samad','naem','saker']

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      <ul>
        {
          nameLists.map(names => <li>{names}</li>)
        }
      </ul>
      <Users></Users>
       <Person info={dataLists[0]}></Person>
       <Person info={dataLists[1]}></Person>
       <Person info={dataLists[2]}></Person>
      </header>
    </div>
  );
}
us
function Counter() {
  const [count, setCount] = useState(0);
  const handler = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
 return (
   <div>
     <h2>Count:{count}</h2>
     <button onClick={handler}>increase</button>
     <button onClick= {() => setCount(count-1)}>Decrease</button>
   </div>
 )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
 
  return(
    <div>
      <h2>dynamic user {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    backgroundColor:"gray",
    border:"4px solid green",
    margin:'10px',
    padding:'5px',
    width:'350px'
  }
  return (
    <div style={personStyle}>
      <h2>Name :{props.info.name}</h2>
      <p>He is a {props.info.job}</p>
    </div>
  )
}
export default App;
