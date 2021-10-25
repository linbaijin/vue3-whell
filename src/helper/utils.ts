export const toMatrix = (list:any[], elementPerSubArray: number) => {
    const matrix:Array<any>[] = []
    let k = -1
    list.forEach((item, index) => {
        if(index % elementPerSubArray === 0) {
            k++
            matrix[k] = []
        }
        matrix[k].push(item)
    })
    return matrix
}