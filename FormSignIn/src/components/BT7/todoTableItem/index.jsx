import React from 'react';
import styled from 'styled-components';

const StyledTableItem = styled.tr`
 td{
 }
  td.level {
    background: ${(props) =>
      props.level === 'small'
        ? '#9f9f9e'
        : props.level === 'high'
        ? '#ff9191'
        : '#43b1ff'};   
        border-radius: 10px;
  }
  .tdButton{
      margin-left: 30px;
    }
  .delete{
     background-color:#ff5e5e;
      
  }
  .edit{
     background-color:#ffa946;
     margin-left:50px;
     margin-right:5px;
  }
`;

const TodoTableItem = ({ index, name, level, onDelete }) => {
  return (
    <StyledTableItem level={level}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td className="level">{level}</td>
      <td className='tdButton'>
        <button className='edit'>Edit</button>
        <button onClick={onDelete} className='delete'>Delete</button>
      </td>
    </StyledTableItem>
  );
};

export default TodoTableItem;
