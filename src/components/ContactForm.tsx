import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-bold">Message Sent!</p>
          <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="">Select a subject</option>
                <option value="Booking Inquiry">Booking Inquiry</option>
                <option value="Restaurant Reservation">Restaurant Reservation</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            ></textarea>
          </div>
          
          <Button type="submit" variant="primary" className="w-full py-3">
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;