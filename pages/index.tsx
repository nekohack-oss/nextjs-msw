import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../static/Home.module.css'
import { Source } from '../types/source'

type Props = { data: Source }

export default function Home(props: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>{props.data.title}</h1>
                <p>{props.data.text}</p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const data: Source = await fetch('https://myapi.dev/ssr').then((res) =>
        res.json()
    )
    return { props: { data } }
}
