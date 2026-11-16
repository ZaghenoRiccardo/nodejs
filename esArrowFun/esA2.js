const hoFinito = () => {
    return "Lavoro Completato!";
};

const nonRiesco = () => {
    return "Non sono capace!";
};

function pippo(nonRiesco, hoFinito){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }

    console.log(nonRiesco());
    console.log(hoFinito());
}

pippo(nonRiesco,hoFinito);
