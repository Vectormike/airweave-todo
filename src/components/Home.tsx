import React, {useEffect, useState} from 'react'
import { getVersionName } from '../api/utils';
import NewTodo from "./NewTodo"
import {GetTodos} from "../api/index"
import '../css/Home.css';



const Home = () => {
  const [connected, setConnected] = useState(false);
  
    useEffect(() => {
        GetTodos();
    }, []);
    
     const handleDisconnect = () => {
    window.arweaveWallet.disconnect();
    setConnected(false);
    window.location.reload();
  };

    return {
         <div>
              <NewTodo
                handleChange={handleChange}
                handleSubmitTodo={handleSubmitTodo}
                task={task}
              />
              
    </div>
    }
}

export default Home