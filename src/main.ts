import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import uiComponents from './components/UI';
import './styles/main.css';

const app = createApp(App);

uiComponents.forEach(({ name, component }) => {
  app.component(name, component);
});

app.use(router);
app.mount('#app');
