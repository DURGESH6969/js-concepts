# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## project 1 

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((btn)=>{
  console.log(btn);
  btn.addEventListener('click',function(e){
    // console.log(e);
    // console.log(e.target);
    let id = e.target.id;
    switch(id){
      case 'grey':
      body.style.backgroundColor = 'grey';
      break;
      case  'white':
      body.style.backgroundColor = 'white';
      break;
      case 'yellow':
      body.style.backgroundColor = 'yellow';
      break;
      case 'pink':
      body.style.backgroundColor = 'pink';
      break;
      default:
      body.style.backgroundColor = 'blue';
    
  }
  });
})

```
## Project 2 
```javascript
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
```

