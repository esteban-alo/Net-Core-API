using Microsoft.EntityFrameworkCore;
namespace Net_Core_API.Context
{
    public class StudentContext : DbContext
    {
        public StudentContext()
        {
            this.Database.EnsureCreated();
        }

        public DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(connectionString: "Filename=./Students.sqlite");
        }
    }
}
