import React from 'react';
import { BUTTON_STYLES as styles } from '../../config';

interface ButtonProps {
    label: string;
    style?: string; // Optional prop for custom styles
    type?: 'submit' | 'button' | 'reset'; // Optional prop for button type
    onClick?: () => void; // Optional prop for click handler
    disabled?: boolean; // Optional prop to disable the button
}

const buttonStyle = {
    default: styles.defaultButton,
    login: styles.loginButton,
    register: styles.registerButton,
    logout: styles.logoutButton,
    cancel: styles.cancelButton,
}

export const Button: React.FC<ButtonProps> = ({ label, style, type = 'button', onClick, disabled }) => {
    switch (style) {
        case 'login':
            style = buttonStyle.login;
            break;
        case 'register':
            style = buttonStyle.register;
            break;
        case 'logout':
            style = buttonStyle.logout;
            break;
        case 'cancel':
            style = buttonStyle.cancel;
            break;
        default:
            style = buttonStyle.default;
            break;
    }
    return (
        <button type={type} className={style} disabled={disabled} onClick={onClick}>
            {label}
        </button>
    );
};

// export default Button;
