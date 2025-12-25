const heightElm = document.getElementById('height')
const weightElm = document.getElementById('weight')
const calculateBtn = document.querySelector('.calculate-btn')
const resultELm = document.querySelector('.result')
const showBmiValue = document.querySelector('.bmi-value')
const chartElm = document.querySelector('.chart')
const overlay = document.querySelector('.overlay')

let resultEnd
let calculateBmi = () => {
    // Get Values
    let weightValue = weightElm.value
    let heightValue = heightElm.value

    // Check conditions
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


    // Calculate BMI

    let bmi = weightValue / (heightmet * heightmet)

    // Show result 

    if (bmi < 18.50) {
        showBmiValue.textContent = `BMI ${bmi.toFixed(2)}`
        // resultELm.textContent = `Underweight`
        bgColorChange('Underweight')
    }
    if (bmi >= 18.51 && bmi < 24.90) {
        showBmiValue.textContent = `BMI ${bmi.toFixed(2)}`
        // resultELm.textContent = 'Healthy'
        bgColorChange('Healthy')


    }
    if (bmi >= 24.91 && bmi <= 29.90) {
        showBmiValue.textContent = `BMI ${bmi.toFixed(2)}`
        // resultELm.textContent = 'Over Weight'
        bgColorChange('Over Weight')

    }
    if (bmi >= 29.91) {
        showBmiValue.textContent = `BMI ${bmi.toFixed(2)}`
        // resultELm.textContent = 'Obesity'
        bgColorChange('Obesity')
    }
    // Clear Previous Timeout

    clearTimeout(resultEnd);

    // Set timeout

    resultEnd = setTimeout(() => {
        resultELm.style.backgroundColor = 'transparent'
        resultELm.textContent = 'Result will appear here'
        showBmiValue.textContent = 'BMI'
    }, 4000);


    // Clear Values

    heightElm.value = ''
    weightElm.value = ''


}
function bgColorChange(value) {
    switch (value) {
        case 'Underweight':
            resultELm.style.backgroundColor = 'blue'
            resultELm.textContent = 'Underweight'
            break
        case 'Healthy':
            resultELm.style.backgroundColor = 'green'
            resultELm.textContent = 'Healthy'
            break
        case 'Over Weight':
            resultELm.style.backgroundColor = 'orange'
            resultELm.textContent = 'Over Weight'
            break
        case 'Obesity':
            resultELm.style.backgroundColor = 'red'
            resultELm.textContent = 'Obesity'
            break
    }
}
calculateBtn.addEventListener('click', calculateBmi)
chartElm.addEventListener('click', () => {
    overlay.style.display = 'flex'
})
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
        overlay.style.display = 'none'

    }
})

