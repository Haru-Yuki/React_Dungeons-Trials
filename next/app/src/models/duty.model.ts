export default interface Duty {
    _id?: any,
    name: string,
    dutyType?: string | null,
    imageLink: string,
    patchName: string,
    level: number,
    iLevel: number,
    description: string,
    completed?: boolean,
    favourite?: boolean
}