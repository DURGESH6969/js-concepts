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
