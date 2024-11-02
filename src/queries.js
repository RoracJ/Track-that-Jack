const client = require('./db');

// Fetch all departments
const getDepartments = async () => {
    const res = await client.query('SELECT * FROM department');
    return res.rows;
};

// Fetch all roles
const getRoles = async () => {
    const res = await client.query(`
        SELECT role.id, role.title, role.salary, department.name AS department
        FROM role
        JOIN department ON role.department_id = department.id
    `);
    return res.rows;
};

// Fetch all employees
const getEmployees = async () => {
    const res = await client.query(`
        SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, manager.first_name AS manager
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    `);
    return res.rows;
};

// Add more functions for adding/updating data as needed
module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    // Add other functions here...
};
