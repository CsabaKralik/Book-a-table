export const compareDate = (bookedDate) => {
  const date = new Date();
  if (date.getTime() + 3600 >= bookedDate.getTime()) {
    return false;
  }
  return true;
};
