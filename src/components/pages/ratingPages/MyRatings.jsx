import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Heading from '../../common/Heading';
import RatingCard from './RatingCard';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { fetchMyRatings } from '../../../Api/api';

const IconStar = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const { data: userRatings } = useQuery({
    queryKey: ['user-ratings', user.email],
    queryFn: () => fetchMyRatings(user.email),
  });

  const mainHeadingStyle =
    'text-4xl md:text-5xl font-extrabold text-secondary text-center mb-4';
  const highlightStyle = 'text-primary';
  if (userRatings?.length === 0) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-16 text-center">
        <Heading title={'My'} highlight={'Ratings'}></Heading>
        <div className="alert alert-warning shadow-lg mt-12 max-w-lg mx-auto">
          <IconStar className="w-6 h-6" />
          <span>You haven't submitted any reviews yet.</span>
        </div>
        <p className="mt-6 text-lg text-gray-600">
          Find a property you've interacted with and share your feedback!
        </p>
        <Link to="/properties" className="btn btn-primary mt-6">
          Browse Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <Heading
        title={'My Ratings'}
        highlight={'& Feedback'}
        subtitle={
          'Manage all your submitted reviews for properties on HomeNest.'
        }
      ></Heading>
      <div className="space-y-8 max-w-4xl mx-auto">
        {userRatings?.map(rating => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </div>
    </div>
  );
};

export default MyRatings;
