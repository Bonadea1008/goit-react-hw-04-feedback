import styled from 'styled-components';

export const Buttons = styled.button`
  cursor: pointer;
   text-transform: uppercase;
 font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  width: 100px;
  height: 45px;
  border: solid #bbb 1px;
  color: #000000;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  margin: 5px;
  background: #98FB98;
  padding: 0;
  }
  &:hover {
    background: transparent;
    border-color: #98FB98;
  }
`;
