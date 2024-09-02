

import Alert from '../components/alertConfirmation';
import NavBar from '../components/Nav-bar'
import Calendar from '../components/Calendario'
import '../styles/UserStyles/agendaCita.css'
export default function UsuarioConsultar(){

    const handleChange=()=>{

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // Enviar formulario
            console.log('Formulario enviado');
        }
    };
    return(
        <>
        <div>            
            <form className="center-Cita" onSubmit={handleSubmit} >
                <div className='center-form'>
                    <div>
                    <h1 className="title">Consultar cita</h1>
                    <label htmlFor="especialidad">Especialidad:</label><br />
                    <input type="text" id="especialidad" name="especialidad" disabled /><br /><br />

                    <label htmlFor="medico">Medico:</label><br />
                    <input type="text" id="medico" name="medico" disabled /><br /><br />

                    <label htmlFor="fecha">Fecha</label><br />
                    <input type="text" id="fecha" name="fecha" disabled /><br /><br />

                    <label htmlFor="hora">Hora de la cita:</label><br />
                    <input type="text" id="hora" name="hora" disabled /><br /><br />

                    <label htmlFor="motivo">Motivo de consulta:</label><br />
                    <input type="text" id='motivo' name='motivo' disabled /><br /><br />

                    <label htmlFor="estudios">Estudios clinicos:</label><br />
                    <input type="password" id="estudios" name="estudios" disabled /><br /><br />

                    </div>
                    <div className='calendar'>
                        <Calendar/>  
                    </div>
                    
                </div>           
                                          
            </form>
            
        </div>
        </>
    );
}