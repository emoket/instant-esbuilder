'use client';

import * as React from 'react';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus:outline-none'>
        <Button variant='ghost' size='icon'>
          <Sun className='transition-all scale-100 rotate-0 w-7 h-7 dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute transition-all scale-0 rotate-90 w-7 h-7 dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          className='cursor-pointer'
          onClick={() => setTheme('light')}
        >
          <Sun className='w-5 h-5 mr-2' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='cursor-pointer'
          onClick={() => setTheme('dark')}
        >
          <Moon className='w-5 h-5 mr-2' />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='cursor-pointer'
          onClick={() => setTheme('system')}
        >
          <SunMoon className='w-5 h-5 mr-2' />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
