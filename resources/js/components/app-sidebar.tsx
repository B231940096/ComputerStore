import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { computerparts } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Box, Computer, Folder, Gamepad2, Gift, Laptop, LayoutGrid, Monitor, PcCase, Server, Smartphone } from 'lucide-react';
import AppLogo from './app-logo';
import { route } from 'ziggy-js';

const mainNavItems: NavItem[] = [
  {
title: 'Нүүр хуудас',
href: dashboard(),
icon: BookOpen,
  },
  {
    title: 'Суурин компьютерын эд анги',
    href: computerparts(),
    icon: LayoutGrid,
  },
  {
    title: 'Компьютерын хэрэгсэл',
    href: dashboard(),
    icon: Computer,
  },
  {
    title: 'Ширээ / Сандал / Гэрэл',
    href: dashboard(),
    icon: Box,
  },
  {
    title: 'Компьютерын дэлгэц',
    href: dashboard(),
    icon: Monitor,
  },
  {
    title: 'Бэлэн компьютер',
    href: dashboard(),
    icon: PcCase,
  },
  {
    title: 'Консоль',
    href: dashboard(),
    icon: Gamepad2,
  },
  {
    title: 'Зөөврийн компьютер',
    href: dashboard(),
    icon: Laptop,
  },
  {
    title: 'Гар утас, Таблет',
    href: dashboard(),
    icon: Smartphone,
  },
  {
    title: 'Сүлжээний төхөөрөмж',
    href: dashboard(),
    icon: Server,
  },
  {
    title: 'Divoom',
    href: dashboard(),
    icon: Box,
  },
  {
    title: 'Фигур / Сувинер',
    href: dashboard(),
    icon: Gift,
  },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar className="w-67" collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className='mb-5 text-2xl font-medium justify-center py-2' asChild>
                            <Link href={dashboard()} prefetch>
                                <Computer className='size-5' /> InfoTech
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
