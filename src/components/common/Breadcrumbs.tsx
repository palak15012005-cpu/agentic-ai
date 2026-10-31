import { useAcademy } from '../../context/AcademyContext.tsx';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const { navigate } = useAcademy();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#BAC7E5]">
        <li>
          <button 
            onClick={() => navigate('/')} 
            className="hover:text-[#42D9C8] transition-colors cursor-pointer"
          >
            Home
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#7757FF] shrink-0" aria-hidden="true" />
              {isLast || !item.path ? (
                <span className="text-[#F5F6FF] font-medium" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-[#42D9C8] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
