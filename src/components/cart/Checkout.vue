<template>
    <v-app>
        <v-container class="my-16">
            <v-row class="my-16"></v-row>
            <v-row justify="center">
                <v-col></v-col>
            </v-row>
            <v-row justify="center" class="mt-16">
                <v-card v-if="login" elevation="0"> Login page</v-card>
                <v-card v-else elevation="0"> Register page</v-card>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            login: true,
        }
    }
}
</script>