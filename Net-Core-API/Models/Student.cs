using System.ComponentModel.DataAnnotations;
namespace Net_Core_API.Context
{
    public class Student
    {
        [Key]
        /// <summary>
        /// Student Id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Student user name
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// Student first name
        /// </summary>
        /// <example>FirstNameLastName</example>
        public string FirstName { get; set; }
        /// <summary>
        /// Student last name
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// Student age
        /// </summary>
        public int Age { get; set; }
        /// <summary>
        /// Student career
        /// </summary>
        public string Career { get; set; }
    }
}
