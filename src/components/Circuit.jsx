import React from 'react';
import { motion } from 'framer-motion';

const Circuit= () => {
  const pathData = "m 0,0 63.721,52.4 c 15.234,11.982 25.861,28.858 30.084,47.773 l 25.166,112.745 c 0.198,0.89 0.433,1.77 0.706,2.64 l 32.811,104.814 c 7.262,23.196 -4.481,48.084 -27.001,57.228 l -510.122,207.133 c -23.345,9.48 -49.924,-2.07 -58.923,-25.606 L -458.76,519.37 c -1.112,-2.91 -2.636,-5.645 -4.523,-8.123 l -35.699,-46.855 c -1.598,-2.097 -3.443,-3.992 -5.497,-5.645 l -101.844,-81.972 -332.722,-249.542 -302.98,-241.121 c -2.748,-2.187 -5.831,-3.916 -9.13,-5.12 l -73.566,-26.858 c -1.382,-0.504 -2.795,-0.915 -4.231,-1.228 l -175.836,-38.387 c -2.475,-0.54 -4.879,-1.367 -7.162,-2.463 l -298.996,-143.529 c -25.344,-12.166 -37.438,-41.483 -28.044,-67.98 l 24.887,-70.196 c 1.096,-3.09 1.72,-6.319 1.85,-9.595 1.151,-28.887 7.63,-177.389 21.263,-234.449 2.186,-9.147 0.323,-18.782 -5.116,-26.454 l -56.717,-79.995 c -19.22,-27.108 5.955,-63.417 38.082,-54.924 l 22.17,5.86 c 1.258,0.333 2.497,0.742 3.707,1.222 l 293.788,116.711 c 2.374,0.942 4.628,2.161 6.717,3.629 l 231.996,163.06 c 2.605,1.831 5.464,3.271 8.486,4.274 l 218.698,72.578 c 39.928,13.251 83.487,-5.196 101.754,-43.093 l 38.39,-79.641 c 0.784,-1.627 1.431,-3.315 1.936,-5.048 l 15.04,-51.66 c 9.006,-30.935 23.865,-59.853 43.77,-85.187 l 8.286,-10.545 c 11.838,-15.067 26.144,-28.019 42.31,-38.306 l 25.238,-16.062 c 3.947,-2.511 5.785,-7.308 4.528,-11.813 l -10.36,-37.121 c -1.586,-5.685 1.767,-11.573 7.467,-13.108 l 311.049,-83.788 c 14.827,-3.994 30.431,2.889 37.48,16.53 l 23.062,44.638 c 2.956,5.72 4.153,12.185 3.442,18.583 l -0.961,8.649 c -1.126,10.138 2.552,20.219 9.942,27.249 l 38.576,36.694 c 1.438,1.368 2.749,2.865 3.916,4.471 l 65.292,89.931 c 0.518,0.715 1.008,1.45 1.467,2.205 l 75.317,123.735 c 7.935,13.037 5.775,29.833 -5.201,40.436 l -51.948,50.187 c -3.154,3.047 -6.891,5.428 -10.987,6.999 l -87.211,33.451 -113.216,45.994 c -6.268,2.547 -11.591,6.978 -15.229,12.683 l -24.936,39.088 c -9.403,14.74 -5.519,34.271 8.808,44.291 l 80.021,55.973 Z"; 
const admins = [
    { id: 1, color: "#D18BFF", delay: 0 },
    { id: 2, color: "#FF4B4B", delay: 1.5 },
    { id: 3, color: "#4BFF4B", delay: 3 },
    { id: 4, color: "#4B4BFF", delay: 4.5 },
    { id: 5, color: "#FFFF4B", delay: 6 },
    { id: 6, color: "#FF4BFF", delay: 7.5 },
    { id: 7, color: "#4BFFFF", delay: 9 },
    { id: 8, color: "#FF914D", delay: 10.5 },
    { id: 9, color: "#FFFFFF", delay: 12 },
  ];

  return (
    <svg viewBox="0 0 4000 4000" className="w-full h-auto">
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,4000)">
        <g transform="translate(2092.4844,1698.0903)">
          
          <path 
            d={pathData} 
            fill="none" 
            stroke="#49F2F2" 
            strokeWidth="75.76" 
            strokeLinecap="round"
            className="opacity-40"
          />

          {admins.map((admin) => (
            <React.Fragment key={admin.id}>
              {/* SCIA 2 (La più lontana) */}
              <motion.circle
                r="25"
                fill={admin.color}
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 0.2, 0.2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: admin.delay + 0.15 }}
                style={{ offsetPath: `path("${pathData}")`, filter: `blur(8px)` }}
              />

              {/* SCIA 1 (Vicina al pallino) */}
              <motion.circle
                r="30"
                fill={admin.color}
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 0.4, 0.4, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: admin.delay + 0.08 }}
                style={{ offsetPath: `path("${pathData}")`, filter: `blur(4px)` }}
              />

              {/* TESTA (Il pallino principale) */}
              <motion.circle
                r="35"
                fill={admin.color}
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: admin.delay }}
                style={{ 
                  offsetPath: `path("${pathData}")`,
                  filter: `drop-shadow(0 0 10px ${admin.color})` 
                }}
              />
            </React.Fragment>
          ))}
        </g>
      </g>
    </svg>
  );
};

export default Circuit;