import React, { useState } from 'react';
import TodoInput from '../todoInput';
import TodoTable from '../todoTable';
import TodoTableItem from '../todoTableItem';
import styled from 'styled-components';

const StyledTable = styled.div`
    display: flex;
    flex-direction: column;
    width:600px;
    padding: 40px;
    background-color: #e2ffca
`;
const StyledContainerTable = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 220vh;
`;

const TodoListApp = () => {
  const [inputName, setInputName] = useState("");
  const [level, setLevel] = useState("small");
  const [listData, setListData] = useState([]);

  const handleSubmit = () => {
    if (inputName && level) {
      const newItem = {
        name: inputName,
        level: level,
      };

      setListData([newItem, ...listData]);
      setInputName("");
      setLevel("small");
    } else {
      alert("Vui lòng điền đầy đủ thông tin");
    }
  };

  const handleDelete = (id) => {
    const updatedList = listData.filter((item, index) => index !== id);
    setListData(updatedList);
  };

  return (
    <StyledContainerTable>
    <StyledTable>
      <TodoInput
        inputName={inputName}
        setInputName={setInputName}
        level={level}
        setLevel={setLevel}
        onSubmit={handleSubmit}
      />
      <TodoTable listData={listData} onDelete={handleDelete} />
    </StyledTable>
    </StyledContainerTable>
  )};


export default TodoListApp;
