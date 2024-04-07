import React, { useState, FormEvent } from 'react';
import { Form } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  



  return (
    <>

      <button onClick={handleClickOpen} className="border text-white border-white m-3 p-1 hover:bg-white hover:text-black rounded transition duration-300 "> Create Your Post </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            const token = localStorage.getItem('token');
            console.log(token)
            if (token) {
              try {
                const response = await fetch(`${url}/api/v1/blog/create`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                  },
                  body: JSON.stringify(formJson)

                });
                const resData = await response.json();
                console.log(resData);
                if (!response.ok) {
                  toast.error(resData.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  return;
                }
                toast.success(`Successfull!`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
                if (response.ok) {
                  setInterval(() => {
                    window.location.reload();
                  }, 5000)
                }





              } catch (err) {
                console.log(err);

              }
            } else {
              toast.info('Please Login to post', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
              });
              return;
            }
          },
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="title"
            label="Title"
            type="name"
            fullWidth
            variant="standard"
          />

          <TextField
            id="outlined-multiline-static"
            label="Your Content"
            name="content"
            multiline
            fullWidth
            rows={5}
            sx={{ marginTop: 2 }}
            defaultValue=""
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}