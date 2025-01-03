import React from 'react';

const categories = [
  { name: 'Crafts', count: 2 },
  { name: 'Design', count: 8 },
  { name: 'Handmade', count: 7 },
  { name: 'Interior', count: 1 },
  { name: 'Wood', count: 6 },
];

const CategoryList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <span className="text-sm text-gray-500">{category.count} items</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
