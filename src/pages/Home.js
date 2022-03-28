import axios from 'axios';
import React,{ useState, useEffect, Fragment } from 'react'
import PexelsPhotos from '../components/PexelsPhotos';
import { Link } from 'react-router-dom';
import SearchPhoto from './SearchPhoto';
import styled from 'styled-components'
const Home = () => {
    const [photo, setPhoto] = useState([]);
    const [page, setPage] = useState(25);

   useEffect(() => {
    fetchPhotos();
   },[]);

   const fetchPhotos = async () => {
    await axios.get(`https://api.pexels.com/v1/curated?page=1&per_page=${page}`, {
        headers: {
          Accept: 'application/json',
          Authorization: process.env.REACT_APP_ACCESS_KEY,
        }
      })
      .then((res) => {
        console.log(res.data.photos);
        setPhoto(res.data.photos)
      })
      .catch((err) => {
          console.log(err);
      })

}

  return (
    <div>
      <Photos>
        {photo.map((item) => {
            return (
                <Fragment key={item.id}>
                    <Link to={'/photos/'+item.id} >
                        <PexelsPhotos item={item} />
                    </Link> 
                </Fragment>
            )
        })}
      </Photos>
    </div>
  )
}

export default Home

const Photos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 390px);
    grid-template-rows: 550px;
    grid-row-gap: 5px;
    grid-column-gap: 40px;
    padding: 4rem 2rem;
`