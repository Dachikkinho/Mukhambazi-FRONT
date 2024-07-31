import { FilterType } from '@/app/enums/filterType';

export const setTitle = (title: string) => {
    document.title = title;
};

export const toggleFilter = (
    activeFilter: FilterType | null,
    setActiveFilter: React.Dispatch<React.SetStateAction<FilterType | null>>,
    filter: FilterType,
) => {
    setActiveFilter(activeFilter === filter ? null : filter);
};
