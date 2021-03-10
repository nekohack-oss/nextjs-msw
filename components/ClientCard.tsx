import React from 'react'
import useSWR from 'swr'
import { Source } from '../types/source'

export const ClientCard = () => {
    const { data, error } = useSWR<Source>('csr', () =>
        fetch('https://myapi.dev/csr').then((res) => res.json())
    )
    if (error) return <>error!</>
    if (!data) return <>...loading</>
    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
        </>
    )
}
