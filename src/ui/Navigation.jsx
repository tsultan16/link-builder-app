import { Link, useLocation } from 'react-router-dom';
import { DynamicIcon } from 'lucide-react/dynamic';
import { cn } from '../lib/utils';

const navItems = [
    { name: 'Dashboard', href: '/', icon: 'layout-dashboard'},
    { name: 'Campaigns', href: '/campaigns', icon: 'rocket'},
    { name: 'Analytics', href: '/analytics', icon: 'chart-no-axes-combined'},
    { name: 'Settings', href: '/settings', icon: 'settings'},
]



const Navigation = () => {
    const location = useLocation();
    
    console.log("Location: ", location);

    return (
        <>
            <nav className='bg-white shadow-sm'>
                <div className="container mx-auto px-8 py-4 flex justify-between">
                    <div className='flex items-center gap-1'>
                        <DynamicIcon name="rocket" className='h-9 w-9 mx-auto text-green-800' />
                        <span className='text-2xl font-bold'>LinkBuilder App</span>
                    </div>

                    <div className='flex gap-3'>
                        {navItems.map( item => 
                            (
                                <Link key={item.name} to={item.href} className='flex items-center group'>
                                    <DynamicIcon name={item.icon} className={cn('nav-icon', location.pathname === item.href ? 'text-green-800' : null)} />
                                    <span className={cn('nav-label', location.pathname === item.href ? 'text-green-800' : null)}>{item.name}</span>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </nav>
        </>
    );


}


export default Navigation;




