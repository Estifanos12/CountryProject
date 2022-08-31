import React from 'react'
import './Card.css'

const CountriesCard = ({image,name,population,region,capital},{mode}) => {
  return (
    <div style={{backgroundColor: mode ? "black" : "white", color: mode ? "white" : "black"}} className='card h-[350px] xl:h-[400px] rounded-lg pb-[2%] '>
        <div className="image rounded-lg mb-3 xl:mb-7 h-[50%] overflow-hidden">
            <img src={image} alt="" width={"100%"}/>
        </div>
        <div className="text-description h-fit pl-7 pr-5 flex flex-col gap-1 ">
                <div className="country-name mb-5 font-bold">
                    <p>{name}</p>
                </div>
                <div className='population'>
                    <span className="font-bold">Population :  </span><span>{population}</span>
                </div>
                <div className="region">
                    <span className="font-bold">Region :  </span><span>{region}</span>                
                </div>
                <div className='capital'>
                    <span className="font-bold">Capital :  </span><span>{capital}</span>
                </div>
        </div>
    </div>
  )
}

export default CountriesCard