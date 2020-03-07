let cris = new Figura("Cristiane", "Brasil", "Atacante", "./img/cris.jpeg");
let marta = new Figura("Marta", "Brasil", "Meio Campo", "./img/marta.jpg");
let debinha = new Figura("Debinha", "Brasil", "Atacante", "./img/debinha.jpg");

let colecaoFiguras = [];

colecaoFiguras.push(cris);
colecaoFiguras.push(marta);
colecaoFiguras.push(debinha);

for (let i = 0; i < colecaoFiguras.length; i++) {
    colecaoFiguras[i].exibirFigurinha();
}