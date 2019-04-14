// A utility function that adds student's campus info to student object
export const studentsWithCampusInfo = (students, campuses) =>
  students.map(student => {
    const studentCampus = campuses.find(
      campus => campus.id === student.campusId
    );
    return { ...student, studentCampus };
  });

// A utility function that takes students and a campus ID and returns a list of students per a campus ID
export const studentsPerCampusId = (students, campusId) => {
  return students.filter(student => student.campusId === campusId);
};

// A utility function that takes students and a student ID and returns the student per the provided student ID
export const findStudentById = (students, id) => {
  return students.find(student => student.id === id);
};
