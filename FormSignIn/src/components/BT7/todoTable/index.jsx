import React, { useState } from 'react';
import TodoTableItem from '../todoTableItem';

const TodoTable = ({ listData, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Level</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listData.map((item, index) => (
          <TodoTableItem
            key={index}
            index={index}
            name={item.name}
            level={item.level}
            onDelete={() => onDelete(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
