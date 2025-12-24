const heightElm = document.getElementById('height')
const weightElm = document.getElementById('weight')
const calculateBtn = document.querySelector('.calculate-btn')
const resultELm = document.querySelector('.result')



let resultEnd
let calculateBmi = () => {
    let weightValue = weightElm.value
    let heightValue = heightElm.value

    if (!weightValue || !heightValue) {
        alert('Please enter valid value')
        return
    }
    if (heightValue <= 0 || weightValue <= 0) {
        alert("Height and weight must be greater than 0");
        return;
    }

    if (heightValue < 50 || heightValue > 300) {
        alert("Please enter a valid height in cm between 50 to 300");
        return;
    }

    if (weightValue < 2 || weightValue > 500) {
        alert("Please enter a valid weight in kg");
        return;
    }

    // CONVERT HEIGHT CM TO METER

    let heightmet = heightValue / 100
    let bmi = weightValue / (heightmet * heightmet)
    if (bmi < 18.50) resultELm.textContent = `Underweight`
    if (bmi > 18.50 && bmi < 24.90) resultELm.textContent = 'Healthy'
    if (bmi >= 25 && bmi < 29.90) resultELm.textContent = 'Over Weight'
    if (bmi >= 30) resultELm.textContent = 'Obesity'
    clearTimeout(resultEnd);
    resultEnd = setTimeout(() => {
        resultELm.textContent = 'Result will appear here'
    }, 5000);


    heightElm.value = ''
    weightElm.value = ''


}

calculateBtn.addEventListener('click', calculateBmi)