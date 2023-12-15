import React from 'react';
import Viewer from './Viewer';
import TabsComponent from './TabsComponent'; // Asegúrate de que la ruta sea correcta

const ColumnaDerecha = ({ isCollapsed, token, urn, selectedIds, onCameraChange, onSelectionChange, refViewer }) => {
    const estiloColapsado = {
        width: '90%',
    };

    const estiloExpandido = {
        width: '80%',
    };

    const estiloActual = isCollapsed ? estiloColapsado : estiloExpandido;

    return (
        <div style={estiloActual}>
            <div style={{ position: 'fixed', width: '100%', height: '95%' }}>
                <Viewer
                    runtime={{ accessToken: token }}
                    urn={urn}
                    selectedIds={selectedIds}
                    onCameraChange={onCameraChange}
                    onSelectionChange={onSelectionChange}
                    ref={refViewer}
                />
                <TabsComponent /> {/* Instanciar TabsComponent aquí */}
            </div>
        </div>
    );
};

export default ColumnaDerecha;
