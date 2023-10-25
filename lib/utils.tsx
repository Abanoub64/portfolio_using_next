export const validateString = (value: unknown, count: number) => {
  if (!value || typeof value !== "string" || count < value.length) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  }
  return (message = "Something went wrong");
};
