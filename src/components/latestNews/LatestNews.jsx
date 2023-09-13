import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

const data = [
    {
        id: 1,
        image: 'http://103.24.202.225:88/assets/startup-india.jpg',
        title: 'Our company has been registered under Startup India Initiative.'
    },
    {
        id: 2,
        image: 'http://103.24.202.225:88/assets/make-in-india.png',
        title: 'All our products are manifactured in India.        '
    },
    {
        id: 3,
        image: 'http://103.24.202.225:88/assets/fiscal-year.svg',
        title: 'FY22-23 financial report has been out.        '
    },
    {
        id: 4,
        image: 'http://103.24.202.225:88/assets/rupee.svg',
        title: 'Company has secured a funding of 35 Lac.'
    },
]

function LatestNews() {

    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <div className=" mt-10">
                <h1 className=' text-center text-4xl font-bold mb-2' style={{
                    color: mode === 'dark' ? 'white' : ''
                }}>Latest News</h1>
                <p className='text-center text-lg' style={{
                    color: mode === 'dark' ? 'white' : ''
                }}>Stay informed and up-to-date with our latest news! Get insights into our company's latest developments.

                </p>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className='flex flex-wrap px-4 lg:px-10  mb-5 '>
                        {data.map((item, index) => {
                            const { image, title } = item
                            return (
                                <div key={index} className="p-2 md:w-1/2 w-full">
                                    <div className={`flex items-center border-2 gap-2 rounded-xl shadow-md ${mode==='dark'?'border-gray-700':'border-gray-200'}`} style={{
                                    background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
                                }}>
                                        <div className={`left border-r-2 ${mode==='dark'?'border-gray-700':'border-gray-200'}`}>
                                            <img
                                                className=' w-full h-28 lg:h-44 rounded-l-xl'
                                                src={image}
                                                alt="img"
                                            />
                                        </div>
                                        <div className="right">
                                            <h2 style={{
                                                color: mode === 'dark' ? 'white' : ''
                                            }} className="text-gray-900 text-lg title-font font-bold">{title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>

        </div>
    )
}

export default LatestNews