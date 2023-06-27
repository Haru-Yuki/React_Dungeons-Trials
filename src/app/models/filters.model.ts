export interface FiltersQueryModel {
    name?: string,
    duty: string,
    expansion: string,
    sort: string
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