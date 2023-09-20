import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';
import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllStuentEnrolledCourse);

router.get(
  '/:id',
  StudentEnrolledCourseController.getSingleStuentEnrolledCourse
);

router.post(
  '/',
  validateRequest(
    StudentEnrolledCourseValidation.createStudentEnrolledourseZodSchema
  ),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.createStuentEnrolledCourse
);

router.patch(
  '/:id',
  validateRequest(
    StudentEnrolledCourseValidation.updateStudentEnrolledourseZodSchema
  ),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.updateStuentEnrolledCourse
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.deleteStuentEnrolledCourse
);

export const StudentEnrolledCourseRoutes = router;
