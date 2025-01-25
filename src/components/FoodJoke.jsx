import { useEffect, useState } from "react";
import styled from "styled-components";

function FoodJoke() {
  const [joke, setJoke] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    const api_key = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${api_key}`);
    const data = await response.json();
    setJoke(data.text);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <JokeCard>
      <p>{joke}</p>
      <CloseButton onClick={handleClose}>X</CloseButton>
    </JokeCard>
  );
}

const JokeCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default FoodJoke;