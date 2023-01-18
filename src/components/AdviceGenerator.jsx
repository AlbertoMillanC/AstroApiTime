import { useState, useEffect } from "react";
import getProducts from "../getAdvice";

const AdviceGenerator = ({ stringify: initialProducts }) => {
  const [currentStringify, setCurrentStringify] = useState(initialProducts);

  const fetchApi = async () => {
    Array.isArray(currentStringify)
    const responseJSON = await getProducts();
    setCurrentStringify(responseJSON.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div >
      <h1 >GENERADOR </h1>

       {!currentStringify
        ? "cargando..."
        : Array.isArray(currentStringify) ? 
        currentStringify.map((stringify, index) => {
            return (
              <div key={index}>
                <h1>{stringify.year}</h1>
              </div>
            );
          }): "currentStringify no es un arreglo"}
                
              </div>

            );
          }
          


export default AdviceGenerator;
