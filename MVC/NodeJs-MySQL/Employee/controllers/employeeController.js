const Employee = require('../models/employee');

exports.getAllEmployees = async (req, res) => {
    const employees = await Employee.findAll();
    res.render('index', {employees});
};

exports.getEmployeeById = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    res.render('show', {employee});
};

exports.createEmployee = async (req, res) => {
    res.render('create');
};

exports.postEmployee = async (req, res) => {
await Employee.create(req.body);
    res.redirect('/');
};

exports.editEmployee = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    res.render('edit', {employee});
};

exports.updateEmployee = async (req, res) => {
    await Employee.update(req.body, {where: {id: req.params.id}});
    res.redirect('/');
};

exports.deleteEmployee = async (req, res) => {
    await Employee.destroy({where: {id: req.params.id}});
    res.redirect('/');
};