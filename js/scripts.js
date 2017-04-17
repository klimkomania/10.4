function Telefon(marka, model, cena, kolor) {
	this.marka = marka; 
	this.model = model;
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", model " + this.model + ", kolor to " + this.kolor + ", a cena to " + this.cena + " zł.");
}

var Apple = new Telefon("Apple", "iPhone 6S", 2250, "srebrny");
var Xiaomi = new Telefon("Xiaomi", "Redmi Note 4", 1000, "szary");
var Lenovo = new Telefon("Lenovo", "K5", 700, "czarny");
var Samsung = new Telefon("Samsung", "Galaxy S8", 3000, "czarny");

Apple.printInfo();
Xiaomi.printInfo();
Lenovo.printInfo();
Samsung.printInfo();