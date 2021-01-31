<template>
    <Layout>
        <div id="container">
            <GmapMap
                id="map"
                ref="mapRef"
                :zoom="15"
                :center="{ lat: 47.74305, lng: 8.95492 }"
                :options="{
                    zoomControl: true,
                    mapTypeControl: true,
                    scaleControl: true,
                    streetViewControl: true,
                    rotateControl: false,
                    fullscreenControl: true,
                    disableDefaultUI: false
                }"
            >
                <GmapMarker
                    :draggable="false"
                    :clickable="true"
                    :position="{ lat: 47.74305, lng: 8.95492 }"
                >
                </GmapMarker>
            </GmapMap>
        </div>
    </Layout>
</template>

<static-query>
query {
    metadata {
        siteName
        siteDescription
    }
    allOffice {
        edges {
            node {
                geocode {
                    lat
                    lng
                }
            }
        }
    }
}
</static-query>

<script>
export default {
    mounted() {
        this.$refs.mapRef.$mapPromise.then((map) => {});
    },
    metaInfo: {
        title: "Privater Automarkt Radolfzell"
    },
    components: {}
};
</script>
<style>
#container {
    margin: 30px 10px 0px 10px;
    height: 60vh;
    display: flex;
    flex-direction: column;
}
#map {
    flex: 1;
}
</style>
