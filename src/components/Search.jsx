import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/`+input);
    }


    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input onChange={(e) => { setInput(e.target.value) }} type="text" value={input} placeholder="Search for recipe..."/>
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    width: 100%;
    background: linear-gradient(35deg, #d3d3d3, #a9a9a9);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: white;
  }
`;

export default Search;