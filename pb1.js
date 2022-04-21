const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ]; 
///陣列裡放物件取值
function problem1(factories){
    let answer1 = []
    for(i = 0;i < factories.length;i++){
        let temp = {
            name: factories[i].name,
            count: factories[i].employees.length
        }
        answer1.push(temp)
    }
    console.log(answer1)
}
problem1(factories)


function problem2(f){
    let tmp = []
    let answer2 = []
    let counts = {}
    for(i = 0 ; i < f.length ; i++){
        tmp = tmp.concat(f[i].employees)
    }
    tmp.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    for(var key in counts){
        let temp ={
            employee: key,
            count: counts[key]
        }
        answer2.push(temp)
    }
    console.log(answer2)
   /// console.log(Object.keys(counts))
}
problem2(factories)

function problem3(f){
    answer3 = []
    for(i = 0 ; i < f.length ; i++){
        temp = {
            name : f[i].name,
            employees: f[i].employees.sort()
        }
        answer3.push(temp)
    }
    console.log(answer3)
}
problem3(factories)

const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
      {id: 1, name: "Alice", type: 2},
      {id: 2, name: "Bob", type: 3},
      {id: 3, name: "John", type: 2},
      {id: 4, name: "Karen", type: 1},
      {id: 5, name: "Miles", type: 3},
      {id: 6, name: "Henry", type: 1}
];

const tasks = [
    {id: 1, title: "task01", duration: 60 },
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];
///const moment = require('moment')

function problem4(etype,e){
    let type_time = []
    for(i = 0 ; i < etype.length ; i++){
       startt = etype[i].work_begin.split(":")
       end = etype[i].work_end.split(':')
       var startDate = new Date(0,0,0,0,startt[0],startt[1],startt[2]);
       var endDate = new Date(0,0,0,0,end[0],end[1],end[2]);
       var diff = endDate.getTime()-startDate.getTime()
       var hour = Math.floor(diff/1000/60)
       if (hour<0){
           hour = 24+hour
       }
       type_time[i] = hour
    }
    let total = 0
    
    for(i = 0;i<e.length;i++){
        let num = e[i].type
        ///console.log(num)
        ///console.log(type_time[num])
        total = type_time[num-1] + total
        
    }
   
    console.log(total)
    return total
}
let num = problem4(employeeType,employees)


const howManyEmployeeByTime = (dateTime) => {
    const momentDateTime = moment(dateTime)
    let totalEmployee = 0
    employeeType.forEach((typeData) => {
      const work_begin = moment(typeData.work_begin, 'HH:mm:ss')
      const work_end = moment(typeData.work_end, 'HH:mm:ss')
      const isBetween = momentDateTime.isBetween(work_begin, work_end)
      if (isBetween) {
        const filtedEmployees = employees.filter((employeeData) => (employeeData.type === typeData.id))
        totalEmployee += filtedEmployees.length
      }
    })
    console.log(totalEmployee)
  }
const dateTime = new Date()
///howManyEmployeeByTime(dateTime)
///problem  nodejs有點問題 不一定對暫時先註解
function problem6(k){
    let y = num*60
    let tmp = 0
    for(i = 0;i<k.length;i++){
        tmp = tmp+k[i].duration
    }
    let answer6 = Math.ceil(tmp/y)
    console.log(answer6)
}
///利用pb4來計算總數
problem6(tasks)
