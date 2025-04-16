import { Star, StarHalf } from 'lucide-react';

interface RenderStarsProps {
    score: number;
    size?: number;
}

const RenderStars: React.FC<RenderStarsProps> = ({ score, size = 24 }) => {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex text-primary-200">
        {Array(fullStars).fill(0).map((_, i) => (
          <Star key={`full-${i}`} size={size} fill="currentColor" />
        ))}
        {hasHalfStar && <StarHalf size={size} fill="currentColor" />}
        {Array(emptyStars).fill(0).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-dark-200" />
        ))}
      </div>
    );
};

export default RenderStars;