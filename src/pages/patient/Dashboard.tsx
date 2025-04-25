import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Heart, FileText, Activity, Calendar, LogOut } from 'lucide-react';

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/patient/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Name" value="John Doe" />
              <InfoItem label="Blood Group" value="O+" />
              <InfoItem label="Email" value="johndoe@example.com" />
              <InfoItem label="Phone" value="+1 234 567 8901" />
            </div>
          </div>
        );

      case 'donation':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Organ Donation Form</h3>
            <form className="space-y-4">
              <SelectField label="Organ Type" options={['Kidney', 'Liver', 'Heart', 'Lungs', 'Cornea']} />
              <TextAreaField label="Medical History" />
              <SubmitButton label="Submit Donation Request" color="blue" />
            </form>
          </div>
        );

      case 'request':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Organ Request Form</h3>
            <form className="space-y-4">
              <SelectField label="Required Organ" options={['Kidney', 'Liver', 'Heart', 'Lungs', 'Cornea']} />
              <SelectField label="Urgency Level" options={['Normal', 'Urgent', 'Critical']} />
              <TextAreaField label="Doctor's Note" />
              <SubmitButton label="Submit Request" color="red" />
            </form>
          </div>
        );

      case 'checkups':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Past Checkups</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((checkup) => (
                <div key={checkup} className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Dr. Sarah Johnson</p>
                      <p className="text-gray-600">General Checkup</p>
                      <p className="text-sm text-gray-500">March {checkup}, 2025</p>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'medical':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Medical Activities</h3>
            <div className="space-y-4">
              <MedicalSection title="Current Medications" items={['Medication A - 2 times daily', 'Medication B - 1 time daily']} />
              <MedicalSection title="Recent Tests" items={['Blood Test - March 1, 2025', 'X-Ray - February 28, 2025']} />
              <MedicalSection title="Upcoming Appointments" items={['Dr. Chen - March 15, 2025', 'Dr. Rodriguez - March 20, 2025']} />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen shadow-lg fixed">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-8">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">OrganBank</span>
            </div>
            <nav className="space-y-2">
              <SidebarButton icon={User} label="Profile" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
              <SidebarButton icon={Heart} label="Organ Donation" active={activeTab === 'donation'} onClick={() => setActiveTab('donation')} />
              <SidebarButton icon={FileText} label="Request Organ" active={activeTab === 'request'} onClick={() => setActiveTab('request')} />
              <SidebarButton icon={Activity} label="Past Checkups" active={activeTab === 'checkups'} onClick={() => setActiveTab('checkups')} />
              <SidebarButton icon={Calendar} label="Medical Activities" active={activeTab === 'medical'} onClick={() => setActiveTab('medical')} />
              <button onClick={handleLogout} className="flex items-center space-x-2 w-full p-2 rounded text-red-600 hover:bg-red-50 mt-8">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          <div className="max-w-4xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

// ----- Utility Components -----

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-600">{label}</p>
    <p className="font-semibold">{value || 'N/A'}</p>
  </div>
);

const SelectField = ({ label, options }: { label: string; options: string[] }) => (
  <div>
    <label className="block text-gray-700 mb-2">{label}</label>
    <select className="w-full p-2 border rounded">
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({ label }: { label: string }) => (
  <div>
    <label className="block text-gray-700 mb-2">{label}</label>
    <textarea className="w-full p-2 border rounded" rows={4}></textarea>
  </div>
);

const SubmitButton = ({ label, color }: { label: string; color: string }) => (
  <button className={`bg-${color}-500 text-white px-4 py-2 rounded hover:bg-${color}-600`}>
    {label}
  </button>
);

const MedicalSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="border-b pb-4">
    <h4 className="font-semibold">{title}</h4>
    <ul className="list-disc list-inside text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SidebarButton = ({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 w-full p-2 rounded ${
      active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
    }`}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </button>
);