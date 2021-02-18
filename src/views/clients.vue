<template>
  <div class="container">
    <form v-on:submit.prevent="save" autocomplete="off">
      <div class="row mb-3">
        <div class="col-sm">
          <label for="name" class="form-label">Nome:</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="form.name"
            required
          />
        </div>
        <div class="col-sm">
          <label for="phone" class="form-label">Telefone:</label>
          <the-mask
            :mask="['(##) ####-####', '(##) #####-####']"
            class="form-control"
            v-model="form.phone"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm">
          <label for="address" class="form-label">Endere&ccedil;o</label>
          <input
            type="text"
            class="form-control"
            v-model="form.address"
            required
          />
        </div>
        <div class="col-sm">
          <label for="addr_number" class="form-label">N&uacute;mero:</label>
          <input
            type="number"
            class="form-control"
            id="addr_number"
            v-model="form.addr_number"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm">
          <label for="addr_complement" class="form-label">Complemento:</label>
          <input
            type="text"
            id="addr_complement"
            class="form-control"
            v-model="form.addr_complement"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm">
          <button class="btn btn-primary" type="submit">Salvar</button>
        </div>
      </div>
    </form>
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Endere&ccedil;o</th>
            <th scope="col">N&deg;</th>
            <th scope="col">Complemento</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, i) in clients" :key="client.id">
            <td>{{ client.id }}</td>
            <td>{{ client.name }}</td>
            <td>{{ client.phone }}</td>
            <td>{{ client.address }}</td>
            <td>{{ client.addr_number }}</td>
            <td>{{ client.addr_complement }}</td>
            <td>
              <button
                v-on:click="select(i)"
                class="btn btn-outline-dark btn-sm"
              >
                <i class="bi bi-pencil-square"></i>
              </button>
              <button class="btn btn-outline-dark btn-sm">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
import _ from "lodash";

export default {
  name: "clients",
  data() {
    return {
      form: {
        id: null,
        name: "",
        phone: "",
        address: "",
        addr_number: null,
        addr_complement: null,
      },
      clients: [],
    };
  },
  methods: {
    save(e) {
      if (this.form.id) {
        console.log("PUT");
      } else {
        api
          .postClient(this.form)
          .then((response) => {
            if (response.status === 201) {
              this.form = {
                id: null,
                name: null,
                phone: null,
                address: null,
                addr_number: null,
                addr_complement: null,
              };
              this.clients = _.concat(this.clients, response.data);
            }
            console.log(response);
          })
          .catch(console.error);
      }
    },
    select(index) {
      this.form.id = this.clients[index].id;
      this.form.name = this.clients[index].name;
      this.form.phone = this.clients[index].phone;
      this.form.address = this.clients[index].address;
      this.form.addr_number = this.clients[index].addr_number;
      this.form.addr_complement = this.clients[index].addr_complement;
    },
  },
  mounted() {
    api
      .getClients()
      .then((response) => {
        this.clients = response.data;
        console.log(response);
      })
      .catch(console.error);
  },
};
</script>
