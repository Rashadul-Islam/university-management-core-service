import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { StudentRoutes } from '../modules/student/student.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { RoomRoutes } from '../modules/room/room.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes,
  },
  {
    path: '/faculties',
    routes: FacultyRoutes,
  },
  {
    path: '/students',
    routes: StudentRoutes,
  },
  {
    path: '/buildings',
    routes: BuildingRoutes,
  },
  {
    path: '/rooms',
    routes: RoomRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
