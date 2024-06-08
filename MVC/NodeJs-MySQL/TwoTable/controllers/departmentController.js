const Department = require('../models/department');

exports.getAllDepartments = async (req, res) => {
    const departments = await Department.findAll();
    res.render('department/depIndex', { departments });
};

exports.getOneById = async (req, res) => {
    const department = await Department.findByPk(req.params.id);
    res.render('department/depShow', { department });
};

exports.formCreate = async (req, res) => {
    res.render('department/depCreate');
};

exports.postCreate = async (req, res) => {
     await Department.create(req.body);
    res.redirect('/departments');
};

exports.formUpdate = async (req, res) => {
    const department = await Department.findByPk(req.params.id);
    res.render('department/depUpdate', { department });
};

exports.postUpdate = async (req, res) => {
    await Department.update(req.body, { where: { id: req.params.id } });
    res.redirect('/departments');
};

exports.postDelete = async (req, res) => {
    await Department.destroy({ where: { id: req.params.id } });
    res.redirect('/departments');
};