const input = document.getElementById('input');
const output = document.getElementById('output');
const container = document.getElementById('container');
const body = document.getElementsByTagName('body')[0];

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
                container.style.backgroundImage = `url('images/${nameValue.gender}.png')`;
                console.log(nameValue);

                if(nameValue.gender === 'male'){
                    body.style.background = '#173F5F';
                    container.style.backgroundColor = '#20639B';
                    output.style.background = '#20638B';
                    output.style.borderColor = '#173F5F';
                }else{
                    body.style.background = '#581845';
                    container.style.backgroundColor = '#900c3f';
                    output.style.background = '#900c3f';
                    output.style.borderColor = '#581845';
                }
            }
        }
        xhr.send();
    }
   
})