import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components'

const Details = () => {
  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
      getSearched(params.search);
  },[params.search])

  const getSearched = async (name) => {
    await axios.get(`https://api.pexels.com/v1/search?query=${name}&per_page=25`, {
      headers: {
        Accept: 'application/json',
        Authorization: process.env.REACT_APP_ACCESS_KEY,
      }
    })
    .then((res) => {
      console.log(res.data);
      setSearchRecipes(res.data.photos)
    })
    .catch((err) => {
        console.log(err);
    })
  }
  return (
    <PhotoInputSearch>
    {searchRecipes.map((item) => {
        return (
            <InputPhotos key={item.id}>
                <Link to={'/recipe/'+item.id}>
                <img src={item.src.large2x} alt={item.alt} />
                {/* <h4>{item.photographer}</h4> */}
                </Link>
            </InputPhotos>
        )
    })}
    </PhotoInputSearch>
  )
}

export default Details;

const PhotoInputSearch = styled.div`
display: grid;
grid-template-columns: repeat(3, 390px);
grid-template-rows: 550px;
grid-row-gap: 5px;
grid-column-gap: 40px;
padding: 3.5rem 1rem;
`;


const InputPhotos = styled.div`
display: grid;
grid-template-columns: repeat(3, 390px);
grid-template-rows: 550px;
grid-row-gap: 5px;
grid-column-gap: 40px;
padding: 1rem;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
  box-shadow: -2px 6px 13px 0px rgba(89, 89, 89, 0.53);
  transform: scale(0.9);
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in;
}

img:hover{
  transform: scale(1);
  box-shadow: -11px 18px 11px 11px rgba(56, 56, 56, 1);
}
`;
