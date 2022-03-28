import React from 'react';
import styled from 'styled-components'

const PexelsPhotos = ({item}) => {
  return (
    <Photos>
        <img src={ item.src.large2x } alt="" />
    </Photos>
  )
}

export default PexelsPhotos;

const Photos = styled.div`
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