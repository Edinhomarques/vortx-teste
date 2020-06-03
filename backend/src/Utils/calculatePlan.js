function tariff(call){
  switch(call){
    case '011-016':
      return 1.9
      
    case '016-011':
      return 2.90
      
    case '011-017':
      return 1.70
      
  case '017-011':
      return 2.70
      
  case '011-018':
      return 0.90
      
  case '018-011':
      return 1.90
      
    default:
      return '-'
  }
}

module.exports = tariff