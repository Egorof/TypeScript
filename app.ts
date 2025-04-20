abstract class DeliveryItem {
  items: DeliveryItem[];

  constructor() {}

  addItem(item: DeliveryItem) {
    this.items.push(item);
  }
  getItemsPrices(): number {
    return this.items.reduce(
      (acc: number, item: DeliveryItem) => (acc += item.getPrice()),
      0
    );
  }
  abstract getPrice(): number;
}

export class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }

  override getPrice(): number {
    return this.getItemsPrices() + this.deliveryFee;
  }
}

export class Package extends DeliveryItem {
  override getPrice(): number {
    return this.getItemsPrices();
  }
}
