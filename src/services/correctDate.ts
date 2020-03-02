export const correctDate = (): string => {
    let date = new Date()
    let hours: string = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`
    let minutes: string = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    return `${hours}:${minutes}`
}
