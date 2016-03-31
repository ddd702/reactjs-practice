var host = 'http://test.ueker.cn/';
var nowDate = new Date();
var Now = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth(),
    date: nowDate.getDate()
}
console.warn(Now);
export { Now }
