import React from 'react';
import Header from '../header/header';

type Props = {
  children?: React.ReactElement
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
