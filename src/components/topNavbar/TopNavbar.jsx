import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../searchBox/Search";
import ShareModal from "../shareModal/ShareModal";
import myContext from "../../context/data/myContext";

export default function TopNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  // console.log(getuser)
  // console.log('hello')

  const user = JSON.parse(localStorage.getItem('user'));

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === 'dark' ? 'white' : 'black' }}
      >
        <Link to={'/'} className="flex items-center font4">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === 'dark' ? 'white' : 'black' }}
      >
        <Link to={'/about'} className="flex items-center font4">
          About
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === 'dark' ? 'white' : 'black' }}
      >
        <Link to={'/contact'} className="flex items-center font4">
          Contact
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === 'dark' ? 'white' : 'black' }}
      >
        <Link to={'/feedback'} className="flex items-center font4">
          Feedback
        </Link>
      </Typography>

      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === 'dark' ? 'white' : 'black' }}
      >
        <Link to={'/signup'} className="flex items-center font4">
          Signup
        </Link>
      </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          style={{ color: mode === 'dark' ? 'white' : 'black' }}
        >
          <Link to={'/login'} className="flex items-center font4">
            Login
          </Link>

        </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2 bg-gray-300"
        style={{ background: mode === 'dark' ? 'rgb(43 52 60)' : '' }}>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={'/'}>
            <Typography
              as="a"
              className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
              style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
              <img className=' w-20 lg:w-[7%] ' src='../img/Prasilabs.png' alt="logo" />
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className=" hidden lg:block">{navList}</div>

            {/* ShareModal */}
            {/* <div className="">
              <ShareModal />
            </div> */}

            {/* Search */}
            <div className="">
              <Search />
            </div>

            {/* light and dark mode  */}
            {mode === 'light' ?
              <>
                <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </IconButton>
              </> :
              <>
                <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                </IconButton>
              </>}

            {/* open and close button only for mobile  */}
            <IconButton
              // variant="text"
              className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Link to={'/profile'}>
            {user && <div className=" lg:block">
              {getuser.map((item, index) => {
                const { uid, name, designation, email } = item.user;
                const { image } = item;
                return (
                  (user.user.uid == uid && <>
                    <Avatar
                      key={index}
                      src={image}
                      alt="avatar"
                      withBorder={true}
                      className="p-0.5 text-red-500"
                      style={{ border: mode === 'dark' ? '2px solid rgb(226, 232, 240)' : '2px solid rgb(30, 41, 59)' }}
                    />
                  </>)
                )
              })}
            </div>}
          </Link>

        </Collapse>
      </Navbar>
    </>
  );
}
