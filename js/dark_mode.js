const if_input_get_checked = document.querySelector('nav .dark_mode_cont .dark_mode_toggle input');
const slide_the_circle = document.querySelector('.dark_mode_cont .dark_mode_toggle .circle');
const make_body_dark_mode = document.querySelector('body');
const make_nav_dark_mode = document.querySelector('nav');
const make_nav_h2_dark_mode = document.querySelector('nav h2');
const make_nav_menu_nav_a_dark_mode = document.querySelector('.menu_nav a');
const make_nav_dark_mode_h4_dark_mode = document.querySelector('.dark_mode_cont h4');
const make_hero_n_desc_hero_a_img_dark_mode_on = document.querySelector('.hero_n_desc .hero a img');
const make_hero_n_desc_desc_h2_dark_mode_on = document.querySelector('.hero_n_desc .desc h2');
const make_hero_n_desc_desc_p_dark_mode_on = document.querySelector('.hero_n_desc .desc p');
const make_ach_exp_edc_ach_dark_mode_on = document.querySelector('.ach_exp_edc .ach');
const make_ach_exp_edc_exp_dark_mode_on = document.querySelector('.ach_exp_edc .exp');
const make_ach_exp_edc_edc_dark_mode_on = document.querySelector('.ach_exp_edc .edc');
const make_project_h1_dark_mode_on = document.querySelector('.project h1');
const make_project_project_items_dark_mode_on = document.querySelector('.project .project_items');

if_input_get_checked.addEventListener('click', function() {
    slide_the_circle.classList.toggle('dark_mode_on');
    make_body_dark_mode.classList.toggle('dark_mode_on');
    make_nav_dark_mode.classList.toggle('dark_mode_on');
    make_nav_h2_dark_mode.classList.toggle('dark_mode_on');
    make_nav_menu_nav_a_dark_mode.classList.toggle('dark_mode_on');
    make_nav_dark_mode_h4_dark_mode.classList.toggle('dark_mode_on');
    make_hero_n_desc_hero_a_img_dark_mode_on.classList.toggle('dark_mode_on')
    make_hero_n_desc_desc_h2_dark_mode_on.classList.toggle('dark_mode_on');
    make_hero_n_desc_desc_p_dark_mode_on.classList.toggle('dark_mode_on');
    make_ach_exp_edc_ach_dark_mode_on.classList.toggle('dark_mode_on');
    make_ach_exp_edc_exp_dark_mode_on.classList.toggle('dark_mode_on');
    make_ach_exp_edc_edc_dark_mode_on.classList.toggle('dark_mode_on');
    make_project_h1_dark_mode_on.classList.toggle('dark_mode_on');
    make_project_project_items_dark_mode_on.classList.toggle('dark_mode_on');
});