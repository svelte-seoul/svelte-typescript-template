import Intro from '../pages/Intro.svelte';
import Temp from '../pages/Temp.svelte';

export default {
    '/': Intro,
    // '/lorem/:repeat': Lorem,
    '*': Temp
};
