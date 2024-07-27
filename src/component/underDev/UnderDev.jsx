
import { Link } from 'react-router-dom';
import Button from '../Button/Button'

const UnderDev = () => {
    return (
        <div className='h-[50vh]'>
            <h1 className='my-20 text-3xl md:text-5xl text-center px-2'>This page is under development !</h1>
            <Link className='flex justify-center ' to={"/"}>
                <div className='w-80 '>
                    <Button>GO HOME </Button>
                </div>
            </Link>
        </div>
    );
};

export default UnderDev;