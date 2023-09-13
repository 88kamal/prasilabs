import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100"
        style={{
          background: mode === 'dark' ? 'rgb(43 52 60)' : '',
        }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3"
                style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
                PRODUCTS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-700 hover:text-gray-800 cursor-pointer"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Drug Impurities Reference Standards</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Drug Substance Reference Standards</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Drug Substance Stable Isotope Labeled Reference Standards</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Drug Metabolites Stable Isotope Labeled Reference Standards</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3"
                style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Custom Synthesis                </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Research Projects</a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3"
                style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Careers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Distributors</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>ARI Blog</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3"
                style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
                SUPPORT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Contact Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Request a Quote</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800"
                    style={{
                      color: mode === 'dark' ? 'white' : ''
                    }}>Request COA/MSDS</a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4"
            >
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3"
                style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
                CONNECT
              </h2>
              <div className="flex mb-3 justify-center lg:justify-start">
                <AiFillFacebook size={30}
                  style={{
                    color: mode === 'dark' ? '#4f71a8' : '#4f71a8'
                  }} />
                <AiFillLinkedin size={30} style={{
                  color: mode === 'dark' ? '#1886b0' : '#1886b0'
                }} />
                <AiFillTwitterCircle size={30} style={{
                  color: mode === 'dark' ? 'rgb(28 183 235)' : 'rgb(28 183 235)'
                }} />
              </div>

              <div className="flex items-center mb-2 justify-center lg:justify-start ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <p className='font-semibold  ml-2' style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>+91-9324132198</p>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p className='font-semibold  ml-2' style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>testuser@gmail.com</p>
              </div>


            </div>

          </div>
        </div>
        {/* <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Subscribe
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder='Email'
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Send
              </button>

            </div>

          </div>
        </div> */}
        <div style={{
          background: mode === 'dark' ? 'rgb(31 38 45)' : '',
        }} className=" lg:px-10 py-4  flex items-center sm:flex-row flex-col bg-gray-200">
          <img className=' w-20 lg:w-[7%] ' src='../img/Prasilabs.png' alt="logo" />
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4" style={{
                  color: mode === 'dark' ? 'white' : ''
                }}>
          Copyright © 2021
            <a
              className="text-gray-600 ml-1"
              style={{
                color: mode === 'dark' ? 'white' : ''
              }}
            >
              ISO 9001:2015 Certified Company


            </a>
          </p>
          
        </div>
      </footer>

    </div>
  )
}

export default Footer