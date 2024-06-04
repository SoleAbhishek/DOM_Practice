let btn = document.querySelector('.convert');
let reset = document.querySelector('.reset');
btn.addEventListener('click',function(){
    let inputValue = parseFloat(document.querySelector('#inputValue').value);
    let inputType = document.querySelector('#inputType').value;
    let result = document.querySelector('#result');
    let outputType = document.querySelector('#outputType').value;
    if(inputType=='default'||outputType=='default')
    {
        alert("Invalid Action");
    }
    if(isNaN(inputValue))
    {
        result.value = 'invalid input';
    }
    if(inputType==outputType)
    {
        alert("Enter Different Units For Conversion");
    }
    if(inputType=='Celcius'&&outputType=='Fahrenheit')
    {
        result.value = `${((9/5)*inputValue+32).toFixed(2)}°F`; 
        return;
    }
    if(inputType=='Celcius'&&outputType=='Kelvin')
    {
        result.value = `${(inputValue+273.15).toFixed(2)}°K`; 
    }
    if(inputType=='Fahrenheit'&&outputType=='Celcius')
    {
        result.value = `${((inputValue-32)*5/9).toFixed(2)}°C`; 
    }
    if(inputType=='Fahrenheit'&&outputType=='Kelvin')
    {
        result.value = `${((inputValue-32)*(5/9)+273.15).toFixed(2)}°K`; 
    }
    if(inputType=='Kelvin'&&outputType=='Celcius')
    {
        result.value = `${(inputValue-273.15).toFixed(2)}°C`; 
    }
    if(inputType=='Kelvin'&&outputType=='Fahrenheit')
    {
        result.value = `${((inputValue-273.15)*9/5+32).toFixed(2)}°F`;
    }
});

// Code for Reset Button

reset.addEventListener('click',function(e){
    document.querySelector('#inputValue').value = '';
    document.querySelector('#inputType').selectedIndex = 0;
    document.querySelector('#outputType').selectedIndex = 0;
    document.querySelector('#result').value='';
});