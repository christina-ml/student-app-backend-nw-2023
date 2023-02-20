const express = require('express');
const studentsControllerV2 = express.Router();

// QUERIES
const {
	getAllStudentsV2,
	getStudentByIdV2,
	getAllStudentsWithGradesV2
} = require('../../queries/v2/studentsQueriesV2');

const { getGradesByStudentIdV2 } = require('../../queries/v2/gradesQueriesV2');


studentsControllerV2.get('/', (request, response) => {
    try {
        // console.log("request.query:", request.query);
		const { include } = request.query;

		if (include === "grades"){
			// embed the grades
			const students = getAllStudentsWithGradesV2();
			response.status(200).json({ data: students });
		} else {
			const students = getAllStudentsV2();
			response.status(200).json({ data: students });
		}
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
  });
  
// TODO: return grades for that student if includes=grades in query
studentsControllerV2.get('/:id', (request, response) => {
    try {
      const { id } = request.params;
      const student = getStudentByIdV2(id);
    
      if (student) {
        // return 200
        return response.status(200).json( { data: student });
      }
      // return 404
      response.status(404).json({ error: `Could not find student with id ${id}` });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  });

// GET route for `/student/:id/grades`
studentsControllerV2.get('/:id/grades', (request, response) => {	
	try {
		const { id } = request.params;
		const student = getStudentByIdV2(id);
	  
		if (student) {
		  // return 200
		  // if student, get the student's grades
		  const grades = getGradesByStudentIdV2(id);
		  return response.status(200).json( { data: grades });
		}
		// return 404
		response.status(404).json({ error: `Could not find student with id ${id}` });
	} catch (err) {
		response.status(500).json({ error: err.message });
	}
});

module.exports = studentsControllerV2;