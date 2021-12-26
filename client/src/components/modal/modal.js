import { Modal } from "react-bootstrap"
import { useState } from "react";
import './modal.css'
export default function Modall(){
 
   const [modal,setModal]=useState(true)
    return(

    <Modal id="modelShow" show={modal} onHide={()=>setModal(false)}>
        <form className="modal-pay">
            <input type="text" placeholder="Nominal Donation"></input>
            <button className="btn-attach"><img src={require('../../assets/icon/Group 15.png').default}/></button>
            <p>*transfers can be made to holyways accounts</p>
            <button id="btn">Donate</button>
        </form>
    </Modal>
    )
}
