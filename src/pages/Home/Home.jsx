import React from 'react'
import './styles.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './Trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
const Home = () => {
  return (
    <div>
<HeroBanner/>
<Trending/>
<Popular/>
<TopRated/>
    </div>
  )
}

export default Home