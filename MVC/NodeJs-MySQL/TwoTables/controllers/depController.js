const Department = require('../models/department');

exports.getDepartments = async (req, res) => {
    const departments = await Department.findAll();
    res.render('dep/index', {departments});
};

exports.getDepartment = async (req, res) => {
    const department = await Department.findByPk(req.params.id);
    res.render('dep/show', {department});
};

exports.formCreateDepartment = async (req, res) => {
    res.render('dep/create');
};

exports.createDepartment = async (req, res) => {
    await Department.create(req.body);
    res.redirect('/departments');
};

exports.formEditDepartment = async (req, res) => {
    const department = await Department.findByPk(req.params.id);
    res.render('dep/edit', {department});
};

exports.editDepartment = async (req, res) => {
    await Department.update(req.body, {where: {id: req.params.id}});
    res.redirect('/departments');
};

exports.deleteDepartment = async (req, res) => {
    await Department.destroy({where: {id: req.params.id}});
    res.redirect('/departments');
};