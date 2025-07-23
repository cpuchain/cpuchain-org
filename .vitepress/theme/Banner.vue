<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #home-hero-before>
            <div ref="el" class="banner">
                <div class="text">
                    🚀 Migration to EVM chain is on the way, refer
                    <a href="/spec/migration.html">migration info</a>
                </div>
            </div>
        </template>
    </Layout>
</template>

<style scoped>
.banner-dismissed .banner {
    display: none;
}
.banner {
    z-index: var(--vp-z-index-layout-top);
    padding: 8px;
    text-align: center;
    background: #ffb300;
    color: #fff;
    display: flex;
    justify-content: space-between;
}
.text {
    flex: 1;
    font-weight: bold;
}
a {
    text-decoration: underline;
}
</style>