import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyNav from './modules/Sticky-nav'
import $ from 'jquery';
import Modal from './modules/Modal'

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "70%");

var stickyNav = new StickyNav;
var modal = new Modal;
