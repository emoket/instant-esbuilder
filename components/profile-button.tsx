import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin, Mail } from 'lucide-react';

const profileMenus = [
  {
    title: 'GitHub',
    link: 'https://github.com/emoket/instant-esbuilder',
    icon: <Github className='w-5 h-5 mr-2' />,
  },
  // {
  //   title: 'LinkedIn',
  //   link: 'https://linkedin.com/in/emoket',
  //   icon: <Linkedin className='w-5 h-5 mr-2' />,
  // },
  {
    title: 'E-mail',
    link: 'mailto:insight.emoket@gmail.com',
    icon: <Mail className='w-5 h-5 mr-2' />,
  },
];

const ProfileButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus:outline-none'>
        <Avatar>
          <AvatarImage src='/profile.png' />
          <AvatarFallback>YJ</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>반가워! 👋🏻</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {profileMenus.map((menu) => (
          <a href={menu.link} target='_blank' key={menu.title}>
            <DropdownMenuItem className='cursor-pointer'>
              {menu.icon}
              {menu.title}
            </DropdownMenuItem>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
