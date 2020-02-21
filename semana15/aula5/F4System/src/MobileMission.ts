import { Mission } from "./Mission";

export class MobileMission extends Mission {
    constructor(
        startDate: Date, 
        endDate: Date, 
        listTeachers: string[], 
        listStudents: string[],
        protected classNumber: string
    ) {
        super(
            startDate, 
            endDate, 
            listTeachers, 
            listStudents
        )
    } 





}