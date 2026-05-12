import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null; // Don't show on home page
  }

  const formatPathname = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="pt-[84px] bg-brand-dark">
      <nav aria-label="Breadcrumb" className="bg-brand-navy/30 py-3 relative z-40 border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <ol className="flex items-center space-x-2 text-sm font-body">
            <li>
              <Link to="/" className="text-gray-500 hover:text-brand-cyan transition-colors">
                Home
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
  
              return (
                <li key={to} className="flex items-center space-x-2">
                  <ChevronRight size={14} className="text-gray-600" />
                  <Link
                    to={to}
                    className={cn(
                      'transition-colors',
                      isLast ? 'text-brand-cyan font-semibold tracking-wide' : 'text-gray-500 hover:text-brand-cyan'
                    )}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {formatPathname(value)}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
