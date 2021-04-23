<template>
    <div>
        <h1>Your Location:</h1>
        <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
        <google-map
        :center="{lat:10, lng:10}"
        :zoom="7"
        style="width: 640px; height:360px;"
        ></google-map>
    </div>
</template>

<script>
export default {
    name: 'map',
    data() {
        return {
            coordinates: {
                lat: 0,
                lng: 0
            }
        }
    },
    created() {
        //get user's coordinates from browser's coordinates
        this.$getLocation({}).then(coordinates => {
            this.coordinates = coordinates;
        })
        .catch(error => alert(error));
    }
}
</script>