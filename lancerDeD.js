const lancer = document.querySelector(`#lancer`);

lancer.addEventListener(`click`, function () {
    let x = document.querySelector(`#valX`).value;
    let D = document.querySelector(`#valD`).value;
    let a = document.querySelector(`#valA`).value;
    LancerDeD(x, D, a);
});

function LancerDeD(x, D, a) {
    // réinitialisation de l'interface
    document.querySelector(`#aff`).innerHTML = `Résultat de xDy+a :`;
    document.querySelector(`#result`).value = ``;
    // x nb de D
    x = parseInt(x);
    // D nombre de face
    D = parseInt(D);
    // bonus ajouté
    a = parseInt(a);
    // résultat du lancer
    let r = 0;
    // résultat détailler du lancer
    let l = '';
    // conteneur pour le résultat détailler
    let y;
    if (isNaN(x) || isNaN(D)) {
        alert(`x=${x} et/ou y=${D} ne sont pas des nombres`);
        return NaN;
    } else if (x == 0 || D == 0) {
        alert(`x=${x} et/ou y=${D} ne fonctionnent pas`);
        return NaN;
    } else {
        // calculer x lancer de dé à D face
        for (i = 1; i <= x; i++) {
            y = random1aD(D);
            r += y;
            l += y + ' + ';
        };
        // pour donner une valeur par défaut à a n'est pas bien saisi
        if (isNaN(a)) {
            a = 0;
        };
        r += a;
        l = `${l.substring(0, l.length - 3)}`;
        // affichage du lancé
        document.querySelector(`#aff`).innerHTML = `Résultat de ${x}D${D}+${a} :`;
        document.querySelector(`#result`).value = `${r}`
        document.querySelector(`#resultD`).value = `${l}`;
        return r;
    };
};

function random1aD(D) {
    // floor arrondi à l'inf, +1 car le résultat est init entre 0 et D-1
    return Math.floor((Math.random()) * D) + 1;
};

// function succOrFail(x, D, a, diff) {
//     if (isNaN(LancerDeD(x, D, a))) {
//         return;
//     } else {
//         if (LancerDeD(x, D, a) < diff) {
//             alert(`C'est une `);
//         };
//     };
// };