import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {initiateCheckout} from "../lib/payments";
import products from '../products.json';

export default function Home() {
 const handleCheckout = async (id) => {
     await initiateCheckout({
         lineItems: [
             {
                 price: id,
                 quantity: 1
             }
         ]
     })
    console.log(id)
 }

  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Space Jelly Shop
          </h1>

          <p className={styles.description}>
            The best space jellyfish swag on the web!
          </p>

          <ul className={styles.grid}>
            {
              products.map(({id, name, image, price, description}) => (
                <li key={id} className={styles.card}>
                  <a href="#">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>${price}</p>
                    <p>{description}</p>
                    <p>
                        <button
                            onClick={()=> handleCheckout(id)}
                            className={styles.button}>
                            Buy now
                        </button>
                    </p>
                  </a>
                </li>
              ))
            }
          </ul>
        </main>

        <footer className={styles.footer}>
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
  )
}
