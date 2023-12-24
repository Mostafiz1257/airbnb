import React from 'react';
import Heading from '../../../../components/shared/Heading/Heading';

const Header = ({roomData}) => {
    console.log(roomData);
    return (
        <>
           <Heading title={roomData?.title} subtitle={roomData.location}></Heading> 
           <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
            <img className='object-cover w-full'  src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg" alt="place_pic" />
           </div>
        </>
    );
};

export default Header;