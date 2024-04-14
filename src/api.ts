import axios from "axios";

export const BASE_URL = "http://5.159.101.177";


const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function loadArchive(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(BASE_URL + "/upload/", {
    method: "POST",
    body: formData,
  });
  return response;
}

export async function getListScorms() {
  return await axios.get(`${BASE_URL}/`, {}).then((response) => {
    return response;
  });
  //   const response = await fetch(BASE_URL + "/", {
  //     method: "GET",
  //     headers: headers,
  //   });
  //   return response;
}

export async function getScorm(id: string) {
  const response = await fetch(`${BASE_URL}/scorm/${id}`, {
    method: "GET",
    headers: headers,
  });
  return response;
}

export async function putScorm(id: string, time_render: string) {
  const response = await fetch(`${BASE_URL}/scorm/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({ scorm_id: id, time_render }),
  });
  return response;
}
