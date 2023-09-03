import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { offeredCourseFilterableFields } from './offeredCourse.constants';
import { offeredCourseService } from './offeredCourse.service';

const createOffredCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await offeredCourseService.createOffredCourse(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course Created',
    data: result,
  });
});

const getAllOffredCourse = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, offeredCourseFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await offeredCourseService.getAllOffredCourse(
    filters,
    options
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OfferedCourses fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleOffredCourse = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await offeredCourseService.getSingleOffredCourse(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourse fetched successfully',
      data: result,
    });
  }
);

const updateOffredCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await offeredCourseService.updateOffredCourse(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OfferedCourse updated successfully',
    data: result,
  });
});

const deleteOffredCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await offeredCourseService.deleteOffredCourse(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OfferedCourse deleted successfully',
    data: result,
  });
});

export const OfferedCourseController = {
  createOffredCourse,
  getAllOffredCourse,
  getSingleOffredCourse,
  updateOffredCourse,
  deleteOffredCourse,
};
