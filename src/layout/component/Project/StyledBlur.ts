import styled from "styled-components";

export const Img = styled.img`
   -webkit-filter: blur(5px); 
    filter: blur(5px);
  &:hover {
     -webkit-filter: blur(0px); 
    filter: blur(0px);
  }
`;
