const today = new Date();
const year = today.getFullYear();
const options: Intl.DateTimeFormatOptions = { month: "long" };
const monthName = today.toLocaleDateString("en-US", options);
const day = today.getDate();
const todayDate = `${day} ${monthName} ${year}`;

export default todayDate;
