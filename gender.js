const input = document.getElementById('input');
const output = document.getElementById('output');
const body = document.getElementsByTagName('body')[0];
const container = document.getElementById('container');

let nameValue = '';

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        /* body.style.backgroundImage = none; */
        let xhr = new XMLHttpRequest();
        xhr.open('GET',`https://api.genderize.io/?name=${input.value}`, true);

        xhr.onload = function() {
            if(this.status == 200) {
                nameValue = JSON.parse(this.responseText);
                output.classList.add('classWord');
                output.innerHTML = `<span1>${nameValue.name} </span1>`;
                output.innerHTML += `<span>gender:</span>`+ nameValue.gender + "<br>";
                output.innerHTML += `<span>probability:</span>`+ nameValue.probability + "<br>";
                container.style.backgroundImage = `url('images/${nameValue.gender}.png')`;
                console.log(nameValue);
            }
        }
        xhr.send();
    }
   
})