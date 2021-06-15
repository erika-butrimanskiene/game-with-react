import React from 'react';
import Weapon from './Weapon';

import './Weapons.css';

function Weapons() {
  return (
    <div className='weapons-wrapper'>
      <h2 className='weapons-heading'>Weapons</h2>
      <p className='weapons-about'>
        Weapons defines how much damage hero does to monster and have special
        effects
      </p>
      <div className='weapons-items'>
        <Weapon
          image={'icons8-katana-sword-100.png'}
          name={'Sword'}
          damage={8}
          price={40}
          sellprice={5}
          special={'20% chance to block attack'}
          type={'weapon'}
          showBuyButton={true}
        />
        <Weapon
          image={'arrow-bow.png'}
          name={'Bow'}
          damage={6}
          price={300}
          sellprice={80}
          special={'30% chance to do double damage'}
          type={'weapon'}
          showBuyButton={true}
        />
        <Weapon
          image={'icons8-fantasy-100.png'}
          name={'Magic wand'}
          damage={5}
          price={1000}
          sellprice={400}
          special={'40% chance to heal hero on enemy attack by 10hit points'}
          type={'weapon'}
          showBuyButton={true}
        />
      </div>
    </div>
  );
}

export default Weapons;
