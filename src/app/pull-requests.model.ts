export class Project {
    id: string;
    name: string;
    state: string;
}

export class Repository {
    id: string;
    name: string;
    url: string;
    project: Project;
}

export class CreatedBy {
    id: string;
    displayName: string;
    uniqueName: string;
    url: string;
    imageUrl: string;
}

export class LastMergeSourceCommit {
    commitId: string;
    url: string;
}

export class LastMergeTargetCommit {
    commitId: string;
    url: string;
}

export class LastMergeCommit {
    commitId: string;
    url: string;
}

export class Reviewer {
    reviewerUrl: string;
    vote: number;
    id: string;
    displayName: string;
    uniqueName: string;
    url: string;
    imageUrl: string;
    isContainer?: boolean;
}

export class PullRequest {
    repository: Repository;
    pullRequestId: number;
    codeReviewId: number;
    status: string;
    createdBy: CreatedBy;
    creationDate: Date;
    title: string;
    description: string;
    sourceRefName: string;
    targetRefName: string;
    mergeStatus: string;
    mergeId: string;
    lastMergeSourceCommit: LastMergeSourceCommit;
    lastMergeTargetCommit: LastMergeTargetCommit;
    lastMergeCommit: LastMergeCommit;
    reviewers: Reviewer[];
    url: string;
    supportsIterations: boolean;
}
