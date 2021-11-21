import { useEffect, useState } from  'react'
import MiddleCards from './MiddleCards'


const FetchData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    const FetchData = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
            const data = await response.json()
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    FetchData()
}, [])

    return(
        <>
            <MiddleCards queenData={data}/>
        </>
    )
}

export default FetchData