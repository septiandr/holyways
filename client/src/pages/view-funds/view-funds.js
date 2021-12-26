import './view-funds.css'
import Navbar from '../../components/navbar/navbar'
import data from '../../components/data.json'
import convertRupiah  from 'rupiah-format'
import { ProgressBar } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Donate from '../../components/donation.json'
import { useState } from 'react'
import Modall from '../../components/modal/modal'
import {Modal} from 'react-bootstrap'

export default function ViewFunds(){
    const { id } = useParams();
    console.log(id)
    const[modal,setModal]= useState(false)
    const total = data[id-1].totalNow/data[id-1].total * 100
    
   
 console.log(modal)
    return(
        <>
        <Navbar/>
       {modal && <Modall/> }
        <div className='detail-container'>
            <img src ={require(`../../assets/image/${data[id-1].image}`).default}/>
            <h1>{data[id-1].title}</h1>
            <label className='totalNow'>{convertRupiah.convert(data[id-1].totalNow)}</label>
            <p className='gather'>gatehered from</p>
             <label className='total'>{convertRupiah.convert(data[id-1].total)}</label>
            <ProgressBar className='progres' now={total} />
            <h5 className='left'>200 donation</h5> <h5 className='right'>150 more day</h5>
            <p className='des'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <button onClick={()=>setModal(true)}>Donate</button>
        <div className='list-donation'>
            <h3>List Donation ({data.length})</h3>
            <div>
            {Donate.filter((props)=>props.status =="finish").map((props)=>(<Card props = {props}/>))}
            </div>
        </div>

        </div>
        <div className='not-approved'>
            <h3>Donation has not been approved ()</h3>
            <div>
            {Donate.filter((props)=>props.status =="not finish").map((props)=>(<Cardd props = {props}/>))}
            </div>
        </div>
        </>
    )
}

function Card({props}){
    return(
        <div key={props.status} className='donate-list'>
            <label>{props.name}</label>
            <p>{props.date}</p>
            <h5>{props.total}</h5>
        </div>
    )
}
function Cardd({props}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div key={props.status} id='card-not'>
            <ApproveModal handleClose={handleClose} show={show}/>
            <div className='main'>
            <label  >{props.name}</label>
            <p>{props.date}</p>
            <h5>{props.total}</h5>
            </div>
            <button id="btn-con" onClick={handleShow}>View</button>
        
        </div>
    )
}
function ApproveModal(item){
return(
    <Modal id="approveModal" show ={item.show} onhide={item.handleClose}>
        <label>Zain</label>
        <img src={require('../../assets/image/Rectangle 61.png').default}/>
        <button id="btn-app">Approve</button>
    </Modal>
)
}