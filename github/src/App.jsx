import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) =>{
    setUserName(e.target.value)
  }

  const onSubmitHandle = (e) =>{
    e.preventDefault();

    fetch(`https://api.github.com/users/${userName}`).then((result)=>{
      return result.json();
      // console.log("result : ", result)

    }).then((value) =>{
        // console.log("data : ", data)//{}
        setData(value); // changing the value of data
        console.log("value : ", value);
    })
  } 

  // console.log("data : ", data) //{value}


  return (
    <div className="App">
      <form action="" onSubmit={onSubmitHandle}>
        <input type="text" value={userName} onChange={onChangeHandler}/>
        <button >Search</button>
      </form>

      <div>{data.name}</div>
      <div>{data.bio}</div>
      <div>{data.public_repos}</div>
      <img src={data.avatar_url} alt="" />
      <div>{data.followers}</div>
      <div>{data.following}</div>
    </div>
  )
}

export default App