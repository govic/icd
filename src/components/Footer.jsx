import React from 'react';

const Footer = () => {
    const footerStyle = {
        position: 'fixed', // Fija el footer en la parte inferior
        height: 50 ,
        bottom: 0,
        width: '100%',
        backgroundColor: '#14130F', // Ajusta el color de fondo según tus necesidades
        color: '#6c757d', // Ajusta el color del texto según tus necesidades
        textAlign: 'center',
        marginTop: '250px', // Ajusta el padding según tus necesidades
        zIndex: 1000, // Asegura que el footer se mantenga sobre otros elementos
        color: '#FFF',
        fontSize: 18,
      
        fontWeight: 700,
     
        letterSpacing: -0.45
    };
    return (
        <footer style={footerStyle}>
            <div>
                <p>  Copyright &copy; {new Date().getFullYear()} ICD. </p>
                {/* Puedes agregar más contenido aquí, como enlaces o información adicional */}
            </div>
        </footer>
    );
};

export default Footer;
