<template>
  <section class="mt-5">
    <base-dialog
      v-if="inputIsInvalid"
      title="Invalid Input"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately,At Least One Input Value is Invalid</p>
        <p>Please Check All Inputs</p>
      </template>
      <template #actions>
        <button class="btn btn-danger" @click="confirmError">Okay</button>
      </template>
    </base-dialog>
    <ul class="sec">
      <li>
        <div class="container-fluid">
          <div class="row d-flex justify-content-center align-items-center">
            <div>
              <form @submit.prevent>
                <div :class="{ invalid: userName === 'invalid' }">
                  <div class="form-outline mb-4">
                    <label class="fw-bold w-25 form-label">Name:</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      v-model="enteredName"
                      @blur="validityName"
                    />

                    <p v-if="userName === 'invalid'">Invalid name</p>
                  </div>
                </div>

                <div :class="{ invalid: phoneNumber === 'invalid' }">
                  <div class="form-outline mb-3">
                    <label class="fw-bold w-25 form-label">Phone-No:</label>
                    <input
                      class="form-control form-control-lg"
                      type="tel"
                      maxlength="10"
                      v-model="enteredNo"
                      @blur="validityNumber"
                    />
                    <p v-if="phoneNumber === 'invalid'">Invalid number</p>
                  </div>
                </div>

                <div :class="{ invalid: email === 'invalid' }">
                  <div class="form-outline mb-3">
                    <label class="fw-bold w-25 form-label">E-mail:</label>
                    <input
                      class="form-control form-control-lg"
                      type="email"
                      v-model="enteredEmail"
                      @blur="validityEmail"
                    />
                    <p v-if="email === 'invalid'">Invalid e-mail</p>
                  </div>
                </div>

                <div>
                  <button
                    class="btn btn-success border border-dark"
                    @click="submitData()"
                  >
                    Add Contact
                  </button>
                  <button
                    class="btn btn-danger ms-1 border-dark"
                    @click="onClear()"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      enteredName: "",
      enteredNo: "",
      enteredEmail: "",
      inputIsInvalid: false,
      userName: "pending",
      phoneNumber: "pending",
      email: "pending",
    };
  },
  methods: {
    onClear() {
      (this.enteredName = ""), (this.enteredNo = ""), (this.enteredEmail = "");
    },
    submitData() {
      if (
        this.enteredName.trim() === "" ||
        this.enteredNo.trim() === "" ||
        this.enteredEmail.trim() === "" ||
        this.phoneNumber === "invalid" ||
        this.userName == "invalid" ||
        this.email == "invalid"
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addContact(this.enteredName, this.enteredNo, this.enteredEmail);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
    validityName() {
      if (this.enteredName.trim() === "") {
        this.userName = "invalid";
      } else {
        this.userName = "valid";
      }
    },
    validityNumber() {
      if (this.enteredNo === null || !/^\d{10}$/.test(this.enteredNo)) {
        this.phoneNumber = "invalid";
      } else {
        this.phoneNumber = "valid";
      }
    },
    validityEmail() {
      if (
        this.enteredEmail.trim() === null ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.enteredEmail.trim())
      ) {
        this.email = "invalid";
      } else {
        this.email = "valid";
      }
    },
    async addContact(name, phone, email) {
      const newFriend = {
        name: name,
        phone: phone,
        email: email,
        favourite: false,
        user_id: this.$store.state.user.user_id,
      };
       await axios.post("http://localhost:3000/insert", newFriend);
    
      this.$router.push("/theresources/friendcontacts");
    },
  },
};
</script>

<style scoped>
.sec{
  margin-top:6rem;
}
.invalid input {
  border-color: red;
}
.invalid label,
.invalid p {
  color: red;
}
input {
  border-width: 1px;
  border-radius: 5px;
  border-color: black;
}
li {
  box-shadow: 0 2px 8px rgba(19, 46, 196, 0.733);
  /* margin: 1rem auto; */
  border-radius: 10px;
  padding: 2rem;
  /* text-align: center; */
  width: 70%;
  max-width: 50rem;
}

ul {
  list-style: none;
  margin-left: 34%;
  max-width: 38.5rem;
}
</style>
