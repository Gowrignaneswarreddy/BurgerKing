import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componds/App';
import Bg1 from './componds/king'
import Carts from './componds/Carts';
import Nav from './componds/footer';
import Details from './componds/nav';
import { data } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <App/>
 <Bg1/>
 <div id="king3">
    {data.map((x)=>{
        return(
            <Carts src={x.src} h1={x.h1} p={x.p} a={x.a} btn={x.btn}/>
        )
    })}
 </div>
 <Nav/>
 <Details/>
 </>
    
);
