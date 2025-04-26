class UserModel {
  constructor() {
    this.users = [];
  }

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log('Usuarios recibidos de la API:', data); // <-- AGREGAR ESTO
      this.users = data;
      return this.users;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      return [];
    }
  }
}
