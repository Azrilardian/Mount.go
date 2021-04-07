const lazyLoadEffect = () => {
	const images = document.querySelectorAll(".lazy-load");
	const option = {
		rootMargin: "-20px",
	};
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return false;
			const image = entry.target;
			const newUrl = image.getAttribute("data-src");
			image.src = newUrl;
			observer.unobserve(image);
		});
	}, option);
	images.forEach((image) => {
		observer.observe(image);
	});
};

export default lazyLoadEffect;
