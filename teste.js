class Gato {

  constructor(porte, cor, pelo, temperamento) {
    this.porte = porte;
    this.cor = cor;
    this.pelo = pelo;
    this.temperamento = temperamento;
  }

  espirra() {
    console.log("Atchim!!!");
  }

  dorme() {
    console.log("ZZzZzzzZ");
  }
};

katy = new Gato("medio", "rajada", "curto", "chata");
thomas = new Gato("grande", "branco", "longo", "agitado");

console.log("katy", katy);
console.log("thomas", thomas);


thomas.dorme();
katy.espirra();
