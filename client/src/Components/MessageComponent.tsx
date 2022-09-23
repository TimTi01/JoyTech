import React, { FC } from 'react';
import '../scss/components/MessageComponent/index.scss'; 
import { LtAvatar } from './LtAvatar';

interface IMessageComponentProp {
    avatarPath: string,
    name: string,
    time: string,
    text: string
}

export const MessageComponent:FC<IMessageComponentProp> = ({avatarPath, name, time, text}) => {
  return (
    <div className='mainMessage'>
        <div className="avatarWrap">
            <LtAvatar 
                avatarPath={avatarPath}
                avatarAlt={`${name}`}
            />
        </div>
        
        <div className='infoWrap'>
            <div className="nameTimeWrap">
                <span className="name">
                    Jeshua Stout
                </span>
                <span className="time">
                    {time}
                </span>
            </div>

            <div className="text">
            {text}
            </div>
        </div>
    </div>
  )
}
