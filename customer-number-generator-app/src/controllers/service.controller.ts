import { Request, Response } from 'express';
import { apiSuccess } from '../api/success.api';
import CustomError from '../errors/custom.error';
import { customerController } from './customers.controller';

/**
 * Exposed service endpoint.
 * - Receives a POST request, parses the action and the controller
 * and returns it to the correct controller. We should be use 3. `Cart`, `Order` and `Payments`
 *
 * @param {Request} request The express request
 * @param {Response} response The express response
 * @returns
 */
export const post = async (request: Request, response: Response) => {
  // Deserialize the action and resource from the body
  const { action, resource } = request.body;

  if (!action || !resource) {
    throw new CustomError(
      'InvalidInput',
      400,
      'Bad request - Missing body parameters.'
    );
  }

  // The type of resource must be customer
  if (resource.typeId !== 'customer') {
    throw new CustomError(
      'InvalidInput',
      400,
      `Resource not recognized. Resource type must be 'order'.`
    );
  }

  const data = await customerController(action, resource);
  if (data && (data.statusCode === 201 || data.statusCode === 200)) {
    apiSuccess(data.statusCode, data.actions, response);
    return;
  }
};
