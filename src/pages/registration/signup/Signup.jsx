import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import myContext from "../../../context/data/myContext";


export default function Signup() {
  const context = useContext(myContext);
  const { mode } = context;
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
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
            <div className=" flex justify-center">
              <img src="https://cdn-icons-png.flaticon.com/128/1208/1208737.png" className="h-20 w-20" />
            </div>
          </div>

          <Typography variant="h4" style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
            Signup
          </Typography>
        </CardHeader>
        <CardBody>
          <form className=" flex flex-col gap-4">
            <div>
              <Input type="text" label="Full Name"
                name="name"
              />
            </div>
            <div>
              <Input type="email" label="Email"
                name="email"
              />
            </div>
            <div>
              <Input type="password" label="Password"
              />
            </div>
            <Button style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>Signup</Button>
            <Typography
              color="gray"
              className="flex items-center justify-center gap-1 font-normal"
            >
              Have an account
              <Link to={'/login'} className=" font-bold"
                style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
              >login</Link>
            </Typography>
          </form>
        </CardBody>
      </Card>
    </div>


  );
}