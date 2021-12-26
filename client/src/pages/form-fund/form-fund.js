import './form-fund.css'
import Navbar from '../../components/navbar/navbar'
export default function FormFund(){
    return(
        <>
        <Navbar/>
        <div className='formfund'>
            <h1>Make Raise Fund</h1>
            <input id="title" placeholder='title'></input><br/>
            <button id="attach">Attache Thumbnail</button><br/>
            <input id="goals" placeholder='Goals Donation'></input><br/>
            <textarea placeholder='Description'></textarea><br/>
            <button id="btn-public">Public Fundraising</button>
        </div>
        </>
    )
}