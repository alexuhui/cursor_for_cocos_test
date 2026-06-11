// 数字截取类型
export enum NumCutType {
    floor = 0,
    ceil = 1,
    round = 2
}

/** 将绝对值按 decimalPlaces 截取到整数刻度，规避 value×multiplier 浮点误差 */
function absValueToCutScaled(absValue: number, decimalPlaces: number, cutType: NumCutType): number {
    const multiplier = Math.pow(10, decimalPlaces)
    const product = absValue * multiplier
    if (cutType === NumCutType.ceil) {
        return Math.ceil(product - 1e-9)
    }
    if (cutType === NumCutType.round) {
        return Math.round(product)
    }
    return Math.floor(product + 1e-9)
}

/** 由整数刻度拼小数字符串（如 scaled=228、2 位小数 → "2.28"） */
function formatScaledInteger(
    scaled: number,
    decimalPlaces: number,
    keepTrailingZeros: boolean
): string {
    const multiplier = Math.pow(10, decimalPlaces)
    const sign = scaled < 0 ? '-' : ''
    const abs = Math.abs(scaled)
    const intPart = Math.floor(abs / multiplier)
    const fracPart = abs % multiplier
    if (fracPart === 0) {
        if (keepTrailingZeros) {
            return `${sign}${intPart}.${'0'.repeat(decimalPlaces)}`
        }
        return `${sign}${intPart}`
    }
    let fracStr = fracPart.toString().padStart(decimalPlaces, '0')
    if (!keepTrailingZeros) {
        fracStr = fracStr.replace(/0+$/, '')
    }
    return `${sign}${intPart}.${fracStr}`
}

/**
 * 将数字转换为缩写形式
 * @param num 要转换的数字
 * @param decimalPlaces 小数点后保留的位数，默认1位
 * @param keepTrailingZeros 是否保留小数部分末尾的零，默认false
 * @param useUnits 是否使用单位，默认true
 * @param minEffect 使用缩写单位的最小有效数字，默认1000
 * @param cutType 数字截取类型，默认向下取整
 * @returns 转换后的缩写字符串
 */
export function formatNumberShort(
    num: number,
    decimalPlaces: number = 1,
    keepTrailingZeros: boolean = false,
    useUnits: boolean = true,
    minEffect: number = 1000,
    cutType: NumCutType = NumCutType.floor
): string {
    const units = ['', 'K', 'M', 'B', 'T', 'Q']
    const isNegative = num < 0
    let value = Math.abs(num)
    if (value === 0) {
        return keepTrailingZeros && decimalPlaces > 0
            ? (isNegative ? '-' : '') + '0.' + '0'.repeat(decimalPlaces)
            : (isNegative ? '-' : '') + '0'
    }
    let unitIndex = 0
    while (useUnits && value >= minEffect && unitIndex < units.length - 1) {
        value /= 1000
        unitIndex++
    }
    if (decimalPlaces > 0) {
        const scaledInt = absValueToCutScaled(value, decimalPlaces, cutType)
        const body = formatScaledInteger(isNegative ? -scaledInt : scaledInt, decimalPlaces, keepTrailingZeros)
        return body + units[unitIndex]
    }
    let result: string
    if (cutType === NumCutType.ceil) {
        result = Math.ceil(value).toString()
    } else if (cutType === NumCutType.round) {
        result = Math.round(value).toString()
    } else {
        result = Math.floor(value).toString()
    }
    return (isNegative ? '-' : '') + result + units[unitIndex]
}
