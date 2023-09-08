export function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    if (dateParts.length === 3) {
        const [year, month, day] = dateParts;
        return `${month}/${day}/${year}`;
    }
    return inputDate;
}

export function reverseFormatDate(formattedDate) {
    const dateParts = formattedDate.split('/');
    if (dateParts.length === 3) {
        const [month, day, year] = dateParts;
        return `${year}-${month}-${day}`;
    }
    return formattedDate;
}