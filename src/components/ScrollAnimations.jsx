// src/components/ScrollAnimations.jsx
import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';


export function ScrollFadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: "100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animación con efecto de escala
export function ScrollScaleIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotateY: 20
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotateY: 0
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animación "staggered" para listas
export function ScrollStagger({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              scale: 0.9
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.25, 0, 1]
              }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Animación con efecto parallax sutil
export function ScrollParallax({ children, offset = 50, className = '' }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: offset
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}