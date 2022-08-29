/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

function allWagesFor(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){ 
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(rec){
    return rec.firstName === firstName
})
}

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
 */


