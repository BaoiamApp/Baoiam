import React from 'react';

function Notifications() {
  const notifications = [
    { id: 1, message: 'Assignment due in 2 days', type: 'warning' },
    { id: 2, message: 'New course available: GraphQL Basics', type: 'info' },
  ];

  return (
    <div className="bg-slate-100 h-2/6 dark:bg-black dark:text-white dark:border dark:border-white  p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="mb-2">
            <div className={`p-2 rounded-md text-white ${
              notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            }`}>
              {notification.message}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
