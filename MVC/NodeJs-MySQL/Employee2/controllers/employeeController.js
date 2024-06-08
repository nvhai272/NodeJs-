const Employee = require('../models/employee');

exports.getAll = async (req, res) => {
    const employees = await Employee.findAll();
    res.render('index', { employees });
};

exports.getOneById = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    res.render('show', { employee });
};

exports.formCreate = async (req, res) => {
    res.render('create');
};

exports.postCreate = async (req, res) => {
    await Employee.create(req.body);
    res.redirect('/employees');
};

exports.formUpdate = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    res.render('edit', { employee });
};

exports.postUpdate = async (req, res) => {
    await Employee.update(req.body,{where:{id:req.params.id}});
    res.redirect('/employees');
};

exports.delete = async (req, res) => {
    await Employee.destroy({where:{id:req.params.id}});
    res.redirect('/employees');
};