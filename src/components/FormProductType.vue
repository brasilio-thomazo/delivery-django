<template>
  <form-modal v-bind:id="id" title="Tipos de produto" @submit="onSubmit">
    <div class="row mb-3">
      <div class="col-sm">
        <label for="name" class="form-label">Nome:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="form.name"
          required
        />
      </div>
    </div>
    <div class="table-responsive">
      {{ form.name }}
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p_type, i) in dt" :key="p_type.id">
            <td>{{ p_type.id }}</td>
            <td>{{ p_type.name }}</td>
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
  </form-modal>
</template>

<script>
import FormModal from "./FormModal";
import api from "../services/api";

export default {
  name: "FormProductType",
  components: { FormModal },
  props: {
    id: String,
    dt: Array,
  },
  data() {
    return {
      form: {
        id: null,
        name: null,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      if (this.form.id != null) {
        console.log("PUT");
        return;
      }
      api.product.postType(this.form).then((response) => {
        if (response.status === 201) {
          this.form = { id: null, name: null };
          this.$emit("save", response.data);
        }
      });
    },
    select(index) {
      this.form.id = this.dt[index].id;
      this.form.name = this.dt[index].name;
    },
  },
};
</script>
