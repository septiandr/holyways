import './navbar.css'
import Login from '../login/login'
import Register from '../register/register'
import { useState } from 'react'
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Dropdown } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom'

export default function Navbar(){
    let history = useHistory()
    const [getmodalLogin,setModalLogin]=useState(false)
    const [getmodalRegister,setModalRegister]=useState(false)
   
    const isLogin =JSON.parse(sessionStorage.getItem('isLogin'))
    
    const Modallogin =()=>{
        return(
            <Login show={getmodalLogin}/>
        )
    }
    const ModalRegister =()=>{
        return(
            <Register show={getmodalRegister}/>
        )
    }
    return(<>
        {isLogin? <NavbarLogin/>:
        (<div className="nav">
            <Modallogin/>
            <ModalRegister/>
            <img src={require('../../assets/icon/Icon (1).png').default} onClick={()=>history.push('/')}/>
            <div className='buttonNav'>
                <button className='login' onClick ={()=>setModalLogin(true)}>Login</button>
                <button className='register' onClick ={()=>setModalRegister(true)}>Register</button>
            </div>
        </div>)
        }
        </>
    )
}
function NavbarLogin(){
    const [_, dispatch] = useContext(UserContext)
    let history = useHistory()
    const logout =()=>{
        sessionStorage.clear();
        dispatch({
            type: 'LOGOUT'
        })

    }
    const home =()=>{
        history.push('/')
    }
    return(
        <div className="nav" >
        <buton onClick={home}><img src={require('../../assets/icon/Icon (1).png').default}  /></buton>
        
        <Dropdown>
             <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img  id="img-nav" src={require('../../assets/image/Rectangle 12 (1).png').default}/>
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>history.push('/profile')}><img src={require('../../assets/icon/user 2.png').default}/>Profile</Dropdown.Item>
            <Dropdown.Item onClick={()=>history.push('/my-raise-fund')}><img src={require('../../assets/icon/Group 4 (2).png').default}/>Raise Fund</Dropdown.Item>
            <Dropdown.Item style={{borderTop: 'solid'}} onClick={logout}><img src={require('../../assets/icon/logout 1 (1).png').default}/>Logout</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
    )
}