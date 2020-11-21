import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        books {
            id, title
        }
    }
`;

const GraphComp = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (data.books.length === 0) {
        return <div>no books</div>;
    }

    return data.books.map((book: any) => (
        <div>
            <p>{book.id}: {book.title}</p>
        </div>
    ));
}

export default GraphComp;