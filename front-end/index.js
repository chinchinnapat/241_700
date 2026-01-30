function submitData() {
    // 1. แก้ชื่อ name ให้ตรงกับ HTML (ตัวพิมพ์เล็ก)
    let firstNameDOM = document.querySelector("input[name=firstname]");
    let lastNameDOM = document.querySelector("input[name=lastname]");
    let ageDOM = document.querySelector("input[name=age]");

    // 2. แก้ Gender ต้องเลือกตัวที่ :checked เท่านั้น
    let genderDOM = document.querySelector("input[name=gender]:checked");

    let interestDOM = document.querySelectorAll("input[name=interest]:checked");

    // 3. แก้ Description เป็น textarea (ไม่ใช่ input)
    let descriptionDOM = document.querySelector("textarea[name=description]");

    // จัดการเรื่อง Interest (วนลูป)
    let interest = '';
    for (let i = 0; i < interestDOM.length; i++) {
        interest += interestDOM[i].value;
        if (i !== interestDOM.length - 1) {
            interest += ', ';
        }
    }

    // สร้าง Object ข้อมูล (ต้องเช็คว่า genderDOM มีค่าไหม กัน Error กรณีไม่ได้เลือกเพศ)
    let userdata = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM ? genderDOM.value : "ไม่ได้ระบุ", // ถ้าไม่เลือกเพศ ให้ใส่ค่า default
        interests: interest,
        description: descriptionDOM.value
    }

    console.log(userdata);
}