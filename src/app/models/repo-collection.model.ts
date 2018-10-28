import { Repo } from "./repo";
import { RepoCollectionType } from "./repo-collection-type.enum";

export class RepoCollection {
    type: RepoCollectionType;
    url: string;
    repos: Repo[];
}
