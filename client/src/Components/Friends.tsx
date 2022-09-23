import React, { FC } from 'react';
import '../scss/components/Friends/index.scss';

export const Friends:FC = () => {
    let avatar = require('../media/img/avatest.png') 

  return (
    <div className='friendsContainer'>
        <div className='titleWrap'>
            <div className='title'>FRIENDS</div>
            <div className='count'>82</div>    
        </div>

        <div className='listWrap'>
            <nav className='list'>
                <li className='item'>
                    <div className='online'/>
                    <div className='avatar'>
                        <img className="picture" src={avatar}/>
                    </div>
                    <div className='name'>
                        Orlando Diggs
                    </div>
                </li>
                <li className='item'>
                    <div className='online'/>
                    <div className='avatar'>
                        <img className="picture" src={avatar}/>
                    </div>
                    <div className='name'>
                        Orlando Diggs
                    </div>
                </li>
                <li className='item'>
                    <div className='online'/>
                    <div className='avatar'>
                        <img className="picture" src={avatar}/>
                    </div>
                    <div className='name'>
                        Orlando Diggs
                    </div>
                </li>
                <li className='item'>
                    <div className='online'/>
                    <div className='avatar'>
                        <img className="picture" src={avatar}/>
                    </div>
                    <div className='name'>
                        Orlando Diggs
                    </div>
                </li>
                <li className='item'>
                    <div className='online'/>
                    <div className='avatar'>
                        <img className="picture" src={avatar}/>
                    </div>
                    <div className='name'>
                        Orlando Diggs
                    </div>
                </li>
                <li className='item'>
                    <div className='online'/>
                    <div className='avatar'>
                        <img className="picture" src={avatar}/>
                    </div>
                    <div className='name'>
                        Orlando Diggs
                    </div>
                </li>
            </nav>
        </div>
    </div>
  )
}