import Link from 'next/link';

import styles from 'components/Button.module.css';

import { iNavButton } from 'interfaces/Components';

export const NavButton = ({
	ButtonPath,
	ButtonText,
	...RestButton
}: iNavButton) => {
	return (
		<div className={styles['Container']}>
			<Link href={ButtonPath}>
				<button {...RestButton}>{ButtonText}</button>
			</Link>
		</div>
	);
};
