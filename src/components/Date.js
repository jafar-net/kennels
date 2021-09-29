export function getCurrentDate(separator="/"){

    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
    
    return `${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}`
    }