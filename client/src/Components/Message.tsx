import React, { FC } from 'react';
import '../scss/components/Message/index.scss';
import { FileAdd } from './Icons/FileAdd';
import { Smile } from './Icons/Smile';
import { Voice } from './Icons/Voice';

export const Message:FC = () => {
    const textPlaceholder = '#general'

  return (
    <div className='messageWrap'>
        <div className="navContainer">
            <div className="navIconWrap">
                <div className="fileIconWrap">
                    <FileAdd/>
                </div>
                <div className="voiceIconWrap">
                    <Voice/>
                </div>
            </div> 

            <div className="inputWrap">
                <input 
                    className="inputMessage"
                    type='text'
                    placeholder={`Message in ${textPlaceholder}`}
                />
            </div>
        </div>

        <div className="smileIconWrap">
            <Smile />
        </div>
    </div>
  )
}
