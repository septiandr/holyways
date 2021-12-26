import './detail-donate.css'
import Navbar from '../../components/navbar/navbar'
import data from '../../components/data.json'
import convertRupiah  from 'rupiah-format'
import { ProgressBar } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Donate from '../../components/donation.json'
import { useState } from 'react'
import Modall from '../../components/modal/modal'

export default function DetailDonate(){
    const[modal,setModal]= useState(false)
    let { id } = useParams();
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
        <div>
            <h3>List Donation ({data.length})</h3>
            <div>
                {Donate.map((props)=>(<Card props ={props}/>))}
            </div>
        </div>
        </div>
        </>
    )
}

function Card({props}){
    return(
        <div className='donate-list'>
            <label>{props.name}</label>
            <p>{props.date}</p>
            <h5>{props.total}</h5>
        </div>
    )
}