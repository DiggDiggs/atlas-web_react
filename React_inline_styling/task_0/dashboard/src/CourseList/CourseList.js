import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table className='course-list'>
      <thead>
        {/* Header row for "Available courses" */}
        <CourseListRow textFirstCell='Available courses' isHeader={true} />

        {/* Header row for "Course name" and "Credit" */}
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        {/* Show message if no courses available */}
        {listCourses.length === 0 && (
          <CourseListRow
            textFirstCell='No course available yet'
            isHeader={false}
          />
        )}

        {/* Render each course as a row */}
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
