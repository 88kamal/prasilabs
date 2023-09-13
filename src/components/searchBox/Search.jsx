import { Fragment, useContext, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import {BiSearchAlt2} from 'react-icons/bi'

export default function Search() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Fragment>
            <div onClick={handleOpen} size="md" className=" cursor-pointer" >
                <BiSearchAlt2 size={30} style={{  color: mode === 'dark' ? 'white' : 'black' }}/>
            </div>
            <Dialog className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen} style={{ background: mode === 'light' ? '#2f3542' : '#2f3542', color: mode === 'dark' ? 'white' : 'black' }}>
                <DialogBody >
                    <h1 className=" text-white text-center font-bold mb-3 text-lg">Search Our Products</h1>
                    <div className="flex w-full   justify-center">
                        <Input
                            color="white"
                            type="search"
                            label="Search here..."
                            className=" bg-[#2C3A47]"
                            name="searchkey"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                    </div>

                    {/* <div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2 ">
                                <div className="p-2 sm:w-1/4 w-full "  >
                                    <div className=" container mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                                        <img className="w-20 mb-2 rounded-lg" src="" alt="img" />
                                        <h1>Title</h1>
                                    </div>
                                </div>
                    </div> */}

                    {/* <div className=" text-center">
                        <h1 className=" text-gray-600">PrasiLab</h1>
                    </div> */}
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}