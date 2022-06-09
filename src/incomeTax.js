
const calculate = function (income) {
  if(income <= 1903.98){
    return 0
  }

  if(income <= 2826.65){
    return income * 7.5/100
  }

  if(income <= 3751.06){
    return income * 15/100
  }

  if(income <= 4664.68){
    return income * 22.5/100
  }

  return income * 27.5/100
}

module.exports = calculate