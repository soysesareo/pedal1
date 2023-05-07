import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import Detalles from "../pages/Detalles";


export const ProductContext = createContext()

export default function ProductProvider({ children }) {

  const [pedales, setPedales] = useState([]);
  
  const getPedales = async () => {
    const res = await fetch('pedales.json');
    const data = await res.json();
    setPedales(data);
  };
  useEffect( () => {
    getPedales();
  }, []);

/* Implementacion Carrito */
const [compras, setCompras] = useState([]);

const addPedal = (pedal) => {
  setCompras([...compras, pedal])
}

/* Implementacion Tarjetas Clientes */
const [clientes, setClientes] = useState([]);
const getClientes = async () => {
  const res = await fetch('clientes.json')
  const data = await res.json();
  setClientes(data);
};

useEffect( () => {
  getClientes();
}, []);

console.log(clientes);

/* Implementación Buscador */





  
  return (
    <ProductContext.Provider value={{pedales: pedales, setPedales, compras, setCompras, addPedal, clientes, setClientes}}>
      {children}
    </ProductContext.Provider>

  );
}
export const useProductContext = () => useContext(ProductContext);