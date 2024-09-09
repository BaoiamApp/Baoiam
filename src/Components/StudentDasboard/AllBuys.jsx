import React from 'react';

const AllBuys = () => {
  const purchases = [
    {
      courseName: 'React for Beginners',
      instructorName: 'John Doe',
      dateOfPurchase: '2024-09-01',
      paymentMethod: 'Credit Card',
      validity: 'Lifetime',
      price: '$29.99',
    },
    {
      courseName: 'Advanced JavaScript',
      instructorName: 'Jane Smith',
      dateOfPurchase: '2024-08-15',
      paymentMethod: 'PayPal',
      validity: '1 Year',
      price: '$49.99',
    },
    {
      courseName: 'Full Stack Development',
      instructorName: 'Mark Johnson',
      dateOfPurchase: '2024-07-20',
      paymentMethod: 'Debit Card',
      validity: '6 Months',
      price: '$59.99',
    },
    {
      courseName: 'Python for Data Science',
      instructorName: 'Anna Lee',
      dateOfPurchase: '2024-06-10',
      paymentMethod: 'Credit Card',
      validity: 'Lifetime',
      price: '$39.99',
    },
    {
      courseName: 'Machine Learning A-Z',
      instructorName: 'Michael Brown',
      dateOfPurchase: '2024-05-22',
      paymentMethod: 'UPI',
      validity: '1 Year',
      price: '$69.99',
    },
    {
      courseName: 'UI/UX Design Basics',
      instructorName: 'Emily Davis',
      dateOfPurchase: '2024-04-05',
      paymentMethod: 'Credit Card',
      validity: 'Lifetime',
      price: '$19.99',
    },
    {
      courseName: 'Node.js for Backend',
      instructorName: 'Chris Wilson',
      dateOfPurchase: '2024-03-12',
      paymentMethod: 'PayPal',
      validity: '6 Months',
      price: '$34.99',
    },
    {
      courseName: 'Data Structures & Algorithms',
      instructorName: 'Jessica White',
      dateOfPurchase: '2024-02-28',
      paymentMethod: 'Credit Card',
      validity: '1 Year',
      price: '$44.99',
    },
    {
      courseName: 'Cloud Computing with AWS',
      instructorName: 'Andrew Scott',
      dateOfPurchase: '2024-01-18',
      paymentMethod: 'Debit Card',
      validity: 'Lifetime',
      price: '$59.99',
    },
    {
      courseName: 'Cybersecurity Essentials',
      instructorName: 'David Clark',
      dateOfPurchase: '2023-12-10',
      paymentMethod: 'UPI',
      validity: '6 Months',
      price: '$24.99',
    },
  ];

  return (
    <div className="max-w-screen mx-auto p-4">
      {/* For larger screens (Table layout) */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white dark:bg-black dark:text-white">
          <thead>
            <tr className="text-left text-white bg-gradient-to-r from-indigo-700 to-indigo-500">
              <th className="py-2 px-4">Course Name</th>
              <th className="py-2 px-4">Instructor Name</th>
              <th className="py-2 px-4">Date of Purchase</th>
              <th className="py-2 px-4">Method of Payment</th>
              <th className="py-2 px-4">Validity</th>
              <th className="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="py-2 px-4">{purchase.courseName}</td>
                <td className="py-2 px-4">{purchase.instructorName}</td>
                <td className="py-2 px-4">{purchase.dateOfPurchase}</td>
                <td className="py-2 px-4">{purchase.paymentMethod}</td>
                <td className="py-2 px-4">{purchase.validity}</td>
                <td className="py-2 px-4">{purchase.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* For smaller screens (Card layout) */}
      <div className="md:hidden">
        {purchases.map((purchase, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black dark:text-white border dark:border-gray-700 shadow-lg rounded-lg mb-4 p-4"
          >
            <h3 className="text-lg font-semibold">{purchase.courseName}</h3>
            <p><strong>Instructor:</strong> {purchase.instructorName}</p>
            <p><strong>Date of Purchase:</strong> {purchase.dateOfPurchase}</p>
            <p><strong>Payment Method:</strong> {purchase.paymentMethod}</p>
            <p><strong>Validity:</strong> {purchase.validity}</p>
            <p><strong>Price:</strong> {purchase.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBuys;
