import { useEffect } from 'react'
import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CountriesCard from './CountriesCard'

const Countries = ({mode}) => {

    const [countries,setCountries] = useState([])
    
    const fetchData = async ()=>{
            const checkLocalStorage = localStorage.getItem('countries')

            if(checkLocalStorage){
                console.log(checkLocalStorage)
                setCountries(JSON.parse(checkLocalStorage))
            }
            else{
                const data =  await fetch("https://restcountries.com/v3.1/all")
                const response = await data.json()
                localStorage.setItem('countries', JSON.stringify(response))
                setCountries(response)
            }
        
            }

     useEffect(()=>{
        fetchData()
        console.log(countries)
     },[])

    return (
        <div className='countries p-[3%] mt-10'>
            <div className="title mb-10">
                <h1 className='text-center text-2xl'>Countries</h1>
            </div>
            <div className=' gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                {
                countries.map((country,key)=>{

                    const slug = country['name']['common']

                    return(
                        <Link to={"/country/" + slug}>
                            <CountriesCard mode={mode} image={country['flags']['png']} name={country['name']['official']} region={country['region']} capital={country['capital']} population={country['population']} />
                        </Link>
                    )
                })
                }
            </div>
        </div>
  )
}

export default Countries