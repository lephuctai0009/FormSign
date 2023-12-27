import FormSignIn from "./components/FormSignIn";
import './App.css';
import memberBenefits from "./components/memberBenefits";

function App() {
  return (
  <div style={{display:'flex', marginLeft:'300px',}}>
    <div>
    <div style={{ flex: 1, border:'1px solid rgb(216, 214, 214)', borderRadius:'10px',width:'300px', }}>
        <h2 style={{backgroundColor:'rgb(82, 197, 251)', borderRadius:'10px', padding:'20px 20px', marginTop:'0'}}>Benefits of being a member</h2>
        <ul>
          {memberBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
    <div style={{paddingLeft:'10px'}}>
        <h2 style={{marginTop:'0', padding:'5px 10px'}}>Sign in for an account</h2>
        <li style={{listStyleType:'none'}}>Signing up for an account is free and easy</li>
        <FormSignIn />
    </div>
  </div>
)}

export default App;
