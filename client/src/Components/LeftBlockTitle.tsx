import React, { FC } from 'react'
import '../scss/components/LeftBlockTitle/index.scss';
import { Arrow } from './Icons/Arrow';
import { Settings } from './Icons/Settings';

export const LeftBlockTitle:FC = () => {
  return (
    <div className='leftBlockTitleWrap'>
        <div className='TitleWrap__WrapTitle'>
          <h1 className='TitleWrap__Title'>Nomad List</h1>
          <Arrow />
        </div>
        <Settings />
    </div>
  )
}
