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
    [Route("api/controller")]
    public class StudentsController : ControllerBase
    {
        private StudentServices studentServices = new StudentServices();

        [HttpGet]
        public ActionResult<List<Student>> GetAllStudents()
        {
            return studentServices.GetAllStudents();
        }

        [HttpGet("{id}")]
        public ActionResult<Student> GetStudentById(int id)
        {
            return studentServices.GetStudent(id);
        }

        [HttpPost]
        public ActionResult<Student> AddStudent([FromBody] Student student)
        {
            studentServices.Add(student);
            return student;
        }

        [HttpPut]
        public ActionResult<Student> EditStudent([FromBody] Student student)
        {
            studentServices.Edit(student);
            return student;
        }

        [HttpDelete]
        public ActionResult<Student> DeleteStudent([FromBody] Student student)
        {
            studentServices.Delete(student);
            return student;
        }

    }
}
