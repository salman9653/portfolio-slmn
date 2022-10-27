import React from 'react';
import {SocialIcon} from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div>   {/* social icons  */}
            <SocialIcon url="https://github.com/salman9653" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.linkedin.com/in/salman-a327ba9a/" fgColor='gray' bgColor='transparent'  />
            <SocialIcon url="https://twitter.com/salman_k9653" fgColor='gray' bgColor='transparent'  />
        </div>
    </header>
  )
}

export default Header