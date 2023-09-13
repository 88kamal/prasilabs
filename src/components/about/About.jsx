import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { FiExternalLink } from 'react-icons/fi'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function About() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
           
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                        <img className='rounded-lg' src="https://www.cleanchemlab.com/images/about/home-about.jpg" alt="img" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl  font text-3xl mb-4 font-bold" style={{ color: mode === 'dark' ? 'white' : '#ca4c4e' }}>About PrasiLabs

                        </h1>
                        <p className="mb-8 leading-relaxed lg:w-[79%] text-justify md:text-justify lg:text-justify font2" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore hic esse suscipit, corrupti ipsum ipsa cumque fuga commodi doloribus? Molestiae, fugiat eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi magni amet harum. Quam, quae quos omnis numquam maxime officiis modi in praesentium! Asperiores, sint voluptates harum voluptate necessitatibus voluptatum assumenda vitae eum blanditiis perferendis eos porro laboriosam accusamus commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt vero vitae quas, voluptatibus esse quae alias itaque, commodi, ea necessitatibus optio doloremque maiores totam officia quos rerum repellat earum!
                        </p>
                        <div className="flex justify-center">
                            <Button className='shadow-none' 
                            style={{background: mode==='dark'?'#ca4c4e':'#0d246d'}}>
                                <Link>
                                Read More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About