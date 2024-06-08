const Employee = require('../models/employee');
const Department = require('../models/department');

exports.getAllEmployees = async (req, res) => {
    const employees = await Employee.findAll();
    res.render('employee/empIndex', { employees });
};

exports.getOneById = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    const department = await Department.findByPk(employee.department_id);
    res.render('employee/empShow', { employee, department });
};

exports.formCreate = async (req, res) => {
    const departments = await Department.findAll();
    res.render('employee/empCreate', { departments });
};

exports.postCreate = async (req, res) => {
    const employee = await Employee.create(req.body);
    res.redirect('/employees');
};

exports.formUpdate = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    const departments = await Department.findAll();
    res.render('employee/empEdit', { employee, departments });
};

exports.postUpdate = async (req, res) => {
    await Employee.update(req.body, { where: { id: req.params.id } });
    res.redirect('/employees');
};

exports.delete = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    await employee.destroy();
    res.redirect('/employees');
};