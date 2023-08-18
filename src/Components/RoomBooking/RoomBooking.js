import React from 'react'
 import  { useState } from 'react';
 import './RoomBooking.css'

function RoomBooking() {
    const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    specialRequests: '',
  });

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h3 className='text-danger'>Just Fill the Deatials Thats all</h3>
      

    <div className="container border shadow mt-5">
      <h1 className="text-center mb-4">Restaurant Room Booking</h1>
      <div className="row">
        <div className="col-md-6">
          <div
            className={`room-box ${selectedRoom === 'Private' ? 'selected' : ''}`}
            onClick={() => handleRoomSelect('Private')}
          >
            <h2>Private Room</h2>
            <p>Enjoy an intimate dining experience with your group.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`room-box ${selectedRoom === 'Terrace' ? 'selected' : ''}`}
            onClick={() => handleRoomSelect('Terrace')}
          >
            <h2>Terrace Seating</h2>
            <p>Experience open-air dining with a view of the garden.</p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          {selectedRoom ? (
            <div>
              <h3>Your Selected Room: {selectedRoom}</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="guests" className="form-label">Number of Guests</label>
                  <input type="number" className="form-control" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Date of Booking</label>
                  <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="specialRequests" className="form-label">Special Requests</label>
                  <textarea className="form-control" id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Booking</button>
              </form>
            </div>
          ) : (
            <p className="text-center">Please select a room for your reservation.</p>
          )}
        </div>
      </div>
    </div>


    </div>
  )
}

export default RoomBooking
