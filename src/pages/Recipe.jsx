import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


function Recipe() {

  let params = useParams();

  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const api_key = import.meta.env.VITE_API_KEY;
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${api_key}`);
    const detailData = await data.json();
    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
    console.log(params.name);
  }, [params.id])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Buttons className={activeTab === 'instructions' ? 'active' : ''} onClick={() => { setActiveTab('instructions') }}>Instructions</Buttons>
        <Buttons className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => { setActiveTab('ingredients') }}>Ingredients</Buttons>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}

      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
  background: linear-gradient(35deg, #d3d3d3, #a9a9a9);
  color: white;
  }
  h2{
  margin-bottom: 2rem;
  }
  li{
  font-size: 1.2rem;
  line-height: 2.5rem;
  }
  ul{
  margin-top: 2rem;
  }
`
const Buttons = styled.button`
padding: 1rem 2rem;
color: #d3d3d3;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;

const Info = styled.div`
margin-left: 10rem;
`;

export default Recipe