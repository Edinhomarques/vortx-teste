import React from 'react';
import './Form.css'
export default function Form({ 
  depot, 
  destination, 
  minutes, 
  handleDepot, 
  handleDestination, 
  handleMinutes,
  handleApi
  }) {
  return (
    <>
      <h1 className='title'>Consultar Valores dos Planos</h1>
      <form className="form" onSubmit={handleApi}>
        <div className="form__group">
          <label className="form__title" htmlFor="depot">DDD de Origem </label><br/>
          <input 
            className="form__input" 
            type="text" 
            name="depot" 
            id="depot" 
            placeholder='Digite o ddd. Ex:(011)'
            value={depot} 
            onChange={handleDepot}
            />
        </div>
        <div className="form__group"> 
          <label className="form__title" htmlFor="destination">DDD de Origem </label><br/>
          <input 
            className="form__input" 
            type="text" 
            name="destination" 
            id="destination" 
            placeholder='Digite o ddd. Ex:(011)'
            value={destination}
            onChange={handleDestination} />
        </div>
        <div className="form__group"> 
          <label className="form__title" htmlFor="minutes">Tempo da ligação em Minutos </label><br/>
          <input 
            className="form__input" 
            type="text" name="minutes" 
            id="minutes" 
            placeholder='Digite o Tempo em Minutos'
            value={minutes}
            onChange={handleMinutes} />
        </div>
        <div className="flex">
          <button className="form__button">Enviar</button>
        </div>
      </form>
    </>
  )
}