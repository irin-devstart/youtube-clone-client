import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <HomeIcon />

    },
    {
        title: "Trending",
        path: '/trending',
        icon: <WhatshotIcon />

    },
    {
        title: "Subsciptions",
        path: '/subs',
        icon: <SubscriptionsIcon />

    },
    {
        title: "Liked Videos",
        path: '/liked-videos',
        icon: <ThumbUpIcon />

    },
];
