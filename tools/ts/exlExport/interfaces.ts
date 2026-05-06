export interface ISheetContent {
    name: string
    data: Array<Array<any>>
}

export type IFormatTypeStr = 'number' | 'boolean' | 'string' | 'any'
export type ISupportType = number | boolean | string | any

export type IElsxContent = ISheetContent[]

export interface IResult {
    excel: {
        /**excel文件路径 */
        inputFile: string,
        /**excel文件名 */
        fileName: string,
        /**sheet名 */
        sheetName: string,
        /**此sheet中id的字段名 */
        idField: string,
    }
    json: {
        /**输出的json文件路径 */
        outputFile: string,
        /**json文件名 */
        fileName: string,
        /**json文件内容 */
        content: { root: any[] },
    }
    code: {
        /**输出的代码文件路径 */
        outputFile: string,
        /**输出的代码文件名 */
        fileName: string,
        /**类名 */
        className: string,
        /**代码内容 */
        content: string,
    }
}

export interface IDocParam {
    /**字段名 */
    name: string
    /**字段描述 */
    desc: string
}

export interface IDocForFunction {
    /**方法描述 */
    titles: string[]
    /**字段列表 */
    params?: IDocParam[]
}
