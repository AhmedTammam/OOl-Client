import React from 'react';
import { Container } from 'reactstrap';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const App = ({ children }) => (
    <Container>
        <Header />

        <main>
            {children}
        </main>

        <Footer />
    </Container>
);

export default App;