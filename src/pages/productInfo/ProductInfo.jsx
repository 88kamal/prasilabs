import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import RelatedProducts from '../../components/relatedProducts/RelatedProducts';
import { ProductImageModal } from '../../components/productImageModal/ProductImageModal';
import { EnquiryModal } from '../../components/enquiryModal/EnquiryModal';

function ProductInfo() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">

                    {/* Image Modal  */}
                    <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-2 rounded-xl
                    ${mode==='dark'?'bg-gray-700':'bg-gray-100'}`}>
                        <ProductImageModal/>
                    </div>

                    {/* main product detail  */}
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl md:text-2xl text-3xl mb-4  text-gray-900 font-bold" style={{ color: mode === 'dark' ? 'white' : '#ca4c4e' }}>
                            N-Nitroso Metoprolol EP Impurity F

                        </h1>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className=" lg:w-[40em] border border-gray-400 text-sm font-light ">
                                            <thead className="border-b border-gray-400 font-medium ">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? '#76ffc8' : '#ca4c4e' }}>
                                                        Catalog Number:
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400 "
                                                        style={{ color: mode === 'dark' ? 'white' : 'black' }}
                                                    >
                                                        CL-M031-NO-004
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-400">
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? '#76ffc8' : '#ca4c4e' }}
                                                    >
                                                        Batch No.:
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? 'white' : 'black' }}
                                                    >
                                                        NA
                                                    </th>
                                                </tr>

                                                <tr className="border-b border-gray-400">
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? '#76ffc8' : '#ca4c4e' }}
                                                    >
                                                        CAS No.:
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? 'white' : 'black' }}
                                                    >
                                                        NA
                                                    </th>
                                                </tr>

                                                <tr className="border-b border-gray-400">
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? '#76ffc8' : '#ca4c4e' }}
                                                    >
                                                        Mol. Formula:
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? 'white' : 'black' }}
                                                    >
                                                        C12H18N2O4
                                                    </th>
                                                </tr>

                                                <tr className="border-b border-gray-400">
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? '#76ffc8' : '#ca4c4e' }}
                                                    >
                                                        Mol. Weight:
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="border-r px-6 py-4 border-gray-400"
                                                        style={{ color: mode === 'dark' ? 'white' : 'black' }}
                                                    >
                                                        238.13
                                                    </th>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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
                            <EnquiryModal/>
                        </div>
                    </div>

                </div>
            </section>

            {/* Related Product  */}
            <RelatedProducts />
        </Layout>
    )
}

export default ProductInfo