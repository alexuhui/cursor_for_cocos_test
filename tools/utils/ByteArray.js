#!/usr/bin/env node
var ByteArray = /** @class */ (function () {
    function ByteArray(length) {
        this._offset = 0;
        if (typeof length === 'number') {
            this._buffer = Buffer.alloc(length);
        }
        else {
            this._buffer = length;
        }
        this._offset = 0;
    }
    Object.defineProperty(ByteArray.prototype, "data", {
        get: function () {
            return this._buffer.slice(0, this._offset);
        },
        enumerable: true,
        configurable: true
    });
    ByteArray.prototype.writeByte = function (value) {
        this._offset = this._buffer.writeInt8(value, this._offset);
    };
    ByteArray.prototype.writeUnsignedByte = function (value) {
        this._offset = this._buffer.writeUInt8(value, this._offset);
    };
    ByteArray.prototype.writeShort = function (value) {
        this._offset = this._buffer.writeInt16LE(value, this._offset);
    };
    ByteArray.prototype.writeUnsignedShort = function (value) {
        this._offset = this._buffer.writeUInt16LE(value, this._offset);
    };
    ByteArray.prototype.writeInt = function (value) {
        this._offset = this._buffer.writeInt32LE(value, this._offset);
    };
    ByteArray.prototype.writeUnsignedInt = function (value) {
        this._offset = this._buffer.writeUInt32LE(value, this._offset);
    };
    ByteArray.prototype.writeString = function (value, encoding) {
        if (encoding === void 0) { encoding = 'utf8'; }
        if (encoding === 'utf8') {
            this.writeUnsignedInt(value.length);
            this._offset += this._buffer.write(value, this._offset);
        }
        else {
            throw new Error(encoding + ' encoding not support');
        }
    };
    ByteArray.prototype.readByte = function () {
        return this._buffer.readInt8(this._offset++);
    };
    ByteArray.prototype.readUnSignedByte = function () {
        return this._buffer.readUInt8(this._offset++);
    };
    ByteArray.prototype.readShort = function () {
        var result = this._buffer.readInt16LE(this._offset);
        this._offset += 2;
        return result;
    };
    ByteArray.prototype.readUnsignedShort = function () {
        var result = this._buffer.readUInt16LE(this._offset);
        this._offset += 2;
        return result;
    };
    ByteArray.prototype.readInt = function () {
        var result = this._buffer.readInt32LE(this._offset);
        this._offset += 4;
        return result;
    };
    ByteArray.prototype.readUnSignedInt = function () {
        var result = this._buffer.readUInt32LE(this._offset);
        this._offset += 4;
        return result;
    };
    ByteArray.prototype.readString = function () {
        var startTime = Date.now();
        var length = this.readUnSignedInt();
        var list = [];
        var size;
        var char;
        var unicode;
        var unicodeH;
        var unicodeL;
        for (var i = 0; i < length; i++) {
            char = this.readUnSignedByte();
            // 1000 0000
            if (char > 128) {
                if (char >= 0xfe) {
                    // 1111 1110
                    throw new Error('size > 6');
                }
                else if (char >= 0xfc) {
                    // 1111 1100
                    size = 6;
                }
                else if (char >= 0xf8) {
                    // 1111 1000
                    size = 5;
                }
                else if (char >= 0xf0) {
                    // 1111 0000
                    size = 4;
                }
                else if (char >= 0xe0) {
                    // 1110 0000
                    size = 3;
                }
                else if (char >= 0xc0) {
                    // 1100 0000
                    size = 2;
                }
                var results = [char.toString(2).slice(size + 1)];
                while (--size > 0) {
                    char = this.readUnSignedByte();
                    results.push(char.toString(2).slice(2));
                }
                unicode = parseInt(results.join(''), 2);
                if (unicode >= 0xFFFF) {
                    unicodeH = Math.floor((unicode - 0x10000) / 0x400) + 0xd800;
                    unicodeL = (unicode - 0x10000) % 0x400 + 0xDC00;
                    if (unicodeH >= 0xD800 && unicodeH <= 0xDBFF) {
                        list.push(String.fromCodePoint(unicodeH, unicodeL));
                        i++;
                    }
                    else {
                        list.push(String.fromCharCode(unicode));
                    }
                }
                else {
                    list.push(String.fromCharCode(unicode));
                }
            }
            else {
                list.push(String.fromCharCode(char));
            }
        }
        // list.join('')
        console.log('xxxxxxxxxx', Date.now() - startTime, list.join(''));
        return '';
    };
    return ByteArray;
}());
// const str: string = fs.readFileSync(path.join(__dirname, 'test.txt'), { encoding: 'utf8' })
// let byteArray: ByteArray = new ByteArray(2000000)
// byteArray.writeString(str)
// fs.writeFileSync(path.join(__dirname, '../assets/resources/test.bin'), zlib.gzipSync(byteArray.data), { encoding: 'utf8' })
// let reader: ByteArray = new ByteArray(byteArray.data)
// console.log(reader.readString())
