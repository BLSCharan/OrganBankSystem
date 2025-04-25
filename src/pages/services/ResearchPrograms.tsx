import React from 'react';
import { Brain, Microscope, BookOpen } from 'lucide-react';

const researchPrograms = [
  {
    title: 'Organ Preservation Technology',
    lead: 'Dr. Sarah Johnson',
    description: 'Research on advanced preservation techniques to extend organ viability.',
    status: 'Ongoing',
    publications: 3
  },
  {
    title: 'Tissue Engineering',
    lead: 'Dr. Michael Chen',
    description: 'Development of bioengineered organs using stem cell technology.',
    status: 'Active',
    publications: 5
  },
  {
    title: 'Transplant Immunology',
    lead: 'Dr. Emily Rodriguez',
    description: 'Study of immune responses in organ transplantation.',
    status: 'Ongoing',
    publications: 4
  }
];

export default function ResearchPrograms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Brain className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Programs</h1>
          <p className="text-lg text-gray-600">Latest Developments in Organ Transplantation</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  program.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {program.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Lead Researcher: {program.lead}</p>
                <p className="text-sm text-gray-500">Publications: {program.publications}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Join Our Research</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Researchers</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-purple-500" />
                  Submit research proposals
                </li>
                <li className="flex items-center">
                  <Microscope className="w-5 h-5 mr-2 text-purple-500" />
                  Access our facilities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For Participants</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-purple-500" />
                  Volunteer for studies
                </li>
                <li className="flex items-center">
                  <Microscope className="w-5 h-5 mr-2 text-purple-500" />
                  Join clinical trials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}