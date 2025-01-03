import React from 'react';
import Image from 'next/image';
const posts = [
  {
    title: 'Going all-in with millennial design',
    date: '03 Aug 2022',
    image: '/images/design1.jpg', 
  },
  {
    title: 'Exploring new ways of decorating',
    date: '03 Aug 2022',
    image: '/images/design2.jpg',
  },
  {
    title: 'Handmade pieces that took time to make',
    date: '03 Aug 2022',
    image: '/images/design3.jpg',
  },
  {
    title: 'Modern home in Milan',
    date: '03 Aug 2022',
    image: '/images/design4.jpg',
  },
  {
    title: 'Colorful office redesign',
    date: '03 Aug 2022',
    image: '/images/design5.jpg',
  },
];

const RecentPosts: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Recent Posts</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow"
          >
            <Image
              src={post.image}
              alt={post.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
