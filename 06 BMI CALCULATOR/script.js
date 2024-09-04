const age = document.getElementById('input-age');
const male = document.getElementById('male');
const female = document.getElementById('female');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const calculateBMI = document.getElementById('calculate-bmi');
const bmiValue = document.getElementById('bmi-value');
const bmiResult = document.getElementById('bmi-result');
const resultText = document.getElementsByClassName('result-text');

document.getElementById('input-age').addEventListener('input', function () {
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  }
});

document.getElementById('weight').addEventListener('input', function () {
  if (this.value.length > 7) {
    this.value = this.value.slice(0, 7);
  }
});

document.getElementById('height').addEventListener('input', function () {
  if (this.value.length > 5) {
    this.value = this.value.slice(0, 5);
  }
});

function calculate(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    document.getElementById('modalContainer').style.display = 'flex';
  }else{
    countBmi();
  }
}

function closeModal() {
  document.getElementById('modalContainer').style.display = 'none';
}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }
    
  document.querySelector('.result-text').style.display = 'block';
  
  bmiResult.innerHTML = result;
  bmiValue.innerHTML = bmi.toFixed(2);

}

window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById('modalContainer').style.display = "none";
  }
}