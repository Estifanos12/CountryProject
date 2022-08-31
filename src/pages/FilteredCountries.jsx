import {React,useState,useEffect} from 'react'
import CountriesCard from '../components/Countries/CountriesCard'
import {Link,useParams} from 'react-router-dom'

export const FilteredCountries = () => {
 
  const name = useParams()
  const [filteredCountries,setFilteredCountries] = useState([])

  const fetchFilteredCountries = async ()=>{    
      const data =  await fetch("https://restcountries.com/v3.1/region/" + name.region.toLowerCase())
      const response = await data.json()
      setFilteredCountries(response)
  }

  useEffect(()=>{
    fetchFilteredCountries()
  },[name.region])
  
  
  return (
    <div className='filter  p-[3%] mt-10'>
        <div className=' gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                {
                filteredCountries.map((country,key)=>{

                  const slug = country['name']['common']

                    return(
                        <Link to={"/country/" + slug }>
                         <CountriesCard image={country['flags']['png']} name={country['name']['official']} region={country['region']} capital={country['capital']} population={country['population']} />
                        </Link>
                    )
                })
                }
        </div>
    </div>
  )
}
