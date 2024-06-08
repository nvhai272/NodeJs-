const { Student, getAll,getById, create, update, deleteById } = require("../models/studenModel");

exports.getAllStudents = (req, res) => {
    const students = getAll();
    res.render('students/index', { students });
};

// exports.getDetails = (req, res) => {
//     const student = getById(parseInt(req.params.id));
//     if (student) {
//         // res.render('students/show', { student });
//         res.json(student); //trả về JSON thay vì render view
//     } else {
//         res.status(404).send('Student not found');
//     }
// }

exports.createForm = (req, res) => {
    res.render('students/create');
};

exports.createStudent = (req, res) => {
    const { name, age, gender } = req.body;
    const id = getAll().length ? getAll()[getAll().length - 1].id + 1 : 1;
    const newStudent = new Student(id, name, parseInt(age), gender);
    create(newStudent);
    res.redirect('/students');
}

exports.editForm = (req, res) => {
    const student = getById(parseInt(req.params.id));
    if (student) {
        res.render('students/edit', { student });
    } else {
        res.status(404).send('Student not found');
    }
}

exports.updateStudent = (req, res) => {
    const { name, age, gender } = req.body;
    const updatedStudent = { name, age: parseInt(age), gender };
    update(parseInt(req.params.id), updatedStudent);
    res.redirect('/students');
}

exports.deleteStudent = (req, res) => {
    deleteById(parseInt(req.params.id));
    res.redirect('/students');
}
