// store/store.js
let usn = '1DS22IS001';  // default usn

const getUSN = () => usn;
const setUSN = (newUsn) => { usn = newUsn; };

module.exports = { getUSN, setUSN };