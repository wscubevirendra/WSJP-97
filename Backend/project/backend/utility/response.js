
const successResponse = (res, message = 'Success', data = {}, statusCode = 200) => {
  const response = {
    success: true,
    status: 'success',
    message,
    timestamp: new Date().toISOString(),
    data
  };


  return res.status(statusCode).json(response);
};

const errorResponse = (res, message = 'Error occurred', statusCode = 500, data = {}) => {
  const response = {
    success: false,
    status: 'error',
    message,
    timestamp: new Date().toISOString(),
    ...data
  };



  return res.status(statusCode).json(response);
};



const notFoundResponse = (res, resource = 'Resource') => {
  return errorResponse(res, `${resource} not found`, 404, {
    type: 'NOT_FOUND_ERROR'
  });
};

const serverErrorResponse = (res, message = 'Internal server error', error = null) => {
  const data = {
    type: 'SERVER_ERROR'
  };

  return errorResponse(res, message, 500, data);
};


const createdResponse = (res, message = 'Resource created successfully', data = {}) => {
  return successResponse(res, message, data, 201);
};

const updatedResponse = (res, message = 'Resource updated successfully', data = {}) => {
  return successResponse(res, message, data, 200);
};

const deletedResponse = (res, resource = 'Resource') => {
  return successResponse(res, `${resource} deleted successfully`, {}, 200);
};

const noContentResponse = (res) => {
  return res.status(204).send();
};

module.exports = {
  successResponse,
  errorResponse,
  notFoundResponse,
  serverErrorResponse,
  createdResponse,
  updatedResponse,
  deletedResponse,
  noContentResponse
};
