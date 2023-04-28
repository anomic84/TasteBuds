import React from 'react';
// import { Admin, Listings, User, Event, Home } from './pages';
import { Admin, Listings, Home } from './pages';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        // APP
        <ApolloProvider client={client}>
            <Router>
                <div className='w-screen h-[100%]'>
                    <div className='maingradient h-[100%]'>
                        {/* <Navbar
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    /> */}
                        <Navbar />
                        <Routes>
                            <Route path='/' exact element={<Home />} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/listings' element={<Listings />} />
                        </Routes>
                        {/* <main className='flex w-full'>{renderPage()}</main> */}
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
