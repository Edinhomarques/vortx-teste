import React from 'react';
import './Card.css'

export default function Card({ plan }) {
  function renderSwitchCase(param) {
    switch(param) {
      case 'Sem Plano':
        return <span>Nenhum minuto grátis</span>
      case 'FaleMais 30':
        return <span>30 minutos grátis</span>
      case 'FaleMais 60':
        return <span>60 minutos grátis</span>
      case 'FaleMais 120':
        return <span>120 minutos grátis</span>
        default:
          return null
    } 
  }
  return (
    <div className="card">
        <div>
          <span className="card__name">{ plan.type }</span><br/>
            {renderSwitchCase(plan.type)}
          <div className="card__price">
            <span className="card__price">{ plan.price !== '-' ? `Preço: R$${plan.price.toFixed(2)}` : 'Esse dois ddd não abrangem o nosso plano' } </span>
          </div>
        </div>
    </div>
  )
}