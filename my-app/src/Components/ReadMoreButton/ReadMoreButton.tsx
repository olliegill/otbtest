import './readMoreButton.css';
import Chevron from '../../svg/Chevron';
import classNames from 'classnames';

interface Props {
    onClick: ()=> void;
    toggle: boolean;
}

export default function ReadMoreButton({ onClick, toggle }: Props) {

    const buttonClass = classNames({
		'readMoreButton__chevron': true,
		'readMoreButton__chevron--up': toggle,
	});

    const style = getComputedStyle(document.body);

    return (
        <button onClick={onClick} className='readMoreButton'>
            <div className='readMoreButton__inner'>
                <p>
                    <b>Read {toggle ? 'less' : 'more'}</b> about this hotel
                </p>
                <div className={buttonClass}>
                    <Chevron color={style.getPropertyValue('--primary-dark-blue')} />
                </div>
            </div>
        </button>
    );
}