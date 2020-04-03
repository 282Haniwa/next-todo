import React from 'react';
import Link from 'next/link';
import { RootStyles } from '../styles/common';

export default () => (
  <>
    <RootStyles>
      <Link href="/counter">
        <a>カウンターAPP</a>
      </Link>
      <Link href="/todo-components">
        <a>コンポーネントリスト</a>
      </Link>
    </RootStyles>
  </>
);
