import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Stars({ rating }) {
    const ratingObj = typeof rating === 'string' ? JSON.parse(rating) : rating;
    const stars = [];
    const fullStars = Math.floor(ratingObj.rate);
    const hasHalfStar = ratingObj.rate % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }

    // Add empty stars  
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-star-${i}`} className="text-yellow-400" />);
    }

    return (
        <div className="flex items-center">
            <p className='text-white mr-2 '>{ratingObj.rate}</p> {stars}
        </div>
    );
}


