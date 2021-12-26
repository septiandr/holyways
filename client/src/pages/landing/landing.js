import Navbar from "../../components/navbar/navbar";
import './landing.css'
import Data from '../../components/data.json'
import {ProgressBar} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import convertRupiah from "rupiah-format";
function Donate({props}){
    let history = useHistory()
    const total = props.totalNow/props.total * 100
    return(
       
        <div key={props.id} className="donate">
            
            <img src={require(`../../assets/image/${props.image}`).default}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <ProgressBar now={total} />
            <div>
                <label>{convertRupiah.convert(props.totalNow)}</label>
                <button onClick={()=>history.push(`/detail-donate/${props.id}`)}>Donate</button>
                
            </div>
        </div>
    )
}
export default function Landing(){
  
    return(
        <>
        <Navbar/>
        
        <div className="landing">
            <h2>While you are still standing, try to reach out to the people who are falling.</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <button>Donate Now</button>
        </div>
        <img className="gbr1" src={require('../../assets/image/1340554718 1.png').default}/>
        <img className="gbr2" src={require('../../assets/image/1340554718 2.png').default}/>
        <h2 className="landing2">Your donation is very helpful for people affected by forest fires in Kalimantan.</h2>
        <div className="landing-con">
        <p className="landing3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <p className="landing4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
    
        <div className="donate-now" >
            <h1>Donate Now</h1>
            
            <div>
               {Data.map((props)=>(<Donate props={props}/>))}
            </div>
        </div>
    
        </>
    )
}
