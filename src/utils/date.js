export default function date(date) {
    const newDate = new Date(date);
    const day = `0${newDate.getUTCDate()}`.slice(-2);
    const month = `0${newDate.getUTCMonth() + 1}`.slice(-2);
    const year = `000${newDate.getUTCFullYear()}`.slice(-4);

    return {
        newDate,
        day,
        month,
        year,
        isoFormat: `${year}-${month}-${day}`
    }
}