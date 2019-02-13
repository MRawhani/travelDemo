import  MobileMenu from "./modules/MoibleMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from './modules/StickyHeader'; // related to this cuz nothing in the compiled javascript will be like this
import Modal from './modules/Modal';
var mobileMenu = new MobileMenu();
var revealFeatureOnScroll = new RevealOnScroll(".testimonial","60%");
var revealFeatureOnScroll = new RevealOnScroll(".feature-item","85%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
 