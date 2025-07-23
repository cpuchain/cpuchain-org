import DefaultTheme from 'vitepress/theme';
import LayoutWithBanner from './Banner.vue';

export default {
    extends: DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: LayoutWithBanner,
}