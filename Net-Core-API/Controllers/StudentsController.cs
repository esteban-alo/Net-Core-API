using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Net_Core_API.Context;
using Net_Core_API.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Net_Core_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private StudentServices studentServices = new StudentServices();

        /// <summary>
        /// Retrieves all registered students
        /// </summary>
        /// <response code="200">Successful query</response>
        /// <response code="400">Student has missing/invalid values</response>
        /// <response code="500">Something went wrong</response>
        [HttpGet]
        public async Task<ActionResult<List<Student>>> GetAllStudents()
        {
            return await studentServices.GetAllStudents();
        }

        /// <summary>
        /// Retrieves an especific student
        /// </summary>
        /// <param name="id">Student Id</param>
        /// <response code="200">Successful query</response>
        /// <response code="400">Student has missing/invalid values</response>
        /// <response code="500">Something went wrong searching the stundent</response>
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudentById(int id)
        {
            return await studentServices.GetStudent(id);
        }

        /// <summary>
        /// Add a student to the system
        /// </summary>
        /// <response code="200">Student added correctly</response>
        /// <response code="400">Student has missing/invalid values</response>
        /// <response code="500">Something went wrong adding the student</response>
        [HttpPost]
        public async Task<ActionResult<Student>> AddStudent([FromBody] Student student)
        {
            await studentServices.Add(student);
            return student;
        }

        /// <summary>
        /// Edit the information of an especific student
        /// </summary>
        /// <param name="id">Student Id</param>
        /// <param name="student">Student Information</param>
        /// <response code="200">Student edited correctly</response>
        /// <response code="400">Student has missing/invalid values</response>
        /// <response code="500">Something went wrong editing the student</response>
        [HttpPut("{id}")]
        public async Task<ActionResult<Student>> EditStudent(int id, Student student)
        {
            return await studentServices.Edit(id, student);
        }

        /// <summary>
        /// Deletes an especific student
        /// </summary>
        /// <param name="id">Student Id</param>
        /// <response code="200">Student deleted correctly</response>
        /// <response code="400">Student has missing/invalid values</response>
        /// <response code="500">Something went wrong deleting the student</response>
        [HttpDelete]
        public async Task<ActionResult<Student>> DeleteStudent(int id)
        {
            return await studentServices.Delete(id);
        }

    }
}
