class ElectricalAppliance {
  constructor(name, power, brand){
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.isPlugged = false;
  }

  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  

  unPlug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;

  }
}



class Kettle extends ElectricalAppliance {
  constructor (name, power, brand, material) {
    super(name, power, brand);
    this.material = material;
    this.isPlugged = true;
  }
}


class Computer extends ElectricalAppliance {
  constructor(name, power, brand, formfactor) {
    super(name, power, brand);
    this.formfactor = formfactor;
    this.isPlugged = false;
  }
}

class WashingMachine extends ElectricalAppliance {
  constructor (name, power, brand, vol) {
    super(name, power, brand);
    this.volume = vol;
    this.isPlugged = false;
  }
}


const teaFriend = new Kettle("Bra", 2000, "Xiaomi", "steel");

const pc = new Computer("Notebook", 230, "Asus", "notebook");

const stirka = new WashingMachine("WL-21653", 1500, "Bosch", 6);

teaFriend.unPlug();

pc.plugIn();


console.log(teaFriend)
console.log(pc)
console.log(stirka)