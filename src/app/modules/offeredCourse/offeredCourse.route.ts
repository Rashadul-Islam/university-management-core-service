import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidations } from './offeredCourse.validation';

const router = express.Router();

router.get('/', OfferedCourseController.getAllOffredCourse);
router.get('/:id', OfferedCourseController.getSingleOffredCourse);

router.post(
  '/',
  validateRequest(OfferedCourseValidations.createOfferedCourseZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.createOffredCourse
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidations.updateOfferedCourseZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.updateOffredCourse
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.deleteOffredCourse
);

export const OfferedCourseRoutes = router;
