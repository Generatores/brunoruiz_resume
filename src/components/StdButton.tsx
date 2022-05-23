import styles from 'components/Button.module.css';

import { iStdButton } from 'interfaces/Components';

export const StdButton = ({
	ButtonText = 'Click me!',
	...RestButton
}: iStdButton) => {
	return (
		<div className={styles['Container']}>
			<button {...RestButton}>{ButtonText}</button>
		</div>
	);
};
