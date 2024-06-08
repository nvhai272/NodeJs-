class Student {
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
function getAll() {
    return students;
}

function getById(id) {
    return students.find(s => s.id === id);
}

function create(student) {
    students.push(student);
}

function update(id, updatedStudent) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students[index] = { id, ...updatedStudent };
    }
}

function deleteById(id) {
    students = students.filter(s => s.id !== id);
}

let students = [
    new Student(1, 'Hai', 23, 'Nam'),
    new Student(2, 'Hieu', 23, 'Nam'),
    new Student(3, 'Linh', 23, 'Nu'),
    new Student(4, 'Hanh', 23, 'Nu'),
    new Student(5, 'Ngoc', 23, 'Nu')
];

module.exports = {
    Student,
    getAll,
    getById,
    create,
    update,
    deleteById
};
