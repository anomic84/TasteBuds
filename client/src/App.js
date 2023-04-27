import React from 'react';
import { Admin, Listings, User, Event, Home } from './pages';
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
    const [currentPage, setCurrentPage] = React.useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Admin') {
            return <Admin />;
        }
        if (currentPage === 'Listings') {
            return <Listings />;
        }
        if (currentPage === 'User') {
            return <User />;
        }
        return <Event />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        // APP
        <ApolloProvider client={client}>
            <div className='w-screen h-[100%]'>
                <div className='maingradient h-[100%]'>
                    <Navbar
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />

                    <main className='flex w-full'>{renderPage()}</main>
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    );
}

export default App;
