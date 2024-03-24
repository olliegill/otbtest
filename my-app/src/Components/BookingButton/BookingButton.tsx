import './bookingButton.css';

interface Props {
    price: number;
    onClick?: () => void;
}

export default function BookingButton({ price, onClick }: Props) {
    return (
        <button onClick={onClick} className='bookingButton'>
            <p className='bookingButton__text'>Book Now</p>
            <p className='bookingButton__price'>£{price.toFixed(2)}</p>
        </button>
    );
}