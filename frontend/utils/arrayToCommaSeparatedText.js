/**
 * @name Hotel Room Booking System
 * @author Lalithkishore
 * @description Hotel Room Booking and Management System Software ~ :)

 */

function arrayToCommaSeparatedText(array) {
  return array?.length > 0 ? array
    .map((item) => item)
    .join(', ')
    .toString() : 'N/A';
}

export default arrayToCommaSeparatedText;
