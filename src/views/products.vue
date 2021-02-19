<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row mb-3">
        <div class="col-sm">
          <label for="name" class="form-label">Nome:</label>
          <input
            type="text"
            id="name"
            v-model="product.name"
            class="form-control"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm">
          <label for="p_type" class="form-label">Tipo:</label>
          <div class="input-group">
            <select id="p_type" class="form-select" v-model="product.p_type">
              <option
                v-for="p_type in p_types"
                :key="p_type.id"
                v-bind:value="p_type.id"
              >
                {{ p_type.name }}
              </option>
            </select>
            <button
              class="btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#product_type"
            >
              <i class="bi bi-plus-square"></i>
            </button>
          </div>
        </div>
        <div class="col-sm">
          <label for="p_category" class="form-label">Categoria:</label>
          <div class="input-group">
            <select
              id="p_category"
              class="form-select"
              v-model="product.p_category"
            >
              <option
                v-for="p_category in p_categories"
                :key="p_category.id"
                v-bind:value="p_category.id"
              >
                {{ p_category.name }}
              </option>
            </select>
            <button
              class="btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#product_category"
            >
              <i class="bi bi-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm">
          <label for="description" class="form-label"
            >Descri&ccedil;&atilde;o:</label
          >
          <textarea id="description" rows="3" class="form-control"></textarea>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm">
          <label for="cost" class="form-label">Custo:</label>
          <div class="input-group">
            <span class="input-group-text">R$:</span>
            <input type="number" class="form-control" />
          </div>
        </div>
        <div class="col-sm">
          <label for="cost" class="form-label">Venda:</label>
          <div class="input-group">
            <span class="input-group-text">R$:</span>
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      {{ product.p_category }}
    </form>
    <form-product-type
      id="product_type"
      @save="onSaveType"
      v-bind:dt="p_types"
    />
    <form-product-category
      id="product_category"
      v-bind:dt="p_categories"
      @save="onSaveCategory"
    />
  </div>
</template>

<script>
import _ from "lodash";
import api from "../services/api";
import FormProductType from "../components/FormProductType";
import FormProductCategory from "../components/FormProductCategory";
import FormModal from "../components/FormModal";
export default {
  components: { FormProductType, FormProductCategory, FormModal },
  name: "products",
  data() {
    return {
      product: {
        id: null,
        name: null,
        p_type: null,
        p_category: null,
      },
      p_types: [],
      p_categories: [],
    };
  },
  mounted() {
    api.product
      .getCategory()
      .then((response) => {
        if (response.status === 200) {
          this.p_categories = response.data;
        }
      })
      .catch(console.error);

    api.product
      .getType()
      .then((response) => {
        if (response.status === 200) {
          this.p_types = response.data;
        }
      })
      .catch(console.error);
  },
  methods: {
    onSaveCategory(p_category) {
      this.p_categories = _.concat(this.p_categories, p_category);
      this.product.p_category = p_category.id;
    },
    onSaveType(p_type) {
      this.p_types = _.concat(this.p_types, p_type);
      this.product.p_type = p_type.id;
      console.log(p_type);
    },
    onSubmit(evt) {},
  },
};
</script>
