import PNotify from "component/p-notify.vue";
import PNavigation from "./p-navigation.vue";
import PLoadingBar from "component/p-loading-bar.vue";
import PVideoPlayer from "component/p-video-player.vue";
import PPhotoViewer from "component/p-photo-viewer.vue";
import PPhotoCards from "./p-photo-cards.vue";
import PPhotoMosaic from "./p-photo-mosaic.vue";
import PPhotoList from "./p-photo-list.vue";
import PPhotoClipboard from "./p-photo-clipboard.vue";
import PAlbumClipboard from "./p-album-clipboard.vue";
import PScrollTop from "component/p-scroll-top.vue";

const components = {};

components.install = (Vue) => {
    Vue.component("p-notify", PNotify);
    Vue.component("p-navigation", PNavigation);
    Vue.component("p-loading-bar", PLoadingBar);
    Vue.component("p-video-player", PVideoPlayer);
    Vue.component("p-photo-viewer", PPhotoViewer);
    Vue.component("p-photo-cards", PPhotoCards);
    Vue.component("p-photo-mosaic", PPhotoMosaic);
    Vue.component("p-photo-list", PPhotoList);
    Vue.component("p-photo-clipboard", PPhotoClipboard);
    Vue.component("p-album-clipboard", PAlbumClipboard);
    Vue.component("p-scroll-top", PScrollTop);
};

export default components;