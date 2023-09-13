import React, { useContext } from 'react'
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
                            <Select label="All" style={{
                                color: mode === 'dark' ? 'white' : ''
                            }} >
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>

                         {/* select Two  */}
                        <div className="lg:w-72 mb-2 lg:mb-0 md:mb-0 ">
                            <Select label="All"  style={{
                                color: mode === 'dark' ? 'white' : ''
                            }}>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
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
                                        className=" lg:w-[50em] "
                                        
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
            <div className='flex flex-wrap px-4 lg:px-10  mb-10 '>
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