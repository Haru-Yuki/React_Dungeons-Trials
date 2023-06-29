export default interface Duty {
    _id?: any,
    name: string,
    imageLink: string,
    patchName: string,
    level: number,
    iLevel: number,
    description: string,
    completed?: boolean,
    favourite?: boolean
}