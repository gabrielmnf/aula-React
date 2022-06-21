import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Postagens() {
  
    const [postagens, setPostagens] = useState([]);
    let url= "https://jsonplaceholder.typicode.com/posts";
    
    const getPostagens = async () => {
        await axios
          .get (url)
          .then ((response) => {
              console.log(response.data);
              setPostagens(response.data);
              console.log(response);
          })
          .catch((err) => console.log(err));
    };

    useEffect(() => {
      getPostagens();
    }, [url]);
    
    return <div>Postagens</div>
}
