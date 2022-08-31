import React from 'react'
import Countries from '../components/Countries/Countries'

const Home = ({mode}) => {
  return (
    <div className=''>
        <Countries mode={mode} />
    </div>
  )
}

export default Home