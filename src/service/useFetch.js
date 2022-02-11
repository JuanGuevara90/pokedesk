import {useState,useEffect} from 'react';

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [pendiente,setPendiente] = useState(true);
    const [error,setError] = useState(null);
    const abortCont = new AbortController();
    useEffect(() => {
        console.log("Run User Effect");
        fetch(url, { signal: abortCont.signal })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log("Data: ",data);
            setData(data);
            setPendiente(false); // Se quita el loading
            setError(null); // No se muestra el error
        }).catch(error => {
            if(error.name === 'AbortError'){
                console.log("Fetch aborted");
                setError(error.name);
            }else{
                setPendiente(false); // Se quita el loading
                setError(error.message); // se muestra el error
                console.log("Error: ",error);
            }
        })
        // Return useEffect
        return () => abortCont.abort();
    },[url]);  /// El segundo parametro determina cuando debe cambiar y ser llamado para renderizar
    return {data,pendiente,error};
}

export default useFetch;