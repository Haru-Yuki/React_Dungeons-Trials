import styles from "@/app/styles/components/main/filters/filters.module.scss";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

const FilterType = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterType, setFilterType] = useState(searchParams.get('type') || 'Duties');

    const handleChange = (filterType: string) => {
        setFilterType(filterType);
        clearSearchParams();
        searchParams.set('type', filterType);
        setSearchParams(searchParams);
    }

    const clearSearchParams = () => {
        searchParams.delete('duty');
        searchParams.delete('expansion');
        searchParams.delete('sort');
        searchParams.delete('quest');
        searchParams.delete('name');
    }

    return (
        <div className={styles.filtersTypeWrapper}>
            <input onChange={() => handleChange('Duties')} checked={filterType === 'Duties'} id="filterTypeDuties" className={styles.filtersTypeRadio} name="filterType" type="radio" />
            <label htmlFor="filterTypeDuties" className={styles.filtersTypeLabel}>Duties</label>

            <hr className={styles.filtersTypeDivider} />

            <input onChange={() => handleChange('Quests')} checked={filterType === 'Quests'} id="filterTypeQuests" className={styles.filtersTypeRadio} name="filterType" type="radio" />
            <label htmlFor="filterTypeQuests" className={styles.filtersTypeLabel}>Quests</label>
        </div>
    )
}

export default FilterType;