 let substract = document.querySelector('#substract');
 let add = document.querySelector('#add');

 console.log(substract);

 substract.addEventListener('click', function() {
// substrack value (-1)
 let output = document.querySelector('#result');
 let result = Number(output.textContent) - 1;
 output.textContent = result; 
 console.log(output);
});

 add.addEventListener('click', function() {
// substrack value (+1)
 let output = document.querySelector('#result');
 let result = Number(output.textContent) + 1;
 output.textContent = result;
 console.log(output);
});
