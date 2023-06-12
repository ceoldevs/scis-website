export interface IData {
    id: number
    attributes: {
        batch: string
        Slug: string
        studentList?: string
    }
}

interface IRecord {
    data: IData[]
}

export interface IStudentList {
    imtech: IRecord
    mtech: IRecord
    mca: IRecord
}