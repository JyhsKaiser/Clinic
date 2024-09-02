import '../styles/PaginaRegistro.css'
import Alert from '../components/alertAutorizacion';
import NavBar from '../components/Nav-bar'
import React, { useState, useEffect } from 'react';

export default function RegistroUsuarios(){
    const [formData, setFormData] = useState({
        email: '',
        pass: '',
        confPass: ''
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let newErrors = {};

        // Validar correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Correo electrónico no válido';
        }

        // Validar contraseñas
        if (formData.pass.length < 8) {
            newErrors.pass = 'La contraseña debe tener al menos 8 caracteres';
        }
        if (formData.pass !== formData.confPass) {
            newErrors.confPass = 'Las contraseñas no coinciden';
        }

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    useEffect(() => {
        validate();
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // confirmacion de formulario
            console.log('Formulario enviado');
        }
    };

    return(
        <>        
        {/* <NavBar/> */}
        <div>            
            <form className="center" onSubmit={handleSubmit} autoComplete="on">
                <div className='center2'>
                    <h1 className="title">Crear cuenta</h1>
                    <label htmlFor="name">Nombre(s):</label><br />
                    <input type="text" id="name" name="name" onChange={handleChange} /><br /><br />

                    <label htmlFor="firstName">Primer apellido:</label><br />
                    <input type="text" id="firstName" name="firstName" onChange={handleChange} /><br /><br />

                    <label htmlFor="lastName">Segundo apellido:</label><br />
                    <input type="text" id="lastName" name="lastName" onChange={handleChange} /><br /><br />

                    <label htmlFor="email">Correo electrónico:</label><br />
                    <input type="text" id="email" name="email" onChange={handleChange} /><br />
                    {errors.email && <span className="error">{errors.email}</span>}<br />

                    <label htmlFor="pass">Contraseña:</label><br />
                    <input type="password" id="pass" name="pass" onChange={handleChange} /><br />
                    {errors.pass && <span className="error">{errors.pass}</span>}<br />

                    <label htmlFor="confPass">Confirmar contraseña:</label><br />
                    <input type="password" id="confPass" name="confPass" onChange={handleChange} /><br />
                    {errors.confPass && <span className="error">{errors.confPass}</span>}<br />
                    <button className="class-button" disabled={!isFormValid} type="submit" ><Alert/></button>
                </div>                                       
            </form>
        </div>
        
            
        </>
    );
}