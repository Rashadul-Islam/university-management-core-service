import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { studentEnrolledCourseFilterableFields } from './studentEnrolledCourse.constants';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.service';

const createStuentEnrolledCourse = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await StudentEnrolledCourseService.createStuentEnrolledCourse(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentEnrolledCourse created successfully',
      data: result,
    });
  }
);

const getAllStuentEnrolledCourse = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, studentEnrolledCourseFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result =
      await StudentEnrolledCourseService.getAllStuentEnrolledCourse(
        filters,
        options
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentEnrolledCourses fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleStuentEnrolledCourse = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await StudentEnrolledCourseService.getSingleStuentEnrolledCourse(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentEnrolledCourse fetched successfully',
      data: result,
    });
  }
);

const updateStuentEnrolledCourse = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await StudentEnrolledCourseService.updateStuentEnrolledCourse(
        id,
        req.body
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentEnrolledCourse updated successfully',
      data: result,
    });
  }
);

const deleteStuentEnrolledCourse = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await StudentEnrolledCourseService.deleteStuentEnrolledCourse(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentEnrolledCourse deleted successfully',
      data: result,
    });
  }
);

export const StudentEnrolledCourseController = {
  createStuentEnrolledCourse,
  getAllStuentEnrolledCourse,
  getSingleStuentEnrolledCourse,
  updateStuentEnrolledCourse,
  deleteStuentEnrolledCourse,
};
