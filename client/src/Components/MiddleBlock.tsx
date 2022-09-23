import React, { FC } from 'react';
import '../scss/components/MiddleBlock/index.scss';
import { Header } from './Header';
import { Main } from './Main';
import { Message } from './Message';

export const MiddleBlock:FC = () => {
  return (
    <div className='middleBlock'>
      <Header/>
      <Main/>
      <Message/>
    </div>
  )
}
