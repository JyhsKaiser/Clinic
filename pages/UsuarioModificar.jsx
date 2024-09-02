
import Alert from '../components/alertConfirmation';
import NavBar from '../components/Nav-bar'
import Calendar from '../components/Calendario'
import '../styles/UserStyles/agendaCita.css'
export default function UsuarioModificar(){

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
                    <h1 className="title">Modificar cita</h1>
                    <label htmlFor="especialidad">Especialidad:</label><br />
                    <input type="text" id="especialidad" name="especialidad" onChange={handleChange} /><br /><br />

                    <label htmlFor="medico">Medico:</label><br />
                    <input type="text" id="medico" name="medico" onChange={handleChange} /><br /><br />

                    <label htmlFor="fecha">Fecha</label><br />
                    <input type="text" id="fecha" name="fecha" onChange={handleChange} /><br /><br />

                    <label htmlFor="hora">Hora de la cita:</label><br />
                    <input type="text" id="hora" name="hora" onChange={handleChange} /><br /><br />

                    <label htmlFor="motivo">Motivo de consulta:</label><br />
                    <input type="text" id='motivo' name='motivo' onChange={handleChange} /><br /><br />

                    <label htmlFor="estudios">Estudios clinicos:</label><br />
                    <input type="password" id="estudios" name="estudios" onChange={handleChange} /><br /><br />

                    </div>
                    <div className='calendar'>
                        <h3 className="class-h3">Por favor seleccion en el calendario la cita a modificar:</h3>
                        <Calendar/>  
                        <button className="class-button" type="submit" >Modificar</button>
                    </div>
                    
                </div>           
                                          
            </form>
            
        </div>
        </>
    );
}