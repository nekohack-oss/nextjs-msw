import React from 'react'
import Head from 'next/head'

import '../static/globals.css'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    require('../.mocks')
}

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
