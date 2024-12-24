import styled from "styled-components";

//tagged template literals
const DefaultButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 0.25rem;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  width: 250px;
  margin: 1rem auto;
  display: block;
`;

const HipsterButton = styled(DefaultButton)`
  background-color: transparent;
  color: #4caf50;
  border: 2px solid #4caf50;
`;

export { DefaultButton , HipsterButton };
