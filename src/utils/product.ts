import { MockData } from '../types/product'

export function calculateTotalPrice(products: MockData[]): number {
  return products.reduce((sum, product) => sum + product.price, 0)
}
