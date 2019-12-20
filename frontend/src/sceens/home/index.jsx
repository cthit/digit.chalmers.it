import React from 'react';

import Navbar from '../../elements/navbar';
import Contact from '../../elements/contact';
import Welcome from '../../elements/welcome';

export default function Home() {
    return (
        <div>
          <Navbar />
          <Welcome />
          <Contact />
        </div>
    );
}
