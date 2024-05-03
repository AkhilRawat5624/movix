import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../CustomHooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setbackground] = useState('');
  const [query, setquery] = useState('');
  const navigate = useNavigate();
  const {data,loading} = useFetch('/movie/upcoming')
const {url} = useSelector((state)=>state.home)

  useEffect(()=>{
      const bg =url.backdrop+ data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
      setbackground(bg);
  },[data])
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
    <Img src={background}/>
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
      
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
          Unlimited Choices Await: Dive Into Our Vast Movie Collection
          </span>
          <div className="searchInput">
            <input type="text" placeholder='Search for movies/tv shows or artists '
              onKeyUp={searchQueryHandler}
              onChange={(e) => setquery(e.target.value)} />
            <button >Search</button>
          </div>

        </div>
      
      </ContentWrapper>
     
    </div>
  )
}

export default HeroBanner