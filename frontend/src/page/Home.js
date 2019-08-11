import React from 'react';

import Navbar from 'component/Navbar.js';
import Contact from 'component/Contact.js';
import Welcome from 'component/Welcome.js';

export default function Home() {
    return (
        <div>
          <Navbar />
          <Welcome />
          <Contact />
        </div>
    );
}
