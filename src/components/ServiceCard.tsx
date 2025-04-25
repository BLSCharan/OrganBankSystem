import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(link)}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
    >
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}