function ElectricalAppliance(name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugin = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}
  

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;

}


function Kettle (name, power, brand, material) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.material = material;
    this.isPlugged = true;
}

Kettle.prototype = new ElectricalAppliance();

function Computer (name, power, brand, formfactor) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.formfactor = formfactor;
    this.isPlugged = false;
}
  
Computer.prototype = new ElectricalAppliance();
  

function WashingMachine (name, power, brand, vol) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.vol = vol;
    this.isPlugged = false;
}

WashingMachine.prototype = new ElectricalAppliance();


const teaFriend = new Kettle("Bra", 2000, "Xiaomi", "steel");

const pc = new Computer("Notebook", 230, "Asus", "notebook");

const stirka = new WashingMachine("WL-21653", 1500, "Bosch", 6);

teaFriend.unplug();

pc.plugin();


console.log(teaFriend)
console.log(pc)
console.log(stirka)