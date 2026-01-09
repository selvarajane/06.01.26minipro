import './StudentList.css'

function StudentList() {
  const students = [
    { id: 1, name: 'Alice Johnson', marks: 85 },
    { id: 2, name: 'Bob Smith', marks: 45 },
    { id: 3, name: 'Charlie Brown', marks: 92 },
    { id: 4, name: 'Diana Prince', marks: 38 },
    { id: 5, name: 'Eve Wilson', marks: 67 },
    { id: 6, name: 'Frank Miller', marks: 50 },
    { id: 7, name: 'Grace Lee', marks: 78 },
  ]

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <span
              className={student.marks > 50 ? 'highlight' : ''}
            >
              {student.name}
            </span>
            <span className="marks"> - {student.marks} marks</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList

