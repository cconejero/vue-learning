import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish Project', completed: false},
                {id: 2, name: 'Read Chapter 4', completed: false},
                {id: 3, name: 'Turn in Homework', completed: false},
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.completed),
                completed: this.assignments.filter(assignment => assignment.completed),
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
            });
        }
    }
}