import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment, AssignmentTags,
    },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>
            
            <assignment-tags 
            :initial-tags="assignments.map(a => a.tag)"
            v-model="currentTag"
            />
        
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment 
                    :key="assignment.id"
                    v-for="assignment in filteredAssignments"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'All',
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'All') {
                return this.assignments;
            } else {
                return this.assignments.filter(a => a.tag === this.currentTag);
            }
        },
    }
}