using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Net_Core_API.Context;

namespace Net_Core_API.Services
{
    public class StudentServices
    {

        private StudentContext context;

        public StudentServices()
        {
            context = new StudentContext();
        }

        public async Task<Student> Add(Student student)
        {
            context.Students.Add(student);
            _ = await context.SaveChangesAsync();
            return student;
        }

        public async Task<Student> Edit(int studentId, Student student)
        {
            if (studentId == student.Id)
            {
                context.Entry(student).State = EntityState.Modified;
                try
                {
                    _ = await context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    Console.Write(ex);
                }
            }
            return student;
        }

        public async Task<Student> Delete(int studentId)
        {
            var entity = await context.Students.FirstOrDefaultAsync(student => student.Id == studentId);
            if (entity != null)
            {
                context.Remove(entity);
                try
                {
                    _ = await context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    Console.Write(ex);
                }
            }
            return entity;
        }

        public async Task<List<Student>> GetAllStudents()
        {
            List<Student> students = new List<Student>();
            students = await context.Students.ToListAsync();
            return students;
        }

        public async Task<Student> GetStudent(int studentId)
        {
            Student entity = await context.Students.FirstOrDefaultAsync(student => student.Id == studentId);
            return entity;
        }
    }
}
