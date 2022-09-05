export default {
    template: `
        <div class="flex gap-2">
            <button v-for="tag in tags"
                    class="border rounded px-1 py text-sm"
            @click="$emit('update:modelValue', tag)"
            :class="{ 'border-blue-500': tag === modelValue }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String,
    },

    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)];
        }
    }
}