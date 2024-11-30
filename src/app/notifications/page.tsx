"use client";
import Image from "next/image";
import React, { useState } from 'react';

interface Notification {
  id: number;
  avatar: string;
  username: string;
  action: string;
  target?: string;
  time: string;
  isUnread: boolean;
  message?: string;
  picture?: string;
  type: 'reaction' | 'follow' | 'group' | 'message' | 'comment' | 'left';
}

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      avatar: 'https://picsum.photos/400/400?random',
      username: 'Mark Webber',
      action: 'reacted to your recent post',
      target: 'My first tournament today!',
      time: '1m ago',
      isUnread: true,
      type: 'reaction'
    },
    {
      id: 2,
      avatar: 'https://picsum.photos/400/400?random',
      username: 'Angela Gray',
      action: 'followed you',
      time: '5m ago',
      isUnread: true,
      type: 'follow'
    },
    {
      id: 3,
      avatar: 'https://picsum.photos/400/400?random',
      username: 'Jacob Thompson',
      action: 'has joined your group',
      target: 'Chess Club',
      time: '1 day ago',
      isUnread: true,
      type: 'group'
    },
    {
      id: 4,
      avatar: 'https://picsum.photos/400/400?random',
      username: 'Rizky Hasanuddin',
      action: 'sent you a private message',
      time: '5 days ago',
      isUnread: false,
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      type: 'message'
    },
    {
      id: 5,
      avatar: 'https://picsum.photos/400/400?random',
      username: 'Kimberly Smith',
      action: 'commented on your picture',
      time: '1 week ago',
      isUnread: false,
      picture: 'https://picsum.photos/400/400?random',
      type: 'comment'
    },
    {
      id: 6,
      avatar: 'https://picsum.photos/400/400?random',
      username: 'Nathan Peterson',
      action: 'reacted to your recent post',
      target: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      isUnread: false,
      type: 'reaction'
    },
    {
      id: 7,
      avatar: 'https://picsum.photos/400/400?random',
      username: 'Anna Kim',
      action: 'left the group',
      target: 'Chess Club',
      time: '2 weeks ago',
      isUnread: false,
      type: 'left'
    }
  ]);

  const unreadCount = notifications.filter(notif => notif.isUnread).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isUnread: false } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isUnread: false })));
  };

  return (
    <>
      <section className="p-6 md:w-[730px] md:p-8 md:mx-auto ">
        <div className="flex justify-between mb-6">
          <h3 className="text-[#1c202b] font-extrabold text-xl tracking-wide dark:text-white">
            Notifications <span className="inline-block text-center bg-[#0a317b] w-8 h-7 text-white rounded-md">{unreadCount}</span>
          </h3>
          <p 
            className="text-sm text-[#5e6778] font-medium hover:text-[#0a317b] cursor-pointer dark:text-white"
            onClick={markAllAsRead}
          >
            Mark all as read
          </p>
        </div>

        <div className="space-y-2.5">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`${notification.isUnread ? 'bg-[#f7fafd]' : 'bg-white'} rounded-lg min-w-[343px] flex gap-3 p-4 text-sm md:text-base text-[#5e6778] cursor-pointer relative dark:bg-gray-800`}
              onClick={() => markAsRead(notification.id)}
            >
              <Image   className="w-10 h-10" src={notification.avatar} alt="" width={40}
  height={40} />
              <div className="flex-1">
                <p className="text dark:text-white">
                  <span className="font-bold text-[#1c202b] hover:text-[#0a317b] cursor-pointer dark:text-white">
                    {notification.username}
                  </span>
                  {' '}{notification.action}{' '}
                  {notification.target && (
                    <span className={`font-bold ${notification.type === 'group' || notification.type === 'left' ? 'text-[#0a317b]' : 'hover:text-[#0a317b]'} cursor-pointer dark:text-white`}>
                      {notification.target}
                    </span>
                  )}
                  {notification.isUnread && (
                    <span className="inline-block w-2 h-2 ml-2 rounded-full bg-[#f65351] "></span>
                  )}
                </p>
                <p className="text-[#939dae] text-sm font-medium ">{notification.time}</p>
                {notification.message && (
                  <div className="border border-[#dde7ee] rounded p-4 mt-3 hover:bg-[#e5effa] cursor-pointer">
                    <p className="text-sm font-medium text-[#5e6778] dark:text-white">{notification.message}</p>
                  </div>
                )}
              </div>
              {notification.picture && (
                <Image  className="w-10 h-10" src={notification.picture} alt="" width={40}
                height={40}/>
              )}
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
};

export default NotificationsPage;