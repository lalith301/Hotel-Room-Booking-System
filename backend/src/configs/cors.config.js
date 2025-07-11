const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3033',
  'http://localhost:3034',
  'http://localhost:5500',
  'https://hotel-room-booking-system-j0rb.onrender.com',
  'https://hotel-room-booking-system-3egw.vercel.app',
  'https://admin-hotel-booking-system.netlify.app'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS origin'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
