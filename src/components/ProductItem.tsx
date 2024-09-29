import { MockData } from '../types/product'
import ProductSkeleton from './ProductSkeleton'

interface Props {
  data: MockData
  loading: boolean
}

function ProductItem({ data, loading }: Props) {
  if (loading || !data) {
    return <ProductSkeleton />
  }

  return (
    <>
      <h2>{data.productName}</h2>
      <p>Price: ${data.price}</p>
      <p>Bought Date: {data.boughtDate}</p>
    </>
  )
}

export default ProductItem
