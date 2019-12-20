import React from "react";
import styles from 'styled-components';

const Head = styles.header`
font-size: 4rem;
display:flex;
justify-content:center;
`


export default function Header() {
  return (
    <Head>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty <br />Fan Page</h1>
    </header>
    </Head>
  );
}
