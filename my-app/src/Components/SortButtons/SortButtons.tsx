import './sortButtons.css';

interface Props {
    children: React.ReactNode;
}

export default function SortButtons({ children }: Props) {
    return (
        <div className="sortButtons">
            {children}
        </div>
    )
}