<template>
    <div class="video-section bg-white">
        <div class="container">
            <div class="row pb-3 pb-lg-4">
                <div class="col-md-6 mb-3">
                    <iframe class="img-fluid video rounded shadow" src="https://www.youtube.com/embed/fp3KY092Byg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div class="col-md-6 mb-3">
                    <iframe class="img-fluid video rounded shadow" src="https://www.youtube.com/embed/fp3KY092Byg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div class="col-md-6 mb-3">
                    <iframe class="img-fluid video rounded shadow" src="https://www.youtube.com/embed/fp3KY092Byg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideosView',
    components: {

    }
}
</script>
<style lang="scss">
.video-section {
    padding-top: 12.5rem;

    .video {
        width: 100%;
        height: 337px;
    }
}

@media (max-width: 992px) {
    .video-section {
        padding-top: 6rem;
    }
}
</style>