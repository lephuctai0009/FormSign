import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
display: flex;
justify-content: flex-end;
padding-left:20px;
  input{
    
    padding: 5px;
  }
   button{
    background-color: #18b6ff;
    padding:5px;
    margin-left:5px;
   }
`;
const TodoInput = ({ inputName, setInputName, level, setLevel, onSubmit }) => {
  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSelectChange = (e) => {
    setLevel(e.target.value);
  };

  return (
    <StyledInput>
      <input type="text" value={inputName} onChange={handleInputChange}  placeholder="Enter item name..."/> 
      <label>Level:</label>
      <select value={level} onChange={handleSelectChange}>
        <option value="small" >Small</option>
        <option value="high" >High</option>
        <option value="medium" >Medium</option>
      </select>
      <button onClick={onSubmit}>Submit</button>
    </StyledInput>
  );
};

export default TodoInput;