import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss'; // Ensure this file does not contain conflicting styles
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const data = {
        name: name,
        email: email,
        message: message,
      };

      axios.post('http://localhost:8080/https://script.google.com/macros/s/AKfycbz2N6YboDZR3ir4g5ryGHlsew_u1Uq7woEJwZGvUkra3ZtDz_iaU_gt4XMS6pJ5mY80/exec', data)
      .then((response) => {
        console.log('SUCCESS!', response.data);
        toast.success('Message sent successfully!');
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Adjust delay as needed
      })
      .catch((error) => {
        console.log('FAILED...', error);
        toast.error('Failed to send message. Please try again.');
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Adjust delay as needed
      });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out, and let's make your vision a reality.</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
              <TextField
                required
                id="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                fullWidth
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
            </div>
            <TextField
              required
              id="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              fullWidth
              InputProps={{ style: { color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
