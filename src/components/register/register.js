import { Modal} from "react-bootstrap";
import { useState } from "react";
import './register.css'
export default function Register(props) {
    const [show, setShow] = useState(props.show);
    const [register, setRegister]=useState({
        email:"",
        password:"",
        full_name:""
    })
    const handleClose = () =>{ 
        setShow(false);
        window.location.reload()
    }
    
    const handleChange=(e)=>{
        setRegister({
            ...register,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=()=>{
        console.log(register)
    }
    return (
        <Modal id="register" show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit} id="form-signIn">
            <h1 id="title-signIn">Register</h1>
            <input style={{marginTop:119}} type="text" name="email" onChange={handleChange} placeholder="Email" required ></input><br/>
            <input style={{marginTop:20}} onChange={handleChange} type="password" name="password" placeholder="Password" required ></input><br/>
            <input style={{marginTop:20}} onChange={handleChange} type="text" name="full_name" placeholder="Full Name" required ></input><br/>
            <button id="btn-regis" type="submit">Register</button>
            <p id="alredy">Already have an account ? <span>Klik Here</span></p>
        </form>
      </Modal>
    );
  }
