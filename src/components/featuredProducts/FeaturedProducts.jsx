import { Button } from '@material-tailwind/react'
import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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

function FeaturedProducts() {

    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    // http://103.24.202.225:89/getfeatured

    //* all featured products state
    const [allFeaturedProducts, setAllFeaturedProducts] = useState([]);

    const getFeaturedProduct = async () => {
        const res = await fetch(` http://103.24.202.225:89/getfeatured`)
        const featureProductData = await res.json();
        console.log(featureProductData.successMsg);
        setAllFeaturedProducts(featureProductData.successMsg)
    }

    //* call getFeaturedProduct
    useEffect(() => {
        getFeaturedProduct();
    }, []);
    return (
        <div>
            <div className="mb-5 mt-10">
                <h1 className=' text-center text-4xl font-bold' style={{
                    color: mode === 'dark' ? 'white' : ''
                }}>Featured Products</h1>
            </div>
            <div className='flex flex-wrap px-4 lg:px-10  mb-5 '>
                {allFeaturedProducts.map((item, index) => {
                    const { id, image, productname, priceperunit,type,storgetype, catNumber, casno, molFormula, molWeight } = item
                    return (
                        <div key={index} className="p-2 md:w-1/4 w-full">
                            <div className={`shadow-md p-3 rounded-2xl  hover:-translate-y-1 border ${mode === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                                style={{
                                    background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
                                }}>
                                <img className='rounded-lg w-full h-[13em] mb-2'
                                    src={'https://dummyimage.com/720x400'} alt="product" />
                                <h2 className='text-xl text-black font-bold mb-2'
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >{productname.substr(0,30)}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='text-lg text-black mb-1'>
                                    <span className=' font-semibold'>Price Per Unit : </span>
                                    ₹ {priceperunit}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className='text-lg text-black mb-1'>
                                    <span className=' font-semibold'>CAS No. : </span>
                                    {casno}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className='text-lg text-black mb-1'>
                                    <span className=' font-semibold'>Type : </span>
                                    {type}
                                </h2>
                                <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className='text-lg text-black mb-2'>
                                    <span className=' font-semibold'> Storge Type : </span>
                                    {storgetype}
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

            <div className="flex justify-center mb-8">
                <Link to={'/allproduct'}>
                    <Button className='shadow-none'
                        style={{ background: mode === 'dark' ? '#ca4c4e' : '#0d246d' }}>
                        View More
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default FeaturedProducts