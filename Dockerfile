FROM public.ecr.aws/lambda/nodejs:latest

COPY index.js ${LAMBDA_TASK_ROOT}

CMD [ "${LAMBDA_TASK_ROOT}/index.js" ]
