<template>
  <!-- Modal -->
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper" @click.prevent="$emit('close')">
            <div class="modal-container">
              <div class="modal-header float-right">
                <slot name="header">
                  <a href="#" class="cursor-pointer" @click.prevent="$emit('close')">
                    <i class="fas fa-times text-white fa-2x"></i>
                  </a>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">

          <div class="embed-responsive embed-responsive-16by9">
                  <iframe height="100%" width="100%" class="embed-responsive-item" src="https://www.youtube.com/embed/HGfk2suwAlI?amp;showinfo=0&amp;amp;modestbranding=1&amp;amp;autoplay=1" id="video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">></iframe>

          </div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>

</template>

<script>
export default {
  name: "VideoModal",
  data() {
    return {}
  },
  methods: {
    
  }
};
</script>

<style>
.modal-header {
    background: transparent;
    border: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 600px;
  width: 100%;
  max-height: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 0;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0;
      padding: 0;
}

.modal-default-button {
  float: right;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
