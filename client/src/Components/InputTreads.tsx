import React, { FC } from 'react'
import '../scss/components/leftBlockInputTreads/index.scss';
import { MessageIcon } from './Icons/MessageIcon'

export const InputTreads:FC = () => {
  return (
    <div className='leftBlockInputTreadsWrap'>
        <MessageIcon/>
        <input
            className='inputTreads' 
            type='text'
            placeholder='All treads'
        />
    </div>
  )
}
