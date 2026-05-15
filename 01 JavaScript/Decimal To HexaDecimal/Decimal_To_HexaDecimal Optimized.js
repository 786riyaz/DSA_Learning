/**
 * Convert decimal number to hexadecimal
 * Supports negative numbers using 2's complement
 *
 * @param {number} num - Decimal number
 * @param {number} bits - Bit size (8, 16, 32)
 * @returns {string}
 */

function decimalToHex(num, bits = 32) {
    // Validate bit size
    if (![8, 16, 32].includes(bits)) {
        throw new Error("Bits must be 8, 16, or 32");
    }

    let hex;

    if (num >= 0) {
        // Positive number
        hex = num.toString(16).toUpperCase();
    } else {
        // Negative number using 2's complement
        const maxValue = 2 ** bits;

        // Convert negative number to unsigned equivalent
        const twosComplement = maxValue + num;

        hex = twosComplement.toString(16).toUpperCase();
    }

    // Pad with leading zeros
    const hexLength = bits / 4;

    // return "0x" + hex.padStart(hexLength, "0");
    // return hex.padStart(hexLength, "0");
    return hex.padStart(hexLength, "0").toLowerCase();
}


// Examples
console.log(decimalToHex(26));         // 0x0000001A
console.log(decimalToHex(-26));        // 0xFFFFFFE6

console.log(decimalToHex(127, 8));     // 0x7F
console.log(decimalToHex(-1, 8));      // 0xFF

console.log(decimalToHex(-10, 16));    // 0xFFF6
console.log(decimalToHex(-255, 16));   // 0xFF01