import React, { FC } from 'react';
import '../scss/components/Main/index.scss';
import { MessageComponent } from './MessageComponent';

export const Main:FC = () => {
  let avatarPath = require('../media/img/avatar1.png')  

  return (
    <main className='main'>
      <div className="mainWrap">
        <MessageComponent 
          avatarPath={avatarPath}
          name={'Jeshua Stout'}
          time={'6:38 PM'}
          text={'@pierrhack I did for 6 days in Iceland'}
        />
      </div>
    </main>
  )
}
