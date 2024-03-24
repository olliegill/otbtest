
export function sortByPrice(hotels: any) {
    const hotelsToSort = hotels;      
    return hotelsToSort.sort((a: { bookingPrice: number; }, b: { bookingPrice: number; }) => b.bookingPrice - a.bookingPrice)
}

export function sortByRating(hotels: any) {
    const hotelsToSort = hotels;        
    return hotelsToSort.sort((a: { starCount: number; }, b: { starCount: number; }) => b.starCount - a.starCount)
}

export function sortByName(hotels: any) {
    const hotelsToSort = hotels;        
    return hotelsToSort.sort((a: { name: string; }, b: { name: string; }) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
}