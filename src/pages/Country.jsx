import { React, useState, useEffect } from 'react';
import CountriesCard from '../components/Countries/CountriesCard';
import { useParams } from 'react-router-dom';

const Country = ({mode}) => {
  const [countries, setCountries] = useState([]);
  const [border, setBorder] = useState([]);
  const [native, setNative] = useState([]);
  const name = useParams();

  const fetchCountries = async () => {
    const data = await fetch(
      'https://restcountries.com/v3.1/name/' + name.cname.toLowerCase().replace(" ","%20")
    );
    const response = await data.json();
    setCountries(response);
  };

  const renderBorder = (e)=>{
    
    if(e){
    e.map(b=>{
      return(
          <button className='border-2 rounded-lg ml-2 mr-2 p-2'>{b}</button> 
      )
    })}
    else{
      return(  
      <>
      </>  
      )
    }
  }

  useEffect(() => {
    fetchCountries();
    console.log(name.cname.toLowerCase().replace(" ","%20"))
  }, [name.cname]);

  return (
    <div style={{backgroundColor: mode ? "black" : "white", color: mode ? "white" : "black"}} className="h-[100vh]">
      {countries.map((country, key) => {

        const {name,flags,nativeName,population,region,subregion,capital,tld,currencies,languages,borders} = country
        return (
          <div className="grid p-5 gap-10 grid-cols-1 xl:grid-cols-2 xl:p-20">
            {/* <CountriesCard image={country['flags']['png']} name={country['name']['official']} region={country['region']} capital={country['capital']} population={country['population']} /> */}
            <div className="image flex items-center justify-center">
              <img src={flags.png} alt="" className='w-[100%] xl:w-[80%]' />
            </div>
            <div className='flex flex-col justify-between'>
              <h1 className="title font-bold mb-10 xl:mb-0 text-2xl">{name.official}</h1>
              <div className="description mb-10 xl:mb-0 grid grid-cols-1 xl:grid-cols-2">
                <div className="left flex flex-col">
                  <div className="native-name">
                    <span className='font-bold'>Native Name: </span>
                    <span>{name.official}</span>
                  </div>
                  <div className="population">
                    <span className='font-bold'>Population: </span>
                    <span>{population}</span>
                  </div>
                  <div className="region">
                    <span className='font-bold'>Region: </span>
                    <span>{region}</span>
                  </div>
                  <div className="sub-region">
                    <span className='font-bold'>Sub Region: </span>
                    <span>{subregion}</span>
                  </div>
                  <div className="capital">
                    <span className='font-bold'>Capital: </span>
                    <span>{capital}</span>
                  </div>
                </div>
                <div className="right flex flex-col">
                  <div className="top-level-domain">
                    <span className='font-bold'>Top Level Domain: </span>
                    <span>{tld}</span>
                  </div>
                  <div className="currencies">
                    <span className='font-bold'>Currencies: </span>
                    <span>{Object.values(currencies)[0].name}</span>
                  </div>
                  <div className="languages">
                    <span className='font-bold'>Languages: </span>
                    <span>{Object.values(languages)[0]}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-around items-center">
                    <span className='font-bold'>Border Countries</span>
                    <div>
                    {
                      renderBorder(borders)
                    }    
                    </div>        
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
