import { sortByPrice, sortByName, sortByRating } from "./hotelSortingFunctions";

const mockData = [
    {
        name: 'hotel name test b',
        starCount: 5,
        bookingPrice: 1111.11,
    },
    {
        name: 'hotel name test c',
        starCount: 1,
        bookingPrice: 2222.22,
    },
    {
        name: 'hotel name test a',
        starCount: 2,
        bookingPrice: 3333.33,
    }
]
describe('sortByPrice', () => {
    it('should sort data by price', () => {
        const mockReturnData = sortByPrice(mockData);
        expect(mockReturnData[0].bookingPrice).toEqual(3333.33);
        expect(mockReturnData[0].bookingPrice).not.toEqual(1111.11);
    })
});

describe('sortByName', () => {
    it('should sort data by name', () => {
        const mockReturnData = sortByName(mockData);
        expect(mockReturnData[0].name).toEqual('hotel name test a');
        expect(mockReturnData[0].name).not.toEqual('hotel name test b');
    })
});

describe('sortByRating', () => {
    it('should sort data by name', () => {
        const mockReturnData = sortByRating(mockData);
        expect(mockReturnData[0].starCount).toEqual(5);
        expect(mockReturnData[0].starCount).not.toEqual(1);
    })
});

