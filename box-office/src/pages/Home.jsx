import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input,setInput]= useState('')
  const[results, setResults]= useState(null)

  const onSearch= ()=>{
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(response => response.json())
    .then(result =>{
      setResults(result)
      console.log(result)
    })
  }

  const onInputChange=ev =>{
    setInput(ev.target.value)
  }

  const onKeyDown =ev =>{
    if (ev.keyCode === 13){
      onSearch()
    }
  }

  



  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}></input>
      <button type='button' onClick={onSearch}>Search</button>
      {renderresults()}
    </MainPageLayout>
  )
}

export default Home