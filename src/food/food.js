function MakeFood(name, price) {
  this.name = name;
  this.price = price;
}

const Sicilian = new MakeFood("Sicilian 🍕", 330);

const Caprese = new MakeFood("Caprese 🍕", 380);

const Pepperoni = new MakeFood("Pepperoni 🍕", 420);

const Margherita = new MakeFood("Margherita 🍕", 470);

const Napoletana = new MakeFood("Napoletana 🍕", 300);

export const pizzas = {
  Sicilian,
  Caprese,
  Pepperoni,
  Margherita,
  Napoletana,
};

const Ravioli = new MakeFood("Ravioli 🍝", 330);

const Fusilli = new MakeFood("Fusili 🍝", 330);

const Penne = new MakeFood("Penne 🍝", 400);

const Rigatoni = new MakeFood("Rigatoni 🍝", 360);

const Farfalle = new MakeFood("Farfalle 🍝", 360);

export const pasta = {
  Ravioli,
  Fusilli,
  Penne,
  Rigatoni,
  Farfalle,
};

const Mustard = new MakeFood("Mustard 🧂", 10);

const Mayo = new MakeFood("Mayo 🍼", 10);

const Ketchup = new MakeFood("Ketchup 🍅", 10);

const Salt = new MakeFood("Salt 🧂", 10);

const Pepper = new MakeFood("Pepper 🧂", 10);

export const sideDishes = {
  Mustard,
  Mayo,
  Ketchup,
  Salt,
  Pepper,
};

function MakeDrink(name, price, volume) {
  MakeFood.call(this, name, price);
  this.volume = volume;
}

const Cola = new MakeDrink("Coca Cola 🧴", 150, 330);

const Sprite = new MakeDrink("Beer 🍺", 180, 330);

const Tea = new MakeDrink("Tea 🍵", 150, 200);

export const drinks = {
  Cola,
  Sprite,
  Tea,
};

export const personsAtTable = [
  { person: 1, order: false, orderFood: [] },
  { person: 2, order: false, orderFood: [] },
  { person: 3, order: false, orderFood: [] },
  { person: 4, order: false, orderFood: [] },
];
