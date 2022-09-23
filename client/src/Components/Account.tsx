import React, { FC } from 'react';
import '../scss/components/Account/index.scss';
import { Facebook } from './Icons/Facebook';

export const Account:FC = () => {
  return (
    <section className='account'>

        <div className='avatar'>
            <img />
        </div>

        <div className='accountNavWrap'>
            <div className='accountInfo'>
                <div className='accountNameWrap'>
                    <div className="accountName">Amilia Luna</div>
                    <div className="online"></div>
                </div>
                <div className="accountPost">UI Designer</div>
            </div>

            <div className='socialNetwork'>
                <div className='socialIcon'>
                    <Facebook/>
                </div>
                <div className='socialIcon'>
                    <Facebook/>
                </div>
                <div className='socialIcon'>
                    <Facebook/>
                </div>
                <div className='socialIcon'>
                    <Facebook/>
                </div>
            </div>

            <div className="buttonGroup">
                <button className='buttonMessage'>Message</button>
                <button className='buttonSelect'>1</button>
            </div>

            <nav className='infoNav'>
                <li className='infoNavItem'>
                    <div className='itemTitle'>
                        Username
                    </div>
                    <div className='itemData'>
                        @amilia_lu
                    </div>
                </li>
                <li className='infoNavItem'>
                    <div className='itemTitle'>
                        Username
                    </div>
                    <div className='itemData'>
                        @amilia_lu
                    </div>
                </li>
                <li className='infoNavItem'>
                    <div className='itemTitle'>
                        Username
                    </div>
                    <div className='itemData'>
                        @amilia_lu
                    </div>
                </li>
                <li className='infoNavItem'>
                    <div className='itemTitle'>
                        Username
                    </div>
                    <div className='itemData'>
                        @amilia_lu
                    </div>
                </li>
            </nav>
        </div>
    </section>
  )
}
