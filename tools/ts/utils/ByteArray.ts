#!/usr/bin/env node
class ByteArray {
    private _buffer: Buffer
    private _offset: number = 0
    constructor(length: number | Buffer) {
        if (typeof length === 'number') {
            this._buffer = Buffer.alloc(length)
        } else {
            this._buffer = length
        }
        this._offset = 0
    }
    get data(): Buffer {
        return this._buffer.slice(0, this._offset)
    }

    writeByte(value: number): void {
        this._offset = this._buffer.writeInt8(value, this._offset)
    }

    writeUnsignedByte(value: number): void {
        this._offset = this._buffer.writeUInt8(value, this._offset)
    }

    writeShort(value: number): void {
        this._offset = this._buffer.writeInt16LE(value, this._offset)
    }

    writeUnsignedShort(value: number): void {
        this._offset = this._buffer.writeUInt16LE(value, this._offset)
    }

    writeInt(value: number): void {
        this._offset = this._buffer.writeInt32LE(value, this._offset)
    }

    writeUnsignedInt(value: number): void {
        this._offset = this._buffer.writeUInt32LE(value, this._offset)
    }

    writeString(value: string, encoding: string = 'utf8'): void {
        if (encoding === 'utf8') {
            this.writeUnsignedInt(value.length)
            this._offset += this._buffer.write(value, this._offset)
        } else {
            throw new Error(encoding + ' encoding not support')
        }
    }

    readByte(): number {
        return this._buffer.readInt8(this._offset++)
    }

    readUnSignedByte(): number {
        return this._buffer.readUInt8(this._offset++)
    }

    readShort(): number {
        const result: number = this._buffer.readInt16LE(this._offset)
        this._offset += 2
        return result
    }

    readUnsignedShort(): number {
        const result: number = this._buffer.readUInt16LE(this._offset)
        this._offset += 2
        return result
    }

    readInt(): number {
        const result: number = this._buffer.readInt32LE(this._offset)
        this._offset += 4
        return result
    }

    readUnSignedInt(): number {
        const result: number = this._buffer.readUInt32LE(this._offset)
        this._offset += 4
        return result
    }

    readString(): string {
        const startTime: number = Date.now()
        let length: number = this.readUnSignedInt()
        let list: string[] = []
        let size: number
        let char: number
        let unicode: number
        let unicodeH: number
        let unicodeL: number
        for (let i: number = 0; i < length; i++) {
            char = this.readUnSignedByte()
            // 1000 0000
            if (char > 128) {
                if (char >= 0xfe) {
                    // 1111 1110
                    throw new Error('size > 6')
                } else if (char >= 0xfc) {
                    // 1111 1100
                    size = 6
                } else if (char >= 0xf8) {
                    // 1111 1000
                    size = 5
                } else if (char >= 0xf0) {
                    // 1111 0000
                    size = 4
                } else if (char >= 0xe0) {
                    // 1110 0000
                    size = 3
                } else if (char >= 0xc0) {
                    // 1100 0000
                    size = 2
                }
                let results: string[] = [char.toString(2).slice(size + 1)]
                while (--size > 0) {
                    char = this.readUnSignedByte()
                    results.push(char.toString(2).slice(2))
                }
                unicode = parseInt(results.join(''), 2)
                if (unicode >= 0xFFFF) {
                    unicodeH = Math.floor((unicode - 0x10000) / 0x400) + 0xd800
                    unicodeL = (unicode - 0x10000) % 0x400 + 0xDC00
                    if (unicodeH >= 0xD800 && unicodeH <= 0xDBFF) {
                        list.push(String.fromCodePoint(unicodeH, unicodeL))
                        i++
                    } else {
                        list.push(String.fromCharCode(unicode))
                    }
                } else {
                    list.push(String.fromCharCode(unicode))
                }
            } else {
                list.push(String.fromCharCode(char))
            }
        }
        // list.join('')
        console.log('xxxxxxxxxx', Date.now() - startTime, list.join(''))
        return ''
    }
}

// const str: string = fs.readFileSync(path.join(__dirname, 'test.txt'), { encoding: 'utf8' })

// let byteArray: ByteArray = new ByteArray(2000000)
// byteArray.writeString(str)
// fs.writeFileSync(path.join(__dirname, '../assets/resources/test.bin'), zlib.gzipSync(byteArray.data), { encoding: 'utf8' })

// let reader: ByteArray = new ByteArray(byteArray.data)
// console.log(reader.readString())
