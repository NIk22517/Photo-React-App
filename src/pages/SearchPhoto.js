import React,{useState} from 'react';
import {useNavigate ,Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'

const SearchPhoto = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    navigate('/serach/' + input);
}
  return (
    <>
    <Logo to={'/'} >
        <h1>Photos</h1>
      </Logo>
       <FormStyle onSubmit={submitHandler}>
        <div>
        <input 
       onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
         />
        </div>
    </FormStyle>
    </>
  )
}

export default SearchPhoto;

const Logo = styled(Link)`
 text-decoration: none;
 margin: 0 0 0 0;
 h1{
   padding: 1rem 5rem;
 }
`

const FormStyle = styled.form`
   margin: -4rem 25rem;
   div{
    position: relative;
    width: 100%;
   }
   input{
       border: none;
       background: linear-gradient(35deg, #494949, #313131);
       font-size: 1.5rem;
       color: white;
       padding: 1rem 1rem;
       border-radius: 1rem;
       outline: none;
       width: 100%;
   }
`;