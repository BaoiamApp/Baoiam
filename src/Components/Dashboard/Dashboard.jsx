import React from 'react';
import Courses from './Courses';
import Recommendations from './Recommendations';
import Notifications from './Notifications';
import Profile from './Profile';
import Achievements from './Achievements';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-semibold">Student Dashboard</h1>
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <Profile />
          <Notifications />
          <Achievements />
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          <Courses />
          <Recommendations />
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
