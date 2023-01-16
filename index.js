import Handlebars from "handlebars";
import login_tpl from 'bundle-text:./scr/pages/login/login.hbs';
import registration_tpl from 'bundle-text:./scr/pages/registration/registration.hbs';
import main_tpl from 'bundle-text:./scr/pages/main/main.hbs';
import profile_tpl from 'bundle-text:./scr/pages/profile/profile.hbs';
import error_tpl from 'bundle-text:./scr/pages/error/error.hbs';

window.login = () => {
    const comp = Handlebars.compile(login_tpl);
    const res = comp({
       
    });
    document.getElementById('root').innerHTML = res;
}

window.registration = () => {
    const comp = Handlebars.compile(registration_tpl);
    const res = comp({
       
    });
    document.getElementById('root').innerHTML = res;
}

window.profile = () => {
    const comp = Handlebars.compile(profile_tpl);
    const res = comp({
       
    });
    document.getElementById('root').innerHTML = res;
}

window.main = () => {
    const comp = Handlebars.compile(main_tpl);
    const res = comp({
       
    });
    document.getElementById('root').innerHTML = res;
}

window.error = () => {
    const comp = Handlebars.compile(error_tpl);
    const res = comp({
       
    });
    document.getElementById('root').innerHTML = res;
}


if(window.location.pathname == "/login" || window.location.pathname == "/") {
    login();
} else if(window.location.pathname == "/registration") {
    registration();
} else if(window.location.pathname == "/profile") {
    profile();
} else if(window.location.pathname == "/main") {
    main();
 } else {
    error();

 }
