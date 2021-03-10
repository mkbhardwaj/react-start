import { CREATE_COURSE } from "./actionsConstants";


export function createCourse(course)
{
    return {type:CREATE_COURSE, course};
}

