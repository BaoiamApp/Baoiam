import React from 'react';
import { FaCalendarAlt, FaCreditCard, FaPaypal, FaMoneyBillWave, FaCalendarDay, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const AllBuys = () => {
    const purchases = [
        {
            courseName: 'React for Beginners',
            instructorName: 'John Doe',
            dateOfPurchase: '2024-09-01',
            paymentMethod: 'Credit Card',
            validity: 'Lifetime',
            price: '$29.99',
            image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png', // Placeholder image URL
            rating: 4.5,
        },
        {
            courseName: 'Advanced JavaScript',
            instructorName: 'Jane Smith',
            dateOfPurchase: '2024-08-15',
            paymentMethod: 'PayPal',
            validity: '1 Year',
            price: '$49.99',
            image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png',
            rating: 4.0,
        },
        {
            courseName: 'Full Stack Development',
            instructorName: 'Mark Johnson',
            dateOfPurchase: '2024-07-20',
            paymentMethod: 'Debit Card',
            validity: '6 Months',
            price: '$59.99',
            image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png',
            rating: 4.8,
        },
        {
            courseName: 'Python for Data Science',
            instructorName: 'Anna Lee',
            dateOfPurchase: '2024-06-10',
            paymentMethod: 'Credit Card',
            validity: 'Lifetime',
            price: '$39.99',
            image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png',
            rating: 4.6,
        },
        {
            courseName: 'Machine Learning A-Z',
            instructorName: 'Michael Brown',
            dateOfPurchase: '2024-05-22',
            paymentMethod: 'UPI',
            validity: '1 Year',
            price: '$69.99',
            image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png',
            rating: 4.7,
        },
    ];
  


  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    
    return (
      <div className="flex items-center">
        {Array(fullStars).fill(<FaStar className="text-yellow-500" />)}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars).fill(<FaStar className="text-gray-300" />)}
        
      </div>
    );
  };

  return (
    <div className="max-w-screen mx-auto p-4">
      {/* For larger screens (Card layout with image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {purchases.map((purchase, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black dark:text-white border dark:border-gray-700 shadow-lg rounded-lg p-4 flex flex-col xl:flex-row items-center"
          >
            <img
              src={purchase.image}
              alt={purchase.courseName}
              className="w-full md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0"
            />
            <div className="flex-1 md:ml-4">
              <h3 className="text-lg font-semibold mb-2">{purchase.courseName}</h3>
              <p className="flex items-center mb-1">
                <FaCalendarDay className="mr-2" />
                {purchase.dateOfPurchase}
              </p>
              <p className="flex items-center mb-1">
                <FaCreditCard className="mr-2" />
                {purchase.paymentMethod}
              </p>
              <p className="flex items-center mb-1">
                <FaMoneyBillWave className="mr-2" />
                {purchase.price}
              </p>
              <p className="flex items-center mb-1">
                <FaCalendarAlt className="mr-2" />
                {purchase.validity}
              </p>
              <p className="flex items-center mb-1">
                <FaPaypal className="mr-2" />
                {purchase.instructorName}
              </p>
              <div className="mt-2">
                {renderStars(purchase.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBuys;
