// https://docs.microsoft.com/en-us/rest/api/vsts/core/projects/list?view=vsts-rest-4.1

export class Project {
    id: string;
    name: string;
    description?: string;
    url: string;
    state?: string;
    revision?: number;
    visibility?: string;
}
