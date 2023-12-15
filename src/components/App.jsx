import React, { useState } from 'react';
import ColumnaIzquierda from './ColumnaIzquierda';
import ColumnaDerecha from './ColumnaDerecha';
import Footer from './Footer'; // Asegúrate de que la ruta sea correcta
import './App.css';
import { VisibilityProvider } from '../context/VisibilityContext';

const App = ({ token, urn }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (

        <VisibilityProvider>
        <div className="container-fluid">
            <div className="row">
                {/* Columna Izquierda */}
                <div className={`col-${isCollapsed ? '1' : '2'}`}>
                    <ColumnaIzquierda isCollapsed={isCollapsed} handleCollapse={() => setIsCollapsed(!isCollapsed)} />
                </div>

                {/* Columna Derecha */}
               
                <div className={`col-${isCollapsed ? '11' : '10'}`}>
                <div className="row">
                   <div className='col-12'>
                        <ColumnaDerecha isCollapsed={isCollapsed} token={token} urn={urn} />
                   </div>
                </div>
                <div className="row">
                   <div className='col-12'>
                    <br></br>
                   <Footer />
                   </div>
                </div>
                </div>
            </div>
        </div>  </VisibilityProvider>
    );
};

export default App;
