const tariff = require('../Utils/calculatePlan');

module.exports = {
  calculatePlan( req, res){
    const { destination, depot, minutes } = req.body
    const destinationOrigin = `${depot}-${destination}`  
    
    let value = tariff(destinationOrigin)
    
    const plans = [
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
    return res.send(plans)
  }
}