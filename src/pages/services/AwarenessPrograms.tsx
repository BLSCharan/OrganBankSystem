import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const programs = [
  {
    title: 'Organ Donation Awareness Camp',
    date: '2025-03-15',
    location: 'City Convention Center',
    description: 'Learn about the importance of organ donation and how you can help save lives.',
  },
  {
    title: 'Healthcare Symposium',
    date: '2025-03-20',
    location: 'Medical Research Institute',
    description: 'Expert talks on latest developments in organ transplantation and healthcare.',
  },
  {
    title: 'Community Health Fair',
    date: '2025-03-25',
    location: 'Central Park',
    description: 'Free health checkups and awareness sessions about organ donation.',
  },
];

export default function AwarenessPrograms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Calendar className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Awareness Programs</h1>
          <p className="text-lg text-gray-600">Upcoming Events and Programs</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(program.date).toLocaleDateString()}
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {program.location}
                </p>
                <p className="mt-4">{program.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}