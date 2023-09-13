import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
 
export function ProductImageModal() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
 
  return (
    <>
      <Card
        className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="https://www.simsonpharma.com/admin/uploads/products/s410014.jpg"
        />
      </Card>
      <Dialog size="xl" open={open} handler={handleOpen}>
       
        <DialogBody divider={true} className="p-0">
          <img
            alt="nature"
            className=" w-full object-cover object-center"
            src="https://www.simsonpharma.com/admin/uploads/products/s410014.jpg"
          />
        </DialogBody>
       
      </Dialog>
    </>
  );
}