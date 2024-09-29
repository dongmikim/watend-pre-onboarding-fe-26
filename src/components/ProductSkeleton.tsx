function ProductSkeleton() {
  return (
    <>
      <div
        className="skeleton-title"
        style={{ width: '70%', height: '24px', background: '#f0f0f0', marginBottom: '10px' }}
      />
      <div
        className="skeleton-price"
        style={{ width: '40%', height: '18px', background: '#f0f0f0', marginBottom: '10px' }}
      />
      <div
        className="skeleton-date"
        style={{ width: '60%', height: '18px', background: '#f0f0f0' }}
      />
    </>
  )
}

export default ProductSkeleton
