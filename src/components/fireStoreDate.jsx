import React from 'react';
import { useGetData } from '../hooks/useGetData';
import update from './update'
import Delete from '.Delete'

const fireStoreData = () => {
    const [documents] = useGetData();
    return (
        <div style={valueStyle}>
            <span>Values</span>
            { documents.map((documents) => (
            <div key={docuuments.id}>
                <div>
                    Document: {documents.id} Value: {documents.value.value}
                </div>
                <update doc={documents.id} />
            </div>
            ))}
        </div>
    );
};

export default fireStoreData;
