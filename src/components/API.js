export function getFormData(data) {
  const formData = new FormData();

  if (data !== undefined) {
    console.log(data);
    for (const key in data) {
      formData.append(key, data[key]);
    }
  }
  return formData;
}

const API = () => {};

export default API;
