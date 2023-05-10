import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Filtros = () => {
  return (
    <div className="filtros">
      {/* <p>Filtrar</p> */}
      <DropdownButton variant="outline-secondary" id="button-addon2" title="Seleccione Filtro">
        <Dropdown.Item href="#/action-1">Por menor precio</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Por mayor precio</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Alfabético ascendente</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Alfabético descendente</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default Filtros