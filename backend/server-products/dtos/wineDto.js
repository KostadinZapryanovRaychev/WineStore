class WineDto {
  constructor(name, price, description, photo, qty, category) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.photo = photo;
    this.qty = qty;
    this.category = category;
  }
}

module.exports = WineDto;
