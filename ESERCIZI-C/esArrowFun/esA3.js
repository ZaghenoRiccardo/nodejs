const finito = function() {
    return "lavoro completato!";
};

const capace = function() {
    return "Non sono capace!";
};

const array = [finito(), capace()];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
