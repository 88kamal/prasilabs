import React, {useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';

function Contact() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="mb-3">
            <h1 className=' text-2xl font-bold' style={{ color: mode === 'dark' ? 'white' : '#ca4c4e' }}>
              PRASI LABS PVT LIMITED
            </h1>
            <h2 className='text-xl font-semibold' style={{ color: mode === 'dark' ? '#ca4c4e' : 'black' }}>Head office</h2>
            </div>

            <div className="mb-3">
            <h1 className=' text-2xl font-bold' style={{ color: mode === 'dark' ? 'white' : '#ca4c4e' }}>+91 9160006515</h1>
            <h2 className='text-xl font-semibold' style={{ color: mode === 'dark' ? '#ca4c4e' : 'black' }}>Phone</h2>
            </div>

            <div className="mb-3">
            <h1 className=' text-2xl font-bold' style={{ color: mode === 'dark' ? 'white' : '#ca4c4e' }}>info@prasilabs.com</h1>
            <h2 className='text-xl font-semibold' style={{ color: mode === 'dark' ? '#ca4c4e' : 'black' }}>Email</h2>
            </div>

            <p style={{ color: mode === 'dark' ? 'white' : 'black' }} className=' font-semibold text-lg'>Plot no: 3647, Sai Krishana Layout, Near Pragati Nagar Arch, Pragati Nagar, Hyderabad, Telangana - 500090, Bharat (India)</p>

          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Contact