import React from "react";

const MapSection = () => {
  return (
    <section className="w-full h-64 sm:h-80">
      <iframe
        title="Dronacharya College Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.0!2d76.5450!3d32.1050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5a63c0000001%3A0x1234567890abcdef!2sDronacharya%20College%20of%20Education%2C%20Rait%2C%20Kangra%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </section>
  );
};

export default MapSection;
