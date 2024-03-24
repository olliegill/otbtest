import { pluralise } from "../../helpers";

interface Props {
    adultCount: number;
    childCount: number;
    infantCount: number;
}

export default function GuestCount({ adultCount, childCount, infantCount }: Props) {
    return (
        <p>
            {adultCount > 0 && (
                <span><b>{adultCount}</b> {pluralise(adultCount, 'adult ', 'adults ')}</span>
            )}
            {childCount > 0 && (
                <span><b>{childCount}</b> {pluralise(childCount, 'child ', 'children ')}</span>
            )}
            {infantCount > 0 && (
                <span><b>{infantCount}</b> {pluralise(infantCount, 'infant ', 'infants ')}</span>
            )}
        </p>
    );
}