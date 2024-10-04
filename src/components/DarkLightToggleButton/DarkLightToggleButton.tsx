import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ToggleButton } from './DarkLightToggleButtonStyled';
import { useTheme } from '../../context/ThemeContext';

export const DarkLightToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} className="rotate-center">
      {isDarkMode ? <FiMoon /> : <FiSun />}
    </ToggleButton>
  )
}
