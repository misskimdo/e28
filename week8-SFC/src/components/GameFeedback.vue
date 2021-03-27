<template>
<div v-if='correct'>You got it! Nice work. <button v-on:click='loadGame'>Play again</button></div>
            <div v-else>Sorry, that’s not correct. Please try again.</div>
</template>

<script>
export default {
    name: 'playFeedback',
    props: ['correct', 'loadGame'],
    data() {
        return {};
    },
};
</script>

<style>
        label {
            display: block;
            margin-bottom: 5px;
        }

        #gamefeedback div {
            display: block;
            margin-top: 10px;
            font-size: 1em;
        }

        .incorrect {
            color: white;
            background-color: red;
            font-weight: bold;
        }

        .correct {
            color: white;
            background-color: green;
            font-weight: bold;
        }
</style>