import './starRating.css';

interface Props {
    starCount: number
}

export default function StarRating({ starCount }: Props) { 
    return (
        <div>
            {[...Array(starCount)].map((_x, i) =>
                <span key={i} className="starRating__item">&#9733;</span>
            )}
        </div>
    );
}