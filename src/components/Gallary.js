// import React from "react";
// import "./Gallary.css";
// import { Button } from "@mui/material";
// import Mainpic from "./Main.png";
// function Gallary() {
//   return (
//     <div>
//       <div className="Gallary">
//         <h1> Gallery </h1>
//       </div>
//       <div className="parent-Gallary">
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
// <div className="child-Gallary">
//   <img
//     src={Mainpic}
//     alt="A beautiful landscape."
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </div>
//         <div className="btn">
//           <Button
//             sx={{
//               color: "black",
//               backgroundColor: "#76ff03",
//               "&:hover": {
//                 backgroundColor: "#76ff03",
//               },
//             }}
//           >
//             See More Pictures
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gallary;

// correct code for Gallery
import React, { useEffect, useState } from "react";
import "./Gallary.css";
import Mainpic from "./Main.png";
import QR from "./QR.png";
import APJ from "./APJ.png";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import Footer from "./Footer";

// Assume you have an array of image URLs
const galleryImages = [
  Mainpic,
  QR,
  APJ,
  Mainpic,
  QR,
  APJ,
  Mainpic,
  QR,
  APJ,
  Mainpic,
  QR,
  APJ,
];

function Gallary({ setProgress }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesToShow, setImagesToShow] = useState(6);
  const [loading, setLoading] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  const handleSeeMoreClick = () => {
    setLoading(true);

    // Simulating a delay using setTimeout
    setTimeout(() => {
      if (imagesToShow + 3 <= galleryImages.length) {
        setImagesToShow((prevCount) => prevCount + 3);
      } else {
        setImagesToShow(galleryImages.length);
        setAllImagesLoaded(true);
      }
      setLoading(false);
    }, 1000); // Adjust the duration of the delay based on your preference
  };

  return (
    <div>
      <div className="Gallary">
        <h1> Gallery </h1>
      </div>
      <div className="parent-Gallary">
        {galleryImages.slice(0, imagesToShow).map((image, index) => (
          <div className="child-Gallary" key={index}>
            <img
              src={image}
              alt={`Landscape ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onClick={() => handleOpenModal(image)}
            />
          </div>
        ))}

        {loading ? (
          <CircularProgress
            style={{ margin: "20px" }}
            color="secondary"
            size={40}
          />
        ) : allImagesLoaded ? (
          <Button>No More Pictures</Button>
        ) : (
          <Button
            onClick={handleSeeMoreClick}
            sx={{
              color: "black",
              backgroundColor: "#76ff03",
              "&:hover": {
                backgroundColor: "#76ff03",
              },
              margin: "20px",
            }}
          >
            See More Pictures
          </Button>
        )}

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Large Image</DialogTitle>
          <DialogContent>
            <img
              src={selectedImage}
              alt="Large Landscape"
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}

export default Gallary;
