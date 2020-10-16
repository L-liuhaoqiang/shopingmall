import { debounce } from "./utils"
import BackTop from "components/content/backTop/backTop";
export const itemListenerMixin = {
    data() {
        return {
            ItemImgListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 100);
        this.ItemImgListener = () => {
            this.refresh()
        };
        this.$bus.$on("itemImgLoad", this.ItemImgListener);
    }
}

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isshow: false,
            
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        listenShowTop(position) {
            this.isshow = -position.y > 1000;
        },
    }
}