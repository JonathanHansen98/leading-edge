import React from "react";
import {motion} from 'framer-motion'

const LogoSVG = ({variants, animate}) => {
  
 const styles = {
    linearGradient: {
      fill: "url(#linear-gradient)",
    },
    purple: {
      fill: "url(#New_Gradient_Swatch_1)",
    },
    solid: {
      fill: "url(#linear-gradient-2)",
    },
    fill: {
      fill: '#2ba4c6'
    }
  };
  return (
    <motion.svg
    variants={variants}
    initial='closed'
    animate={animate}
    width='100rem'
      viewBox="0 0 1043.14 695.51"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="532.44"
          y1="303.25"
          x2="181.43"
          y2="175.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1bcedf" />
          <stop offset="0.03" stopColor="#20c0d7" />
          <stop offset="0.15" stopColor="#3291bb" />
          <stop offset="0.27" stopColor="#416aa3" />
          <stop offset="0.38" stopColor="#4c4b91" />
          <stop offset="0.5" stopColor="#543684" />
          <stop offset="0.61" stopColor="#59287d" />
          <stop offset="0.71" stopColor="#5b247a" />
        </linearGradient>
        <linearGradient
          id="New_Gradient_Swatch_1"
          x1="-970.01"
          y1="-209.58"
          x2="-970.01"
          y2="-477.58"
          gradientTransform="matrix(1.97, 0, 0, -1.97, 2530.48, -311.59)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5b247a" />
          <stop offset="1" stopColor="#1bcedf" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="-1193.45"
          y1="-149.36"
          x2="-1193.45"
          y2="-358.53"
          gradientTransform="matrix(2.46, 0, 0, -2.46, 3455.87, -367.22)"
          href="#New_Gradient_Swatch_1"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M27.88,683.28H0V611.62H7.7v65H27.88ZM39.41,669.5h0V625.4q0-7.38,4.52-11.42t13.57-4q9,0,13.67,4t4.65,11.42h0v24.23H47.11V669.5q0,8.82,10.49,8.82t10.52-8.82h0v-6.09h7.7v6.09q0,7.38-4.53,11.42t-13.57,4q-9.06,0-13.69-4T39.41,669.5Zm7.7-44.1V643h21V625.4q0-8.83-10.52-8.84T47.11,625.4ZM94,669.5h0v-11Q94,643,109.89,643h12.76V625a7.81,7.81,0,0,0-2.52-6.2c-1.7-1.47-4.19-2.21-7.49-2.21h0q-9.81,0-9.8,8.41h0v6.46H95.08v-6q0-7.38,4.37-11.42t13.19-4q8.82,0,13.3,4t4.47,11.42h0v57.88h-3.33l-2.86-7a18.25,18.25,0,0,1-6.06,6.34,15.08,15.08,0,0,1-8.27,2.38h0Q94,685,94,669.5Zm7.7-11v11a10.48,10.48,0,0,0,1.78,6.51q1.77,2.31,6.4,2.31a12.62,12.62,0,0,0,8.6-3.57q4-3.59,4.16-7.14h0v-18H109.89q-4.64,0-6.4,2.32a10.41,10.41,0,0,0-1.78,6.5Zm67.41,24.83H151.36V611.62h17.76q8.63,0,13.06,4.06t4.45,11.38h0v40.76q0,7.39-4.39,11.42t-13.12,4Zm-10.06-65v58.42h10.06q9.81,0,9.81-8.84h0V627.06a8.4,8.4,0,0,0-2.54-6.52c-1.68-1.54-4.1-2.3-7.27-2.3H159.06Zm55.67,65H207V611.62h7.7Zm29.74,0h-7.7V611.62H240l2.75,7.15q5.28-8.82,14.69-8.83h0q16.22,0,16.21,15.46h0v57.88H266V625.4a10.21,10.21,0,0,0-1.83-6.51q-1.83-2.32-6.68-2.33a13,13,0,0,0-8.94,3.74c-2.72,2.5-4.07,4.93-4.07,7.31h0ZM293,669.5h0V625.4Q293,618,297.5,614t13.57-4c6,0,10.59,1.35,13.68,4s4.63,6.5,4.63,11.42h0v6h-7.7v-6q0-8.83-10.49-8.84t-10.52,8.84h0v44.1q0,8.82,10.52,8.82t10.49-8.82h0v-16H309.29v-6.62h20.09V669.5q0,7.38-4.53,11.42t-13.57,4q-9,0-13.68-4T293,669.5Zm114.71,13.78H375.15V611.62h31.39v6.62H382.85V643.6h19.34v6.62H382.85v26.44h24.83Zm34.29,0H424.2V611.62H442q8.63,0,13,4.06t4.45,11.38h0v40.76q0,7.39-4.39,11.42t-13.11,4Zm-10.07-65v58.42H442q9.79,0,9.8-8.84h0V627.06a8.37,8.37,0,0,0-2.54-6.52c-1.68-1.54-4.1-2.3-7.26-2.3H431.9Zm46.32,51.26h0V625.4q0-7.38,4.51-11.42t13.57-4q9.06,0,13.68,4t4.63,11.42h0v6h-7.7v-6q0-8.83-10.49-8.84t-10.5,8.84h0v44.1q0,8.82,10.5,8.82t10.49-8.82h0v-16H494.53v-6.62h20.08V669.5q0,7.38-4.53,11.42t-13.57,4q-9,0-13.66-4T478.22,669.5Zm55.14,0h0V625.4q0-7.38,4.51-11.42t13.57-4q9.06,0,13.68,4t4.63,11.42h0v24.23H541.06V669.5q0,8.82,10.5,8.82t10.49-8.82h0v-6.09h7.7v6.09q0,7.38-4.53,11.42t-13.57,4q-9,0-13.66-4T533.36,669.5Zm7.7-44.1V643h21V625.4q0-8.83-10.49-8.84t-10.5,8.84Zm92.24,57.88H615.52V611.62H633.3q8.61,0,13.06,4.06t4.43,11.38h0v40.76q0,7.39-4.39,11.42t-13.1,4Zm-10.08-65v58.42H633.3a9.67,9.67,0,0,0,7.21-2.6,8.5,8.5,0,0,0,2.58-6.24h0V627.06a8.57,8.57,0,0,0-2.58-6.19,9.65,9.65,0,0,0-7.21-2.63H623.22Zm55.69,65h-7.7V611.62h3.27l3.23,8.11q3.56-9.78,11.26-9.79h0q13.14,0,13.08,14.32h0v7.17h-7.37v-7.6q0-7.27-6.08-7.27h0q-3.66,0-6.68,4.2t-3,12.13h0Zm32.51-35.49h0V611.62h7.7v36.17q0,8.84,11,8.83h0l.06,0h0q11,0,11-8.79h0V611.62h7.7v36.17q0,13.58-14.75,15.19h0v20.3h-7.7V663Q711.42,661.3,711.42,647.79ZM766,669.5h0V611.62h7.76V669.5q0,8.82,10.2,8.82t10.2-8.82h0V611.62h7.7V669.5q0,8.82,10.2,8.82t10.2-8.82h0V611.62h7.7V669.5q0,7.26-4.63,11.36T811.58,685q-9.11,0-13.63-6.42h0q-4.29,6.42-13.51,6.42t-13.84-4.09Q766,676.77,766,669.5Zm82.71,0h0v-11q0-15.44,15.89-15.44h12.76V625a7.75,7.75,0,0,0-2.54-6.2q-2.52-2.21-7.48-2.21h0q-9.81,0-9.81,8.41h0v6.46h-7.74v-6q0-7.38,4.36-11.42t13.19-4q8.84,0,13.31,4t4.45,11.42h0v57.88h-3.33l-2.85-7a18.19,18.19,0,0,1-6.07,6.34,15,15,0,0,1-8.25,2.38h0Q848.69,685,848.68,669.5Zm7.7-11v11a10.54,10.54,0,0,0,1.77,6.51q1.8,2.31,6.42,2.31a12.59,12.59,0,0,0,8.59-3.57q4-3.59,4.17-7.14h0v-18H864.57q-4.62,0-6.42,2.32a10.47,10.47,0,0,0-1.77,6.5Zm77.55,24.83H906V611.62h7.7v65h20.2Zm41.08,0H947.1V611.62h7.7v65H975Zm13.17,4.59-1.65-.6v-7h6.19v6.52l-3.36,8.69-2.19-.41Zm24.07.46h-9.68V663.46h2.67V686h7Zm14.26,0h-9.68V663.46h2.67V686h7Zm4-4.78h0v-15.3a5,5,0,0,1,1.57-4,6.92,6.92,0,0,1,4.71-1.4,7.09,7.09,0,0,1,4.75,1.4,5,5,0,0,1,1.6,4h0v3.62h-2.67v-3.62q0-3.07-3.65-3.07t-3.64,3.07h0v15.3q0,3.06,3.64,3.06t3.65-3.06h0v-2.11h2.67v2.11a5,5,0,0,1-1.57,4,6.87,6.87,0,0,1-4.71,1.41,7,7,0,0,1-4.75-1.41A5,5,0,0,1,1030.51,683.55Z"
            style={styles.fill}
          />
          <polygon
            points="495.6 404.46 377.54 404.46 377.54 101.14 410.13 101.14 410.13 376.44 495.6 376.44 495.6 404.46"
            style={styles.linearGradient}
          />
          <polygon
            points="689.08 404.46 551.42 404.46 551.42 101.14 684.29 101.14 684.29 129.18 584.02 129.18 584.02 236.5 665.82 236.5 665.82 264.55 584.02 264.55 584.02 376.44 689.08 376.44 689.08 404.46"
            style={styles.solid}
          />
          <g id="logo-logo">
            <polygon
              points="511.57 511.73 511.57 479.74 745.44 479.74 745.44 32 297.7 32 297.7 265.87 265.7 265.87 265.7 0 777.44 0 777.44 511.73 511.57 511.73"
              style={styles.purple}
            />
          </g>
        </g>
      </g>
    </motion.svg>
    // <svg width='80rem' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1159.12 685.51">
    //   <defs>
    //     <linearGradient
    //       id="linear-gradient"
    //       x1="13.23"
    //       y1="798.19"
    //       x2="13.23"
    //       y2="597.19"
    //       gradientTransform="matrix(2.46, 0, 0, -2.46, 545.64, 1962.5)"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop offset="0" stopColor="#5b247a" />
    //       <stop offset="1" stopColor="#1bcedf" />
    //     </linearGradient>
    //   </defs>
    //   <g id="Layer_2" data-name="Layer 2">
    //     <g id="Layer_1-2" data-name="Layer 1">
    //       <g id="logo-logo">
    //         <polygon
    //           points="824.02 491.73 578.16 491.73 578.16 479.74 812.03 479.74 812.03 12 344.29 12 344.29 245.87 332.29 245.87 332.29 0 824.02 0 824.02 491.73"
    //           style={styles.linearGradient}
    //         />
    //       </g>
    //       <g id="text-logo-path">
    //         <path
    //           d="M27.88,673.28H0V601.62H7.7v65H27.88ZM39.41,659.5h0V615.4q0-7.38,4.52-11.42t13.57-4q9,0,13.67,4t4.65,11.42h0v24.23H47.11V659.5q0,8.82,10.49,8.82t10.52-8.82h0v-6.09h7.7v6.09q0,7.38-4.53,11.42t-13.57,4q-9.06,0-13.69-4T39.41,659.5Zm7.7-44.1V633h21V615.4q0-8.83-10.52-8.84T47.11,615.4ZM94,659.5h0v-11Q94,633,109.89,633h12.76V615a7.81,7.81,0,0,0-2.52-6.2c-1.7-1.47-4.19-2.21-7.49-2.21h0q-9.81,0-9.8,8.41h0v6.46H95.08v-6q0-7.38,4.37-11.42t13.19-4q8.82,0,13.3,4t4.47,11.42h0v57.88h-3.33l-2.86-7a18.25,18.25,0,0,1-6.06,6.34,15.08,15.08,0,0,1-8.27,2.38h0Q94,675,94,659.5Zm7.7-11v11a10.48,10.48,0,0,0,1.78,6.51q1.77,2.31,6.4,2.31a12.62,12.62,0,0,0,8.6-3.57q4-3.59,4.16-7.14h0v-18H109.89q-4.64,0-6.4,2.32a10.41,10.41,0,0,0-1.78,6.5Zm67.41,24.83H151.36V601.62h17.76q8.63,0,13.06,4.06t4.45,11.38h0v40.76q0,7.39-4.39,11.42t-13.12,4Zm-10.06-65v58.42h10.06q9.81,0,9.81-8.84h0V617.06a8.4,8.4,0,0,0-2.54-6.52c-1.68-1.54-4.1-2.3-7.27-2.3H159.06Zm55.67,65H207V601.62h7.7Zm29.74,0h-7.7V601.62H240l2.75,7.15q5.28-8.82,14.69-8.83h0q16.22,0,16.21,15.46h0v57.88H266V615.4a10.21,10.21,0,0,0-1.83-6.51q-1.83-2.32-6.68-2.33a13,13,0,0,0-8.94,3.74c-2.72,2.5-4.07,4.93-4.07,7.31h0ZM293,659.5h0V615.4Q293,608,297.5,604t13.57-4c6,0,10.59,1.35,13.68,4s4.63,6.5,4.63,11.42h0v6h-7.7v-6q0-8.83-10.49-8.84t-10.52,8.84h0v44.1q0,8.82,10.52,8.82t10.49-8.82h0v-16H309.29v-6.62h20.09V659.5q0,7.38-4.53,11.42t-13.57,4q-9,0-13.68-4T293,659.5Zm114.71,13.78H375.15V601.62h31.39v6.62H382.85V633.6h19.34v6.62H382.85v26.44h24.83Zm34.29,0H424.2V601.62H442q8.63,0,13,4.06t4.45,11.38h0v40.76q0,7.39-4.39,11.42t-13.11,4Zm-10.07-65v58.42H442q9.79,0,9.8-8.84h0V617.06a8.37,8.37,0,0,0-2.54-6.52c-1.68-1.54-4.1-2.3-7.26-2.3H431.9Zm46.32,51.26h0V615.4q0-7.38,4.51-11.42t13.57-4q9.06,0,13.68,4t4.63,11.42h0v6h-7.7v-6q0-8.83-10.49-8.84t-10.5,8.84h0v44.1q0,8.82,10.5,8.82t10.49-8.82h0v-16H494.53v-6.62h20.08V659.5q0,7.38-4.53,11.42t-13.57,4q-9,0-13.66-4T478.22,659.5Zm55.14,0h0V615.4q0-7.38,4.51-11.42t13.57-4q9.06,0,13.68,4t4.63,11.42h0v24.23H541.06V659.5q0,8.82,10.5,8.82t10.49-8.82h0v-6.09h7.7v6.09q0,7.38-4.53,11.42t-13.57,4q-9,0-13.66-4T533.36,659.5Zm7.7-44.1V633h21V615.4q0-8.83-10.49-8.84t-10.5,8.84Zm92.24,57.88H615.52V601.62H633.3q8.61,0,13.06,4.06t4.43,11.38h0v40.76q0,7.39-4.39,11.42t-13.1,4Zm-10.08-65v58.42H633.3a9.67,9.67,0,0,0,7.21-2.6,8.5,8.5,0,0,0,2.58-6.24h0V617.06a8.57,8.57,0,0,0-2.58-6.19,9.65,9.65,0,0,0-7.21-2.63H623.22Zm55.69,65h-7.7V601.62h3.27l3.23,8.11q3.56-9.78,11.26-9.79h0q13.14,0,13.08,14.32h0v7.17h-7.37v-7.6q0-7.27-6.08-7.27h0q-3.66,0-6.68,4.2t-3,12.13h0Zm32.51-35.49h0V601.62h7.7v36.17q0,8.84,11,8.83h0l.06,0h0q11,0,11-8.79h0V601.62h7.7v36.17q0,13.58-14.75,15.19h0v20.3h-7.7V653Q711.42,651.3,711.42,637.79ZM766,659.5h0V601.62h7.76V659.5q0,8.82,10.2,8.82t10.2-8.82h0V601.62h7.7V659.5q0,8.82,10.2,8.82t10.2-8.82h0V601.62h7.7V659.5q0,7.26-4.63,11.36T811.58,675q-9.11,0-13.63-6.42h0q-4.29,6.42-13.51,6.42t-13.84-4.09Q766,666.77,766,659.5Zm82.71,0h0v-11q0-15.44,15.89-15.44h12.76V615a7.75,7.75,0,0,0-2.54-6.2q-2.52-2.21-7.48-2.21h0q-9.81,0-9.81,8.41h0v6.46h-7.74v-6q0-7.38,4.36-11.42t13.19-4q8.84,0,13.31,4t4.45,11.42h0v57.88h-3.33l-2.85-7a18.19,18.19,0,0,1-6.07,6.34,15,15,0,0,1-8.25,2.38h0Q848.69,675,848.68,659.5Zm7.7-11v11a10.54,10.54,0,0,0,1.77,6.51q1.8,2.31,6.42,2.31a12.59,12.59,0,0,0,8.59-3.57q4-3.59,4.17-7.14h0v-18H864.57q-4.62,0-6.42,2.32a10.47,10.47,0,0,0-1.77,6.5Zm77.55,24.83H906V601.62h7.7v65h20.2Zm41.08,0H947.1V601.62h7.7v65H975Zm14.16,0-2.64-1V661.17h9.9v10.44l-5.37,13.9-3.51-.65Zm80.94,0H1042.2V601.62h7.7v65h20.21Zm41.07,0H1083.3V601.62h7.7v65h20.18Zm11.53-13.78h0V615.4q0-7.38,4.52-11.42t13.57-4q9,0,13.69,4t4.63,11.42h0v10.44h-7.7V615.4q0-8.83-10.52-8.84t-10.5,8.84h0v44.1q0,8.82,10.5,8.82t10.52-8.82h0v-6.09h7.7v6.09q0,7.38-4.53,11.42T1141,675q-9,0-13.69-4T1122.71,659.5Z"
    //           style={styles.solid}
    //         />
    //       </g>
    //       <g id="tagline-3a78d944-c0db-44d4-8ad5-60158c925687-logo-path">
    //         <path
    //           d="M552.18,394.46H434.12V91.14h32.6v275.3h85.46Zm193.48,0H608V91.14H740.88v28H640.6V226.5h81.81v28.05H640.6V366.44H745.66Z"
    //           style={styles.linearGradient}
    //         />
    //       </g>
    //     </g>
    //   </g>
    // </svg>
  );
};

export default LogoSVG;
