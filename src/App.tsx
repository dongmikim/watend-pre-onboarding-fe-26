import { useState, useEffect, useRef, useCallback } from 'react'
import { calculateTotalPrice } from './utils/product'
import { getMockData } from './api/product'
import { MockData } from './types/product'
import ProductSkeleton from './components/ProductSkeleton'
import ProductItem from './components/ProductItem'

function ProductList() {
  const [products, setProducts] = useState<MockData[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef<IntersectionObserver | null>(null)

  const fetchProducts = async () => {
    if (loading || !hasMore) return
    setLoading(true)
    try {
      const { data, isEnd } = await getMockData(page)
      setProducts(prevProducts => [...prevProducts, ...data])
      setHasMore(!isEnd)
      setPage(prevPage => prevPage + 1)
    } catch (error) {
      console.error('상품 목록 가져오기 실패:', error)
    } finally {
      setLoading(false)
    }
  }

  const lastProductElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          fetchProducts()
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore, fetchProducts],
  )

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    console.log('products', products)
  }, [products])

  const totalPrice = calculateTotalPrice(products)

  return (
    <div>
      <h1>Product List</h1>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {products.map((_, index) => (
        <div
          key={_.productId}
          ref={index === products.length - 1 ? lastProductElementRef : null} // 마지막 아이템일 경우 ref 설정
        >
          <ProductItem data={_} loading={loading} />
        </div>
      ))}
      {loading && <ProductSkeleton />}
    </div>
  )
}

export default ProductList
