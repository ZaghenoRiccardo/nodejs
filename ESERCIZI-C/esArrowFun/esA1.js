let a = 10;
let b = 2;

const add = (a,b) => {
    return a + b;
};

const min = (a,b) => {
    return a - b;
};

const mul = (a,b) => {
    return a * b;
};

const div = (a,b) => {
    return a / b;
};

const risultati = [add(a,b) , min(a,b), mul(a,b), div(a,b)]

for (let i = 0; i < risultati.length; i++) {
    console.log(risultati[i]); 
}
