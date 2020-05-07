import Vue from 'vue';

import { Modal } from '@further/cinderblock';
import { eventBus } from '@further/cinderblock';

const app = new Vue({
    el: '#app',
    components: {
        Modal
    },
    data: {
        eventBus: eventBus
    }
});