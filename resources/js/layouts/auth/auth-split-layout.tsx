import AppLogoIcon from '@/components/app-logo-icon';
import { dashboard } from '@/routes/index';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Computer } from 'lucide-react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    const { name, quote } = usePage<SharedData>().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            
            {/* LEFT SIDE (Background image section) */}
            <div className="relative hidden h-full flex-col text-white lg:flex dark:border-r overflow-hidden">
                {/* Background image that fully covers */}
                <img
                    src="/loginbackground.jpg"
                    alt="Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Top logo/name */}
                <div className="relative z-20 p-10">
                    <Link
                        href={dashboard()}
                        className="flex items-center text-lg font-medium"
                    >
                        <Computer className="size-7 mr-2" />
                        {name}
                    </Link>
                </div>

                {/* Bottom quote */}
                {quote && (
                    <div className="relative z-20 mt-auto p-10">
                        <blockquote className="space-y-2">
                            <p className="text-lg leading-relaxed">
                                Гайхалтай зүйлсийг хийх цорын ганц арга нь
                                дуртай зүйлээ хийх явдал юм.
                            </p>
                            <footer className="text-sm text-neutral-300">
                                — Тэнгис
                            </footer>
                        </blockquote>
                    </div>
                )}
            </div>

            {/* RIGHT SIDE (Login form section) */}
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Link
                        href={dashboard()}
                        className="relative z-20 flex items-center justify-center lg:hidden"
                    >
                        <AppLogoIcon className="h-10 fill-current text-black sm:h-12" />
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <p className="text-sm text-balance text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
