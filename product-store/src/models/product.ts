class Product {
  id: number;
  title: string;
  modelName: string;
  color: string;
  productType: string;
  brand: string;
  price:number;

  constructor(id:number,
    title:string,
    modelName:string,
    color:string,
    productType: string,
    brand: string,
    price: number
    ) {
    this.id = id;
    this.title = title;
    this.modelName = modelName;
    this.color = color;
    this.productType = productType;
    this.brand = brand;
    this.price = price;
  }
}
