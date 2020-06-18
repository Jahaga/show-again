//Group 6: Tony Lukowski, Alex Alea, Scott Martin, Tammy Crittenden

const parentElement = document.querySelector('.katas-list')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472
];

//KATA1
const katas1Heading = document.createElement('h3')
parentElement.append(katas1Heading)
katas1Heading.append('KATA 1:')

let array = []
for (let counter = 1; counter <= 20; counter += 1) {
    array.push(counter)
}
parentElement.append(array)

//KATA2
const katas2Heading = document.createElement('h3')
parentElement.append(katas2Heading)
katas2Heading.append('KATA 2:')

let array2 = []
for (let counter = 2; counter <= 20; counter += 2) {
    array2.push(counter)
}
parentElement.append(array2)

//KATA3
const katas3Heading = document.createElement('h3')
parentElement.append(katas3Heading)
katas3Heading.append('KATA 3:')

let array3 = []
for (let counter = 1; counter <= 20; counter += 2) {
    array3.push(counter)
}
parentElement.append(array3)

//KATA4
const katas4Heading = document.createElement('h3')
parentElement.append(katas4Heading)
katas4Heading.append('KATA 4:')

let array4 = []
for (let counter = 5; counter <= 100; counter += 5) {
    array4.push(counter)
}
parentElement.append(array4)

//KATA5
const katas5Heading = document.createElement('h3')
parentElement.append(katas5Heading)
katas5Heading.append('KATA 5:')

let array5 = []
for (let counter = 1; counter * counter <= 100; counter += 1) {
    square = counter * counter
    array5.push(square)
}
parentElement.append(array5)

//KATA6
const katas6Heading = document.createElement('h3')
parentElement.append(katas6Heading)
katas6Heading.append('KATA 6:')

let array6 = []
for (let counter = 20; counter >= 1; counter -= 1) {
    array6.push(counter)
}
parentElement.append(array6)

//KATA7
const katas7Heading = document.createElement('h3')
parentElement.append(katas7Heading)
katas7Heading.append('KATA 7:')

let array7 = []
for (let counter = 20; counter >= 1; counter -= 2) {
    array7.push(counter)
}
parentElement.append(array7)

//KATA8
const katas8Heading = document.createElement('h3')
parentElement.append(katas8Heading)
katas8Heading.append('KATA 8:')

let array8 = []
for (let counter = 19; counter >= 1; counter -= 2) {
    array8.push(counter)
}
parentElement.append(array8)

//KATA9
const katas9Heading = document.createElement('h3')
parentElement.append(katas9Heading)
katas9Heading.append('KATA 9:')

let array9 = []
for (let counter = 100; counter >= 5; counter -= 5) {
    array9.push(counter)
}
parentElement.append(array9)

//KATA10
const katas10Heading = document.createElement('h3')
parentElement.append(katas10Heading)
katas10Heading.append('KATA 10:')

let array10 = []
for (let counter = 10; counter * counter >= 1; counter -= 1) {
    square = counter * counter
    array10.push(square)
}
parentElement.append(array10)

//KATA11
const katas11Heading = document.createElement('h3')
parentElement.append(katas11Heading)
katas11Heading.append('KATA 11:')

parentElement.append(sampleArray)

//KATA12
const katas12Heading = document.createElement('h3')
parentElement.append(katas12Heading)
katas12Heading.append('KATA 12:')

let array12 = []
for (index = 0; index <= sampleArray.length; index += 1) {
    if (sampleArray[index] % 2 === 0) {
        array12.push(sampleArray[index])
    }
}
parentElement.append(array12)

//KATA13
const katas13Heading = document.createElement('h3')
parentElement.append(katas13Heading)
katas13Heading.append('KATA 13:')

let array13 = []
for (index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] % 2 !== 0) {
        array13.push(sampleArray[index])
    }
}
parentElement.append(array13)

//KATA14
const katas14Heading = document.createElement('h3')
parentElement.append(katas14Heading)
katas14Heading.append('KATA 14:')

let array14 = []
for (index = 0; index < sampleArray.length; index += 1) {
    square = sampleArray[index] * sampleArray[index];
    array14.push(square)
}
parentElement.append(array14)

//KATA15
const katas15Heading = document.createElement('h3')
parentElement.append(katas15Heading)
katas15Heading.append('KATA 15:')

let array15 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]
let sum = 0;
for (let index = 0; index < array15.length; index += 1) {
    sum += array15[index]
}
parentElement.append(sum)

//KATA16
const katas16Heading = document.createElement('h3')
parentElement.append(katas16Heading)
katas16Heading.append('KATA 16:')

let sum2 = 0;
for (let index = 0; index < sampleArray.length; index += 1) {
    sum2 += sampleArray[index]
}
parentElement.append(sum2)

//KATA17
const katas17Heading = document.createElement('h3')
parentElement.append(katas17Heading)
katas17Heading.append('KATA 17:')

let smallestNum = Math.min.apply(Math, sampleArray)
parentElement.append(smallestNum)

//KATA18
const katas18Heading = document.createElement('h3')
parentElement.append(katas18Heading)
katas18Heading.append('KATA 18:')

let largestNum = Math.max.apply(Math, sampleArray)
parentElement.append(largestNum)