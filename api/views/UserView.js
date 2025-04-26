class UserView {
  displayUsers(users) {
    const container = $('#user-list');
    container.empty(); // Limpia el contenido anterior

    users.forEach(user => {
      const userCard = $(`
        <div class="user-card">
          <p><strong>Nombre:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Teléfono:</strong> ${user.phone}</p>
        </div>
      `);
      container.append(userCard);
    });
  }
}

}