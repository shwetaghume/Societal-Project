import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../Firebase-config";
import "./Gallary.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";

const EventList = ({ setProgress }) => {
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [imagesToShow, setImagesToShow] = useState(9);
  const [loading, setLoading] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);

  useEffect(() => {
    const eventsRef = ref(getDatabase(app), "events");

    const fetchData = () => {
      onValue(eventsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const eventList = Object.values(data).filter(
            (event) => !event.deleted
          );
          setEvents(eventList);
        }
      });
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedEvent(null);
  };

  const handleSeeMoreClick = () => {
    setLoading(true);

    // Simulating a delay using setTimeout
    setTimeout(() => {
      if (imagesToShow + 3 <= events.length) {
        setImagesToShow((prevCount) => prevCount + 3);
      } else {
        setImagesToShow(events.length);
        setAllImagesLoaded(true);
      }
      setLoading(false);
    }, 1000); // Adjust the duration of the delay based on your preference
  };

  return (
    <div>
      <div className="Gallary">
        <h1>Gallery / Events </h1>
      </div>
      <div className="parent-Gallary">
        {events.slice(0, imagesToShow).map((event) => (
          <div className="child-Gallary" key={event.eventId}>
            <img
              src={event.imageUrl}
              alt={event.eventName}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onClick={() => handleOpenModal(event)}
            />
          </div>
        ))}
      </div>
      <div className="SeeMore">
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
              backgroundColor: "#42de4e",
              "&:hover": {
                backgroundColor: "#76ff03",
              },
              margin: "20px",
            }}
          >
            See More Pictures
          </Button>
        )}
      </div>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Event Details</DialogTitle>
        <DialogContent>
          <img
            src={selectedEvent?.imageUrl}
            alt={selectedEvent?.eventName}
            style={{ maxWidth: "100%" }}
          />
          <h2>Title : {selectedEvent?.eventName}</h2>
          <p>Description : {selectedEvent?.eventDescription}</p>
          <p>Date: {selectedEvent?.eventDate}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventList;
