import React,{ useState } from 'react';
import DarkModeContext from './DarkModeContext';




const setDarkMode=(setDarkModeState)=>{
	return ({ darkMode }) => {
		const html = document.querySelector('html');
		
		if (darkMode) {
		  html.classList.add('dark-mode');
		  return void setDarkModeState({ darkMode });
		}
	
		html.classList.remove('dark-mode');
		setDarkModeState({ darkMode });
	  };
}

//context-api provider 
export default function DarkModeProvider({ children }) {
	const [darkModeState, setDarkModeState] = useState({ darkMode: false });
	
	return (
	  <DarkModeContext.Provider
		value={{ state: darkModeState, setDarkMode: setDarkMode(setDarkModeState) }}
	  >
		{children}
	  </DarkModeContext.Provider>
	)
  }