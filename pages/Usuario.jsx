import '../styles/UserStyles/usuario.css'
import 'boxicons';

export default function User(){
    let nombre = 'Fulanito Hernandez Perez';
    return(
        <>
            <div className='nombre'>
                <h1 className='class-h1'>Bienvenido:</h1>
                <h1 className='class-h1'>{nombre}</h1>
            </div>
            
            <div className="contendor">
            
                <div className='tarjetas'>

                    <button>
                    <div className="opcion">
                    <box-icon 
                    name='book-add' type='solid' color='#5758b7' size='200px' >
                    </box-icon>
                    <h1 className='class-h1' style={{textAlign:'center'}}>Agendar cita</h1>
                    </div>
                    </button>

                    <button>
                    <div className="opcion">
                    <box-icon 
                    name='file-find' type='solid' color='#5758b7' size='200px' >
                    </box-icon>
                    <h1 className='class-h1' style={{textAlign:'center'}}>Consultar cita</h1>
                    </div>
                    </button>

                    <button>
                    <div className="opcion">
                    <box-icon 
                    name='edit' type='solid' color='#5758b7' size='200px' >
                    </box-icon>
                    <h1 className='class-h1' style={{textAlign:'center'}}>Modificar cita</h1>
                    </div>
                    </button>

                    <button>
                    <div className="opcion">
                    <box-icon 
                    name='trash' type='solid' color='#5758b7' size='200px' >
                    </box-icon>
                    <h1 className='class-h1' style={{textAlign:'center'}}>Cancelar cita</h1>
                    </div>
                    </button>
                </div>
            </div>
            
        </>
    );
}