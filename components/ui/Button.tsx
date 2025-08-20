import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#ccc' : '#FF4500', // orange-red
        color: '#FFFFFF', // white
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.currentTarget.style.backgroundColor = '#FF6347'); // lighter red on hover
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          (e.currentTarget.style.backgroundColor = '#FF4500'); // revert to original
        }
      }}
    >
      {label}
    </button>
  );
};

export default Button;