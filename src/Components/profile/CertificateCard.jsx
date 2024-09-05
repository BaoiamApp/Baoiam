import React from 'react';

const CertificateCard = ({ certificates }) => {
  return (
    <div className=" p-4 bg-gradient-to-tr from-slate-300/50 backdrop-filter backdrop-blur-3xl bg-opacity-500 drop-shadow-2xl  border-white/20 rounded-lg shadow-md dark:border dark:border-gray-200">
      <h2 className="text-xl font-semibold">Certificates</h2>
      {certificates.length > 0 ? (
        <ul className="mt-2 space-y-2">
          {certificates.map((certificate, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-lg">{certificate}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-gray-500">No certificates yet, get some!</p>
      )}
    </div>
  );
};

export default CertificateCard;
