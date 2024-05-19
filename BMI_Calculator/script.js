const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('.height').value);
    const weight = parseInt(document.querySelector('.weight').value);
    const result = document.querySelector('.results');

    if(height=='' || height<=0 || isNaN(height)){
        result.innerHTML = "<span>Please Enter Valid Height</span>"
    }
    else if(weight=='' || weight<=0 || isNaN(weight)){
        result.innerHTML = "<span>Please Enter Valid Weight</span>"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<span>Oops!! Your BMI is ${bmi} , You are underweight</span>`
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
            result.innerHTML = `<span>Hurray!! Your BMI is ${bmi} , You are in normal weight</span>`
        }
        else{
            result.innerHTML = `<span>Oops!! Your BMI is ${bmi} , You are overweight</span>`
        }
        
    }
})