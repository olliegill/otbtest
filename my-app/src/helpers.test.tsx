import { convertTimestampToDate, pluralise } from './helpers';

describe('convertTimestampToDate', () => {
    const mockDepartDate = 1562112000;
    const mockDate = convertTimestampToDate(mockDepartDate);
    it('should return correct date',  () => {
        expect(mockDate).toBe('3rd July 2019');
    })
    it('should return truthy',  () => {
        expect(mockDate).toBeTruthy();
    })
    
});

describe('pluralise', () => {
    it('should return singular text if value is 1',  () => {
        expect(pluralise(1, 'test', 'tests')).toBe('test');
    });
    it('should return plural text if value is more than 1',  () => {
        expect(pluralise(2, 'test', 'tests')).toBe('tests');
        expect(pluralise(232, 'test', 'tests')).toBe('tests');
    });
    it('should return plural text if value is 0',  () => {
        expect(pluralise(0, 'test', 'tests')).toBe('tests');
    });
})