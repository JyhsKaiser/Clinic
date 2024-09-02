
import Alert from '../components/alertConfirmation';
import NavBar from '../components/Nav-bar'
import Calendar from '../components/Calendario'
import '../styles/UserStyles/agendaCita.css'
export default function UsuarioAgeCita(){

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
                    <h1 className="title">Agendar cita</h1>
                    <label htmlFor="especialidad">Especialidad:</label><br />
                    <input type="text" id="especialidad" name="especialidad" onChange={handleChange} /><br /><br />

                    <label htmlFor="medico">Medico:</label><br />
                    <input type="text" id="medico" name="medico" onChange={handleChange} /><br /><br />

                    <label htmlFor="lastName">Fecha</label><br />
                    <input type="text" id="lastName" name="lastName" onChange={handleChange} /><br /><br />

                    <label htmlFor="email">Hora de la cita:</label><br />
                    <input type="text" id="email" name="email" onChange={handleChange} /><br /><br />

                    <label htmlFor="curp">Motivo de consulta:</label><br />
                    <input type="text" id='curp' name='curp' onChange={handleChange} /><br /><br />

                    <label htmlFor="pass">Estudios clinicos:</label><br />
                    <input type="password" id="pass" name="pass" onChange={handleChange} /><br /><br />

                    </div>
                    <div className='calendar'>
                        <Calendar/>  
                        <button className="class-button" type="submit" >Guardar</button>
                    </div>
                    
                </div>           
                                          
            </form>
            
        </div>
        </>
    );
}