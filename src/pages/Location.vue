/* eslint-disable import/no-unresolved */
<template>
    <Layout>
        <div class="container mx-auto">
            <div id="map" ></div>
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
import { Loader } from "@googlemaps/js-api-loader"
import ContentHeader from "~/components/Partials/ContentHeader.vue"

const loader = new Loader({
    apiKey: "AIzaSyA7MNSWwZiKQrEchE7r2f49M18JJz7fouY",
    version: "weekly",
    // ...additionalOptions,
})
loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    })
})

export default {
    metaInfo: {
        title: "Privater Automarkt Radolfzell",
    },
    components: {
        ContentHeader,
    },
}
</script>
