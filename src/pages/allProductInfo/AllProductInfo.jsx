import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import RelatedProducts from '../../components/relatedProducts/RelatedProducts';
import { ProductImageModal } from '../../components/productImageModal/ProductImageModal';
import { EnquiryModal } from '../../components/enquiryModal/EnquiryModal';
import { useParams } from 'react-router';

function AllProductInfo() {
    const context = useContext(myContext);
    const { mode, loading, setLoading } = context;

    const { id } = useParams();

    //* all featured products state
    const [allProducts, setAllProducts] = useState([]);

    const getAllProduct = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_HOST_URL}/getoffering/all`)
            const allProductData = await res.json();
            console.log(featureProductData.successMsg);
            const newData = allProductData.successMsg.filter(item => item.id == id)
            console.log(newData)
            setAllProducts(newData)
        } catch (error) {
            console.log(error)
        }

    }

    //* call getFeaturedProduct
    useEffect(() => {
        getAllProduct();
    }, []);
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">

                    {/* Image Modal  */}
                    <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-2 rounded-xl
                    ${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <ProductImageModal />
                    </div>

                    {/* main product detail  */}
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
                        <div className="flex flex-col">
                            {allProducts.map((item, index) => {
                                const {
                                    productname,
                                    casno,
                                    unitselltype,
                                    priceperunit,
                                    type,
                                    currency,
                                    makecountry,
                                    makecompany,
                                    reactivity,
                                    storgetype,
                                    chemicalformula,
                                    chemicalname } = item
                                return (
                                    <div key={index}>
                                        <h1 className="title-font sm:text-4xl md:text-2xl text-3xl mb-2   text-gray-900 font-bold" style={{ color: mode === 'dark' ? 'white' : '#ca4c4e' }}>
                                            {productname}
                                        </h1>
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8" style={{ color: mode === 'dark' ? 'white' : 'black' }}  >
                                            <div className="inline-block min-w-full py- sm:px-6 lg:px-8">
                                                <div className={`overflow-hidden ${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-md mb-2`}>
                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className={`font-bold `}>CAS No : </span>
                                                        <span>{casno}</span>
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'>Unit : </span>
                                                        {unitselltype}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Price Per Unit : </span>
                                                        ₹ {priceperunit}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Currency : </span>
                                                        {currency}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Made in : </span>
                                                        {makecountry}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Made By : </span>
                                                        {makecompany}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Reactivity : </span>
                                                        {reactivity}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Storage : </span>
                                                        {storgetype}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Chemical formula : </span>
                                                        {chemicalformula}
                                                    </h1>

                                                    <h1 className={`text-xl font-light   border-b-2 p-1 ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
                                                        <span className=' font-bold'> Chemical name	 : </span>
                                                        {chemicalname}
                                                    </h1>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className=" flex justify-end space-x-6">
                            {/* <Button size='sm'
                                style={{
                                    background: mode === 'dark' ? '#ca4c4e' : '#0d246d'
                                }} className='shadow-none  text-white rounded-lg'>
                                COA PDF
                            </Button>
                            <Button size='sm'
                                style={{
                                    background: mode === 'dark' ? '#ca4c4e' : '#0d246d'
                                }} className='shadow-none  text-white rounded-lg'>
                                MSDS PDF
                            </Button> */}
                            <EnquiryModal />
                        </div>
                    </div>

                </div>
            </section>

            {/* Related Product  */}
            <RelatedProducts />
        </Layout>
    )
}

export default AllProductInfo