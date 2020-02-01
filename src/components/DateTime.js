export default class DateTime {

    constructor(date) {
        this.date = date ? date : new Date();

        this.monthNames = [
            'Ocak', 'Şubat', 'Mart',
            'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül',
            'Ekim', 'Kasım', 'Aralık'
        ];
    
        this.dayNames = [
            'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe',
            'Cuma', 'Cumartesi', 'Pazar'
        ];
    }

    hours() {
        return this.formatUnitOfTime(this.date.getHours());
    }

    minutes() {
        return this.formatUnitOfTime(this.date.getMinutes());
    }

    seconds() {
        return this.formatUnitOfTime(this.date.getSeconds());
    }

    dayOfWeek() {
        return this.dayNames[this.date.getDay()-1];
    }

    dayOfMonth() {
        return this.formatUnitOfTime(this.date.getUTCDate());
    }

    month() {
        return this.monthNames[this.date.getMonth()];
    }

    year() {
        return `${this.date.getFullYear()}`;
    }

    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
    }

    static toDateString(date) {
        var dateTime = new DateTime(date);

        return ` ${dateTime.dayOfMonth()} ${dateTime.month()} ${dateTime.year()} ${dateTime.dayOfWeek()}`;
    }

    static toTimeString(date) {
        var dateTime = new DateTime(date);

        return `${dateTime.hours()}:${dateTime.minutes()}:${dateTime.seconds()}`;
    }
}
