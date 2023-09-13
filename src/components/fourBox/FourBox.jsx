import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

const data = [
    {
        id: 1,
        title: 'Custom Research',
        icon: 'https://www.cleanchemlab.com/images/contract-manufacture.png',
        desc: 'Contract Research and Custom Technology development.'
    },
    {
        id: 1,
        title: 'R&D',
        icon: 'https://www.cleanchemlab.com/images/research.png',
        desc: 'R&D Infrastructure of 20,000 Sq. Ft area'
    },
    {
        id: 1,
        title: 'TEAM',
        icon: 'https://www.cleanchemlab.com/images/team.png',
        desc: '70+ Employees'
    },
    {
        id: 1,
        title: 'Markets',
        icon: 'https://www.cleanchemlab.com/images/markets.png',
        desc: 'Across the globe'
    }
]

function FourBox() {

    const context = useContext(myContext);
    const {mode} = context;
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 lg:py-16 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">

                        {data.map((item, index) => {
                            const {title, icon, desc} = item
                            return (
                                <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                    <div
                                    style={{background: mode === 'dark' ? 'rgb(43 52 60)': ''}}
                                     className={`border shadow-lg ${mode==='dark'?'border-gray-700':'border-gray-200'} h-[11.9em] px-4 py-6 rounded-lg`}>
                                        <img
                                            className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                            src={icon}
                                        />

                                        <h2 style={{color: mode === 'dark' ? 'white' : '#ca4c4e'}} className="title-font font-bold text-xl">
                                            {title}
                                        </h2>
                                        <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed text-center">
                                            {desc}
                                        </p>
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

export default FourBox