import React from 'react';
import './Card.css'

export default function Card({ plan }) {
  console.log(plan)
  function renderSwitchCase(param){
    switch (param){
      case 'Sem Plano':
        return <span>Nenhum minuto grátis</span>
      case 'FaleMais 30':
        return <span>30 minutos gratuitos</span>
      case 'FaleMais 60':
        return <span>60 minutos gratuitos</span>
      case 'FaleMais 120':
        return <span>120 minutos gratuitos</span>
    } 
  }
  return (
    <div className="card">
        <div className="card__header">
        </div>
        <div className="card__footer">
          <span className="card__name">{plan.type}</span><br/>
            {renderSwitchCase(plan.type)}
          <div className="card__price">
            <span className="card__price">{plan.price ? `Preço: R$${plan.price}` : 'Esse ddd não abrange o nosso plano'} </span>
          </div>
        </div>
    </div>
  )
}