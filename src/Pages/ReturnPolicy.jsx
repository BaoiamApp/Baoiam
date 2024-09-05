import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Return Policy
      </h1>

      {/* Section 1: Introduction */}
      <section className="mb-8">
        <p className="mb-3 sm:mb-4">
          We are providing a 100% money-back guarantee that you will love our course if you actually pursue it.
        </p>
        <p className="mb-3 sm:mb-4">
          Course fee paid on LawSikho is not refundable as a general rule. However, we are introducing an exception to this, only for a limited time and only for our Executive Certificate, Diploma, Introductory, Remote International Work Courses, Foreign Bar Exam Courses and Degree Programs (LLM, MBA).
        </p>
        <p className="text-gray-700 mb-4">
          We understand that it may be difficult for people new to the world of online learning to feel confident and fully understand the power of an online course or a career development program. Especially, when such a program requires extensive investment of time, energy, and money.
        </p>
        <p className="text-gray-700 mb-6">
          What we can do here to allay such fears is to offer a money-back guarantee. Hence, we are introducing this refund policy as laid down in the following few paragraphs.
        </p>
      </section>

      {/* Section 2: Refund Condition */}
      <section className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700 mb-4">
          If a student enrolls into a Diploma, Executive Certificate, Introductory, Remote International Work Courses, Foreign Bar Exam Courses or Degree Programs (LLM, MBA) course from LawSikho.com and after 30 days of usage, does not find any value in the course, then between the 30th day and 45th day counted from the day the course officially began, they can claim back the amount they have paid towards the course as a refund on the following condition:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Attended all the live online classes (in live mode only) in the first 30 days. Attendance in class also must be complete; for instance, if you attend a 60 min class for only 30 minutes, it doesn’t count as proper attendance. Watching a recording of the class does not qualify as attending the live class.
          </li>
          <li>
            He/she must have submitted all the assignments issued within the first 30 days successfully. The submissions have to be on time and meet the standards of the course.
          </li>
        </ul>
      </section>

      <p className="text-gray-700 mb-8">
        Please contact our support team for more details.
      </p>

      {/* Section 3: Clarifications */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Clarifications to Refund Policy
        </h2>

        <div className="space-y-8">
          {/* Clarification 1 */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              How will my attendance be logged on the LawSikho system for the purpose of the refund policy?
            </h3>
            <p className="text-gray-700">
              Please note that it is mandatory to attend the classes in live mode only to be eligible to claim refund. 
              Also key in your first and last name in order for us to identify and record your attendance. 
              If you attend a class under an incognito or incorrect name, we will not be able to log your attendance.
            </p>
          </div>

          {/* Clarification 2 */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              What should I do if I am facing technical issues?
            </h3>
            <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
            <p className="text-gray-700">
              In case a student is unable to fulfill a particular condition which is barring them from claiming a refund successfully, 
              and such non-fulfillment is because of a technical error, we may create an exception if the student can prove that 
              they raised a complaint to <a href="mailto:support@lawsikho.in" className="text-blue-500 underline">support@lawsikho.in</a> 
              with the relevant screenshots and time stamps of the particular error.
            </p>
            </ul>
          </div>

          {/* Clarification 3 */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              I paid booking fees but I have changed my mind now and want a refund.
            </h3>
            <p className="text-gray-700">
              Please note that all kinds of booking fees are non-refundable. The only exception is when the learner completes enrollment 
              by paying the fees and raises a request in compliance with the refund policy.
            </p>
          </div>

          {/* Clarification 4 */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              When is the 30-day period for attendance and submission of assignments counted from?
            </h3>
            <p className="text-gray-700">
              Please note that the 30-day period for attending classes starts from the date of the first concept session of the batch. 
              Attendance is not mandatory for onboarding sessions and feedback sessions, but highly recommended to benefit from the course.
            </p>
            <p className="text-gray-700 mt-2">
              All assignments allocated to the learners within the first 30 days must be duly submitted, even if their due date falls after the 30-day period.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicy;
