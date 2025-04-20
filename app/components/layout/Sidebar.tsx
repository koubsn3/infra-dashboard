'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navigation: NavItem[] = [
  { name: 'LLMチャット', href: '/', icon: '/chat-icon.svg' },
  { name: 'Locustテスト実行', href: '/locust', icon: '/locust-icon.svg' },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <div className="flex h-full w-64 flex-col bg-gray-800">
      <div className="flex h-16 items-center px-4">
        <h1 className="text-xl font-bold text-white">インフラダッシュボード</h1>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname?.startsWith(item.href));
              
            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`flex items-center rounded-md px-4 py-2 text-sm ${
                    isActive
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <div className="mr-3 h-6 w-6 flex items-center justify-center">
                    <Image 
                      src={item.icon} 
                      alt={`${item.name} icon`}
                      width={20} 
                      height={20}
                      className="text-white"
                    />
                  </div>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-shrink-0 bg-gray-700 p-4">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-sm font-medium text-white">インフラSREチーム</p>
            <p className="text-xs text-gray-300">v0.1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}