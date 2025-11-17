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
import { dashboard, furniture, peripherals, preBuiltPc } from '@/routes';
import { computerparts } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Box, Computer, Folder, Gamepad2, Gift, Laptop, LayoutGrid, Monitor, PcCase, Server, Smartphone } from 'lucide-react';

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
    href: peripherals(),
    icon: Computer,
  },
  {
    title: 'Ширээ / Сандал / Гэрэл',
    href: furniture(),
    icon: Box,
  },
  {
    title: 'Бэлэн компьютер',
    href: preBuiltPc(),
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
        <Sidebar className="w-67" collapsible="icon" variant="floating">
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
