export function formatMoney(money) {
    let newMoney = '' + money
    let i = 3
    while(i < newMoney.length ) {
        newMoney = newMoney.slice(0, newMoney.length - i) + ',' + newMoney.slice(newMoney.length - i, newMoney.length)
        i += 4
    }
    return '$' + newMoney
}

export function formatDate(date) {
    const dateArr = date.split('-')
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const daySound = ['st', 'nd', 'rd']
    const month = months[+dateArr[1] - 1]
    let day = dateArr[2]
    if(+day[1] > 3 || +day[1] === 0) {
        day += 'th'
    } else {
        day += daySound[+day[1] - 1]
    }
    return `${month} ${day}, ${dateArr[0]}`
}