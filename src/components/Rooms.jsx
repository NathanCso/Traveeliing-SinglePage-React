import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-yellow-300 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Profitez de nos meilleures chambres</h3>
        <p className='pt-4'>
          Vous pourrez avoir accès à nos meilleurs hotêls et nos chambres les plus réputées
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;