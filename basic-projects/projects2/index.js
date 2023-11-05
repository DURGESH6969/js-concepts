const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.getElementById('results');

  if(isNaN(height)|| height===''|| height<0){
    results.innerHTML= 'please Enter a valid height';
  } else if(isNaN(weight)|| weight===''|| weight<0){
    results.innerHTML= 'please Enter a valid weight';
  }
  else {
    const heightInMeter = height/100;
    const BMI =  (weight / (heightInMeter*heightInMeter)).toFixed(2);
    let message;
    if(BMI<18.6)
    {
      message = `You are Under Weight, Please put on some weight`;
    }
    else if(BMI>=18.6 && BMI<24.9){
      message= `You are normal`;
    }
    else{
      message= `You are Over Weight, Please shed off some weight`;
    }
    results.innerHTML = `Your BMI is ${BMI} ${message}`
  }
})