import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../../pages/Home'
import { SearchedCountries } from '../../pages/SearchedCountries'
import { FilteredCountries } from '../../pages/FilteredCountries'
import Country from '../../pages/Country'

const PageRoute = ({mode}) => {
  return (
    <Routes>
        <Route path='/CountryProject' element={<Home mode={mode} />} />
        <Route path='/search/:name' element={<SearchedCountries />} />
        <Route path='/category/:region' element={<FilteredCountries />} />
        <Route path='/country/:cname' element={<Country mode={mode} />} />
    </Routes>
  )
}

export default PageRoute