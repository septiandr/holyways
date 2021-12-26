import { Modal,Button } from "react-bootstrap";
import { useState } from "react";
import './login.css'
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
export default function Login(props) {
    const [show, setShow] = useState(props.show);
    const [state, dispatch] = useContext(UserContext)
    const [login, setLogin]=useState({
        email:"",
        password:""
    })
    const handleClose = () =>{ 
        setShow(false);
        window.location.reload()
    }
    
    const handleChange=(e)=>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=()=>{
        
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: login
        })
        
    }
    console.log(state)
    return (
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit} id="form-signIn">
            <h1 id="title-signIn">Login</h1>
            <input style={{marginTop:119}} type="text" name="email" onChange={handleChange} placeholder="Email" required ></input><br/>
            <input style={{marginTop:20}} onChange={handleChange} type="password" name="password" placeholder="password" required ></input><br/>
            <button id="btn-signIn" type="submit">Login</button>
            <p>Don't have an account ? <span>Klik Here</span></p>
        </form>
      </Modal>
    );
  }
  