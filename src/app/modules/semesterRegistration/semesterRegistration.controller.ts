/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { semesterRegistrationFilterableFields } from './semesterRegistration.constants';
import { SemesterRegistrationService } from './semesterRegistration.service';

const createSemestrRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SemesterRegistrationService.createSemestrRegistration(
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration created',
      data: result,
    });
  }
);

const getAllSemestrRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, semesterRegistrationFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await SemesterRegistrationService.getAllSemestrRegistration(
      filters,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SemesterRegistrations fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleSemestrRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await SemesterRegistrationService.getSingleSemestrRegistration(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SemesterRegistration fetched successfully',
      data: result,
    });
  }
);

const updateSemestrRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.updateSemestrRegistration(
      id,
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SemesterRegistration updated successfully',
      data: result,
    });
  }
);

const deleteSemestrRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.deleteSemestrRegistration(
      id
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SemesterRegistration deleted successfully',
      data: result,
    });
  }
);

const startMyRegistration = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const result = await SemesterRegistrationService.startMyRegistration(
    user.userId
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student SemesterRegistration started successfully',
    data: result,
  });
});

const enrollIntoCourse = catchAsync(async (req: Request, res: Response) => {
  const user = req?.user;
  const result = await SemesterRegistrationService.enrollIntoCourse(
    user?.userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student SemesterRegistration course enrolled successfully',
    data: result,
  });
});

const withdrawFromCourse = catchAsync(async (req: Request, res: Response) => {
  const user = req?.user;
  const result = await SemesterRegistrationService.withdrewFromCourse(
    user?.userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Withdraw from successfully',
    data: result,
  });
});

export const SemesterRegistrationController = {
  createSemestrRegistration,
  getAllSemestrRegistration,
  getSingleSemestrRegistration,
  updateSemestrRegistration,
  deleteSemestrRegistration,
  startMyRegistration,
  enrollIntoCourse,
  withdrawFromCourse,
};
