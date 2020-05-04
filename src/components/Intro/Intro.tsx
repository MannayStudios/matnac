import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  top: 50%;
  left: 50%;
  width: 30rem;
  position: absolute;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 50rem;
  }
`;

const TracedPath = styled(motion.path)`
  fill: transparent;
  stroke: #fff;
  stroke-width: 1.3;
  stroke-dasharray: '0 1';
  transform: translateX(calc(50% - 3.75rem));

  @media (min-width: 768px) {
    transform: translateX(calc(50% - 6.25rem));
  }
`;

export const Intro: React.FC = () => (
  <Container>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342 57">
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="6249.648"
          y1="-342.65"
          x2="6249.648"
          y2="-293.242"
          gradientTransform="matrix(-1 0 0 1 6331.048 346)"
        >
          <stop offset="0" />
          <stop offset=".024" stopColor="#121212" />
          <stop offset=".094" stopColor="#434343" />
          <stop offset=".17" stopColor="#707070" />
          <stop offset=".251" stopColor="#979797" />
          <stop offset=".335" stopColor="#b7b7b7" />
          <stop offset=".426" stopColor="#d1d1d1" />
          <stop offset=".526" stopColor="#e6e6e6" />
          <stop offset=".638" stopColor="#f4f4f4" />
          <stop offset=".774" stopColor="#fcfcfc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="6285.148"
          y1="-292.749"
          x2="6285.148"
          y2="-341.072"
          gradientTransform="matrix(-1 0 0 1 6331.048 346)"
        >
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".226" stopColor="#fcfcfc" />
          <stop offset=".362" stopColor="#f4f4f4" />
          <stop offset=".474" stopColor="#e6e6e6" />
          <stop offset=".574" stopColor="#d1d1d1" />
          <stop offset=".665" stopColor="#b7b7b7" />
          <stop offset=".75" stopColor="#979797" />
          <stop offset=".83" stopColor="#707070" />
          <stop offset=".906" stopColor="#434343" />
          <stop offset=".976" stopColor="#121212" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="-3833.017"
          y1="-342.65"
          x2="-3833.017"
          y2="-293.242"
          gradientTransform="translate(3935.617 346)"
        >
          <stop offset="0" />
          <stop offset=".024" stopColor="#121212" />
          <stop offset=".094" stopColor="#434343" />
          <stop offset=".17" stopColor="#707070" />
          <stop offset=".251" stopColor="#979797" />
          <stop offset=".335" stopColor="#b7b7b7" />
          <stop offset=".426" stopColor="#d1d1d1" />
          <stop offset=".526" stopColor="#e6e6e6" />
          <stop offset=".638" stopColor="#f4f4f4" />
          <stop offset=".774" stopColor="#fcfcfc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient
          id="d"
          gradientUnits="userSpaceOnUse"
          x1="160.65"
          y1="-293.242"
          x2="160.65"
          y2="-342.65"
          gradientTransform="translate(0 346)"
        >
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".226" stopColor="#fcfcfc" />
          <stop offset=".362" stopColor="#f4f4f4" />
          <stop offset=".474" stopColor="#e6e6e6" />
          <stop offset=".574" stopColor="#d1d1d1" />
          <stop offset=".665" stopColor="#b7b7b7" />
          <stop offset=".75" stopColor="#979797" />
          <stop offset=".83" stopColor="#707070" />
          <stop offset=".906" stopColor="#434343" />
          <stop offset=".976" stopColor="#121212" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="e"
          gradientUnits="userSpaceOnUse"
          x1="198.3"
          y1="-342.65"
          x2="198.3"
          y2="-293.242"
          gradientTransform="translate(0 346)"
        >
          <stop offset="0" />
          <stop offset=".074" stopColor="#353535" />
          <stop offset=".169" stopColor="#727272" />
          <stop offset=".26" stopColor="#a4a4a4" />
          <stop offset=".345" stopColor="#ccc" />
          <stop offset=".422" stopColor="#e8e8e8" />
          <stop offset=".49" stopColor="#f9f9f9" />
          <stop offset=".54" stopColor="#ffffff" />
          <stop offset=".586" stopColor="#fafafa" />
          <stop offset=".643" stopColor="#eaeaea" />
          <stop offset=".706" stopColor="#d0d0d0" />
          <stop offset=".773" stopColor="#adadad" />
          <stop offset=".845" stopColor="#f7f7f7" />
          <stop offset=".919" stopColor="#474747" />
          <stop offset=".994" stopColor="#050505" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="f"
          gradientUnits="userSpaceOnUse"
          x1="233.8"
          y1="-292.749"
          x2="233.8"
          y2="-342.157"
          gradientTransform="translate(0 346)"
        >
          <stop offset="0" />
          <stop offset=".024" stopColor="#121212" />
          <stop offset=".094" stopColor="#434343" />
          <stop offset=".17" stopColor="#707070" />
          <stop offset=".251" stopColor="#979797" />
          <stop offset=".335" stopColor="#b7b7b7" />
          <stop offset=".426" stopColor="#d1d1d1" />
          <stop offset=".526" stopColor="#e6e6e6" />
          <stop offset=".638" stopColor="#f4f4f4" />
          <stop offset=".774" stopColor="#fcfcfc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient
          id="g"
          gradientUnits="userSpaceOnUse"
          x1="-3680.717"
          y1="-342.157"
          x2="-3680.717"
          y2="-292.749"
          gradientTransform="translate(3935.617 346)"
        >
          <stop offset="0" />
          <stop offset=".024" stopColor="#121212" />
          <stop offset=".094" stopColor="#434343" />
          <stop offset=".17" stopColor="#707070" />
          <stop offset=".251" stopColor="#979797" />
          <stop offset=".335" stopColor="#b7b7b7" />
          <stop offset=".426" stopColor="#d1d1d1" />
          <stop offset=".526" stopColor="#e6e6e6" />
          <stop offset=".638" stopColor="#f4f4f4" />
          <stop offset=".774" stopColor="#fcfcfc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient
          id="h"
          gradientUnits="userSpaceOnUse"
          x1="6019.849"
          y1="5414.801"
          x2="6019.849"
          y2="5381.901"
          gradientTransform="matrix(0 -1 -1 0 5719.9 6065.9)"
        >
          <stop offset=".216" />
          <stop offset=".235" stopColor="#121212" />
          <stop offset=".29" stopColor="#434343" />
          <stop offset=".35" stopColor="#707070" />
          <stop offset=".412" stopColor="#979797" />
          <stop offset=".479" stopColor="#b7b7b7" />
          <stop offset=".55" stopColor="#d1d1d1" />
          <stop offset=".628" stopColor="#e6e6e6" />
          <stop offset=".716" stopColor="#f4f4f4" />
          <stop offset=".823" stopColor="#fcfcfc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient
          id="i"
          gradientUnits="userSpaceOnUse"
          x1="271.163"
          y1="-317.354"
          x2="321.79"
          y2="-317.354"
          gradientTransform="translate(0 346)"
        >
          <stop offset="0" />
          <stop offset=".024" stopColor="#121212" />
          <stop offset=".094" stopColor="#434343" />
          <stop offset=".17" stopColor="#707070" />
          <stop offset=".251" stopColor="#979797" />
          <stop offset=".335" stopColor="#b7b7b7" />
          <stop offset=".426" stopColor="#d1d1d1" />
          <stop offset=".526" stopColor="#e6e6e6" />
          <stop offset=".638" stopColor="#f4f4f4" />
          <stop offset=".774" stopColor="#fcfcfc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 2.7 }}
      >
        <path fill="url(#c)" d="M109.9 3.4v35c0 8-6.5 14.4-14.6 14.4V3.4h14.6z" />
        <path
          fill="#ffffff"
          d="M112 3.4H95.3c0 4.5 1.1 8.9 3.1 12.8s4.9 7.4 8.6 10.1l2.4 1.8 13.2 10.1c.1.1.2.2.4.3 3.9 3.1 6.3 7.7 6.3 12.9 0 .5 0 1-.1 1.5H146c0-4.5-1.1-8.9-3.1-12.8s-4.9-7.4-8.6-10.1l-2.4-1.8L118.7 18c-.1-.1-.2-.2-.4-.3-3.9-3.1-6.3-7.7-6.3-12.9-.1-.5-.1-1 0-1.4z"
        />
        <path fill="url(#d)" d="M152.1 3.4h17.1v49.4h-17.1V3.4z" />
        <path fill="#ffffff" d="M185.2 17.7h-52.6c-8.1 0-14.6-6.4-14.6-14.4h67.1l.1 14.4z" />
        <path fill="url(#e)" d="M205.6 25.9v12.4c0 8-6.5 14.4-14.6 14.4V3.4l14.6 22.5z" />
        <path fill="url(#f)" d="M226.5 30.7V18.2c0-8 6.5-14.4 14.6-14.4v49.4l-14.6-22.5z" />
        <path
          fill="#ffffff"
          d="M241.1 36.8v16.5c-4.6 0-9-1.1-13-3.1s-7.5-4.8-10.2-8.5l-1.8-2.4-10.2-13c-.1-.1-.2-.2-.3-.4-3.1-3.8-7.8-6.2-13.1-6.2-.5 0-1 0-1.5.1V3.4c4.6 0 9 1.1 13 3.1s7.5 4.8 10.2 8.5l1.8 2.4 10.2 13c.1.1.2.2.3.4 3.1 3.8 7.8 6.2 13.1 6.2.5-.1 1-.1 1.5-.2zm-65.2 16H191c8.1 0 14.6-6.4 14.6-14.4H176l-.1 14.4z"
        />
        <path fill="url(#g)" d="M262.2 3.8v35c0 8-6.5 14.4-14.6 14.4V3.8h14.6z" />
        <path
          fill="#ffffff"
          d="M264.2 3.8h-16.7c0 4.5 1.1 8.9 3.1 12.8s4.9 7.4 8.6 10.1l2.4 1.8 13.2 10.1c.1.1.2.2.4.3 3.9 3.1 6.3 7.7 6.3 12.9 0 .5 0 1-.1 1.5h16.7c0-4.5-1.1-8.9-3.1-12.8s-4.9-7.4-8.6-10.1l-2.4-1.8-13.2-10.1c-.1-.1-.2-.2-.4-.3-3.9-3.1-6.3-7.7-6.3-12.9.1-.5.1-1 .1-1.5z"
        />
        <path fill="url(#h)" d="M305.6 53.3h18.3c8 0 14.1-6.4 14.1-14.4h-32.9l.5 14.4z" />
        <path
          fill="url(#i)"
          d="M321.8 53.3c-5.4-34.9-25.4-33.2-33.9-49.3h-16.6c-1.5 17.5 35 20.2 34.2 49.4l16.3-.1z"
        />
        <path
          fill="#ffffff"
          d="M338.1 18.2h-52.5c-8 0-14.6-6.4-14.6-14.4h52.5c8 0 14.5 6.6 14.6 14.4z"
        />
      </motion.g>
      <TracedPath
        d="M75.7,6.5c-4,2-7.5,4.8-10.2,8.5l-1.8,2.4l-10.2,13c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.2-0.3,0.3-0.4,0.5l0.4-0.7V19.9v-1.7
	V3.4C50,3.4,47,3.9,44,4.9c0,0,0,0,0,0c0,0,0,0,0,0c-1.3,0.4-2.5,1-3.8,1.6c-4,2-7.5,4.8-10.2,8.5l-1.8,2.4L18,30.3
	c-0.1,0.1-0.2,0.2-0.3,0.4c-3.1,3.8-7.8,6.2-13.1,6.2H3.1v16.5c4.6,0,9-1.1,13-3.1s7.5-4.8,10.2-8.5l1.8-2.4l10.2-13
	c0.1-0.1,0.2-0.2,0.3-0.4v10.9V37v16.3v0.1c4.6,0,9-1.1,13-3.1s7.5-4.8,10.2-8.5l1.8-2.4l10.2-13c0.1-0.1,0.2-0.2,0.3-0.4v12.3
  c0,8,6.5,14.4,14.6,14.4V19.9V3.4C84.1,3.4,79.7,4.5,75.7,6.5z"
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{ pathLength: 1, opacity: 0 }}
        transition={{
          pathLength: { duration: 2, ease: 'easeInOut' },
          opacity: { duration: 1, ease: 'easeInOut', delay: 1.75 },
        }}
      />
      <motion.g
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 1.5, ease: 'easeInOut', delay: 1.85 },
          x: { duration: 0.5, ease: 'easeInOut', delay: 2.55 },
        }}
      >
        <path fill="url(#a)" d="M74.1 25.9v12.4c0 8 6.5 14.4 14.6 14.4V3.4L74.1 25.9z" />
        <path
          fill="url(#b)"
          d="M44 4.9c5.4 2.1 9.2 7.3 9.2 13.3v12.4L38.6 53.3V7.6c2.1-.3 4.1-1.2 5.4-2.7z"
        />
        <path
          fill="#ffffff"
          d="M3.1 36.9v16.5c4.6 0 9-1.1 13-3.1s7.5-4.8 10.2-8.5l1.8-2.4 10.2-13c.1-.1.2-.2.3-.4 3.1-3.8 7.8-6.2 13.1-6.2.5 0 1 0 1.5.1V3.4c-4.6 0-9 1.1-13 3.1S32.7 11.3 30 15l-1.8 2.4L18 30.3c-.1.1-.2.2-.3.4-3.1 3.8-7.8 6.2-13.1 6.2H3.1zm35.5 0v16.5c4.6 0 9-1.1 13-3.1s7.5-4.8 10.2-8.5l1.8-2.4 10.2-13c.1-.1.2-.2.3-.4 3.1-3.8 7.8-6.2 13.1-6.2.5 0 1 0 1.5.1V3.4c-4.6 0-9 1.1-13 3.1s-7.5 4.8-10.2 8.5l-1.8 2.4-10.2 13c-.1.1-.2.2-.3.4-3.1 3.8-7.8 6.2-13.1 6.2h-1.5z"
        />
      </motion.g>
    </svg>
  </Container>
);
