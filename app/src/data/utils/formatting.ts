export const capitalize = (string: string | undefined) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
}