import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat"

export function convertTimestampToDate(timeStamp: number) {
    dayjs.extend(advancedFormat);    
    return dayjs.unix(timeStamp).format('Do MMMM YYYY');
}

export function pluralise(value: number, singular: string, plural: string) {
    if (value === 1) {
        return singular;
    } else {
        return plural;
    }
}