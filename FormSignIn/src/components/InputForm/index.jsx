import React from "react";
import styled from 'styled-components';

const StyledWraperInputForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 15px;
`;
const InputForm = (props) => {
    const {type, value, handleSetValue, label} = props;
    return (
    <StyledWraperInputForm>
        <label>{label}</label>
        <input type={type} value={value} onChange={handleSetValue} />
    </StyledWraperInputForm>
    );
};
export default InputForm;