export const convertDate = (payLoadDate: string): string => {
    const monthNames: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    const date: Date = new Date(payLoadDate)
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}