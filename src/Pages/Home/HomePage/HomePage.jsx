import React from 'react';
import Property from '../Properties/Properties';
import SideBar from '../SideBar/SideBar';

const HomePage = () => {
    return (
        <div className='grid grid-cols-9 h-44 gap-4'>
            <div className='col-span-3 border border-1 p-2'>
                <SideBar></SideBar>
            </div>
            <div className='col-span-6'> 
                <Property></Property>
            </div>
            
        </div>
    );
};

export default HomePage;