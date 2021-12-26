import './my-raiseFund.css'
import Navbar from '../../components/navbar/navbar'
import data from '../../components/data.json'
import convertRupiah from 'rupiah-format'
import { useHistory } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap'
export default function MyRaiseFund(){
    let history = useHistory()
    return(
        <>
        <Navbar/>
        <div className='myraisefund'>
            <div className='raise'>
            <label>My Raise Fund</label>
            <button onClick={()=>history.push('/form-fund')}>Make Raise Fund</button>
            </div>

            <div className='map'>
                {data.map((props)=>(<Card props={props}/>))}
            </div>
        </div>
        </>
    )
}
function Card({props}){
    let history = useHistory()
    const total = props.totalNow/props.total * 100
    return(
    <div key={props.id} className="donate" >        
        <img style={{marginTop:-1200}} src={require(`../../assets/image/${props.image}`).default}/><br/>
        <h3 style={{marginTop:-1200,marginLeft:10}}>{props.title}</h3><br/>
        <p style={{marginTop:-1200,marginLeft:10}}>{props.description}</p><br/>
        <ProgressBar style={{marginTop:320}} now={total} /><br/>
        <div >
            <label style={{marginTop:-1150,marginLeft:-280}}>{convertRupiah.convert(props.totalNow)}</label>
            <button style={{marginTop:-1150,marginLeft:-80}} onClick={()=>history.push(`/view-funds/${props.id}`)}>View Fund</button>
        </div>
    </div>
    )
}
