// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
//   Container,
// } from "@mui/material";
// import DhananjayPic from "./Dhananjay-Pic.jpg";

// const developersData = [
//   {
//     name: "Avinash pauskar",
//     imageSrc:
//       "https://media.licdn.com/dms/image/D5603AQHyyP-uxLPmzg/profile-displayphoto-shrink_800_800/0/1680338891338?e=1710979200&v=beta&t=-qxrLZp1o9omWQt817IRZArC8xBkgZjfEwmDhx4cSbw",
//   },
//   {
//     name: "Ganesh Kugaji",
//     imageSrc:
//       "https://media.licdn.com/dms/image/D5603AQFzgmLfwH1jvg/profile-displayphoto-shrink_400_400/0/1704341115201?e=1710979200&v=beta&t=QHgrzRIP26TW3vYbw2bryJJSF8SxFlKrZ83l0ABWgKc",
//   },
//   {
//     name: "Ganesh Margale",
//     imageSrc:
//       "https://media.licdn.com/dms/image/D5603AQEtxTy-sPXtMQ/profile-displayphoto-shrink_400_400/0/1706454668797?e=1712188800&v=beta&t=AK5X15ohrPP8-cs7vSQnlGEPRBlFgETP3PzUByFiNIE",
//   },
// ];

// const Developers = () => {
//   return (
//     <Container>
//       <Grid container spacing={3}>
//         {developersData.map((developer, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ marginTop: "85px", marginBottom: "30px" }}>
//               <CardMedia
//                 component="img"
//                 alt={developer.name}
//                 height="300"
//                 image={developer.imageSrc}
//               />
//               <CardContent style={{ textAlign: "center" }}>
//                 <Typography variant="h6">{developer.name}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Developers;
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import "./Developers.css";
import { useEffect } from "react";
// import DhananjayPic from "./Dhananjay-Pic.jpg";

const developersData = [
  {
    name: "Avinash Pauskar",
    role: "Android Developer",
    imageSrc:
      "https://media.licdn.com/dms/image/D4D03AQEHkrHQy3Emwg/profile-displayphoto-shrink_400_400/0/1715696852290?e=1727308800&v=beta&t=Voxthufv2XaZaeOqbDf2GeAjJN62VW2ldp5KPVNpvTs",
    linkedinProfile: "https://www.linkedin.com/in/avinash-pauskar-00b597244/",
  },
  {
    name: "Ganesh Kugaji",
    role: "Backend Developer",
    imageSrc:
      "https://media.licdn.com/dms/image/D5603AQFzgmLfwH1jvg/profile-displayphoto-shrink_400_400/0/1704341115201?e=1727308800&v=beta&t=VrL5lR7sIhdTp_f0It0E7LWoFLGzAZlL6Bjuqfxf8NA",
    linkedinProfile: "https://www.linkedin.com/in/ganesh-kugaji-69483b244/",
  },
  {
    name: "Dhananjay Dharne",
    role: "React Developer",
    imageSrc:
      "https://media.licdn.com/dms/image/D5603AQEtxTy-sPXtMQ/profile-displayphoto-shrink_400_400/0/1706454668797?e=1727308800&v=beta&t=87JOZMyq0cYTsjWH5UIl3JMhq1GDUVWfGvX8qCcJi4I",
    linkedinProfile: "https://www.linkedin.com/in/dhananjay-dharne-663856235/",
  },
]; // ... (other imports)

const Developers = ({ setProgress }) => {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);
  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="space-between"
      >
        {developersData.map((developer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ marginTop: "85px", marginBottom: "30px" }}>
              <div className="CardMedia-img-container">
                {" "}
                {/* Add this container */}
                <CardMedia
                  component="img"
                  alt={developer.name}
                  height="400"
                  image={developer.imageSrc}
                  className="CardMedia-img"
                />
              </div>
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="h5">
                  <a
                    href={developer.linkedinProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {developer.name}
                  </a>
                </Typography>
                {/* <Typography variant="h6">{developer.role}</Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Developers;
