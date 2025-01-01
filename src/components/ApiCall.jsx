import React, { useEffect, useState } from 'react'

export const ApiCall = () => {
    const [data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products')
                const data = await res.json()
                if (data) {
                    setData(data.products)
                }
            } catch (error) {
                console.error(error)

            }

        }
        if (data === null) {

            fetchData()
        }
    }, [])


    return (
        <div>
            <ul>

                {data && data.map((itme, index) => (
                    <li key={index}>{itme.description}</li>
                ))}
            </ul>
        </div>
    )
}
