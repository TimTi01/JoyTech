import React, { FC } from 'react';
import '../scss/components/header/index.scss';
import { Info } from './Icons/Info';
import { Person } from './Icons/Person';
import { Search } from './Icons/Search';
import { Star } from './Icons/Star';
import { Vert } from './Icons/Vert';

export const Header:FC = () => {
  return (
    <header className='header'>
        <div className="header__titleWrap">
            <h2 className="header__title">
                #general
            </h2>
            <Star/>
        </div>

        <nav className='header__searchNavWrap'>
            <li className="peopleCountWrap">
                <div className='peopleCount__Icon'>
                    <Person/>
                </div>
                <div className="peopleCount__Count">
                    1,093
                </div>
            </li>

            <li className="inputWrap">
                <input 
                    className='inputWrap__input'
                    type="text" 
                    placeholder='Search...'   
                />
                <div className='inputWrap__inputIcon'>
                    <Search/>
                </div>
            </li>

            <li className="header__settingsWrap">
                <div className="pushWrap">
                    <Info/>
                    <div className='notify'/>
                </div>
                <div className="settingsWrap">
                    <Vert/>
                </div>
            </li>
        </nav>
    </header>
  )
}
