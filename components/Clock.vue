<script setup>
    const date = new Date();
    const datetime = date.toDateString();
    const time = date.toLocaleTimeString();
</script>

<template>
    <div>
        <section id="date-time">
            <h2>{{ datetime }} {{  time }}</h2>
        </section>
    </div>  
</template>
