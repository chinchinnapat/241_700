// console.log("Hello World")

// let fname = 'John' //string

// let age = 30 //number
// let height = 150.5 //number
// const pi = 3.14
// const idcard = 123

// let isThai = false //boolean

// //const idcard = '456'   *Wrong*


// console.log('Id card: ',idcard)

// console.log('Name: ',fname,' Age: ',age)
// console.log(typeof(idcard))

// /*
// + Plus
// - Substract
// * 
// */

// //condition statemant (if else,witch)=>(&&และ ||หรือ ==เท่ากับ !=ไม่เท่ากับ >มากกว่า >=มากกว่าเท่ากับ <น้อยกว่า <=น้อยกว่าเท่ากับ )



// let number1 = 5
// let number2 = 5

// let condition = number1 <= number2

// console.log('Condition = ',condition)
// console.log(typeof(condition))

// // if-else condition
// if(number1 != number2){
//     console.log('This if')
// }else if(number1 == number2){
//     console.log('This else if')
// }else{
//     console.log('This else')
// }

// /*
// Grade
// >=80 A
// >=70 B
// >=60 C
// >=50 D
// <50 F
//  */
// let score = prompt('ใส่ตัวเลข')

// if(score >= 80){
//     console.log('A')
// }else if(score >= 70){
//     console.log('B')
// }else if(score >= 60){
//     console.log('C')
// }else if(score >= 50){
//     console.log('D')
// }else{
//     console.log("F")
// }

// /*
// && และ
// || หรือ
// != ไม่นะจ้ะ
// */
// let Number1 = 5
// let Number2 = 10
// let Condition = !(Number1 >= 3 || Number2 >= 11)
// console.log('Result of condition',Condition)

// let number = 20
// if(!(number%2==0)){
//     console.log('You are even.')
// }

// let counter = 0
// while (counter < 10){
//     console.log('Hi')
//     counter++
// }
// for(let counter=0; counter<10; counter++){
//     console.log('Hi')
// }

// let age1 = 20
// let age2 = 25
// let age3 = 30

// let ages = [20,25,30]
// ages = [200,100,20,18,5] // แทนที่

// console.log('age1 age2 age3 = ',age1,age2,age3)
// console.log(`age1 ${age1} age2 ${age2} age3 ${age3}`)
// console.log('Array ages = ',ages)

// console.log('index',ages[0])

// ages.push(25) //ต่อarray
// console.log('Array ages = ',ages)

// //ลบarrayตัวสุดท้าย
// ages.pop()
// console.log('Array ages = ',ages)

// ages[0] = 10
// console.log('Array ages = ',ages)

// if(ages.includes(10)){
//     console.log('มีเลข10ในarray')
// }

// let ages=[30,40,10,2,5]
// ages.sort()
// console.log(ages.sort())

// let namList=['aa','bb','cc']
// namList.push('dd')
// console.log(namList)

// namList.pop()
// console.log('pop nameList ',namList)

// console.log(namList.length)

// for(let i=0; i<namList.length;i++){
//     console.log(`Name list ${i}`,namList[i])
// }

// let student= [{
//     age: 30,
//     name: 'aa',
//     grade: 'A'
// },{
//     age: 25,
//     name: 'bb',
//     grade: 'B'
// }]

// student.push({
//     age: 40,
//     name: 'cc',
//     grade: 'F'
// })

// student.pop()

// console.log(student)

// for (let i=0; i<student.length; i++){
//     console.log('Student number ',i+1)
//     console.log('age ',student[i].age,' name ',student[i].name,' grade ',student[i].grade)
// }

// let score =[20,30,40,50]
// //let newScore = []

// // for(let i=0; i<score.length;i++){
// //     console.log(`Score ${i}`,score[i])
// //     if(score[i]>=30){
// //         newScore.push(score[i])
// //     }
// // }

// // score = score.map ((s) => {
// //     return s*2
// // })


// let newScore = score.filter((s) => {
//     // if (s >= 30){
//     //     return true
//     // }else{
//     //     return false
//     // }
//     return s>=30
// })

// newScore.forEach((ns) => {
//     console.log('Score',ns)
// })


let students = [
    {
        name:'aa',
        score: 50,
        grade:'A'
    },{
        name:'bb',
        score: 80,
        grade:'B'
    }
]

let student = students.find((s) => {
    if(s.name == 'aa'){
        return true
    }
})

let double_score = students.map ((s) => {
    s.score = s.score*2
    return s
})

let highScore = students.filter((s) => {
    if (s.score >= 120){
        return true
    }
})

console.log(student)

console.log('doble_score',double_score)
console.log('highScore',highScore)