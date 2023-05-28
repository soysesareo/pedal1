import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Filtros = () => {
  return (
    <div className="filtros">
      {/* <p>Filtrar</p> */}
      <DropdownButton variant="outline-secondary" id="button-addon2" title="Ordenar pedales por">
        <Dropdown.Item
          href="#/action-1"

        >Menor precio</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mayor precio</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Alfabeto ascendente</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Alfabeto descendente</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default Filtros