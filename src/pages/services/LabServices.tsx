import React from 'react';
import { Microscope, FlaskRound, TestTube } from 'lucide-react';

const labServices = [
  {
    title: 'Blood Analysis',
    description: 'Complete blood work and compatibility testing.',
    turnaround: '24 hours',
    price: '$150'
  },
  {
    title: 'Tissue Typing',
    description: 'HLA typing and crossmatching for organ compatibility.',
    turnaround: '48 hours',
    price: '$300'
  },
  {
    title: 'Organ Viability Testing',
    description: 'Assessment of organ function and viability.',
    turnaround: '12 hours',
    price: '$500'
  }
];

export default function LabServices() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Microscope className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Laboratory Services</h1>
          <p className="text-lg text-gray-600">Advanced Medical Testing Facilities</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {labServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <FlaskRound className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Turnaround Time: {service.turnaround}</p>
                <p className="text-sm text-gray-500">Starting from: {service.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Equipment & Technology</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <TestTube className="w-5 h-5 mr-2 text-blue-500" />
                <span>State-of-the-art blood analysis equipment</span>
              </li>
              <li className="flex items-center">
                <TestTube className="w-5 h-5 mr-2 text-blue-500" />
                <span>Advanced tissue typing systems</span>
              </li>
              <li className="flex items-center">
                <TestTube className="w-5 h-5 mr-2 text-blue-500" />
                <span>Organ preservation monitoring systems</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <TestTube className="w-5 h-5 mr-2 text-blue-500" />
                <span>ISO 9001:2015 Certified</span>
              </li>
              <li className="flex items-center">
                <TestTube className="w-5 h-5 mr-2 text-blue-500" />
                <span>CAP Accredited Laboratory</span>
              </li>
              <li className="flex items-center">
                <TestTube className="w-5 h-5 mr-2 text-blue-500" />
                <span>24/7 Quality Monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}