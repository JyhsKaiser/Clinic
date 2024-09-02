import '../styles/UserStyles/usuario.css'
import 'boxicons';
import '../styles/admin.css'
export default function Admin(){
    let nombre = 'Fulanito Hernandez Perez';

    return(
        <>

            <div className='nombre'>
                <h1 className='class-h1'>Bienvenido:</h1>
                <h1 className='class-h1'>{nombre}</h1>
            </div>
            
            <div className="contendor">
            
                <div className='tarjetas2'>

                    <button>
                    <div className="opcion">
                    <box-icon 
                    name='book-add' type='solid' color='#5758b7' size='200px' >
                    </box-icon>
                    <h1 className='class-h1' style={{textAlign:'center'}}>Definir horarios</h1>
                    </div>
                    </button>

                    <button>
                    <div className="opcion">
                    <box-icon 
                    name='file-find' type='solid' color='#5758b7' size='200px' >
                    </box-icon>
                    <h1 className='class-h1' style={{textAlign:'center'}}>Configuracion de consulturios</h1>
                    </div>
                    </button>
                </div>
            </div>
            
        </>
    );
}