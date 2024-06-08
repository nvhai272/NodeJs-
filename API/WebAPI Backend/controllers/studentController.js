let students = [
    {
        id: 1,
        name: 'Student 1',
        age: 20,
        grade: 'A',
        major: 'Major 1',
        gpa: 3.8,
        email: 'student1@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City, Country',
        enrolled: true,
        graduationYear: 2024,
        scholarships: ['Scholarship A', 'Scholarship B']
    },
    {
        id: 2,
        name: 'Student 2',
        age: 21,
        grade: 'B',
        major: 'Major 2',
        gpa: 3.5,
        email: 'student2@example.com',
        phone: '234-567-8901',
        address: '456 Elm St, City, Country',
        enrolled: true,
        graduationYear: 2023,
        scholarships: ['Scholarship C']
    },
    {
        id: 3,
        name: 'Student 3',
        age: 22,
        grade: 'A',
        major: 'Major 3',
        gpa: 3.9,
        email: 'student3@example.com',
        phone: '345-678-9012',
        address: '789 Oak St, City, Country',
        enrolled: false,
        graduationYear: 2022,
        scholarships: []
    }
];

exports.CreateStudent = (req, res) => {
    let newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        // name: req.body.name,
        // age: req.body.age,
        // grade: req.body.grade,
        // major: req.body.major,
        // gpa: req.body.gpa,
        // email: req.body.email,
        // phone: req.body.phone,
        // address: req.body.address,
        // enrolled: req.body.enrolled,
        // graduationYear: req.body.graduationYear,
        // scholarships: req.body.scholarships
        ...req.body
    }
    students.push(newStudent);
    res.status(201).send(newStudent);
};

exports.GetAllStudents = (req, res) => {
    res.status(200).send(students);
};

exports.GetStudentById = (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
};

exports.DeleteStudentById = (req, res) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if (index !== -1) {
        students.splice(index, 1); // Xóa học sinh khỏi mảng
        res.status(200).send('Student deleted successfully');
    } else {
        res.status(404).send('Student not found');
    }
}

const getStudentById = (id) => {

    return students.find(s => s.id === id);
};

exports.UpdateStudent = (req, res) => {
    const stuId = parseInt(req.params.id);
    const student = getStudentById(stuId);
    if (!student) {
        return res.status(404).send('Student not found');
    } else {
        student.name = req.body.name;
        student.age = req.body.age;
        student.grade = req.body.grade;
        student.major = req.body.major;
        student.gpa = req.body.gpa;
        student.email = req.body.email;
        student.phone = req.body.phone;
        student.address = req.body.address;
        student.enrolled = req.body.enrolled;
        student.graduationYear = req.body.graduationYear;
        student.scholarships = req.body.scholarships;
        res.status(200).send(student);
    }
}




