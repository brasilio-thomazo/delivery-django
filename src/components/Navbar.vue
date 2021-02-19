<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/gui" class="navbar-brand">Delivery v1.0.2</router-link>
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-expanded="false"
        aria-label="Abrir Navegação"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/gui" class="nav-link">Home</router-link>
        </li>
        <li className="nav-item">
          <router-link class="nav-link" to="/gui/clients">Clientes</router-link>
        </li>
        <li className="nav-item">
          <router-link class="nav-link" to="/gui/products"
            >Produtos</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
