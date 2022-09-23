import React, { FC } from 'react';
import '../scss/components/LtAvatar/index.scss';

interface ILtAvatarProps {
    avatarPath: string,
    avatarAlt: string,
}

export const LtAvatar:FC<ILtAvatarProps> = ({avatarPath, avatarAlt}) => {
    return (
        <div className='ltAvatarWrap'>
            <img 
                className='avatar'
                src={`${avatarPath}`} 
                alt={`${avatarAlt}`}
            />
        </div>
    )
}
