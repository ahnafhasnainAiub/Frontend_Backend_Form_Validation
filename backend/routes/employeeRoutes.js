const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Create Employee
router.post('/', async (req, res, next) => {
    try {
        const { name, email, joinDate, projects } = req.body;

        const newEmployee = new Employee({
            name,
            email,
            joinDate,
            projects,
        });

        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);

    } catch(err){
    
     //  res.status(500).json({error: 'Internal Server Error'});

     next(err);
   }
});

 // Show All Employee
router.get("/", async (req, res) => {
    try {
      const employeeItems = await Employee.find().populate('projects');
      console.log(employeeItems);
      
      res.status(200).json({ employees: employeeItems });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



module.exports = router;
