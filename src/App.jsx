import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
// coponents
import Home from './components/Home'

function App() {
  const [covidData, setCovidData] = useState([])
  const [covidHis , setCovidHis] = useState([])
  const [error,setError] = useState("")

  useEffect(()=>{
    let abortController = new AbortController()

    const loadData = async ()=>{
      try {

        let response = await axios.get(`https://disease.sh/v3/covid-19/all`);
        let responseHis = await axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=30`);
        setCovidData(response.data)
        setCovidHis(responseHis.data)
        setError("")
        console.log(response)
        console.log(responseHis)

      } catch (error) {
        setError("Something went wrong",error)
      }
      
    }
    loadData();
    return abortController.abort()
  },[])
  console.log(covidData);


  return (
    <div className='w-[1360px] mx-auto bg-white'>
      <Home covidData = {covidData} />
    </div>
  )
}

export default App
