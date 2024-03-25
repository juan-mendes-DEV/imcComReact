
import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = ()=>{
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    
    const renderizaResultado = () =>{
        const soma = (peso / (altura * altura)).toFixed(2) ; 
        const imc = soma ;


        // return <p>{imc}</p>
        if (imc <= 18.5) {
            return (
                <p>Olá, você está Abaixo do peso: {imc} </p>
            )
        }
        else if (imc <= 24.9) {
            return (
                <p>Olá, você está no peso normal: {imc} </p>
            )
        }
        else if (imc <= 29.9) {
            return (
                <p>Olá, você está com sobrepeso: {imc} </p>
            )
        }
        else {
            return (
                <p>Olá, você está obeso: {imc} </p>
            )
        }
    }

    return(
        <div>
        <form className={styles.container}>
            <h1>Digite seu peso e altura para ver seu indice corporal:</h1>
            <input className={styles.input} type="number" placeholder="Peso" onChange={evento => setPeso(evento.target.value)} />
            <input className={styles.input} type="number" placeholder="Altura" onChange={evento => setAltura(evento.target.value)} />
            
            
            <p>{renderizaResultado()}</p>
        </form>
        </div>

    )
}
export default Formulario;