import React from 'react'
import Link from 'next/link'
const ProductList = () => {
    return (
        <>
        <Link href="/">
        <a>Home Page</a>
        </Link>
        <Link href="/product/1">
        <a> <h2>Product 1</h2> </a>
        </Link>
        <Link href="/product/2">
        <a> <h2>Product 2</h2> </a>
        </Link>

      {/* Replace Prop will replace */}
        
        <Link href="/product/3" replace>
        <a> <h2>Product 3</h2> </a>
        </Link>
           
          
        </>
    )
}

export default ProductList
