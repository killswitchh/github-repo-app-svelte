<script>
	import Footer from '../layouts/footer.svelte';
	import Header from '../layouts/header.svelte';
</script>

<Header />
<div style="height: 80vh;">
	<slot />
</div>
<Footer />
