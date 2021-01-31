<template>
    <Layout>
        <div class="container">
            <GmapMap
                ref="mapRef"
                style="width: 600px; height: 300px"
                :zoom="14"
                :center="{ lat: 47.7438, lng: 8.95501 }"
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
                    :position="{ lat: 47.7438, lng: 8.95501 }"
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

<page-query>
query {
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
</page-query>

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
