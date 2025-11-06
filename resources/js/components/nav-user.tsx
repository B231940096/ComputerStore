import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { useIsMobile } from '@/hooks/use-mobile';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { ChevronsUpDown, LogIn, UserPlus } from 'lucide-react';
import { Button } from './ui/button';

export function NavUser() {
    const { auth } = usePage<SharedData>().props;
    const { state } = useSidebar();
    const isMobile = useIsMobile();
    const isCollapsed = state === 'collapsed' && !isMobile;

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                {auth.user ? (
                    // Authenticated user - show dropdown menu
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className="group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent"
                                data-test="sidebar-menu-button"
                            >
                                <UserInfo user={auth.user} />
                                <ChevronsUpDown className="ml-auto size-4" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                            align="end"
                            side={isMobile ? 'bottom' : isCollapsed ? 'left' : 'bottom'}
                        >
                            <UserMenuContent user={auth.user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    // Not authenticated - show login/register options
                    <div className="px-2 py-1">
                        {isCollapsed ? (
                            // Collapsed state - show icons only
                            <>
                                                <div className="flex-block">

                                <SidebarMenuButton
                                    size="lg"
                                    asChild
                                    title="Login"
                                >
                                    <a href="/login">
                                        <LogIn className="size-4" />
                                    </a>
                                </SidebarMenuButton>
                                <SidebarMenuButton
                                    size="lg"
                                    asChild
                                    title="Register"
                                >
                                    <a href="/register">
                                        <UserPlus className="size-4" />
                                    </a>
                                </SidebarMenuButton>
                                                </div>
                            </>
                        ) : (
                            // Expanded state - show full buttons
                            <>
                                                <div className="flex gap-2">

                                <Button variant="outline" className='flex-1 ' asChild>
                                    <a href="/login"><LogIn className="size-4" />Нэвтрэх</a>
                                </Button>
                                <Button asChild className="">
                                    <a href="/register"> <UserPlus className="size-4" />Бүртгүүлэх</a>
                                </Button>
                                                </div>
                            </>

                        )}
                    </div>
                )}
            </SidebarMenuItem>
        </SidebarMenu>
    );
}