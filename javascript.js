let input = document.getElementById('input');
let button = document.querySelectorAll('button');

button.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target.textContent)
        const operators = ['+', '-', '*', '%', '/'];

        if(e.target.textContent==='C'){
            input.innerText=""
        }
        else if(e.target.textContent ==='<'){
            input.innerHTML = input.innerText.slice(0,-1)
        }
        else if(e.target.textContent ==='='){
            try{
                input.innerText = eval(input.innerText)

            }catch(err){
alert('InValid Expression')
            }
        }
        else {
            
            if(operators.includes(e.target.textContent)){
                console.log(operators.includes(e.target.textContent))
                if(input.innerText ==='' || operators.includes(input.innerText.slice(-1))){
                    console.log(operators.includes(input.innerText.slice(-1)))
                    return;
                }

            }
            input.innerText += e.target.textContent

        }
        input.scrollLeft = input.scrollWidth
    })
})