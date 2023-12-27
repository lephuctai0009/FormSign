import React, { useState } from "react";
import InputForm from "../InputForm";

const FormSignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmitForm = (event) => {
        event.preventDefault();
        if(!userName){
            console.log('Bạn chưa nhập userName');
            return;
        }
        if(!password){
            console.log('Bạn chưa nhập password');
            return;
        }
        if(!confirmPassword){
            console.log('Bạn chưa nhập confirmPassword');
            return;
        }
        if(!email){
            console.log('Bạn chưa nhập email');
            return;
        }
        if(password!==confirmPassword){
            console.log('Nhập lại sai password');
            return;
        }

        const obj = {
            userName: userName,
            password: password,
            confirmPassword: confirmPassword,
            email: email,
        };
        console.log('Object Form', obj);
    };
    return <form onSubmit={handleSubmitForm}>
        <InputForm 
        label= "User Name"
        type="text" 
        value={userName} 
        handleSetValue={(e) =>{
           setUserName(e.target.value);
        }}/>
        <InputForm 
        label= "Password"
        type="password" 
        value={password} 
        handleSetValue={(e) =>{
           setPassword(e.target.value);
        }}/>
        <InputForm 
        label= "Confirm Password"
        type="password" 
        value={confirmPassword}
        handleSetValue={(e) =>{
           setConfirmPassword(e.target.value);
        }}/>
        <InputForm 
        label= "Email"
        type="email" 
        value={email} 
        handleSetValue={(e) =>{
           setEmail(e.target.value);
        }}/>
        <button type="submit">Đăng kí</button>
        <button type="">Cancel</button>
    </form>;
};
export default FormSignIn;