const operazioni = {
    descrizione: "oggetto operazioni",
    somma: somma = (a,b) => {
        return a + " + " + b + " = " + Number(a+b); 
    },
    sottrazione: sottrazione = (a,b) => {
        return a + " - " + b + " = " + Number(a-b); 
    },
    moltiplicazione: moltiplicazione = (a,b) => {
        return a + " * " + b + " = " + Number(a*b); 
    },
    divisione: divisione = (a,b) => {
        return a + " / " + b + " = " + Number(a/b); 
    }
}

console.log(operazioni.descrizione);
console.log(operazioni.somma(100, 100));
console.log(operazioni.sottrazione(100, 7));
console.log(operazioni.moltiplicazione(5, 5));
console.log(operazioni.divisione(100, 5));
