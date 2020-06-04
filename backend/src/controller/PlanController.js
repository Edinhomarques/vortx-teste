const tariff = require('../Utils/tariff');

module.exports = {
  calculatePlan( req, res) {
    const { destination, depot, minutes } = req.body
    const destinationOrigin = `${depot}-${destination}`  
    let plans;

    const value = tariff(destinationOrigin)

    if(value === '-'|| minutes === undefined) {
      plans = [
        {
          type: 'Sem Plano',
          price: '-'
        },
        { 
          type: 'FaleMais 30',
          price: '-', 
        },
        {
          type: 'FaleMais 60',
          price: '-', 
        },
        {
          type: 'FaleMais 120',
          price: '-'
        }
      ]
      return res.status(200).send(plans)
    }
    
     plans = [
      {
        type: 'Sem Plano',
        price: value * minutes 
      },
      { 
        type: 'FaleMais 30',
        price: minutes > 30 ? (value + (value * 0.1)) * (minutes - 30) : 0, 
      },
      {
        type: 'FaleMais 60',
        price: minutes > 60 ? (value + (value * 0.1))* (minutes - 60) : 0, 
      },
      {
        type: 'FaleMais 120',
        price: minutes > 120 ? (value + (value * 0.1)) * (minutes - 120) : 0
      }
    ]
    
    return res.status(200).send(plans)
  }
}