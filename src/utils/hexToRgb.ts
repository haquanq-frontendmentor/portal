export function hexToRgb(hex: string) {
    let cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

    if (cleanHex.length === 3) {
        cleanHex = cleanHex[0] + cleanHex[0] + cleanHex[1] + cleanHex[1] + cleanHex[2] + cleanHex[2];
    }

    if (cleanHex.length !== 6) {
        throw new Error("Invalid hex color format. Expected 3 or 6 digits.");
    }

    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    return [r, g, b];
}
