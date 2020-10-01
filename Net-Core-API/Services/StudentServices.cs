using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Net_Core_API.Context;

namespace Net_Core_API.Services
{
    public class StudentServices
    {

        private StudentContext context;

        public StudentServices ()
        {
            context = new StudentContext();
        }

        public void Add(Student student)
        {
            var entity = context.Students.Add(student);
            entity.State = EntityState.Added;
            context.SaveChanges();
        }

        public void Edit(Student student)
        {
            var entity = context.Students.Update(student);
            entity.State = EntityState.Modified;
            context.SaveChanges();
        }

        public void Delete(Student student)
        {
            var entity = context.Students.Remove(student);
            entity.State = EntityState.Deleted;
            context.SaveChanges();
        }

        public List<Student> GetAllStudents()
        {
            List<Student> students = new List<Student>();
            if(context.Students.Any())
            {
                students = context.Students.ToList();
                return students;
            } else
            {
                return students;
            }
        }

        public Student GetStudent(Student student)
        {
            Student entity = context.Students.Find(student.Id);
            return entity;
        }
    }
}
