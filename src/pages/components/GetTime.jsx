import { useState, useEffect } from "react";
import AddTime from "../AddTime";

const GetTime = ({ time: initialtime }) => {
  const [currenttime, setCurrenttime] = useState(initialtime);

  const fetchApi = async ()   => {
    const responseJSON = await AddTime();
    setCurrenttime(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div >
      <h1 className=" bg-slate-100 text-">GENERADOR </h1>

      {!currenttime
        ? "cargando..."
        : currenttime.map((time, index) => {
            return (
              <div  className=" " >
                 <div  className="container mt-4  " >
                 {time.title}
                 </div>
                {time.category} ;

                <div   className="container text-red-600 border-top  bg-slate-200 " >
                {time.year}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default GetTime;
