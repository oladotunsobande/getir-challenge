export function sendSuccessResponse(
  res,
  message = 'Operation successful',
  data = null,
) {
  return res.status(200).send({
    code: 0,
    msg: message,
    records: data,
  });
}

export function sendErrorResponse(
  res,
  status = 400,
  error = 'Operation failed',
) {
  return res.status(status).send({
    code: -1,
    msg: error,
  });
}

export function sendFatalErrorResponse(
  res,
  error,
) {
  console.error(error);
  return res.status(500).send({
    code: -1,
    msg: 'Internal server error',
  });
}
