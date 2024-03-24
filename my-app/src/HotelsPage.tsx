import './hotelsPage.css';
import { HotelData } from './HotelData';
import { useEffect, useState } from 'react';
import Hotel from './Components/Hotel/Hotel';
import SortButtons from './Components/SortButtons/SortButtons';
import SortButtonItem from './Components/SortButtonItem/SortButtonItem';
import Currency from './svg/Currency';
import AToZ from './svg/AToZ';
import Star from './svg/Star';
import { sortByName, sortByPrice, sortByRating } from './hotelSortingFunctions';

interface HotelProps {
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

function HotelsPage() {
    const [hotels, setHotels] = useState<Array<HotelProps>>([]);
    const [activeSort, setActiveSort] = useState(1);

    useEffect(() => {
        const data = HotelData();
        const sortedHotels = sortByName(data);
        setHotels(sortedHotels);
    }, []);

    const handleSortAlphabetically = () => {
        const hotelOrder = sortByName(hotels);
        setHotels(hotelOrder);
        setActiveSort(1);
    }

    const handleSortPrice = () => {
        const hotelOrder = sortByPrice(hotels);
        setHotels(hotelOrder);
        setActiveSort(2);
    }

    const handleSortRating = () => {
        const hotelOrder = sortByRating(hotels);
        setHotels(hotelOrder);
        setActiveSort(3);
    }

    const iconColor = (number: number) => {
        return activeSort === number ? 'white' : '#CCC'
    }
    
    return (
        <div className="hotelsPage">
            <div className='hotelsPage__layout'>
                <div className='hotelsPage__layout--left'>
                    <SortButtons>
                        <SortButtonItem
                            handleClick={handleSortAlphabetically}
                            isActive={activeSort === 1}
                            icon={<AToZ color={iconColor(1)} />}
                        >
                            alphabetically
                        </SortButtonItem>
                        <SortButtonItem
                            handleClick={handleSortPrice}
                            isActive={activeSort === 2} 
                            icon={<Currency color={iconColor(2)} />}   
                        >
                            by price
                        </SortButtonItem>
                        <SortButtonItem
                            handleClick={handleSortRating}
                            isActive={activeSort === 3}
                            icon={<Star color={iconColor(3)} />}  
                        >
                            by star rating
                        </SortButtonItem>
                    </SortButtons>
                </div>
                <div className='hotelsPage__layout--right'>
                    {hotels.map((hotel, index) => (
                        <Hotel
                            key={index}
                            name={hotel.name}
                            location={hotel.location}
                            starCount={hotel.starCount}
                            adultCount={hotel.adultCount}
                            childCount={hotel.childCount}
                            infantCount={hotel.infantCount}
                            departData={hotel.departData}
                            bookingLengthInDays={hotel.bookingLengthInDays}
                            departingFrom={hotel.departingFrom}
                            bookingPrice={hotel.bookingPrice}
                            image={hotel.image}
                            overview={hotel.overview}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotelsPage;