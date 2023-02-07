<template>
    <div>
        <table class="container" v-if="commands != null">
            <thead>
                <tr>
                    <th>
                        <h1>Command Name</h1>
                    </th>
                    <th>
                        <h1>Description</h1>
                    </th>
                    <th>
                        <h1>Usage</h1>
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="command in commands" :key="command.command">
                    <td>{{ command.command }}</td>
                    <td>{{ command.description }}</td>
                    <td>{{ command.usage }}</td>
                </tr>

            </tbody>
        </table>

        <Badge style="display: flex; justify-content: center; justify-items: center; justify-self: center;"
            type="danger" text="caution" v-else>API Connection Failed: Please report to
            Developer!</Badge>


    </div>


</template>

<style scoped>
.container th h1 {
    font-weight: bold;
    font-size: 0.85em;
    text-align: center;
    color: #185875;
}

.container td {
    font-weight: normal;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
    -moz-box-shadow: 0 2px 2px -2px #0E1119;
    box-shadow: 0 2px 2px -2px #0E1119;
}

.container {
    text-align: center;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
}

.container td,
.container th {
    padding-bottom: 1%;
    padding-top: 1%;
    padding-left: 1%;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
    background-color: #323C50;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
    background-color: #2C3446;
}

.container th {
    background-color: #1F2739;
}

.container td:first-child {
    color: #FB667A;
}

.container tr:hover {
    background-color: #464A52;
    -webkit-box-shadow: 0 6px 6px -6px #0E1119;
    -moz-box-shadow: 0 6px 6px -6px #0E1119;
    box-shadow: 0 6px 6px -6px #0E1119;
}

.container td:hover {
    background-color: #FFF842;
    color: #403E10;
    font-weight: bold;

    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
}

@media (max-width: 800px) {

    .container td:nth-child(4),
    .container th:nth-child(4) {
        display: none;
    }
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import fetch from 'cross-fetch';

export default defineComponent({

    setup() {
        const commands = ref(null);
        const fetchCommands = async () => {
            const response = await fetch('http://localhost:3000/request-commands');
            const data = await response.json();
            commands.value = data;

        };

        fetchCommands();

        return {
            commands,
        };
    },
});
</script>