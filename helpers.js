let digit7 = document.querySelector('#digit7');
let digit8 = document.querySelector('#digit8');
let digit9 = document.querySelector('#digit9');

let digit4 = document.querySelector('#digit4');
let digit5 = document.querySelector('#digit5');
let digit6 = document.querySelector('#digit6');

let digit1 = document.querySelector('#digit1');
let digit2 = document.querySelector('#digit2');
let digit3 = document.querySelector('#digit3');

let digit0 = document.querySelector('#digit0');


let multiply = document.querySelector('#multiply');
let substract = document.querySelector('#substract');
let plus = document.querySelector('#plus');
let equal = document.querySelector('#equal');
let result = document.querySelector('.result');
let clear = document.querySelector('#clear');


let firstNumber = '';
let secondNumber = '';
let startBuildingSecondNumber = false;
let operation = '';


function buildNumber(digit){

    if(startBuildingSecondNumber === false){

        firstNumber = firstNumber + digit;
        result.innerHTML = firstNumber;
    }else{
        secondNumber = secondNumber + digit;
        result.innerHTML = secondNumber;
    }
}


function applyOperation(operation){

    if(operation === 'multiply'){

        let operationResult = Number(firstNumber)*Number(secondNumber);
        result.innerHTML = `${firstNumber}*${secondNumber} = ${operationResult}`;
        firstNumber = '';
        secondNumber = '';
        startBuildingSecondNumber = false;

    }
    
    if(operation === 'substract'){
        let operationResult = Number(firstNumber) - Number(secondNumber);
        result.innerHTML = `${firstNumber}-${secondNumber} = ${operationResult}`;
        firstNumber='';
        secondNumber = '';
        startBuildingSecondNumber = false;
    }


    if(operation === 'plus'){

        let operationResult = Number(firstNumber) + Number(secondNumber);
        result.innerHTML = `${firstNumber}+${secondNumber} = ${operationResult}`;
        firstNumber='';
        secondNumber = '';
        startBuildingSecondNumber = false;

    }
}

function reset(){

    location.reload();
}

clear.addEventListener('click', () =>{

    reset();
})

digit7.addEventListener('click', () => {

    buildNumber(7);
});

digit8.addEventListener('click', () => {

    buildNumber(8);
});

digit9.addEventListener('click', () =>{

    buildNumber(9);
});

digit4.addEventListener('click', () =>{

    buildNumber(4);
});

digit5.addEventListener('click', () =>{

    buildNumber(5);
});

digit6.addEventListener('click', () =>{

    buildNumber(6);
});

digit1.addEventListener('click', () =>{

    buildNumber(1);
});

digit2.addEventListener('click', () =>{

    buildNumber(2);
});

digit3.addEventListener('click', () =>{

    buildNumber(3);
});


digit0.addEventListener('click', () =>{

    buildNumber(0);
})



multiply.addEventListener('click', () =>{

    startBuildingSecondNumber = true;
    operation = 'multiply';
})

substract.addEventListener('click', () =>{

    startBuildingSecondNumber = true;
    operation = 'substract';
})

plus.addEventListener('click', () =>{

    startBuildingSecondNumber = true;
    operation = 'plus';
})


equal.addEventListener('click', () =>{

    applyOperation(operation);
})