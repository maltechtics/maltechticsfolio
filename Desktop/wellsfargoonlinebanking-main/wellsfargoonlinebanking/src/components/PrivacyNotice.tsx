
import React, { useState } from 'react';
import { X } from 'lucide-react';

const PrivacyNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-wf-navy text-white p-3 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="max-w-4xl">
          <p>
            We're updating our Privacy Policy effective March 11, 2024. The changes include clarifications and information related to digital payments. 
            <a href="#" className="underline ml-1 hover:text-wf-gold">View our Privacy Policy</a>
          </p>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-white hover:text-wf-gold">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PrivacyNotice;
