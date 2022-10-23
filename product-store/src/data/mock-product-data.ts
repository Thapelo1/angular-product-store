import { Product } from '../models/product'

export class MockData {
  public static products: Product[] = [
    {
      'id': 11,
      'title': 'OPPO F5 Youth (Gold, 32 GB)',
      'modelName': 'F5 Youth',
      'color': 'Gold',
      'productType': 'Mobile',
      'brand': 'OPPO',
      'price': 16990
    },
    {
      'id': 12,
      'title': 'Dell Inspiron 7000',
      'modelName': 'Inspiron',
      'color': 'Gray',
      'productType': 'Laptop',
      'brand': 'DELL',
      'price': 59990
    }
,
    {
      'id': 13,
      'title': 'Acer 7000',
      'modelName': 'Acer',
      'color': 'Pink',
      'productType': 'Laptop',
      'brand': 'Acer',
      'price': 12000
    }]
}
