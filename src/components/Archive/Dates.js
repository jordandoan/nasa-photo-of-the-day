let months = [
    {text: "Jan", value: "01"},  
    {text: "Feb", value: "02"},  
    {text: "Mar", value: "03"},  
    {text: "Apr", value: "04"},  
    {text: "May", value: "05"}, 
    {text: "Jun", value: "06"},  
    {text: "Jul", value: "07"},  
    {text: "Aug", value: "08"}, 
    {text: "Sep", value: "09"}, 
    {text: "Oct", value: "10"}, 
    {text: "Nov", value: "11"}, 
    {text: "Dec", value: "12"}
    ];
let years = [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019"
];
years = years.reverse();
let days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
];
let today = new Date();
let oldDates = [];
for (let i = 1; i < 13; i++) {
    today.setDate(today.getDate() - 1);
    let currentDate = today;
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    if (month < 10) {
        month = "0" + month;
    }   
    if (day < 10) { 
        day = "0" + day;
    }
    let dateQuery = `${year}-${month}-${day}`
    oldDates.push(dateQuery);
}
export {days, months, years, oldDates};