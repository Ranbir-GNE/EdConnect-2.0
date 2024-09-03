import React from 'react';
import { CalendarDays, Book, GraduationCap, MessageCircle, CreditCard, FileText } from 'lucide-react';

interface TileProps {
  title: string;
  icon: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ title, icon }) => (
  <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center aspect-[3/2] text-white">
    {icon}
    <h3 className="mt-2 text-center text-sm sm:text-base">{title}</h3>
  </div>
);

export default function DashboardTiles() {
  const tiles = [
    { title: 'Course Schedule', icon: <CalendarDays className="w-6 h-6" /> },
    { title: 'Materials', icon: <Book className="w-6 h-6" /> },
    { title: 'Grades', icon: <GraduationCap className="w-6 h-6" /> },
    { title: 'Messages', icon: <MessageCircle className="w-6 h-6" /> },
    { title: 'Payments', icon: <CreditCard className="w-6 h-6" /> },
    { title: 'Petitions and decisions', icon: <FileText className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile, index) => (
            <Tile key={index} title={tile.title} icon={tile.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}