import React, { FC } from 'react';
import "../scss/components/leftBlock/index.scss";
import { Channels } from './Channels';
import { Friends } from './Friends';
import { InputTreads } from './InputTreads';
import { LeftBlockTitle } from './LeftBlockTitle';

export const LeftBlock:FC = () => {
  return (
    <section className='leftBlock'>
        <LeftBlockTitle />
        <InputTreads />
        <Channels />
        <Friends />
    </section>
  )
}
