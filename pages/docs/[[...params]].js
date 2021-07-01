import {useRouter} from 'next/router'
function Doc() {
    const router = useRouter()
    //here router.query initally give undefined and it gives an array //in Catch All Routes
    const { params = []} = router.query 
    console.log(params)
    if(params.length ===2){
        return <h1>Viewing docs for feature : {params[0]} and concept : {params[1]}</h1>
    } 
    else if( params.length === 1){
        return <h1>Viewing docs for feature {params[0]} </h1>
    }
    /*
     * if want to show by default page when query is simple /docs 
     * then rename file name and put into a bracket
     *
     * 
    */
    return <h1>Docs Home Page</h1>
   
    
}

export default Doc