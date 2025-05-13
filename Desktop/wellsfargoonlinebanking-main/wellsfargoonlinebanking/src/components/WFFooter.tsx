
import React from 'react';

const WFFooter = () => {
  return (
    <footer className="bg-wf-gray py-8 border-t border-gray-300 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-wf-navy">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline text-wf-dark-gray">About Wells Fargo</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Careers</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Community Impact</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Investor Relations</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-wf-navy">Products & Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline text-wf-dark-gray">Checking Accounts</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Credit Cards</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Home Loans</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Personal Loans</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Retirement</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-wf-navy">Online Security</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline text-wf-dark-gray">Security Center</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Fraud Information</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Report Fraud</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Privacy & Cookies</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Online Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-wf-navy">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline text-wf-dark-gray">Contact Us</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">FAQs</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Schedule Appointment</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Find ATMs/Branches</a></li>
              <li><a href="#" className="hover:underline text-wf-dark-gray">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-xs text-wf-dark-gray mb-4">
            © 2024 Wells Fargo Bank, N.A. All rights reserved. Member FDIC. Equal Housing Lender
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-wf-dark-gray">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Ad Choices</a>
            <a href="#" className="hover:underline">Online Tracking & Advertising</a>
            <a href="#" className="hover:underline">Diversity & Accessibility</a>
            <a href="#" className="hover:underline">Notice of Data Collection</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WFFooter;
