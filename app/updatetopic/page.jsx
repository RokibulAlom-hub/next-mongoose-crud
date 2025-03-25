import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-center'>Update Tittle and Description of Topic</h1>
           <form action="
           " className='max-w-sm mx-auto'>
            <input type="text" placeholder=' Tittle' className='p-2 my-3 w-full border border-black rounded-md'/>
            <input type="text" placeholder=' Description' className='p-2 w-full border border-black rounded-md'/>
            <button type="submit" className='my-3 bg-green-500 p-3 rounded-md text-white'>Update</button>
           </form>
        </div>
    );
};

export default page;