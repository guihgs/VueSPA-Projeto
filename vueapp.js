/*********
 * components
 *********/
// main app menu component
Vue.component("app-menu", {
  template: `
  <nav class="green lighten-1">
    <div class="nav-wrapper container">
      <div class="col s12">
      <router-link to="/" class="brand-logo">LOGO</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobre">Sobre</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
        <li><router-link to="/404">404</router-link></li>
      </ul>
      </div>
    </div>
  </nav>
`
});
// card component for contact page
// with props
Vue.component("app-cards", {
  props: ["contactlist"],
  methods: {
    ucfirst: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  template: `
    <div class="row">
    <div class="col s6" v-for="cc in contactlist.results">
        <div class="card horizontal">
            <div class="card-stacked">
                <div class="card-content">
                <div class="img-profile-pic">
                  <img :src="cc.picture.medium" alt="" class="circle responsive-img"> 
                </div>
                <h5>{{ ucfirst(cc.name.title) }} {{ ucfirst(cc.name.first) }} {{ ucfirst(cc.name.last) }}<br><small>#{{ cc.id.name }}{{ cc.id.value }}</small></h5>
                <p><i class="material-icons tiny">person</i> {{ ucfirst(cc.gender) }}</p>
                <p><i class="material-icons tiny">email</i> {{ cc.email }}</p>
                <p><i class="material-icons tiny">location_on</i> {{ ucfirst(cc.location.street) }} {{ ucfirst(cc.location.city) }} {{ ucfirst(cc.location.state) }} {{ cc.location.postcode }}</p>
                <p><i class="material-icons tiny">local_phone</i> {{ cc.phone }}</p>
                <p><i class="material-icons tiny">contact_phone</i> {{ cc.cell }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
  `
});
// main app preloader component
// show preloader when fetching api
Vue.component("app-preloader", {
  template: `
  <div class="center-align">
      <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
`
});
// main app footer component
Vue.component("app-footer", {
  template: `
  <footer class="page-footer green lighten-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><router-link class="grey-text text-lighten-3" to="/random-link">Random Link</router-link></li>
                  <li><router-link class="grey-text text-lighten-3" to="/">Home</router-link></li>
                  <li><router-link class="grey-text text-lighten-3" to="/about">About</router-link></li>
                  <li><router-link class="grey-text text-lighten-3" to="/contacts">Contacts</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  `
});
// home page component
const HomeComponent = {
  template: `
  <div class="page-template page-template-home">
    <div class="hero teal lighten-5">
        <div class="hero-content container center-align">
            <h1>Vue JS: Single Page Application</h1>
            <h5><router-link to="https://www.linkedin.com/in/carllomerabia">https://www.linkedin.com/in/carllomerabia</router-link></h5>
        </div>
    </div>
    <div class="container">
        <br>
        <ul class="collection">
            <li class="collection-item avatar">
                <i class="material-icons circle teal">add_a_photo</i>
                <span class="title">Vue JS Routing</span>
                <p>vue-resource<br>
                Second Line
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li class="collection-item avatar">
                <i class="material-icons circle blue">folder</i>
                <span class="title">Dynamic Data From API</span>
                <p>Credits to:<br>
                randomuser.me api
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li class="collection-item avatar">
                <i class="material-icons circle green">insert_chart</i>
                <span class="title">Powered By</span>
                <p>Materialize CSS<br>
                materializecss.com
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li class="collection-item avatar">
                <i class="material-icons circle red">play_arrow</i>
                <span class="title">Carlito here :D</span>
                <p>Sample SPA with Vue JS<br>
                Second Line
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        </ul>
        
  <div class="row">
    <div class="col s12 m6">
      <div class="card teal">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
<div class="col s12 m6">
      <div class="card blue-grey">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
            
    </div>
            
</div>
  `
};
// about page component
const AboutComponent = {
  template: `
  <div class="page-template page-template-about">
    <div class="page-title">
        <div class="container">
            <h1>About Us</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col s8">
                <div class="section">
                    <h2>Section</h2>
                    <p><router-link to="https://www.linkedin.com/in/carllomerabia">https://www.linkedin.com/in/carllomerabia</router-link></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste quos adipisci ipsa officia molestias! Quibusdam, temporibus odio, quos aliquam quia aliquid consequuntur officia nesciunt vel obcaecati voluptatem assumenda. Reprehenderit.</p>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <h2>Section</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste quos adipisci ipsa officia molestias! Quibusdam, temporibus odio, quos aliquam quia aliquid consequuntur officia nesciunt vel obcaecati voluptatem assumenda. Reprehenderit.</p>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <h2>Section</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste quos adipisci ipsa officia molestias! Quibusdam, temporibus odio, quos aliquam quia aliquid consequuntur officia nesciunt vel obcaecati voluptatem assumenda. Reprehenderit.</p>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <h2>Section</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste quos adipisci ipsa officia molestias! Quibusdam, temporibus odio, quos aliquam quia aliquid consequuntur officia nesciunt vel obcaecati voluptatem assumenda. Reprehenderit.</p>
                </div>
            </div>
            <div class="col s4">
                <h3>Sidebar</h3>
                <div class="collection">
                    <a href="#!" class="collection-item">Section Link</a>
                    <a href="#!" class="collection-item active">Section Link</a>
                    <a href="#!" class="collection-item">Section Link</a>
                    <a href="#!" class="collection-item">Section Link</a>
                </div>  
            </div>
        </div>
    </div>
</div>
  `
};
// contacts page component
const ContactsComponent = {
  data() {
    return {
      isLoading: false,
      api: {
        url: "https://randomuser.me/api/",
        results: 100,
        nat: "us,dk,fr,gb"
      },
      contacts: [],
      errors: []
    };
  },
  methods: {
    fetchContacts: function() {
      this.isLoading = true;
      axios
        .get(this.api.url, {
          params: {
            results: this.api.results,
            nat: this.api.nat
          }
        })
        .then(response => {
          this.contacts = response.data;
          this.isLoading = false;
        })
        .catch(error => {
          this.errors = error;
          this.isLoading = false;
        });
    }
  },
  mounted: function() {
    this.fetchContacts();
  },
  template: `
  <div class="page-template page-template-contact container">
    <h1>Contacts</h1>
    <app-preloader v-if="isLoading" />
    <div v-if="_.isEmpty(contacts) === false">
      <app-cards :contactlist="contacts" />
    </div>
  </div>
  `
};
// 404 page component
const PageNotFound = {
  template: `
  <div class="page-template page-template-not-found">
    <div class="page-title">
      <div class="container">
        <h1>Error 404</h1>
      </div>
    </div>
    <div class="container">
      <h2>Page Not Found :(</h2>
    </div>
  </div>
  `
};

/*********
 * routing
 *********/
const routes = [
  { path: "/", component: HomeComponent },
  { path: "/about", component: AboutComponent },
  { path: "/contacts", component: ContactsComponent },
  { path: "*", component: PageNotFound }
];
const router = new VueRouter({
  routes
});
/*********
 * main application
 *********/
const app = new Vue({
  el: "#app",
  router
});
