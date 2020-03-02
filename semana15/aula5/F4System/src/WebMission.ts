import { Mission } from "./Mission";

export class WebMission extends Mission {
    constructor(
        startDate: Date, 
        endDate: Date, 
        listTeachers: string[], 
        listStudents: string[],
        protected patrono: string
    ) {
        super(
            startDate, 
            endDate, 
            listTeachers, 
            listStudents
        )
    } 





}