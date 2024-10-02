const form = document.querySelector('form')
//this use can give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if(height === ''||height<0||isNaN(height)){
    results.innerHTML =`please give a valid height ${height}`
  }
  else if(weight === ''||weight<0||isNaN(weight)){
    results.innerHTML =`please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result 
    const opt = results.innerHTML = bmi
    if(bmi<18.6){
      results.innerHTML = `BMI : ${opt} you are under weight`
    }
    else if(bmi>18.6&&bmi<24.9){
      results.innerHTML = `BMI : ${opt} your weight is normal`
    }
    else if(bmi>24.9){
      results.innerHTML = `BMI : ${opt} you are over weight`
    }
  }
})
