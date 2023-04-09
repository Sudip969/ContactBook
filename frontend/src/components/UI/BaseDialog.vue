<template>
<teleport to="body">
<div @click="$emit('close')">
</div>
    <dialog open>
        <header>
            <slot name='header'>
                <h2><span><BootstrapIcon icon="exclamation-triangle"/></span><span> {{title}}</span></h2>
            </slot>
        </header>
        <section>
            <slot></slot>
        </section>
        <menu>
            <slot  name="actions"></slot>
        </menu>
    </dialog>
</teleport>
</template>

<script>
export default{
    emits:['close'],
    props:{
        title:{
            type:String,
            required:false
        }
    }
}
</script>

<style scoped>
.bi{
    margin-right:10px;
}
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 30%;
  left: 13%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  /* margin-left: 15rem; */

  overflow: hidden;
  max-width: 768px;
}

header {
  background-color:red;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}


</style>