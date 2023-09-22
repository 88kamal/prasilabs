import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Select, Option, Input, Button, IconButton } from '@material-tailwind/react'
import myContext from '../../context/data/myContext';
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router';
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
    {
        id: 5,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    },
    {
        id: 6,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    },
    {
        id: 7,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    },
    {
        id: 8,
        image: 'https://dummyimage.com/720x400',
        title: 'N-Nitroso Metoprolol EP Impurity F',
        catNumber: 'CL-Nitroso-068',
        casNo: '2418708-78-6',
        molFormula: 'C8H12N2O2S',
        molWeight: '200.3',
    }
]

function AllProduct() {

    const context = useContext(myContext);
    const { mode } = context;

    const [active, setActive] = React.useState(1);

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
        className: "rounded-full",
    });

    const next = () => {
        if (active === 3) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    const navigate = useNavigate()

    //* all featured products state
    const [allProducts, setAllProducts] = useState([]);

    const getAllProduct = async () => {
        const res = await fetch(`${import.meta.env.VITE_HOST_URL}/getoffering/all`)
        const allProductData = await res.json();
        console.log(allProductData.successMsg);
        setAllProducts(allProductData.successMsg)
    }

    //* get country list 
    const [countryList, setCountryList] = useState([]);

    const getCountryList = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_HOST_URL}/getcountrylist`);
            const countryList = await res.json();
            console.log(countryList.successMsg);
            setCountryList(countryList.successMsg)
        } catch (error) {
            console.log(error)
        }
    }

    //* get category list 
    const [getCategoryList, setGetCategoryList] = useState([]);

    const getAllCategory = async () => {
        try {
            const res = await fetch(`${import.meta.VITE_HOST_URL}/categorylist`);
            const categoryList = await res.json();
            console.log(categoryList.successMsg);
            setGetCategoryList(categoryList.successMsg)
        } catch (error) {
            console.log(error)
        }
    }

    //* currency list
    const [currencyList, setCurrencyList] = useState([]);

    const getCurrencyList = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_HOST_URL}/getcurrencylist`)
            const currencyList = await res.json();
            // console.log(currencyList)
            setCurrencyList(currencyList.successMsg)
        } catch (error) {
            console.log(error)
        }
    }




    //* call function
    useEffect(() => {
        getAllProduct();
        getCountryList();
        getAllCategory();
        getCurrencyList();
    }, []);

    //* search state
    const [search, setSearch] = useState('');

    //* new data
    const newProduvtData = allProducts.filter((obj) => obj.productname.toLowerCase().includes(search))
    return (
        <Layout>
            <div className=" mt-5 lg:mt-10 container mx-auto">
                <h1 className='text-4xl font-bold text-center' style={{
                    color: mode === 'dark' ? 'white' : ''
                }}>
                    All Products
                </h1>
            </div>

            {/* select and option  */}
            <div className="container mx-auto py-5 lg:py-10 px-4">
                <div className="lg:flex gap-3 items-center justify-between ">
                    <div className="1 lg:flex gap-2">

                        {/* select One  */}
                        <div className="lg:w-72 mb-2 lg:mb-0 md:mb-0" >
                            <Select label="Select Country" style={{
                                color: mode === 'dark' ? 'white' : ''
                            }} >
                                {countryList.map((item, index) => {
                                    return <Option key={index} value={item}>{item}</Option>
                                })}
                            </Select>
                        </div>

                        {/* select Two  */}
                        <div className="lg:w-72 mb-2 lg:mb-0 md:mb-0 ">
                            <Select label="Select Category" style={{
                                color: mode === 'dark' ? 'white' : ''
                            }}>
                                {getCategoryList.map((item, index) => {
                                    return <Option key={index} value={item}>{item}</Option>
                                })}
                            </Select>
                        </div>

                        {/* select Three  */}
                        <div className="lg:w-72 mb-2 lg:mb-0 md:mb-0 ">
                            <Select label="Select Currency" style={{
                                color: mode === 'dark' ? 'white' : ''
                            }}>
                                {currencyList.map((item, index) => {
                                    return <Option key={index} value={item}>{item}</Option>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="3">
                        <div>
                            <div >
                                <div className="relative flex w-full gap-2 md:w-max">
                                    <Input
                                        type="search"
                                        label="Search here..."
                                        color={mode === 'dark' ? 'white' : ''}
                                        className=" lg:w-[28em] "
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        containerProps={{
                                            className: "min-w-[288px]",
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all products  */}
            <div className='flex flex-wrap px-4 justify-center lg:px-10  mb-5 '>
                {
                    newProduvtData.length > 0 ? newProduvtData.map((item, index) => {
                        const { id, image, productname, priceperunit, type, storgetype, catNumber, casno, molFormula, molWeight } = item
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
                                    >{productname.substr(0, 30)}
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
                                            onClick={() => navigate(`/allproduct/productinfo/${id}`)}
                                            style={{
                                                background: mode === 'dark' ? '#ca4c4e' : '#0d246d'
                                            }} className='shadow-none w-full py-3 text-white rounded-lg'>
                                            Explore
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className="">
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2748/2748441.png" alt="" />
                        </div>
                    </div>

                }
            </div>

            {/* pagination  */}
            <div className="flex justify-center mb-10">
                <div className="flex items-center lg:gap-4">
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full"
                        onClick={prev}
                        disabled={active === 1}
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton {...getItemProps(1)} style={{ color: mode === 'dark' ? 'white' : '' }}>1</IconButton>
                        <IconButton {...getItemProps(2)} style={{ color: mode === 'dark' ? 'white' : '' }}>2</IconButton>
                        <IconButton {...getItemProps(3)} style={{ color: mode === 'dark' ? 'white' : '' }}>3</IconButton>

                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full"
                        onClick={next}
                        disabled={active === 5}
                        color={mode === 'dark' ? 'white' : ''}
                    >
                        Next
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </Button>
                </div>
            </div>

        </Layout>
    )
}

export default AllProduct