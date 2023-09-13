import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

const data = [
    {
        id: 1,
        image: '../img/startup-india.jpg',
        title: 'Our company has been registered under Startup India Initiative.'
    },
    {
        id: 2,
        image: '../img/make-in-india.png',
        title: 'All our products are manifactured in India.        '
    },
    {
        id: 3,
        image: 'data:image/jpeg;base64,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',
        title: 'FY22-23 financial report has been out.        '
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDheoAoCPmTjQgeP5LRNRnpKZLqwmX7RM-w&usqp=CAU',
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