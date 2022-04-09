import React, { useContext } from 'react';
import DetailsCard from '../component/DetailsCard.jsx';
import { Context } from "../store/appContext.js"
import { useParams } from 'react-router-dom';

const Details = () => {
    const { store } = useContext(Context);
    const params = useParams();

    return (
        <>
        <h1>Detalles de {params.nature} {params.id}</h1>
            <div className='container'>
                {store.people.map((item) => {
                    if ((item.uid == params.id) == true) {
                        return (
                            // console.log(params.nature)
                            <DetailsCard key={params.id} {...item} nature="people" />
                        );
                    }
                })}
            </div>
        </>

    );
};

export default Details;