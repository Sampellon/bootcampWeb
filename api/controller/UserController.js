class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async fetchAndDisplayUsers() {
    const users = await this.model.fetchUsers();
    this.view.displayUsers(users);
  }
}