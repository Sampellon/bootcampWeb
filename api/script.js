$(document).ready(() => {
  const model = new UserModel();
  const view = new UserView();
  const controller = new UserController(model, view);

  controller.fetchAndDisplayUsers();
});