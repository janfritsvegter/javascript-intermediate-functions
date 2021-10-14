// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
let numberCumLaude = 0;
const positionCumLaude = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        numberCumLaude++;
        positionCumLaude.push(i);
    }
}
console.log("Het aantal leerlingen die Cum Laude geslaagd zij is: " + numberCumLaude + " en ze staan op positie " + positionCumLaude);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(arr) {
    let numberCumLaude = 0;
    const positionCumLaude = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 8) {
            numberCumLaude++;
            positionCumLaude.push(i);
        }
    }
    const returnObject = {
        numberCumLaude: numberCumLaude,
        positionCumLaude: positionCumLaude,
    }
    return returnObject;
}

function resultCumLaude(resultCumLaude) {
    if (resultCumLaude.numberCumLaude === 0) {
        console.log("Er zijn geen leerlingen Cum Laude geslaagd.");
    } else {
        console.log("Het aantal leerlingen die Cum Laude geslaagd zij is: " + resultCumLaude.numberCumLaude + " en ze staan op positie " + resultCumLaude.positionCumLaude);
    }
}

let result = cumLaude(grades);
resultCumLaude(result);
result = cumLaude([6, 4, 5]);
resultCumLaude(result);
result = cumLaude([8, 9, 4, 6, 10]);
resultCumLaude(result);

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
let sumArray = 0;
for (let i = 0; i < grades.length; i++) {
    sumArray = sumArray + grades[i];
}
const averGrade = sumArray / grades.length;
console.log(averGrade);

const sum = (previousValue, currentValue) => previousValue + currentValue;
console.log(grades.reduce(sum) / grades.length);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(arr) {
    let sumArray = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArray = sumArray + arr[i];
    }
    const averageGrade = sumArray / arr.length;
    return averageGrade;
}

function averageGrade2(arr) {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    return (arr.reduce(sum) / arr.length);
}

function resultAverageGrade(resultAverageGrade) {
    console.log("Het gemiddelde cijfer is " + resultAverageGrade);
}

result = averageGrade(grades);
resultAverageGrade(result);
result = averageGrade([6, 4, 5]);
resultAverageGrade(result);
result = averageGrade([8, 9, 4, 6, 10]);
resultAverageGrade(result);
console.log();
result = averageGrade2(grades);
resultAverageGrade(result);
result = averageGrade2([6, 4, 5]);
resultAverageGrade(result);
result = averageGrade2([8, 9, 4, 6, 10]);
resultAverageGrade(result);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function resultAverageGrade2(resultAverageGrade) {
    console.log("Het gemiddelde cijfer is " + resultAverageGrade.toFixed(2));
}

console.log();
result = averageGrade2(grades);
resultAverageGrade2(result);
result = averageGrade2([6, 4, 5]);
resultAverageGrade2(result);
result = averageGrade2([8, 9, 4, 6, 10]);
resultAverageGrade2(result);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
let highGrade = 0;
let nmbrHighGrade = 0;
const posHighGrade = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] === highGrade) {
        nmbrHighGrade++;
        posHighGrade.push(i);
    } else if (grades[i] > highGrade) {
        posHighGrade.splice(0, posHighGrade.length);
        highGrade = grades[i];
        nmbrHighGrade = 1;
        posHighGrade.push(i);
    }
}
console.log("Het het hoogste cijfer is: " + highGrade + " het komt " + nmbrHighGrade + " keer voor, en ze staan op positie " + posHighGrade);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(arr) {
    let highestGrade = 0;
    let numberHighestGrade = 0;
    const positionHighestGrade = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === highestGrade) {
            numberHighestGrade++;
            positionHighestGrade.push(i);
        } else if (arr[i] > highestGrade) {
            positionHighestGrade.splice(0, positionHighestGrade.length);
            highestGrade = arr[i];
            numberHighestGrade = 1;
            positionHighestGrade.push(i);
        }
    }
    const returnObject = {
        highestGrade: highestGrade,
        numberHighestGrade: numberHighestGrade,
        positionHighestGrade: positionHighestGrade,
    }
    return returnObject;
}

function resultHighestGrade(resultHighestGrade) {
    console.log("Het het hoogste cijfer is: " + resultHighestGrade.highestGrade + " het komt " + resultHighestGrade.numberHighestGrade + " keer voor, en ze staan op positie " + resultHighestGrade.positionHighestGrade);
}

result = highestGrade(grades);
resultHighestGrade(result);
result = highestGrade([6, 4, 5]);
resultHighestGrade(result);
result = highestGrade([8, 9, 4, 6, 10]);
resultHighestGrade(result);
