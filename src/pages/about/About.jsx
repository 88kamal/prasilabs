import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';

function About() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <div class="flex justify-center items-center flex-col">
        <div
          class="w-full  bg-[url('http://103.24.202.225:88/about-us-bg.c989c7c56274d14d.jpg')] bg-cover bg-center">
          <div class="  flex  justify-center items-center 
             bg-[black]/30 backdrop-brightness-50">
            <div className="container mx-auto px-4 py-10 lg:h-[30em]">
              <h2 className='text-white  text-4xl font-bold mb-2'>About Us</h2>
              <p className=' text-white text-3xl mb-2'>We’ve made a unique Platform that will help you.</p>
              <p className=' text-white lg:w-[60%] text-2xl text-justify'> Prasi Labs has been adjudged as High Growth Company at blooming stage, founded in 2021, with a holistic approach to sales and marketing combined with exemplified industry experience. Prasi Labs amplifies reach across several Pharma companies across the Globe. Prasi Labs with its streamlined business approach has been successful in accomplishing a reputed client list in a very short span of time. </p>
              <br />
              <p className='  text-white lg:w-[60%] text-2xl text-justify'>Let Prasi Labs introduce you to a better, yet transparent way of conducting business. We are here to bring value with new way of sourcing & development on our client’s requirement. </p>

            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#4a3e97] py-5">
        <div className="container mx-auto px-4 ">
          <div className=" mb-4">
            <h2 className='text-white text-2xl font-bold'>We, Prasi Labs</h2>
            <p className='text-white text-xl text-justify'>We offer custom synthesis services of up to gram-quantities of materials for a wide range of industrial and academic customers. We listen to our customers and provide products that meet their specifications. The purity of our products is supported by solid analytical data and their certification is tailored to our customer needs. Our strong partner network enables us to server our customer quickly to their expectation and beyond.</p>
          </div>

          <hr className='mb-3 border-4 border-gray-300/10' />

          <div className=" mb-4">
            <h2 className='text-white text-2xl font-bold'>Our Values</h2>
            <p className='text-white text-xl text-justify'>Our values drive us to serve with unwavering dedication, excel with relentless determination, and collaborate synergistically in the competitive business environment. These principles inspire us to continually strive for excellence in both our business endeavors and as individuals, fostering a culture of growth and success.
            </p>
          </div>
          <hr className='mb-3 border-4 border-gray-300/10' />


          <div className="">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center"
                  >
                    <div className="p-2 rounded-xl" style={{
                      background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
                    }} >
                      <hr className=' border-[0.5em] border-[#4a3e97] mb-3' />
                      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full " >
                        <svg className="w-28 h-28 text-orange-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="handshake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-orange-500 text-xl title-font font-medium mb-3">
                          Commitment
                        </h2>
                        <p className="leading-relaxed text-base mb-2">
                          We are commited to provide our customer best in class service, pricing and support while maintaing a very high standard in busness delivery.
                          <br />
                          <br />
                        </p>
                      </div>
                      <hr className=' border-[0.5em] border-[#4a3e97]' />
                    </div>

                  </div>

                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center"
                  >
                    <div className="p-2 rounded-xl" style={{
                      background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
                    }} >
                      <hr className=' border-[0.5em] border-[#4a3e97] mb-3' />
                      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-28 h-28 text-purple-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>

                      </div>
                      <div className="flex-grow">
                        <h2 className="text-purple-500 text-xl title-font font-medium mb-3">
                          Consistency
                        </h2>
                        <p className="leading-relaxed text-base mb-2">
                          We deliver quality products in time with each order following best in class offerings. With consistent exellenace in our services and delivery we always endeavor customer satisfaction.
                        </p>
                      </div>
                      <hr className=' border-[0.5em] border-[#4a3e97]' />
                    </div>

                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center"
                  >
                    <div className="p-2 rounded-xl" style={{
                      background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
                    }} >
                      <hr className=' border-[0.5em] border-[#4a3e97] mb-3' />
                      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-28 h-28 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                        </svg>

                      </div>
                      <div className="flex-grow">
                        <h2 className="text-green-500 text-xl title-font font-medium mb-3">
                          Transparency

                        </h2>
                        <p className="leading-relaxed text-base mb-2">
                          Our process is transprent and open at each step to provide all required information as needed. Stakeholders are always aware of from where, how and when their products are delivered.
                        </p>
                      </div>
                      <hr className=' border-[0.5em] border-[#4a3e97]' />
                    </div>

                  </div>

                </div>

              </div>
            </section>
          </div>
        </div>
      </div>

      <div className=" bg-blue-300">
        <div className="container mx-auto px-4 py-10">
          {/* <h2>Excellence in Action: What We Do</h2>
        <p>Our Commitment to Excellence in service, collaboration, and success, nurturing growth for our business and individuals in the competitive business environment.</p> */}
          <h2 className='text-3xl font-bold mb-4 text-white'>Accreditations</h2>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 ">
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center"
            >
              <div className="p-2 rounded-xl w-full" style={{
                background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
              }} >
                <hr className=' border-[0.5em] border-[#4a3e97] mb-3' />
                <div className=" flex justify-center items-center h-80">
                  <h2 className='text-2xl font-bold'>ISO 9001:2015</h2>
                  
                </div>
                <hr className=' border-[0.5em] border-[#4a3e97]' />
              </div>

            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center"
            >
              <div className="p-2 rounded-xl w-full" style={{
                background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
              }} >
                <hr className=' border-[0.5em] border-[#4a3e97] mb-3' />
                <div className=" flex justify-center items-center h-80">
                  <img src="http://103.24.202.225:88/assets/start-up.png" alt="" />
                </div>
                <hr className=' border-[0.5em] border-[#4a3e97]' />
              </div>

            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center"
            >
              <div className="p-2 rounded-xl w-full" style={{
                background: mode === 'dark' ? 'rgb(43 52 60)' : 'white',
              }} >
                <hr className=' border-[0.5em] border-[#4a3e97] mb-3' />
                <div className=" flex justify-center items-center h-80">
                  <img src="http://103.24.202.225:88/assets/msme-logo.png" alt="" />
                </div>
                <hr className=' border-[0.5em] border-[#4a3e97]' />
              </div>

            </div>

          
          </div>
        </div>
      </div>


    </Layout>
  )
}

export default About