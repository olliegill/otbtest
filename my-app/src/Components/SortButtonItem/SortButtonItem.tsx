import classNames from 'classnames';
import './sortButtonItem.css';

interface Props {
    handleClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
    icon: React.ReactNode;
}

export default function SortButtonItem({ handleClick, isActive, children, icon }: Props) {

    const buttonClass = classNames({
		'sortButtonItem': true,
		'sortButtonItem__isActive': isActive,
	});

    return (
        <button onClick={handleClick} className={buttonClass}>
            <p className='sortButtonItem__text'>sort <b>{children}</b></p>
            <div className='sortButtonItem__icon'>{icon}</div>
        </button>
    );
}