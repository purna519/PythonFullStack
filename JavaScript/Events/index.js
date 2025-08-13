// whether person is eligible for vote or not

let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click',() => {
    let data = document.getElementById('age').value;
    if(data >= 18){
        result.innerText='You are eligible for vote';
    }
    else{
        result.innerText='You are not eligible for vote';
    }
    document.getElementById('age').value = '';
})

// age caluclator

let result1 = document.getElementById('result1');

document.getElementById('btn1').addEventListener('click', () => {
    let dob = document.getElementById('dob').value;
    let today = new Date();
    today.setHours(0,0,0,0);
    let dobDate = new Date(dob);
    dobDate.setHours(0,0,0,0);

    if(dobDate === ''){
        result1.innerText = 'please enter valid date';
        return;
    }else {
        let diff = today - dobDate;
        let diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        let diffInYears = Math.floor(diffInDays / 365.25);

        result1.innerText = 'your age is ' + diffInYears;

        document.getElementById('dob').value = '';
    }
})

// BMI Calculator
let result2 = document.getElementById('result2');

document.getElementById('btn2').addEventListener('click', ()=> {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    if(weight === '' || height === '') {
        result2.innerText = 'please enter valid weight and height';
        return;
    }
    else {
        let bmi = weight / height ** 2;
        result2.innerText = 'Your BMI is ' + bmi.toFixed(2);
    }

    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
})

// Conversions
let result3 = document.getElementById('result3');

document.getElementById('btn3').addEventListener('click', () => {

    let value1st = document.getElementById('value1').value;

    let element1 = document.getElementById('select1');
    let value1 = element1.options[element1.selectedIndex].text;

    let element2 = document.getElementById('select2');
    let value2 = element2.options[element2.selectedIndex].text;

    if(value1 === value2) {
        result3.innerText = 'Please select different units for conversion';
        return;
    }
    
    let final;

    if (value1 === 'Meters' && value2 === 'Centimeters') final = value1st * 100 + ' cm';
    else if (value1 === 'Meters' && value2 === 'Millimeters') final = value1st * 1000 + ' mm';
    else if (value1 === 'Meters' && value2 === 'Feet') final = value1st * 3.28084 + ' ft';
    else if (value1 === 'Meters' && value2 === 'Inches') final = value1st * 39.3701 + ' in';
    else if (value1 === 'Meters' && value2 === 'Miles') final = value1st * 0.000621371 + ' mi';

    else if (value1 === 'Centimeters' && value2 === 'Meters') final = value1st / 100 + ' m';
    else if (value1 === 'Centimeters' && value2 === 'Millimeters') final = value1st * 10 + ' mm';
    else if (value1 === 'Centimeters' && value2 === 'Feet') final = value1st * 0.0328084 + ' ft';
    else if (value1 === 'Centimeters' && value2 === 'Inches') final = value1st * 0.393701 + ' in';
    else if (value1 === 'Centimeters' && value2 === 'Miles') final = value1st * 6.2137e-6 + ' mi';

    else if (value1 === 'Millimeters' && value2 === 'Meters') final = value1st / 1000 + ' m';
    else if (value1 === 'Millimeters' && value2 === 'Centimeters') final = value1st / 10 + ' cm';
    else if (value1 === 'Millimeters' && value2 === 'Feet') final = value1st * 0.00328084 + ' ft';
    else if (value1 === 'Millimeters' && value2 === 'Inches') final = value1st * 0.0393701 + ' in';
    else if (value1 === 'Millimeters' && value2 === 'Miles') final = value1st * 6.2137e-7 + ' mi';

    else if (value1 === 'Feet' && value2 === 'Meters') final = value1st * 0.3048 + ' m';
    else if (value1 === 'Feet' && value2 === 'Centimeters') final = value1st * 30.48 + ' cm';
    else if (value1 === 'Feet' && value2 === 'Millimeters') final = value1st * 304.8 + ' mm';
    else if (value1 === 'Feet' && value2 === 'Inches') final = value1st * 12 + ' in';
    else if (value1 === 'Feet' && value2 === 'Miles') final = value1st * 0.000189394 + ' mi';

    else if (value1 === 'Inches' && value2 === 'Meters') final = value1st * 0.0254 + ' m';
    else if (value1 === 'Inches' && value2 === 'Centimeters') final = value1st * 2.54 + ' cm';
    else if (value1 === 'Inches' && value2 === 'Millimeters') final = value1st * 25.4 + ' mm';
    else if (value1 === 'Inches' && value2 === 'Feet') final = value1st / 12 + ' ft';
    else if (value1 === 'Inches' && value2 === 'Miles') final = value1st * 1.5783e-5 + ' mi';

    else if (value1 === 'Miles' && value2 === 'Meters') final = value1st * 1609.34 + ' m';
    else if (value1 === 'Miles' && value2 === 'Centimeters') final = value1st * 160934 + ' cm';
    else if (value1 === 'Miles' && value2 === 'Millimeters') final = value1st * 1.609e+6 + ' mm';
    else if (value1 === 'Miles' && value2 === 'Feet') final = value1st * 5280 + ' ft';
    else if (value1 === 'Miles' && value2 === 'Inches') final = value1st * 63360 + ' in';

    else if (value1 === 'kg' && value2 === 'lbs') final = value1st * 2.20462 + ' lbs';
    else if (value1 === 'lbs' && value2 === 'kg') final = value1st * 0.453592 + ' kg';

    else {
        result3.innerText = 'Conversion not supported yet.';
        return;
    }

    // Print result rounded to 2 decimal places
    result3.innerText = final;

})



