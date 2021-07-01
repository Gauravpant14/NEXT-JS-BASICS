import { useRouter } from 'next/router'
function Review(){
    const router = useRouter()
    console.log(router.query)
    const { productId,reviewId } = router.query 
    return <h1> review id : {reviewId } and product id { productId } </h1>
}

export default Review