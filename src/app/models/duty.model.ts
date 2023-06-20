export default interface Duty {
    dutyKey?: string,
    dutyType: string,
    name: string,
    imageLink: string,
    patchName: string,
    level: number,
    description: string,
    completed: boolean,
    favourite: boolean
}