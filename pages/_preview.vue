<template>
	<SliceCanvasRenderer :state="state" #default="props">
		<SliceZone v-bind="props" />
	</SliceCanvasRenderer>
</template>

<script>
import { SliceCanvasRenderer } from "@prismicio/slice-canvas-renderer-vue";
import SliceZone from "vue-slicezone";

import state from "~/.slicemachine/libraries-state.json";

export default {
	components: {
		SliceCanvasRenderer,
		SliceZone
	},
	data() {
		return { state };
	}
}
</script>