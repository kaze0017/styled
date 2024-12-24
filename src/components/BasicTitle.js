import styled from "styled-components";

//tagged template literals
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  /* color: ${(props) => props.special && "red"}; */
  /* color: ${({ special }) => special && "red"}; */
  color: ${({ special }) => (special ? "red" : "blue")};
`;

export default BasicTitle;
