<!-- <template>
  <div class="main-container">
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/PagCadastro">Cadastro</router-link></li>
        <li><router-link to="/Login">Login</router-link></li>
      </ul>
    </nav>

    <div class="containerReg">
      <div class="title">
        <h1>Adicionar Usuário</h1>
      </div>

      <div class="put">
        <input type="text" v-model="username" placeholder="Usuário" />
        <input type="text" v-model="email" placeholder="E-mail" />
        <input type="password" v-model="password" placeholder="Senha" />
      </div>

      <div class="button">
        <div class="send">
          <input type="button" value="Enviar" @click.prevent="handleLogin" />
        </div>
        <div class="register">
          <router-link to="/PagCadastro">
            <input type="button" value="Cadastre-se" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.username && this.password) {
        this.$router.push({ name: 'inicio' });
      } else {
        alert('Por favor, preencha todos os campos!');
      }
    },
  },
};
</script>

<style scoped>
/* Global body styles */
body {
  background-color: #727374;
  font-family: 'Texturina', serif;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navbar styles */
.navbar {
  width: 100%;
  background-color: #404040;
  padding: 10px 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #a8a8a8;
}

/* Main container */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px; 
  width: 100%;
  height: calc(100vh - 80px); 
}

/* Registration container */
.containerReg {
  background-color: white;
  border-radius: 5px;
  width: 600px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title h1 {
  text-align: center;
  margin-bottom: 20px;
}

.put {
  width: 100%;
}

.put input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.button {
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
}

.send input,
.register input {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: #727374;
  color: white;
  width: 100%;
}
</style> -->

<template>
  <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="loginUser">
          <div>
              <label>Email:</label>
              <input v-model="email" type="email" required>
          </div>
          <div>
              <label>Senha:</label>
              <input v-model="password" type="password" required />
          </div>
          <button type="submit">Login</button>
      </form>
      <p v-if="message">{{ message }}</p>
  </div>
  
</template>

<script>
import api from '../axios'; // Importa a configuração do Axios

export default {
  data() {
      return {
          email: '',
          password: '',
          message: '',
      };
  },
  methods: {
      async loginUser() {
          try {
              const response = await api.post('/auth/login', {
                  email: this.email,
                  password: this.password,
              });
              this.message = 'Login bem-sucedido!';
              localStorage.setItem('token', response.data.token);     // Armazena o token JWT no localStorage
              this.$router.push('/dashboard');        // Redireciona para a página principal após o login
          }   catch(error) {
              this.message = error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : 'Erro ao fazer login';
          }
      },
  },
};
</script>

<style scoped>
.login{ 
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: white;
}
</style>