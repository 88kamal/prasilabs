import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router';
import { Button } from '@material-tailwind/react';

const data = [
    {
        id: 1,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    },
    {
        id: 2,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    },
    {
        id: 3,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    },
    {
        id: 4,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    },
    // {
    //     id: 5,
    //     image: 'https://dummyimage.com/720x400',
    //     title: 'N-Nitroso Metoprolol EP Impurity F',
    //     catNumber: 'CL-Nitroso-068',
    //     casNo: '2418708-78-6',
    //     molFormula: 'C8H12N2O2S',
    //     molWeight: '200.3',
    // },
    // {
    //     id: 6,
    //     image: 'https://dummyimage.com/720x400',
    //     title: 'N-Nitroso Metoprolol EP Impurity F',
    //     catNumber: 'CL-Nitroso-068',
    //     casNo: '2418708-78-6',
    //     molFormula: 'C8H12N2O2S',
    //     molWeight: '200.3',
    // },
    // {
    //     id: 7,
    //     image: 'https://dummyimage.com/720x400',
    //     title: 'N-Nitroso Metoprolol EP Impurity F',
    //     catNumber: 'CL-Nitroso-068',
    //     casNo: '2418708-78-6',
    //     molFormula: 'C8H12N2O2S',
    //     molWeight: '200.3',
    // },
    // {
    //     id: 8,
    //     image: 'https://dummyimage.com/720x400',
    //     title: 'N-Nitroso Metoprolol EP Impurity F',
    //     catNumber: 'CL-Nitroso-068',
    //     casNo: '2418708-78-6',
    //     molFormula: 'C8H12N2O2S',
    //     molWeight: '200.3',
    // }
]

function RelatedProducts() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();
    return (
        <div>
            <div className="mb-5 lg:mt-10 container mx-auto px-6 lg:px-0">
                <h1 className='text-4xl font-bold'
                style={{
                    color: mode === 'dark' ? 'white' : ''
                  }}>Related Products</h1>
            </div>
            <div className='flex flex-wrap px-4 lg:px-10  mb-5 '>
                {data.map((item, index) => {
                    const { id, image, title, catNumber, casNo, molFormula, molWeight } = item
                    return (
                        <div key={index} className="p-2 md:w-1/4 w-full">
                            <div className={`shadow-md p-3 rounded-2xl  hover:-translate-y-1 border ${mode==='dark'?'border-gray-700':'border-gray-200'}`}
                                style={{
                                    background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
                                }}>
                                <img className='rounded-lg w-full h-[13em] mb-2'
                                    src={image} alt="product" />
                                <h2 className='text-xl text-black font-bold mb-2'
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >{title}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='text-lg text-black mb-1'>
                                    <span className=' font-semibold'>Cat Number : </span>
                                    {catNumber}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className='text-lg text-black mb-1'>
                                    <span className=' font-semibold'>CAS No. : </span>
                                    {casNo}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className='text-lg text-black mb-1'>
                                    <span className=' font-semibold'>Mol. Formula : </span>
                                    {molFormula}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className='text-lg text-black mb-2'>
                                    <span className=' font-semibold'> Mol. Weight : </span>
                                    {molWeight}
                                </h2>
                                <div className=" flex  space-x-2 justify-between">
                                    <Button
                                        onClick={() => navigate(`/productinfo/${id}`)}
                                        style={{
                                            background: mode === 'dark' ? '#ca4c4e' : '#0d246d'
                                        }} className='shadow-none w-full py-3 text-white rounded-lg'>
                                        Explore
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default RelatedProducts