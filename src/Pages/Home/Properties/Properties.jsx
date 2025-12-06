import { useEffect, useState } from 'react';
import Property from '../Property/Property';

const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    })
    return (
        <div>
            <div className='flex justify-between px-2'>
                <h2 className='font-bold text-xl my-6'>Property --- <span className='text-gray-400 font-medium text-sm'>Showing result- {" "}({properties.length})</span></h2>
                <div>
                    <h3 className='text-gray-400 text-sm pt-2'>Sort by</h3>
                    <p className='font-bold'>Low to High</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {
                    properties.map(property => <Property property={property}
                    ></Property>)
                }
            </div>
        </div>
    );
};

export default Properties;