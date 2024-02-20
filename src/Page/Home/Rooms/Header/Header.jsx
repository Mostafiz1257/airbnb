import React from 'react';
import Heading from '../../../../components/shared/Heading/Heading';

const Header = ({roomData}) => {
    return (
        <>
           <Heading title={roomData?.title} subtitle={roomData.location}></Heading> 
           <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
            <img className='object-cover h-full w-full'  src={roomData?.image} alt="place_pic" />
           </div>
        </>
    );
};

export default Header;