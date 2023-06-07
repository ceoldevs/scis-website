interface IAuthor {
    name: string,
    link: string
}

interface IResearchPaper {
    title: string,
    publisher: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    authors: Array<IAuthor>
}

export interface IData {
    id: number,
    attributes: IResearchPaper
}