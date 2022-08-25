import React, { useState} from "react";
import styled from 'styled-components';
import BurguerButton from "./BurguerButton";
import Logowalleworld from '../imagenes/logo.png';


function Navbar(){

  const [clicked, setClicked]=useState(false) //COMIENZA CON FALSE

  const handleClick=()=> { //es una funcion que cuando le haga click lo pasa de true a false Y VICEVERZA
    setClicked(!clicked)
  }
    return(
        <>
            <NavbarContenedor> {/*ESTO ES PARA PONER ESTILOS GRACIAS A LA LIBRERIA QUE SE INSTALO STYLED COMPONENTS y se definio abajo*/}
                <h2>   <div className='logow-contedor'>
        <img 
          className='logow'
          src={Logowalleworld}
          alt="logo de walleworld" />
          
       </div> <span></span></h2>
                
                <div className={`links ${clicked ? 'active':''}`}>{/* ESTO ES PARA QUE ACTIVE EL ESTILO LINK.ACTIVE Y MOSTRARA EN MEDIO EL MENU. Y ESTO SUCEDERA AL HACER CLICK EN EL MENU HAMBURGUESA. Y EL COMPNENTE ENCARGADO DE ELLO ES bURGUERBUTTON*/}
                    <a  href="#walleworld">Inicio</a>
                    <a  href="#Developer">Tienda</a>
                    <a  href="#CEO kenny Fernandez">AcercaDe:</a>
                    <a  href="#FACEBOOK walleworld">Contacto</a>
                    <a  href="#BLOG walleworld">Blog</a>
                    
                </div>
                <div className="burguer">
                  <BurguerButton
                   clicked= {clicked} // ASIGNA FALSE PRIMERO
                   handleClick={handleClick}/> {/*CUANDO SE HACE CLICK SE VOLVERA TRUE EL CLICKED, ESO PASARA EN EL COMPONENTE bURGUERBUTTON, AL HACER CLICK SE VOLVERA TRUE Y MOSTRARA EL NAVBAR EN MEDIAO DE LA PANTALLA */}
                </div>
                
                
            </NavbarContenedor>
            <DivAnimacionContenedor className={`initial ${clicked ? 'active' : ''}`}>    {/*ESTO ES PARA PONER ESTILOS GRACIAS A LA LIBRERIA QUE SE INSTALO STYLED COMPONENTS y se definio abajo, para el fondo en circulo que aparece al hacer click en burguer button*/}
               
            </DivAnimacionContenedor>
        </>

    );
}

export default Navbar;
/*podemos poner los estiolos del navbar aqui*/
const NavbarContenedor = styled.nav`     
  h2{
    color: white;
    font-weight:400;
    span{
        font-weight:bold;
    } 
  }
  .logow-contedor{
    width: 52px;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 1px;
 
    left:0;
  }

  .logow{
    
    height: 50px;
    width: 80px;
}


    padding: .4rem;
    background-color:#333;
    display:flex;
    align-items:center;
    justify-content:space-between;
    a{
        color:white;
        text-decoration: none;
        margin-right: 1rem;
        
        

    }
  .links{
    /*esto es para que desaparesca los navbar de arriba inicio etc*/
    position:absolute;
    top: -200px;
    left:-2000px;
    right:0;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    transition: all .6s ease; //pone una transicion a loslink cuando se cieere el menu hamburguesa
  
    
    a{
      color: white;
      font-size:2rem;
      display:block;
    }
    @media(min-width: 600px){ /* ESTO ES CUANDO SUPERE EL ANCHO TIENE QUE VOLVER ARRIBA*/
    position:initial;
    margin:0;
      a{
     
      
        font-size: 1rem;
        color: white;
        display: inline;
      }
       display:block;

    }
  }
     /* cuando se active o desparesca el menu top este tomara este estilo*/
.links.active{
      width:100%;
      display:block;
      position:absolute;
      margin-left:auto;
      margin-right:auto;
      top: 30%;
      left:0;
      right:0;
      text-align:center;
      
      a{
      font-size:2rem;
      margin-top:1rem;
      color: white;
      
      }
    }

  
 .burguer{ /*para que el boton hamburguesa desasparesca cuando la pestaña del navegador se agrande*/
   @media(min-width: 600px){
    display:none;
   }
 }
 
 `
 /*podemos poner los estiolos de la animacion aqui*/

 const DivAnimacionContenedor=styled.div`
  background-color:#222;
  position:absolute;
  top:-700px; //esto hara que desaparesca
  left:-1000px;//esto hara que desaparezca
  width:100%;
  height:100%;
  z-index:-1; //para que vaya detras de navbar o menu
  transition:all .6s ease; //pone una transicion al ovalo 

  &.active{
    border-radius: 0 0 80% 0; //para que corte el fondo el fondo en forma ovalada
    top:0;
    left:0;
    width:100%
    height:100%
    
  }
 
 `