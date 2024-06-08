const Department = require('../models/department');
const Employee = require('../models/employee');

exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (department) {
            res.status(200).json(department);
        } else {
            res.status(404).json({ error: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createDepartment = async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (department) {
            await department.update(req.body);
            res.status(200).json(department);
        } else {
            res.status(404).json({ error: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (department) {
            await department.destroy();
            res.status(200).json({ message: 'Department deleted successfully' });
        } else {
            res.status(404).json({ error: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmployeesByDepartment = async (req, res) => {
    try {
        const departmentId = req.params.departmentId;
        const department = await Department.findByPk(departmentId, {
            include: [{ model: Employee, as: 'employees' }]
        });
        if (department) {
            return res.status(200).json(department.employees);
        }
        res.status(404).json({ error: 'Department not found' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};