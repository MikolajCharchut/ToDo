import axios  from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

export const submitTask = (task) => {
  return instance.post("/tasks", task);
};

export const getTasks = () => {
  return instance.get("/tasks");
};

export const getTask = (task_id) => {
  return instance.get(`/tasks/byId/${task_id}`);
};

export const getNote = (note_id) => {
  return instance.get(`/notes/${note_id}`);
};

export const submitNote = (note, task_id) => {
  return instance.post("/notes", {
    note: note,
    TaskId: task_id
    });
};

export const removeNote = (note_id) => {
  return instance.delete(`/notes/${note_id}`);
};

export const removeTask = (task_id) => {
  return instance.delete(`/tasks/${task_id}`);
};
