import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Import your CSS file

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Staff = ({ setProgress }) => {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);

  const form = useRef();
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      setConfirmationOpen(true);
    },
    validationSchema,
  });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_lbcgrm9",
        "template_1lyh9jr",
        form.current,
        "-iK0wrPIwxHiMZ_sp"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show success toast
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleConfirmationClose = (send) => {
    if (send) {
      sendEmail();
      setConfirmationOpen(false);
    } else {
      setConfirmationOpen(false);
    }
  };

  return (
    <div className="parent-contact">
      <div className="formm">
        <Container maxWidth="sm">
          <Box
            component="form"
            ref={form}
            onSubmit={formik.handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginTop: 3,
            }}
          >
            <Typography className="headdd" variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <TextField
              fullWidth
              id="user_name"
              name="user_name"
              label="Name"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
              error={
                formik.touched.user_name && Boolean(formik.errors.user_name)
              }
              helperText={formik.touched.user_name && formik.errors.user_name}
            />

            <TextField
              fullWidth
              id="user_email"
              name="user_email"
              label="Email"
              type="email"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_email}
              error={
                formik.touched.user_email && Boolean(formik.errors.user_email)
              }
              helperText={formik.touched.user_email && formik.errors.user_email}
            />

            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={{ marginBottom: 2 }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    color: "black",
                    backgroundColor: "#42de4e",
                    "&:hover": {
                      backgroundColor: "#76ff03",
                    },
                  }}
                >
                  Send
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid black",
                  }}
                  type="button"
                  onClick={() => {
                    formik.resetForm();
                    toast.info("Form cleared!");
                  }}
                  fullWidth
                  // variant="outlined"
                  // color="secondary"
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div className="map">
        <h1 className="headdd">Location</h1>
        <iframe
          title="Location Map"
          // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d479.827087916964!2d74.50316880509124!3d15.824152193902874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf667eee712297%3A0x8d9013afe807c203!2s34%20No%20Marathi%20School!5e0!3m2!1sen!2sin!4v1703771518871!5m2!1sen!2sin"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1239203.6042855922!2d-85.67901387277452!3d43.82968144022355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4caa3dc7ca0411%3A0x97dd48597a62c9b3!2sMichigan%2C%20USA!5e0!3m2!1sen!2sin!4v1706450744380!5m2!1sen!2sin"
          width="600"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Dialog
        open={isConfirmationOpen}
        onClose={() => handleConfirmationClose(false)}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to send the following message?
          </Typography>
          <Typography>
            <strong>Name:</strong> {formik.values.user_name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {formik.values.user_email}
          </Typography>
          <Typography>
            <strong>Message:</strong> {formik.values.message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleConfirmationClose(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={() => handleConfirmationClose(true)} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Staff;
