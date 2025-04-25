import React from 'react';
import { Eye, Heart, Bone } from 'lucide-react';

const tissues = [
  {
    type: 'Cornea',
    availability: 'In Stock',
    preservation: 'Up to 14 days',
    icon: Eye
  },
  {
    type: 'Heart Valves',
    availability: 'Limited',
    preservation: 'Up to 10 years',
    icon: Heart
  },
  {
    type: 'Bone Tissue',
    availability: 'In Stock',
    preservation: 'Up to 5 years',
    icon: Bone
  }
];

export default function TissueBank() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Eye className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tissue Bank</h1>
          <p className="text-lg text-gray-600">Specialized Tissue Preservation Services</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tissues.map((tissue, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <tissue.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tissue.type}</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    tissue.availability === 'In Stock' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></span>
                  {tissue.availability}
                </p>
                <p className="text-gray-600">Preservation: {tissue.preservation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Tissue Donation Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Screening</h3>
              <p className="text-gray-600">Comprehensive donor screening and testing</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Processing</h3>
              <p className="text-gray-600">State-of-the-art tissue processing</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bone className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Storage</h3>
              <p className="text-gray-600">Advanced preservation techniques</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}