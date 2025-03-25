import Link from 'next/link';
import Deletepage from './Deletepage';

const TopicsList = () => {
    return (
        <div className='border-2 my-3 border-slate-500 rounded-md p-2 flex justify-between'>
            {/* topics tittle and details */}
            <div>
             <h1 className='text-2xl'>This is tittle of the topic</h1>
             <p className='w-3/5'>Description of topic ..Synergistically transition economically sound e-markets whereas competitive methods of.</p>
            </div>
            {/* edit and delete button  */}
            <div className='flex items-center text-white gap-1'>
                <Link href={"/updatetopic"} className='bg-green-500 rounded-md p-2 text white'> Update </Link>
                <Deletepage/>
            </div>
        </div>
    );
};

export default TopicsList;