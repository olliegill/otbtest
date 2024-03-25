import { useState } from 'react';
import GuestCount from '../GuestCount/GuestCount';
import StarRating from '../StarRating/StarRating';
import { convertTimestampToDate } from '../../helpers';
import './hotel.css';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import classNames from 'classnames';
import BookingButton from '../BookingButton/BookingButton';

interface hotelProps {
    name: string;
    location: string;
    starCount: number;
    adultCount: number;
    childCount: number;
    infantCount: number;
    departData: number;
    bookingLengthInDays: number;
    departingFrom: string;
    bookingPrice: number;
    image: string;
    overview: string;
}

export default function Hotel({
    name,
    location,
    starCount,
    adultCount,
    childCount,
    infantCount,
    departData,
    bookingLengthInDays,
    departingFrom,
    bookingPrice,
    image,
    overview
}: hotelProps) {

    const [toggleOverview, setToggleOverview] = useState(false);

    const handleToggleOverview = () => {
        setToggleOverview(!toggleOverview);
    }

    const hotelClass = classNames({
		'hotel': true,
		'hotel--overView--open': toggleOverview === true,

	});

    const overviewClass = classNames({
		'hotel__overview': true,
		'hotel__overview--open': toggleOverview === true,

	});
    
    return (
        <div className={hotelClass}>
            <div className='hotel__mainOuter'>
                <div className='hotel__imageOuter'>
                    <img className='hotel__image' src={require(`../../assets/${image}.png`)} alt={image} />
                    
                </div>
                <div className='hotel__info'>
                    <h5 className='hotel__name'>{name}</h5>
                    <p className='hotel__location'>{location}</p>
                    <div className='hotel__rating'>
                        <StarRating starCount={starCount} />
                    </div>
                    <div className='hotel__guests'>
                        <GuestCount
                            adultCount={adultCount}
                            childCount={childCount}
                            infantCount={infantCount}
                        />
                    </div>
                    <p className='hotel__departInfo'>
                        <b>{convertTimestampToDate(departData)}</b> for <b>{bookingLengthInDays} days</b>
                    </p>
                    <p className='hotel__departInfo'>departing from <b>{departingFrom}</b></p>
                    <div className='hotel__bookButton'>
                        <BookingButton price={bookingPrice} />
                    </div>
                    
                </div>
                <div className='hotel__readMore--outer'>
                    <ReadMoreButton onClick={handleToggleOverview} toggle={toggleOverview} />
                </div>
            </div>
            {toggleOverview && (
                <div className={overviewClass}>
                <p className='hotel__overviewText'>Overview</p>
                {overview}
            </div>
            )}
            
        </div>
    );
}