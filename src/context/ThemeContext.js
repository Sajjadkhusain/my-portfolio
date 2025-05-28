// import { useState, createContext, Children, useContext } from "react";

// // create context

// const ThemeContext = createContext();

// const ThemeProvider = ({ Children }) => {
//   const [theme, setTheme] = useState("light");
//   return (
//     <ThemeContext.Provider value={[theme, setTheme]}>
//       {Children}
//     </ThemeContext.Provider>
//   );
// };

// //custom hook
// const useTheme = () => useContext(ThemeContext);
// export { useTheme, ThemeProvider };

import React, { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Custom hook to use the context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
