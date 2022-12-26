const input = document.getElementById('input');
const output = document.getElementById('output');

let nameValue = '';

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',`https://api.genderize.io/?name=${input.value}`, true);

        xhr.onload = function() {
            if(this.status == 200) {
                nameValue = JSON.parse(this.responseText);
                output.classList.add('classWord');
                output.innerHTML = `<span1>${nameValue.name} </span1>`;
                output.innerHTML += `<span>gender:</span>`+ nameValue.gender + "<br>";
                output.innerHTML += `<span>probability:</span>`+ nameValue.probability + "<br>";
                console.log(nameValue);
            }
        }
        xhr.send();
    }
   
})