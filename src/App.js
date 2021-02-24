import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var name='Utsha Bosu'
  var style={
    color:'red',
    backgroundColor:'yellow'
}
var nayoks=['anwar','ekbal']
const products=[
  {name:'photoshop',price:'$99.98'},
  {name:'photoshop',price:'$99.98'},
  {name:'photoshop',price:'$99.98'}
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>my heading:{name}</h1>
        <p>paragraph</p>
        <ul>
          {nayoks.map(nayok=><li>{nayok}</li>)}
        </ul>
        <Counter></Counter>
       <Users></Users>
       <Product product={products[0]}></Product>
        <Person name='utsha bosu'> </Person>
        <Person name={nayoks[0]}> </Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
    
  }
  function Counter(){
    const [count, setCount] = useState(0);
    const handleIncrease=()=>{
      const newCount=count+1;
      setCount(newCount);
    };
    return(
      <div>
        <h1>count: {count}</h1>
        <button onClick={handleIncrease}>increase</button>
        <button onMouseMove={handleIncrease}>increase</button>
      </div>
    )
  }
  
  function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      
    },[])
    
  
  
    return(
      <div>
        <h3>dynamic user:{users.length}</h3>
        <ul>
          {
            users.map(user=><li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }
  function Product(props) {
    const productStyle={
      color:'red',
      border:'1px solid gray',
      borderRadius:'5px',
      backgroundColor:'lightgray',
      height:'200px',
      weight:'200px',
      float:'left'
    }
    return(
      <div style={productStyle}>
        <h3>{props.product.name}</h3>
        <h2>{props.product.price}</h2>
        
        <button>Buy Now</button>
      </div>
    )
  }
  function Person(Props){
    return (
    <div style={{border:'2px solid red',margin:'10px'}}>
    <h1>Name:{Props.name}</h1>
    <h3>hero</h3>
    </div>
    )
  }


export default App;
