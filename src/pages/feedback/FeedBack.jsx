import React, { useContext, useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";


export default function FeedBack() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();



    return (
        <div className="flex justify-center items-center h-screen  ">
            <Card className="w-full max-w-[24rem]" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                >
                    <Typography variant="h4" style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
                        SEND US YOUR FEEDBACK
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form className=" flex flex-col gap-4">
                        <div>
                            <Input type="text" label="Full Name"
                                name="fullname"
                            />
                        </div>
                        <div>
                            <Input type="email" label="Email"
                                name="email"
                            />
                        </div>
                        <div>
                        <Textarea label="Message" />
                        </div>
                        <Button style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>Send</Button>
                    </form>
                </CardBody>
            </Card>
        </div>


    );
}