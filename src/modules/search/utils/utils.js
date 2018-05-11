export function formatPersonName(first = '', last = '') {
  const firstName = !first ? '' : first[0].toUpperCase() + first.substr(1) + ' ';
  const lastName = !last ? '' : last[0].toUpperCase() + last.substr(1);
  return firstName + lastName;
}
