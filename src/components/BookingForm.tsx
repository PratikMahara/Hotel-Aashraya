import React, { useState } from 'react';
import Button from './Button';
import { Room } from '../types';

interface BookingFormProps {
  room?: Room;
  isRoomDetail?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ room, isRoomDetail = false }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to a booking API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const today = new Date().toISOString().split('T')[0];
  
  // Calculate tomorrow's date for min checkout
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${isRoomDetail ? '' : 'lg:-mt-24 relative z-10'}`}>
      {!isRoomDetail && (
        <h3 className="text-2xl font-serif font-bold text-[#1E3A8A] mb-6 text-center">Book Your Stay</h3>
      )}
      
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-bold">Booking Request Sent!</p>
          <p>We've received your booking request and will contact you shortly to confirm your reservation.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="check-in" className="block text-gray-700 font-medium mb-1">Check In</label>
              <input
                type="date"
                id="check-in"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
            <div>
              <label htmlFor="check-out" className="block text-gray-700 font-medium mb-1">Check Out</label>
              <input
                type="date"
                id="check-out"
                min={checkIn || tomorrowStr}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="adults" className="block text-gray-700 font-medium mb-1">Adults</label>
              <select
                id="adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="children" className="block text-gray-700 font-medium mb-1">Children</label>
              <select
                id="children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="rooms" className="block text-gray-700 font-medium mb-1">Rooms</label>
              <select
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                disabled={isRoomDetail}
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
          
          {isRoomDetail && room && (
            <div className="border-t border-b border-gray-200 py-4 my-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Room Type:</span>
                <span className="font-semibold">{room.name}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-700">Price per night:</span>
                <span className="font-semibold">${room.price.toFixed(2)}</span>
              </div>
            </div>
          )}
          
          <Button type="submit" variant="primary" className="w-full py-3">
            {isRoomDetail ? 'Book This Room' : 'Check Availability'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;