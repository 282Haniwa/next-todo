import React from 'react';
import Link from 'next/link';
import { RootStyles } from '../styles/common';

export default () => (
  <>
    <RootStyles>
      <Link href="/counter">
        <a>カウンターAPP</a>
      </Link>
    </RootStyles>
  </>
);
