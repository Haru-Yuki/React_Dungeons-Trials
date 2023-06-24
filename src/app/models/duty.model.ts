export default interface Duty {
    _id?: any,
    dutyType: string,
    name: string,
    imageLink: string,
    patchName: string,
    level: number,
    iLevel: number,
    description: string,
    hard?: boolean,
    completed?: boolean,
    favourite?: boolean
}