import React, { useState } from 'react';

const courseData = [
  { title: 'React Development', description: 'Learn React to build fast UIs.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=React' },
  { title: 'Machine Learning', description: 'Master ML techniques and AI.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=ML' },
  { title: 'Data Science with Python', description: 'Analyze data using Python.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=Data+Science' },
  { title: 'AWS Cloud Computing', description: 'Get started with AWS cloud.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=AWS' },
  { title: 'UI/UX Design', description: 'Design intuitive and beautiful interfaces.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=UI/UX' },
  { title: 'Cybersecurity Essentials', description: 'Learn the basics of cybersecurity.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=Cybersecurity' },
  { title: 'Blockchain Basics', description: 'Get started with Blockchain technology.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=Blockchain' },
  { title: 'Digital Marketing', description: 'Understand the latest in digital marketing.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=Marketing' },
  { title: 'DevOps Practices', description: 'Learn CI/CD pipelines and DevOps tools.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=DevOps' },
  { title: 'Cloud Native Development', description: 'Build applications for the cloud.', image: 'https://via.placeholder.com/300x200/673AB7/FFFFFF?text=Cloud+Native' },
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courseData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses">
      <h2>Our Courses</h2>
      <input
        type="text"
        placeholder="Search for a course..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="courses-container">
        {filteredCourses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
