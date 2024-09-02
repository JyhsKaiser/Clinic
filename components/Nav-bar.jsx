import { GiHospitalCross } from "react-icons/gi";
import '../styles/nav-bar.css'

export default function navBar(){

    return(
        <>
        <div className='nav-bar'>
            <div></div>
            <div className='logo'>
                <GiHospitalCross size={48} color="blue"/>  
                <a href={`/`}><button><h3 className='class-h3'>Sanatorio App</h3></button></a>
            </div>            
            <div></div>
            <div></div>
            <div>
                <a href={`/`}><button id='login'><h3 className='class-h3'>Regresar</h3></button></a>
            </div>
        </div>
    </>
    );
}