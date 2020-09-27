const getInfo = (url) => {
  const info = fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  return info;
};

export default getInfo;
