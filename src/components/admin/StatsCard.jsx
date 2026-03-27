import React from 'react';

const StatsCard = ({ title, value, icon, change, colorClass, highlight, customChart }) => {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl ring-1 ring-outline-variant/10 group transition-all">
      <div className="flex justify-between items-start mb-6">
        <span 
          className={`material-symbols-outlined p-3 rounded-lg ${colorClass}`}
        >
          {icon}
        </span>
        
        {change && (
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            {change}
          </span>
        )}
        
        {highlight && (
          <button className="text-[10px] font-bold text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
            {highlight}
          </button>
        )}
        
        {customChart && (
          <div className="flex items-end space-x-1">
            <div className="w-1 h-3 bg-primary/20 rounded-full"></div>
            <div className="w-1 h-5 bg-primary/40 rounded-full"></div>
            <div className="w-1 h-4 bg-primary/60 rounded-full"></div>
            <div className="w-1 h-6 bg-primary rounded-full"></div>
          </div>
        )}
      </div>
      
      <p className="text-[10px] font-sans uppercase tracking-widest text-on-surface-variant">
        {title}
      </p>
      
      <h3 className="text-3xl font-headline mt-1 tracking-tight">
        {value}
      </h3>
    </div>
  );
};

export default StatsCard;
