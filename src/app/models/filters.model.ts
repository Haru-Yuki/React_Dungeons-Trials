export interface FiltersStoreModel {
    searchFilter?: string,
    dutyFilter: string,
    expansionFilter: boolean,
    sortFilter: string
}

export interface ExpansionFilterModel {
    filterName: string,
    value: string,
    key: string
}

export interface DutiesFilterModel {
    dutyType: string,
    value: string,
    key: string
}

export interface SortModel {
    sortOption: string,
    value: string,
    key: string
}