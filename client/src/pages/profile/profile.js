import './profile.css'
import Navbar from '../../components/navbar/navbar'
import user from './user.json'
import donation from '../../components/donation.json'
export default function Profile(){
    return(
        <>
        <Navbar/>
        <div className='profile-container'>
            <div className='profile-left'>
                <h1>My Profile</h1>
                <img src={require(`../../assets/image/${user[0].photo}`).default}/>
                <label>Full Name</label>
                <p>{user[0].full_name}</p>
                <label style={{marginTop:60}}>Email</label>
                <p style={{marginTop:61}}>{user[0].email}</p>
                <label style={{marginTop:138}}>Phone</label>
                <p style={{marginTop:141}}>{user[0].phone}</p>
            </div>
            <div className='profile-right'>
                <h1>History Donation</h1>
                <div>
                    {donation.filter((props)=>props.status =="finish").map((props)=>(<Card props = {props}/>))}
                </div>
            </div>
        </div>
        </>
    )
}

function Card({props}){
    return(
        <div className='profile-card'>
            <h4>{props.title}</h4>
            <p>{props.date}</p>
            <label>{props.total}</label>
            <h5>{props.status}</h5>
        </div>
    )
}
