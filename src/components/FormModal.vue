<template>
  <div class="modal fade" v-bind:id="id">
    <form @submit.prevent="onSubmit">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
          </div>
          <div class="modal-body"><slot></slot></div>
          <div class="modal-footer">
            <button class="btn btn-outline-dark" data-bs-dismiss="modal">
              Fechar
            </button>
            <button class="btn btn-outline-dark" type="submit">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    html: Object,
  },
  methods: {
    onSubmit(evt) {
      this.$emit("submit", evt);
    },
  },
};
</script>
