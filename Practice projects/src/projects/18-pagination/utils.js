const paginate = (users) => {
  const userPerPage = 10;
  const totalBtn = Math.ceil(users.length / userPerPage);
  const userPaginate = Array.from({ length: totalBtn }, (item, index) => {
    const start = index * userPerPage;
    return users.slice(start, start + userPerPage);
  });
  return userPaginate;
};

export default paginate;
