// Correct code for contact us page
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useEffect } from "react";

const Staff = ({ setProgress }) => {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);
  const formik = useFormik({
    initialValues: {
      yourName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      yourName: Yup.string().required("Your Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
  });

  const handleClear = () => {
    formik.resetForm();
  };

  return (
    <>
      <div className="parent-contact">
        <div className="formm">
          <Container maxWidth="sm">
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 3,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <TextField
                fullWidth
                id="yourName"
                name="yourName"
                label="Your Name"
                variant="outlined"
                value={formik.values.yourName}
                onChange={formik.handleChange}
                error={
                  formik.touched.yourName && Boolean(formik.errors.yourName)
                }
                helperText={formik.touched.yourName && formik.errors.yourName}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Button
                  type="submit"
                  sx={{
                    flex: "0 0 48%", // 48% width
                    color: "black",
                    backgroundColor: "#76ff03",
                    "&:hover": {
                      backgroundColor: "#76ff03",
                    },
                  }}
                >
                  Send Message
                </Button>
                <Button
                  type="button"
                  onClick={handleClear}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    flex: "0 0 48%", // 48% width
                  }}
                >
                  Clear
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
        <div className="map">
          <h1>Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d479.827087916964!2d74.50316880509124!3d15.824152193902874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf667eee712297%3A0x8d9013afe807c203!2s34%20No%20Marathi%20School!5e0!3m2!1sen!2sin!4v1703771518871!5m2!1sen!2sin"
            width="600"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Staff;
