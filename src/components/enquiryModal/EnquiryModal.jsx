import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Textarea
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import React, { useContext } from 'react'

export function EnquiryModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <>
            <Button size='sm'
                onClick={handleOpen}
                style={{
                    background: mode === 'dark' ? '#ca4c4e' : '#0d246d'
                }} className='shadow-none  text-white rounded-lg'>
                Make a Quick Enquiry
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Full Name" size="lg" />
                        <Input label="Company Name" size="lg" />
                        <Input label="Country" size="lg" />
                        <Input label="Your Email" size="lg" />
                        <Input label="Contact Number" size="lg" />
                        <Textarea label="Message" />
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Sign In
                        </Button>
                    </CardBody>
                    {/* <CardFooter className="">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Sign In
                        </Button>
                    </CardFooter> */}
                </Card>
            </Dialog>
        </>
    );
}