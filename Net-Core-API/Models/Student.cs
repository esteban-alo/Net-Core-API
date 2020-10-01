using System.ComponentModel.DataAnnotations;
namespace Net_Core_API.Context
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Age { get; set; }

        public string Career { get; set; }
    }
}
