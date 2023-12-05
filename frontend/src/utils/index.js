import {
  formatDistanceStrict,
  parseISO,
  differenceInMonths,
  formatDistanceToNow,
  format,
} from 'date-fns';

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shoretenedText = text.substring(0, n).concat('...');
    return shoretenedText;
  }
  return text;
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(
    'en-US',
    options,
  );
  return formattedDate;
};

export const calculateDuration = (loanDuration, loanTime) => {
  const applicationDate = parseISO(loanTime);
  const loanDate = parseISO(loanDuration);

  if (isNaN(loanDate.getTime())) {
    return 'Invalid Date';
  }

  const duration = formatDistanceStrict(applicationDate, loanDate, {
    addSuffix: false,
  });
  return duration;
};

export const capitalizeWords = (input) => {
  let words = input.split(/(?=[A-Z])/);

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  let result = words.join(' ');

  return result;
};

export const formatDateWithSlash = (inputDate) => {
  const parsedDate = new Date(inputDate);
  const formattedDate = format(parsedDate, 'dd/MM/yyyy');
  return formattedDate;
};
