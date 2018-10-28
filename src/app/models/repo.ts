import { Project } from './projects.model';

export class Repo {
    id: string;
    name: string;
    objectId: string;
    url: string;
    remoteUrl: string;
    project: Project;
}

// export class Project {
//     id: string;
//     name: string;
//     url: string;
//     state: string;
// }

// {
//     "id": "5febef5a-833d-4e14-b9c0-14cb638f91e6",
//     "name": "AnotherRepository",
//     "url": "https://dev.azure.com/fabrikam/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6",
//     "project": {
//     "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
//     "name": "Fabrikam-Fiber-Git",
//     "url": "https://dev.azure.com/fabrikam/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
//     "state": "wellFormed"
//     },
//     "remoteUrl": "https://dev.azure.com/fabrikam/Fabrikam-Fiber-Git/_git/AnotherRepository"
// },