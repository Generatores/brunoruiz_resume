import { ButtonHTMLAttributes } from 'react';

export interface iStdButton extends ButtonHTMLAttributes<any> {
	ButtonText?: string;
}

export interface iNavButton extends iStdButton {
	ButtonPath: string;
}
