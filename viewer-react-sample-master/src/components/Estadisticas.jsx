import React, { useRef } from 'react';
import GraficoEstadistica from './estadisticas/GraficoEstadistica';
import HeaderApp from './HeaderApp';

const Estadisticas = () => {
    const tabsRef = useRef(null);
    const estiloEstadisticas = {
        backgroundColor: '#D8D8D8', // Color de fondo
        padding: '20px', // Agrega un poco de espacio alrededor del contenido
        height: '100%'
        
    };
    return (
        <div>
            <HeaderApp /> {/* Instancia el componente HeaderApp */}
            <div style={{ position: 'fixed', top: '64px', width: '100%', height: '88%', marginBottom: '30px' }}>
                {/* Omitir el componente Viewer */}
               {/* Instanciar Paleta aquí */}
            </div>
            <div style={estiloEstadisticas}>
                    <div class='row' >
                        <div class='col-12'>
                            <h1 style={{marginLeft:'30px'}}>Estadísticas</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div class='col-6'>
                            <GraficoEstadistica titulo="Gráfico 1" contenido="Descripción" />
                        </div>
                
                        <div class='col-6'>
                            <GraficoEstadistica titulo="Gráfico 2" contenido="Descripción" />
                        </div>
                    
                        
                        {/* Añade más componentes GraficoEstadistica según sea necesario */}
                  </div>
                  <div className='row'>
                        <div class='col-6'>
                            <GraficoEstadistica titulo="Gráfico 3" contenido="Descripción" />
                        </div>
                
                        <div class='col-6'>
                            <GraficoEstadistica titulo="Gráfico 4" contenido="Descripción" />
                        </div>
                    
                        
                        {/* Añade más componentes GraficoEstadistica según sea necesario */}
                  </div>
                  <div className='row'>
                        <div class='col-6'>
                            <GraficoEstadistica titulo="Gráfico 3" contenido="Descripción" />
                        </div>
                
                        <div class='col-6'>
                            <GraficoEstadistica titulo="Gráfico 4" contenido="Descripción" />
                        </div>
                    
                        
                        {/* Añade más componentes GraficoEstadistica según sea necesario */}
                  </div>
            </div>
        </div>
    );
};

export default Estadisticas;
