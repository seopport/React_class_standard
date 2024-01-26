import React from "react";

// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList({ filteredStudents }) {
  return (
    <ul>
      여기에 학생 목록을 표시하는 로직을 작성하세요.
      {/* ex: 홍길동 (20세) - A등급 */}
      {filteredStudents.map((item) => {
        return (
          <li> {item.name} ({item.age}) - {item.grade}등급</li>
        )
      })}
    </ul>
  );
}

export default StudentList;
