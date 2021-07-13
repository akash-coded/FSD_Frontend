function student(id, sName, sLevel) {
  return {
    studentId: id,
    studentName: sName,
    studentLevel: sLevel,
  };
}

let student1 = student(20201524, "Fadi", "Senior");
console.log(student1);
console.log(Object.keys(student1));
